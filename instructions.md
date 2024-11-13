# pascal-poredda.de

## basics

- this is a personal website blog, about & personal link tree website
- my name is Pascal Poredda

## about me

- I'm a fulltime freelancer since 2023
- I'm a Rust developer, experienced in backend & embedded development
- I'm a writer, I write about my experiences and challenges
- I'm a minimalist, I love simplicity and minimalism. Digital minimalism to be precise.

Please include a short introduction about me in the pages where it makes sense.

I am on a journey to build products that solve my own needs and help others with their problems.
I am available for hire as a Rust & TypeScript / React freelancer.

## Tech Stack for this website

- NextJS 15 with App Router
- React 19
- @TailwindCSS for Styling 
- @ShadcnUI and @AceternityUI components

## Blog writing & content style

- Engaging copywriting style, following the marketing master Russel Brunson
- Use the Hook. Story. Offer. framework by Russel Brunson to create engaging content
- The contents must be in English
- Make it fun and engaging to read
- Provide value to the reader, also include links to other resources, tools used 
- Include code examples

## Colors

Use bright and happy colors from the Shadcn palette.

## URLs & Pages

- / : The landing page
- /blog: All the blog posts
- /doing : What I'm doing currently and what I have been up to
- /projects : All the projects I have worked on and built so far
- /links : All the links to my social media, profiles & other website I own and host

## Blog posts

### Checklist: Self-Hosting analytics software Umami

This will be a checklist and Guide on setting up Umami on your own VPS, which you then can use and save money on 
having it hosted for you.

### Checklist: Launching a new product

A checklist one should go through before launching a new product live

### Checklist: Validating a idea quick & easy

## Guides

### Validating your idea with paid-ads

TODO

## SEO & Indexing

The website uses dynamic sitemap generation and robots.txt configuration:

- Sitemap is automatically generated from the file structure
- Blog posts are automatically added to sitemap when added to /app/blog/
- All pages are indexed except /api/ and /admin/ routes
- Priority levels:
  - Homepage: 1.0 (daily updates)
  - Blog: 0.9 (daily updates)
  - Doing: 0.8 (weekly updates)
  - Projects: 0.7 (weekly updates)
  - Links: 0.6 (daily updates)

The sitemap is available at: https://pascal-poredda.de/sitemap.xml

