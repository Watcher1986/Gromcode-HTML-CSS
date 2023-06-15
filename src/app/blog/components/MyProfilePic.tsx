import Image from 'next/image';

export default function MyProfilePic() {
  return (
    <section className='w-full mx-auto'>
      <Image
        className='border-4 border-slate-500 drop-shadow-xl shadow-black rounded-full mx-auto mt-8'
        src='/images/my-pic.jpg'
        width={200}
        height={0}
        alt='Denis Sokolenko'
        priority={true}
      />
    </section>
  );
}
