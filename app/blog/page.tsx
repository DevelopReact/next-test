/* eslint-disable @typescript-eslint/no-explicit-any */
import { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    next: {
      revalidate: 60
    }
  });

  return response.json();
}

export const metadata: Metadata = {
  title: 'blog'
};

export default async function Blog() {
  const posts = await getData();

  return (
    <>
      <h1 className={styles.page}>Blog page</h1>
      <ul>
        {posts.map((post: any) => {
          return (
            <li key={post.id}>
              <Link href={`/blog/${post.id}`}>{post.title}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}
