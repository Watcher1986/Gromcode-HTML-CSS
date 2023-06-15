import Link from 'next/link';

import { getPostsMeta } from '../../../../lib/gitApiPosts';
import ListItem from '@/app/blog/components/ListItem';

export const revalidate = 86400;

type Props = {
  params: {
    tag: string;
  };
};

export async function generateStaticParams() {
  const posts = await getPostsMeta(); // deduped

  if (!posts) return [];

  const tags = new Set(posts.map((post) => post.tags).flat());

  console.log(tags);

  return Array.from(tags).map((tag) => ({
    tag,
  }));
}

export function generateMetadata({ params: { tag } }: Props) {
  return {
    title: `Posts about ${tag}`,
  };
}

export default async function TagPostList({ params: { tag } }: Props) {
  const posts = await getPostsMeta(); //deduped!

  if (!posts)
    return <p className='mt-10 text-center'>Sorry, no posts available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className='text-center'>
        <p className='mt-10'>Sorry, no posts for that keyword.</p>
        <Link href='/'>Back to Home</Link>
      </div>
    );
  }

  return (
    <section className='mt-6 mx-auto max-w-2xl'>
      <h2 className='text-3xl mt-4 mb-7 font-medium text-white'>
        Results for: #{tag}
      </h2>
      <ul className='w-full list-none p-0'>
        {tagPosts.map((post) => (
          <ListItem key={post.id} post={post} />
        ))}
      </ul>
    </section>
  );
}
