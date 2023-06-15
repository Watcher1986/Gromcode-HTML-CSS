import Link from 'next/link';
import getFormattedDate from '../../../../lib/getFormattedData';

type Props = {
  post: Meta;
};

export default function ListItem({ post }: Props) {
  const { id, title, date } = post;
  const formattedDate = getFormattedDate(date);

  return (
    <li className='mt-4 text-2xl'>
      <Link
        className='underline text-white/90 hover:text-white'
        href={`/posts/${id}`}
      >
        {title}
      </Link>
      <br />
      <p className='text-sm mt-1 text-white/80'>{formattedDate}</p>
    </li>
  );
}
