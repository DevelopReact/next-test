import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'about'
};

export default function AboutLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='about_layout'>
      <h1>About page</h1>
      <ul>
        <li>
          <Link href='/about/team'>Team</Link>
        </li>
        <li>
          <Link href='/about/contacts'>Contacts</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}
