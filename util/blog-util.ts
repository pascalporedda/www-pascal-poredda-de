import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { parse } from 'node-html-parser';
import {
  BlogPost,
  DictKeysExtended,
  TableOfContentsItems,
  UniversalDict,
} from '../types';

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

export function getPostBySlug<TPostData extends BlogPost>(
  slug: string,
  fields: DictKeysExtended<TPostData>,
): TPostData {
  const realSlug = slug.replace(/\.md$/, '');
  const fileName = `${realSlug}.md`;
  let fullPath = join(postsDirectory, fileName);
  if (!fs.statSync(fullPath, { throwIfNoEntry: false })) {
    fullPath = join(featuredDirectory, fileName);
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {} as UniversalDict;

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (data[field]) {
      items[field] = data[field];
    }
  });

  return items as TPostData;
}

function processAndSortPosts<TPostData extends BlogPost>(
  posts: string[],
  fieldsToProcess: DictKeysExtended<TPostData>,
) {
  return (
    posts
      .map((slug) => getPostBySlug<TPostData>(slug, fieldsToProcess))
      // sort posts by date in descending order
      .sort((post1, post2) =>
        post1.publishedDate > post2.publishedDate ? -1 : 1,
      )
  );
}

export function getAllPosts<TPostData extends BlogPost>(
  fields: DictKeysExtended<TPostData>,
): {
  featuredPosts: TPostData[];
  unfeaturedPosts: TPostData[];
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
