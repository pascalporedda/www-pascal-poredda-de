import remark from 'remark';
import html from 'remark-html';
import remarkAutolinkHeadings from 'remark-autolink-headings';
import remarkSlug from 'remark-slug';
// @ts-ignore
import prism from 'remark-prism';

export default async function markdownToHtml(
  markdown: string,
): Promise<string> {
  return (
    await remark()
      .use(remarkSlug)
      .use(remarkAutolinkHeadings)
      .use(html)
      .use(prism)
      .process(markdown)
  ).toString();
}
