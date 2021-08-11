import {
  BlogPost,
  OgMetaData,
  PageMetaData,
  SeoMetaData,
  TwitterMetaData,
} from '../types';
import { getSiteConfig } from './get-config-value';
import { host, twitter } from './config';

export function getSeoDefaults(): SeoMetaData {
  const year = new Date().getFullYear();
  return {
    robots: 'index, follow',
    author: getSiteConfig('author', 'Pascal Poredda'),
    copyright: getSiteConfig(
      'copyright',
      `Copyright by Pascal Poredda ${year}`,
    ),
    title: getSiteConfig('title', 'Pascal Poredda'),
    description: getSiteConfig('description'),
    siteVerification: getSiteConfig('siteVerification'),
  } as SeoMetaData;
}

export function getOpenGraphDefaults(): OgMetaData {
  return {
    ogTitle: getSiteConfig('title', 'Pascal Poredda'),
    ogDescription: getSiteConfig('description'),
    ogType: 'website',
    ogImage: getSiteConfig('socialShareImage', null) ?? undefined,
    ogImageAlt: getSiteConfig('socialShareImageAltText', null) ?? undefined,
    ogImageDimensions:
      getSiteConfig('socialShareImageDimensions', null) ?? undefined,
  } as OgMetaData;
}

export function getDefaultMetadata(): PageMetaData {
  return {
    ...getSeoDefaults(),
    ...getOpenGraphDefaults(),
    ...getTwitterMetadataDefaults(),
  };
}

export function getTwitterMetadataDefaults(): TwitterMetaData {
  return {
    twitterCard: 'summary_large_image',
    twitterCreator: `@${twitter}`,
    twitterSite: `@${twitter}`,
  };
}

export function getSeoForPost(blogPost: BlogPost): PageMetaData {
  return {
    ...getDefaultMetadata(),
    title: blogPost.title,
    description: blogPost.excerpt,
    ogType: 'article',
    ogTitle: blogPost.title,
    ogDescription: blogPost.excerpt,
    ogImage: blogPost.socialShareImage?.url,
    ogImageAlt: blogPost.socialShareImage?.altText,
    ogImageDimensions: blogPost.socialShareImage
      ? {
          height: blogPost.socialShareImage.height,
          width: blogPost.socialShareImage.width,
        }
      : undefined,
    ogUrl: `${canonicalBaseUrl}/blog/${blogPost.slug}`,
    articleSection: blogPost.topic,
    articleTags: blogPost.tags,
    articleModifiedDate: blogPost.lastModifiedDate,
    articlePublishedDate: blogPost.publishedDate,
    author: blogPost.author,
    canonicalUrl: `${canonicalBaseUrl}/blog/${blogPost.slug}`,
  };
}

export const canonicalBaseUrl = `${host}`;

export function withSeoDefaults(metaData: PageMetaData): PageMetaData {
  return {
    ...getDefaultMetadata(),
    ...metaData,
  };
}

export function withUrls(metaData: PageMetaData, path: string): PageMetaData {
  return {
    ...metaData,
    canonicalUrl: `${canonicalBaseUrl}${path}`,
    ogUrl: `${canonicalBaseUrl}${path}`,
  };
}
