'use client';

import {
  Anchor,
  Container,
  Flex,
  Group,
  Switch,
  Text,
  rem,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMeta,
  IconBrandX,
  IconMoonStars,
  IconSun,
} from '@tabler/icons-react';
import { isDarkMode } from 'libs/theme';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styles from './index.module.css';

const snsList = [
  { key: 1, url: 'https://x.com/_kobevino', component: IconBrandX },
  {
    key: 2,
    url: 'https://www.facebook.com/kobe8vino24',
    component: IconBrandMeta,
  },
  {
    key: 3,
    url: 'https://www.instagram.com/_kobevino/',
    component: IconBrandInstagram,
  },
  {
    key: 4,
    url: 'https://www.linkedin.com/in/kobevino/',
    component: IconBrandLinkedin,
  },
  { key: 5, url: 'https://github.com/kobevino', component: IconBrandGithub },
];

export function Header() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useMantineColorScheme({
    keepTransitions: true,
  });
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

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

  const snsItems = snsList.map(({ key, url, component: IconComponent }) => (
    <Anchor href={url} key={key} target="_blank">
      <IconComponent />
    </Anchor>
  ));

  const onHomeLink = () => {
    // To avoid prifix path issue
    if (pathname !== '/') router.back();
  };

  useEffect(() => {
    const checked = colorScheme === 'dark' || isDarkMode(colorScheme);
    setChecked(checked);
  }, [colorScheme]);

  return (
    <header className={styles.header}>
      <Container size="md" className={styles.inner}>
        <Group gap={8} onClick={onHomeLink} className={styles.logo}>
          <Flex gap="xs" align="center">
            <Image src={'/logo.png'} width={30} height={30} alt="logo" />
            <Text
              size="sm"
              fw={700}
              tt="uppercase"
              c="gray"
              className={styles.typing}
            >
              kobevino
            </Text>
          </Flex>
        </Group>
        <Group gap={5}>
          <Group mt={5} gap={5}>
            {snsItems}
          </Group>
          <Switch
            ml={10}
            checked={checked}
            size="md"
            color={'dark.4'}
            onLabel={moonIcon}
            offLabel={sunIcon}
            onChange={toggleColorScheme}
          />
        </Group>
      </Container>
    </header>
  );
}
