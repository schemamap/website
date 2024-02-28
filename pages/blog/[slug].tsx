import Head from "next/head";
import Link from "next/link";
import { format, parseISO } from "date-fns";
import { NextPage } from "next";

const allPosts = [] as any[];

const PostLayout: NextPage = ({ post }: any) => {
  /*
  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <article className="mx-auto max-w-2xl py-16">
        <div className="mb-6 text-center">
          <Link href="/">
            <a className="text-center text-sm font-bold uppercase text-blue-700">
              Home
            </a>
          </Link>
        </div>
        <div className="mb-6 text-center">
          <h1 className="mb-1 text-3xl font-bold">{post.title}</h1>
          <time dateTime={post.date} className="text-sm text-slate-600">
            {format(parseISO(post.date), "LLLL d, yyyy")}
          </time>
        </div>
        <div className="cl-post-body">TODO</div>
      </article>
    </>
  );
  */
  return null;
};

export default PostLayout;
