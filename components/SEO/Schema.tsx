import React, { ReactElement } from 'react';

// <script type="application/ld+json">
//   {
//     "@context": "http://schema.org/",
//     "@type": "BlogPosting",
//     "mainEntityOfPage": {
//     "@type": "WebPage",
//     "@id": "http://pascal-poredda.de/blog/test"
//   },
//     "author": {
//     "@type": "Person",
//     "name": "Pascal Poredda"
//   },
//     "publisher": {
//     "@type": "Organization",
//     "name": "Pascal Poredda",
//     "logo": {
//     "@type": "ImageObject",
//     "url": ""
//   }
//   },
//     "headline": "Blog Headline / Title",
//     "image": "The cover image of the article",
//     "datePublished": "2021-08-05",
//     "dateModified": "2021-08-07"
//   },
// </script>
//
// <script type="application/ld+json">
//   {
//     "@context": "http://schema.org/",
//     "@type": "Person",
//     "name": "Pascal Poredda",
//     "image": "http://pictreurlofmyprofilepicture.com",
//     "url": "http://pascal-poredda.de",
//     "jobTitle": "Software Entwickler",
//     "worksFor": {
//     "@type": "Organization",
//     "name": "rola Security Solutions GmbH"
//   }
//     "sameAs": ["http://instagramurl.com", "http://linkedinurl.com", "http://twitterurl.com", "http://youtubeurl.com"]
//   }
// </script>

type SchemaProps = {};
const Schema: React.FC<React.PropsWithChildren<SchemaProps>> = (props) => {
  const published = new Date();
  const copyrightYear = published.getFullYear();

  const structuredData = {};

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default Schema;
