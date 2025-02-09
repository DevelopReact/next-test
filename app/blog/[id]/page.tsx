export const dynamic = 'force-dynamic';

import { Metadata } from 'next';

async function getDataId(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60
      }
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch data');
  }

  return response.json();
}

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params: { id }
}: Props): Promise<Metadata> {
  const post = await getDataId(id);

  return {
    title: post.title
  };
}

export default async function Post({ params: { id } }: Props) {
  const post = await getDataId(id);

  return (
    <>
      <h1>Post {id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
