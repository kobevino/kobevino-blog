'use client';

import {
  Container,
  Group,
  Switch,
  Text,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import { IconMoonStars, IconSun } from '@tabler/icons-react';
import { isDarkMode } from 'libs';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

export default function Header() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const [checked, setChecked] = useState(false);

  const sunIcon = (
    <IconSun
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.yellow[4]}
    />
  );

  const moonIcon = (
    <IconMoonStars
      style={{ width: rem(16), height: rem(16) }}
      stroke={2.5}
      color={theme.colors.blue[6]}
    />
  );

  useEffect(() => {
    const checked = colorScheme === 'dark' || isDarkMode(colorScheme);
    setChecked(checked);
  }, [colorScheme]);

  return (
    <header className={styles.header}>
      <Container size="md" className={styles.inner}>
        <Group gap={8}>
          <Image src={'/logo.png'} width={30} height={30} alt="logo" />
          <Text size="sm" fw={700} tt="uppercase">
            kobevino
          </Text>
        </Group>
        <Group gap={5}>
          <Switch
            checked={checked}
            size="md"
            color={'dark.4'}
            onLabel={moonIcon}
            offLabel={sunIcon}
            onChange={({ currentTarget: { checked } }) => {
              toggleColorScheme();
            }}
          />
        </Group>
      </Container>
    </header>
  );
}
