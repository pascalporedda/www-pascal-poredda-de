import { UniversalDict } from './dictionary-helper';
import { BlogPosting, Graph, Person, WithContext } from 'schema-dts';

export interface PageError {
  message?: string;
  statusCode: number;
}

export interface SeoMetaData extends MetaData {
  /**
   * <title>Such a great title</title>
   * A custom title for the current page the user is visiting
   */
  title?: string;
  /**
   * <meta name="description" content="The page description" />
   * Contains the page description can also be used for twitter or og descriptions
   */
  description?: string;
  /**
   * <meta name="author" content="Pascal Poredda" />
   * The author of this website
   */
  author?: string;
  /**
   * <meta name="copyright" content="Copyright by Pascal Poredda 2021" />
   * The copyright of the website
   */
  copyright?: string;
  /**
   * <meta name="robots" content="index, follow" />
   * or
   * <meta name="robots" content"noindex, nofollow" />
   * Whether or not the search engines should index and follow links or not
   */
  robots?: string;
  /**
   * <link rel="canonical" href="https://somewebsite.com" />
   * References any duplicate content website
   */
  canonicalUrl?: string;
}

export interface MetaData extends UniversalDict {
  /**
   * <meta name="google-site-verification" content="" />
   *  Obtained from google and used to verify to them that you own the site and
   *  access private search data
   */
  siteVerification?: string;
  /**
   * <meta charset="utf-8" />
   * Usually utf-8 not needed to set most of the time
   */
  charset?: string;

  /**
   * <meta name="theme-color" content="#000000" />
   * Represents the theme color as a hex code, mainly the main color of the theme
   */
  themeColor?: string;
}

export interface OgMetaData extends UniversalDict {
  /**
   * <meta property="og:url" content="https://pascal-poredda.de" />
   * Contains the url to the current page used for the linking on the
   * OG card
   */
  ogUrl?: string;
  /**
   * <meta property="og:type" content="website" />
   * Contains the type either article for blog posts or website for anything else for most pages.
   */
  ogType?: string;
  /**
   * <meta property="og:title" content="" />
   * The open graph title that can override the title
   */
  ogTitle?: string;
  /**
   * <meta property="og:description" content="" />
   * The description for the OG Card usually the general site description meta tag
   */
  ogDescription?: string;
  /**
   * <meta property="og:image" content="" />
   * The absolute URL to an image that describes or fits this post / website
   */
  ogImage?: string;
  /**
   * <meta property="og:image:alt" content="" />
   * The alt attribute for the ogImage property should describe the image
   */
  ogImageAlt?: string;
  /**
   * <meta property="og:image:width" content="1280" />
   * <meta property="og:image:height" content="720"/ >
   * The dimensions for the image linked in the ogImage property should be 16:9 aspect ratio
   */
  ogImageDimensions?: {
    height: number;
    width: number;
  };
  /**
   * <meta property="og:locale" content="en_IE" />
   * Contains a locale string of the articles or website language, default if unset is en_EN
   * only specify if another language is used
   */
  ogLocale?: string;
}

export interface ArticleMetaData extends UniversalDict {
  /**
   * <meta property="article:published_time" content="2021-08-13T13:00:00.000+02:00" />
   * The date at which the articles was published. Either as a plain date string
   * or formatted as the following: 2021-08-12T13:00:00.000+02:00 if it does include a time string.
   */
  articlePublishedDate?: string;
  /**
   * <meta property="article:modified_time" content="2021-08-12" />
   * The date at which the articles was last modified. Either as a plain date string
   * or formatted as the following: 2021-08-12T13:00:00.000+02:00 if it does include a time string.
   */
  articleModifiedDate?: string;
  /**
   * <meta property="article:section" content="Technology" />
   *   or for example
   * <meta property="article:section" content="Self development">
   * Describes the overall topic / category for the given article.
   */
  articleSection?: string;

  /**
   * <meta property="article:tag" content="test" />
   * Relevant tags for the article to further categorize it
   */
  articleTags?: string[];
}

export interface TwitterMetaData extends UniversalDict {
  /**
   * <meta name="twitter:card" content="" />
   * The type of twitter card you want to display when shared via twitter share
   */
  twitterCard?: 'summary_large_image' | 'summary';
  /**
   * <meta name="twitter:site" content="" />
   * Username of the website should be your Twitter handle prefixed with @. Is required.
   */
  twitterSite?: string;
  /**
   * <meta name="twitter:creator" content="" />
   * The twitter handle of the author
   */
  twitterCreator?: string;
  /**
   * <meta name="twitter:title" content="" />
   * The title you want to display on the card. If non present but the og:title is present,
   * the og:title content is used.
   */
  twitterTitle?: string;
  /**
   * <meta name="twitter:description" content="" />
   * The description for the twitter card. If non present but the og:description is
   * present, the tags content is used.
   */
  twitterDescription?: string;
  /**
   * <meta name="twitter:image" content="" />
   * The image url for the preview. If non is given but a og:image is available,
   * the og:image url is taken.
   * Must be less than 5MB in size and bei either JPG, PNG, WEBP or GIF.
   */
  twitterImage?: string;
}

export type StructuredDataPerson = Person;

export type StructuredDataBlogPost = BlogPosting;

export type StructuredDataGraph = Graph;

export type PageMetaData = TwitterMetaData &
  ArticleMetaData &
  SeoMetaData &
  OgMetaData &
  MetaData;
