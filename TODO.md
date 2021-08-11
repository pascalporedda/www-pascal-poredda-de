Version 1.0

[x] Featured blog posts
[x] Remove the notion code and split it up into a separate repository for the future
[x] Check for SEO best practices
   [x] generate canonical urls
   [x] generate a sitemap for google including all the canonical pages
   [-] store the canonical url in the blog post entry upon creating the data models 
   [x] set a default ogUrl in the getOpenGraphDefaults() function
[x] full accessibility check
[x] dark mode / light mode should both look great
[x] add the cookie banner to the blog as well
[x] recheck and see if the social media feeds are still working
[x] add the imprint and all the other pages that are required for DSGVO and stuff
[x] 404 page and 500 page
[x] add a footer to the blog
[x] switch to english as the primary language
   [x] rename all the pages
   [x] rewrite all the texts
   [x] recheck all the links
[x] finish the portfolio / recent work I've done
[] cleanup all the API keys and so forth and store everything in the .env files / config files

Version 1.1
Create a more social sharable blog with extended features and respect the users settings more regarding
reduced motion and light / dark mode.

[] Social sharing features for Twitter, Reddit and other stuff
[] add the json schema for structured data
[] respect the users preference of reduced motion
   https://www.joshwcomeau.com/snippets/react-hooks/use-prefers-reduced-motion/
[] add a light / dark mode toggle 
[] create social sharable images like in the blog post from jason -> https://github.com/jlengstorf/get-share-image

Version 1.2
Creating a german version for all the main / portfolio page for all the visitors from Germany.

[] i18n - Translatable website german and english
   [] seo / canonical urls?
   [] language switching?
      [] based on the users headers?
[] include the spotify feed now that the api is working

Version 1.3
Make reading a blog post more easy by highlighting the current section in the ToC

[] find or build a nice component for the tracking code / custom hook
[] MDX in blog posts
[] TableOfContents should highlight the current section that is being viewed
take a look at: https://github.com/MaximeHeckel/blog.maximeheckel.com/blob/27074d0d3c390dff3aa50c1cdf96944b98bd72e0/gatsby-theme-maximeheckel/components/TableOfContent/TableOfContent.tsx

Version 1.4
This might not be done. I dunno yet.

[] create a machine readable resume from the resume I do have
