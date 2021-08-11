export type BlogPost = {
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  publishedDate: string;
  author: string;
  /**
   * The overall topic of the blog post or category for SEO
   */
  topic?: 'Technology' | 'Self development' | 'Finance';
  /**
   * Should be a comma separated list of tags used for SEO
   */
  tags?: string[];
  lastModifiedDate?: string;
  coverImage?: string;
  socialShareImage?: {
    url: string;
    altText: string;
    height: number;
    width: number;
  };
};

export type BlogPosts = BlogPost[];

export type TableOfContentsItem = {
  title: string;
  anchor: string;
};

export type TableOfContentsItems = TableOfContentsItem[];
