import Posts from './components/Posts';
import MyProfilePic from './components/MyProfilePic';

export const revalidate = 86400;

export default function BlogPage() {
  return (
    <div className='mx-auto'>
      <MyProfilePic />
      <p className='mt-12 mb-12 text-3xl text-center text-white'>
        Hello and Welcome 👋&nbsp;
        <span className='whitespace-nowrap'>
          I'm <span className='font-bold'>Denis</span>.
        </span>
      </p>
      {/* @ts-expect-error Server Component */}
      <Posts />
    </div>
  );
}
