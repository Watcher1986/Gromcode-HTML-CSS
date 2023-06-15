import { notFound } from 'next/navigation';
import Link from 'next/link';

import { getPostsMeta, getPostByName } from '../../../../lib/gitApiPosts';
import getFormattedDate from '../../../../lib/getFormattedData';

import 'highlight.js/styles/github-dark.css';

export const revalidate = 86400;

type Props = {
  params: {
    postId: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped!

  if (!posts) return [];

  return posts.map((post) => ({
    params: { postId: post.id },
  }));
}

export async function generateMetadata({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); // deduped!

  if (!post) {
    return {
      title: 'Post not found',
    };
  }

  return {
    title: post?.meta.title,
    description: `This is the ${post?.meta.title} post`,
  };
}

export default async function Post({ params: { postId } }: Props) {
  const post = await getPostByName(`${postId}.mdx`); // deduped!

  if (!post) notFound();

  const { meta, content } = post;

  const pubDate = getFormattedDate(meta.date);

  const tags = meta.tags.map((tag, idx) => (
    <Link className='text-white/75' key={idx} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <main className='px-6 prose prose-xl  prose-strong:text-[#2b4d9d]  mx-auto text-white'>
      <h2 className='text-3xl mt-4 mb-0 text-white'>{meta.title}</h2>
      <p className='mt-0 text-sm'>{pubDate}</p>
      <article>{content}</article>
      <section>
        <h3 className='text-white/75'>Related:</h3>
        <div className='flex flex-row gap-4'>{tags}</div>
      </section>
      <p className='mb-10'>
        <Link href='/'>← Back to home</Link>
      </p>
    </main>
  );
}
