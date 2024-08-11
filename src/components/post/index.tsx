import { Group, Text, Title } from '@mantine/core';
import { COLORS } from 'constants/color';
import { convertDate } from 'libs/date';
import { getRandom } from 'libs/random';
import Link from 'next/link';

import type { IPost } from 'services/post';

type Props = Omit<IPost, 'tag'> & { index: number };

export function Post({ slug, title, date, spoiler }: Props) {
  const firstColor = COLORS[getRandom(12)];
  const secondColor = COLORS[getRandom(12)];

  return (
    <Group mb={30}>
      <Link href={slug} style={{ textDecoration: 'none' }}>
        <Title
          order={2}
          style={{
            backgroundImage: `linear-gradient(45deg, var(--mantine-color-${firstColor}-5), var(--mantine-color-${secondColor}-2))`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}
        >
          {title}
        </Title>
        <Text mt={5} fz={13} c="dimmed">
          {convertDate(date)}
        </Text>
        <Title mt={10} order={3} size="h5" c="gray.5">
          {spoiler}
        </Title>
      </Link>
    </Group>
  );
}
