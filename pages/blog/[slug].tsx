import { useRouter } from 'next/router';
import {
  getAllPosts,
  getPostBySlug,
  getTableOfContents,
} from '../../util/blog-util';
import markdownToHtml from '../../util/markdown-to-html';
import { withBlogLayout } from '../../layouts/BlogLayout';
import { GetStaticPaths, GetStaticPropsContext } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { BlogPost, TableOfContentsItems } from '../../types';
import 'prismjs/themes/prism-tomorrow.css';
import TableOfContents from '../../components/Blog/TableOfContents';
import { format } from 'date-fns';
import PageMetaAndTitle from '../../components/SEO/PageMetaAndTitle';
import { getSeoForPost } from '../../util/seo-util';
import { NotFoundPage } from '../../components/Page/NotFoundPage';

const isParsedUrlQuery = (
  possibleQuery: ParsedUrlQuery | undefined,
): possibleQuery is ParsedUrlQuery => {
  return possibleQuery !== undefined;
};

const isString = (
  possibleString: string | unknown | undefined,
): possibleString is string => {
  return typeof possibleString === 'string';
};

export const getStaticProps = async ({ params }: GetStaticPropsContext) => {
  if (!isParsedUrlQuery(params)) {
    return {
      notFound: true,
    };
  }

  if (!isString(params.slug)) {
    return {
      notFound: true,
    };
  }

  const post = getPostBySlug(params.slug, [
    'title',
    'publishedDate',
    'slug',
    'author',
    'content',
    'socialShareImage',
    'coverImage',
    'excerpt',
    'tags',
    'lastModifiedDate',
    'topic',
  ]);

  const content = await markdownToHtml(post.content || '');
  const tableOfContents = getTableOfContents(content);

  return {
    props: {
      post: {
        ...post,
        content,
      } as BlogPost,
      tableOfContents,
    },
  };
};

export const getStaticPaths: GetStaticPaths = () => {
  const { featuredPosts, unfeaturedPosts } = getAllPosts([
    'slug',
    'publishedDate',
  ]);
  const allPosts = [...featuredPosts, ...unfeaturedPosts];

  const paths = allPosts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default function Post({
  post,
  tableOfContents,
}: {
  post?: BlogPost;
  tableOfContents?: TableOfContentsItems;
}) {
  const router = useRouter();
  // TODO: find a way to highlight the current active table item
  // const markdownElement = useRef<HTMLDivElement | null>(null);
  //
  // const [elements, setElements] = useState<HTMLElement[]>([]);
  // const [currentActiveIndex] = useScrollspy(elements);

  // useEffect(() => {
  //   // const headings = markdownElement.current?.querySelectorAll("h1, h2, h3");
  //
  //   // const onScrollListener = (event: Event) => {
  //   //   const scrollTop = window.pageYOffset;
  //   //
  //   //   if (!headings) return;
  //   //
  //   // };
  //   // document.addEventListener("scroll", onScrollListener);
  //   //
  //   // return () => {
  //   //   document.removeEventListener("scroll", onScrollListener);
  //   // };
  //   if (headings) {
  //     setElements(Array.from(headings) as HTMLElement[]);
  //   }
  // }, []);

  if (!post) {
    return <NotFoundPage />;
  }

  const metaData = getSeoForPost(post);

  return (
    <>
      {router.isFallback ? (
        <p>Loading</p>
      ) : (
        <>
          <PageMetaAndTitle metaData={metaData} />
          <article
            className={'mx-auto py-16 max-w-3xl grid grid-cols-post gap-4'}>
            <header className={'col-start-2 leading-relaxed'}>
              <h1 className={'text-2xl font-extrabold mb-2'}>{post.title}</h1>
              {post.publishedDate && (
                <>
                  <p className={'text-gray-850 dark:text-gray-700'}>
                    Published on{' '}
                    {format(
                      new Date(Date.parse(post.publishedDate)),
                      'MMMM d, yyyy',
                    )}
                    ,
                    {post.author && <span>&nbsp;written by {post.author}</span>}
                  </p>
                  {post.lastModifiedDate && (
                    <p className={'text-gray-700 dark:text-gray'}>
                      Last update:{' '}
                      {format(
                        new Date(Date.parse(post.publishedDate)),
                        'MMMM d, yyyy',
                      )}
                    </p>
                  )}
                </>
              )}
              <h2 className={'text-xl font-extrabold pt-8'}>tl;dr</h2>
              <p className={'mb-8'}>{post.excerpt}</p>
            </header>
            {tableOfContents && (
              <TableOfContents tableOfContents={tableOfContents} />
            )}
            <div
              className='formatted-text'
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </>
      )}
    </>
  );
}

Post.getLayout = withBlogLayout;
