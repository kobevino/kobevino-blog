import { Stack, Text, Title } from '@mantine/core';
import { COLORS } from 'constants/color';
import { convertDate } from 'libs/date';
import { getRandom } from 'libs/random';

import type { IPost } from 'services/post';

import Link from 'next/link';
import styles from './index.module.css';

type Props = Omit<IPost, 'tag'> & { index: number };

export function Post({ slug, title, date, spoiler }: Props) {
  const firstColor = COLORS[getRandom(12)];
  const secondColor = COLORS[getRandom(12)];

  return (
    <Link href={slug} style={{ textDecoration: 'none' }}>
      <Stack mb={30} gap={1} className={styles.post}>
        <Title
          order={2}
          style={{
            backgroundImage: `linear-gradient(45deg, var(--mantine-color-${firstColor}-9), var(--mantine-color-${secondColor}-0))`,
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
      </Stack>
    </Link>
  );
}
