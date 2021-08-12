import Head from 'next/head';
import React from 'react';
import { PageMetaData } from '../../types';

const PageMetaAndTitle: React.FC<{ metaData?: PageMetaData }> = ({
  metaData,
}) => {
  if (!metaData) {
    return null;
  }
  const {
    twitterDescription,
    title,
    siteVerification,
    ogTitle,
    twitterTitle,
    articlePublishedDate,
    twitterSite,
    canonicalUrl,
    articleTags,
    articleSection,
    copyright,
    twitterCard,
    articleModifiedDate,
    ogUrl,
    twitterImage,
    ogImage,
    ogImageDimensions,
    ogImageAlt,
    author,
    description,
    ogDescription,
    ogType,
    robots,
    charset,
    ogLocale,
    themeColor,
    twitterCreator,
  } = metaData;
  return (
    <Head>
      {title && <title>{title}</title>}
      {author && <meta name='author' content={author} />}
      {copyright && <meta name='copyright' content={copyright} />}
      {robots && <meta name='robots' content={robots} />}
      <link
        rel='apple-touch-icon'
        sizes='180x180'
        href='/apple-touch-icon.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='32x32'
        href='/favicon-32x32.png'
      />
      <link
        rel='icon'
        type='image/png'
        sizes='16x16'
        href='/favicon-16x16.png'
      />
      <meta charSet={charset || 'utf-8'} />
      <meta
        httpEquiv='Content-Type'
        content={`text/html; charset=${charset || 'utf-8'}`}
      />
      <meta
        name='viewport'
        content='width=device-width, initial-scale=1, shrink-to-fit=no'
      />
      {description && <meta name='description' content={description} />}
      {siteVerification && (
        <meta name='google-site-verification' content={siteVerification} />
      )}
      {canonicalUrl && <link rel='canonical' href={canonicalUrl} />}
      {}
      <meta name='theme-color' content={themeColor ?? '#1db954'} />

      {ogTitle || title ? (
        <meta property='og:title' content={ogTitle || title} />
      ) : null}
      {ogUrl && <meta property='og:url' content={ogUrl} />}
      {ogImage && <meta property='og:image' content={ogImage} />}
      {ogImageAlt && <meta property='og:image:alt' content={ogImageAlt} />}
      {ogImageDimensions && (
        <>
          <meta
            property='og:image:width'
            content={`${ogImageDimensions.width}`}
          />
          <meta
            property='og:image:height'
            content={`${ogImageDimensions.height}`}
          />
        </>
      )}
      {ogType && <meta property='og:type' content={ogType} />}
      {ogDescription && (
        <meta property='og:description' content={ogDescription} />
      )}
      {ogLocale && <meta property='og:locale' content={ogLocale} />}
      {twitterCard && <meta name='twitter:card' content={twitterCard} />}
      {twitterImage && <meta name='twitter:image' content={twitterImage} />}
      {twitterTitle && <meta name='twitter:title' content={twitterTitle} />}
      {twitterDescription && (
        <meta name='twitter:description' content={twitterDescription} />
      )}
      {twitterSite && <meta name='twitter:site' content={twitterSite} />}
      {twitterCreator && (
        <meta name='twitter:creator' content={twitterCreator} />
      )}
      {articleSection && (
        <meta property='article:section' content={articleSection} />
      )}
      {articleModifiedDate && (
        <meta property='article:modified_time' content={articleModifiedDate} />
      )}
      {articlePublishedDate && (
        <meta
          property='article:published_time'
          content={articlePublishedDate}
        />
      )}
      {articleTags &&
        articleTags.map((tag) => (
          <meta key={tag} property='article:tag' content={tag} />
        ))}
    </Head>
  );
};

export default PageMetaAndTitle;
