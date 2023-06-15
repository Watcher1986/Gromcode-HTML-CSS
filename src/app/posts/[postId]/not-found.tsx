import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className='flex min-h-screen flex-col gap-2 justify-center items-center p-20 text-white'>
      <h1>The requested page could not be found.</h1>
      <Link href='/'>Back to Home</Link>
    </div>
  );
}
