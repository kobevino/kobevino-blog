import { Group, Stack, Text, Title } from '@mantine/core';
import { readFile, readdir } from 'fs/promises';
import matter from 'gray-matter';
import { highlightCode } from 'libs/code';
import { convertDate } from 'libs/date';
import type { IPost } from 'services/post';

import './markdown.css';

export async function generateStaticParams() {
  const entries = await readdir('./public/', { withFileTypes: true });
  const dirs = entries
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name);
  return dirs.map((dir) => ({ slug: dir }));
}

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const filename = `./public/${slug}/index.mdx`;
  const res = await readFile(filename, 'utf8');
  const { data, content } = matter(res);
  const { title, date } = data as IPost;
  const source = await highlightCode(content);

  return (
    <>
      <Stack>
        <Title order={2} fw={900} size="h1">
          {title}
        </Title>
        <Text size="sm" c="dimmed">
          {convertDate(date)}
        </Text>
      </Stack>
      <Group className="markdown">
        <div
          className="markdown"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
          dangerouslySetInnerHTML={{ __html: source }}
        />
      </Group>
    </>
  );
}
