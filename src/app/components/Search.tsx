'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Search() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${search}/`);
    setSearch('');
  };

  return (
    <form
      action=''
      className='w-50 flex justify-center md:justify-between'
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className='w-80 h-10 my-auto bg-white text-xl rounded-xl p-2'
        placeholder='Search'
      />
      <button className='p-2 rounded-xl bg-slate-300 text-xl ml-2'>🚀</button>
    </form>
  );
}
