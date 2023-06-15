import Link from 'next/link';
import Search from './Search';

export default function Navbar() {
  return (
    <nav className='bg-slate-600 py-2 px-4 flex justify-between flex-col md:flex-row sticky top-0 drop-shadow-xl z-10'>
      <h1 className='text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/'>WikiDoki!</Link>
      </h1>
      <h1 className='text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/blog'>My Blog</Link>
      </h1>
      <h1 className='text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link prefetch={false} href='/todos'>
          Todos
        </Link>
      </h1>
      <h1 className='text-2xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
        <Link href='/feedback'>Feedback</Link>
      </h1>
      <Search />
    </nav>
  );
}
