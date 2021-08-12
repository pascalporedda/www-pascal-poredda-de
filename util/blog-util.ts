import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { parse } from 'node-html-parser';
import { BlogPost, DictKeysExtended, TableOfContentsItems } from '../types';

export const postsDirectory = join(process.cwd(), '_posts');
export const featuredDirectory = join(process.cwd(), '_posts/featured');

/**
 * We infer the post slug by the name of the markdown file, therefore we can
 * customize the slug just by naming the file accordingly. This slug still contains
 * the .md extension.
 */
export function getPostSlugs(directory: string): string[] {
  const dirEntries = fs.readdirSync(directory, { withFileTypes: true });

  return dirEntries
    .filter((dirent) => dirent.isFile() && dirent.name.indexOf('.md') !== -1)
    .map((dirent) => dirent.name);
}

export function getPostBySlug(
  slug: string,
  fields: DictKeysExtended<BlogPost>,
): BlogPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fileName = `${realSlug}.md`;
  let fullPath = join(postsDirectory, fileName);
  if (!fs.statSync(fullPath, { throwIfNoEntry: false })) {
    fullPath = join(featuredDirectory, fileName);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const blogPost = {} as BlogPost;

  fields.forEach((field) => {
    if (field === 'slug') {
      blogPost[field] = realSlug;
    }
    if (field === 'content') {
      blogPost[field] = content;
    }

    if (data[field]) {
      blogPost[field] = data[field];
    }

    if (field === 'tags' && data[field]) {
      const tags = data[field];
      if (typeof tags === 'string') {
        blogPost[field] = tags.split(',').map((tag) => tag.trim());
      } else if (Array.isArray(tags)) {
        blogPost[field] = tags;
      }
    }
  });

  return blogPost as BlogPost;
}

function processAndSortPosts(
  posts: string[],
  fieldsToProcess: DictKeysExtended<BlogPost>,
) {
  return (
    posts
      .map((slug) => getPostBySlug(slug, fieldsToProcess))
      // sort posts by date in descending order
      .sort((post1, post2) =>
        post1.publishedDate > post2.publishedDate ? -1 : 1,
      )
  );
}

export function getAllPosts(fields: DictKeysExtended<BlogPost>): {
  featuredPosts: BlogPost[];
  unfeaturedPosts: BlogPost[];
} {
  const unfeaturedPosts = getPostSlugs(postsDirectory);
  const featuredPosts = getPostSlugs(featuredDirectory);

  return {
    featuredPosts: processAndSortPosts(featuredPosts, fields),
    unfeaturedPosts: processAndSortPosts(unfeaturedPosts, fields),
  };
}

// TODO: THis might fail if there is a code block that contains a heading? :thinking:
export function getTableOfContents(postContent: string): TableOfContentsItems {
  const parsed = parse(postContent);
  return parsed.querySelectorAll('h1,h2,h3').map((heading) => {
    return {
      title: heading.innerText,
      anchor: heading.id,
    };
  });
}
