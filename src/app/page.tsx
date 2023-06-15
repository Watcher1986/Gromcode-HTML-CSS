import Link from 'next/link';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col gap-2 justify-center items-center p-20 text-white'>
      <h1 className='text-2xl font-bold'>Home Page</h1>
      <p>
        <Link href='/users'>Users</Link>
      </p>
      <Link href='/about'>Go to About Page</Link>
    </main>
  );
}
