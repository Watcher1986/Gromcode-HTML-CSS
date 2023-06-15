import type { Metadata } from 'next';
import Link from 'next/link';
import getAllUsers from '../../../lib/getAllUsers';

export const metadata: Metadata = {
  title: 'Users',
};

export default async function UsersPage() {
  const usersData: Promise<User[]> = getAllUsers();

  const users = await usersData;

  const content = (
    <section className='p-4 min-h-screen bg-dark text-white'>
      <h2 className='bg-blue-500 text-white p-2 rounded-md'>
        <Link href='/'>Back to Home</Link>
      </h2>
      <br />
      <section className='grid grid-cols-auto-fit gap-4'>
        {users.map((user) => {
          return (
            <div key={user.id}>
              <h3>
                <Link href={`/users/${user.id}`}>{user.name}</Link>
              </h3>
              <br />
              <p>{user.email}</p>
            </div>
          );
        })}
      </section>
    </section>
  );
  return content;
}
