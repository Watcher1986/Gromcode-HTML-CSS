import Link from 'next/link';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className='p-4 drop-shadow-xl z-10'>
      <div className='md:px-6 prose prose-xl mx-auto flex justify-between flex-col sm:flex-row'>
        <h1 className='text-xl font-bold text-white grid place-content-center mb-2 md:mb-0'>
          <Link
            href='/'
            className='text-white/90 no-underline hover:text-white'
          >
            Back to the home page
          </Link>
        </h1>
        <div className='flex flex-row justify-center sm:justify-evenly align-middle gap-4 text-white text-4xl lg:text-4xl'>
          <Link
            className='text-white/90 hover:text-white'
            href='https://www.linkedin.com/in/denis-sokolenko-098686145/'
          >
            <FaLinkedin />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://github.com/Watcher1986'
          >
            <FaGithub />
          </Link>
          <Link
            className='text-white/90 hover:text-white'
            href='https://twitter.com/SokolenkoDenis'
          >
            <FaTwitter />
          </Link>
        </div>
      </div>
    </nav>
  );
}
