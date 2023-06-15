export default async function getUserPosts(userId: string) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`,
    // { cache: 'force-cache' } // default behavior
    { next: { revalidate: 60 } }
  );

  if (!res.ok) return undefined;

  return await res.json();
}
