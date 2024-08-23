'use client';

import { Button, Group, Text, Timeline } from '@mantine/core';
import { IconReportSearch } from '@tabler/icons-react';
import { ICON } from 'constants/icon';
import { SKILLS } from 'constants/skill';
import Image from 'next/image';

export default function Career() {
  return (
    <Timeline active={0} bulletSize={24}>
      <Timeline.Item>
        <Text size="sm">NCSOFT</Text>
        <Text c="dimmed" mt={5} size="xs">
          2022.02 ~ Current
        </Text>
        <Group mt={10}>
          {SKILLS.ncsoft.map((item) => (
            <Image
              key={item}
              src={ICON[item].src}
              alt={item}
              width={45}
              height={45}
            />
          ))}
        </Group>
      </Timeline.Item>
      <Timeline.Item>
        <Text size="sm">MBI Solution</Text>
        <Text c="dimmed" mt={5} size="xs">
          2019.09 ~ 2021.12
        </Text>
        <Group mt={10} mb={20}>
          {SKILLS.mbisolution.map((item) => (
            <Image
              key={item}
              src={ICON[item].src}
              alt={item}
              width={45}
              height={45}
            />
          ))}
        </Group>
        <Group>
          <a href="happytalk-chat-front.pdf" target="_blank" rel="noreferrer">
            <Button leftSection={<IconReportSearch size={16} />} size="xs">
              Happytalk Chat Portfolio
            </Button>
          </a>
          <a
            href="happytalk-design-system.pdf"
            target="_blank"
            rel="noreferrer"
          >
            <Button leftSection={<IconReportSearch size={16} />} size="xs">
              Happytalk Design System Portfolio
            </Button>
          </a>
        </Group>
      </Timeline.Item>
      <Timeline.Item>
        <Text size="sm">Qualson Inc.</Text>
        <Text c="dimmed" mt={5} size="xs">
          2019.01 ~ 2019.08
        </Text>
        <Group mt={10}>
          {SKILLS.qualson.map((item) => (
            <Image
              key={item}
              src={ICON[item].src}
              alt={item}
              width={45}
              height={45}
            />
          ))}
        </Group>
      </Timeline.Item>
      <Timeline.Item>
        <Text size="sm">mTechcrew</Text>
        <Text c="dimmed" mt={5} size="xs">
          2017.07 ~ 2018.10
        </Text>
        <Group mt={10}>
          {SKILLS.mtechcrew.map((item) => (
            <Image
              key={item}
              src={ICON[item].src}
              alt={item}
              width={45}
              height={45}
            />
          ))}
        </Group>
      </Timeline.Item>
      <Timeline.Item>
        <Text size="sm">NemuSoft</Text>
        <Text c="dimmed" mt={5} size="xs">
          2015.02 ~ 2016.03
        </Text>
        <Group mt={10}>
          {SKILLS.nemusoft.map((item) => (
            <Image
              key={item}
              src={ICON[item].src}
              alt={item}
              width={45}
              height={45}
            />
          ))}
        </Group>
      </Timeline.Item>
      <Timeline.Item>
        <Text size="sm">Hello World Corp.</Text>
        <Text c="dimmed" mt={5} size="xs">
          2013.12 ~ 2015.01
        </Text>
        <Group mt={10}>
          {SKILLS.helloworld.map((item) => (
            <Image
              key={item}
              src={ICON[item].src}
              alt={item}
              width={45}
              height={45}
            />
          ))}
        </Group>
      </Timeline.Item>
    </Timeline>
  );
}
