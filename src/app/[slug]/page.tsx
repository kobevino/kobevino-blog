import { readdir } from 'fs/promises';

export async function generateStaticParams() {
  const entries = await readdir('./public/', { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

export default function PostPage() {
  return <div>POST PAGE</div>;
}
