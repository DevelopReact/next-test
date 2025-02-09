'use client';

export default function Error({ error }: { error: Error }) {
  return <h1>Oops! {error.message}</h1>;
}
