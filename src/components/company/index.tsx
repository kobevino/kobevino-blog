'use client';

import { Button, Group, Text, Timeline } from '@mantine/core';
import { IconReportSearch } from '@tabler/icons-react';
import { ICON } from 'constants/icon';
import { SKILLS } from 'constants/skill';
import Image from 'next/image';

interface Props {
  uuid: string;
  name: string;
  date: string;
  index: number;
  resources?: {
    file: string;
    text: string;
  }[];
}

export function Company({ uuid, name, date, index, resources }: Props) {
  return (
    <Timeline.Item __active={index === 0}>
      <Text size="sm">{name}</Text>
      <Text c="dimmed" mt={5} size="xs">
        {date}
      </Text>
      <Group mt={10}>
        {SKILLS[uuid].map((item) => (
          <Image
            key={item}
            src={ICON[item].src}
            alt={item}
            width={45}
            height={45}
          />
        ))}
      </Group>
      {resources && resources.length > 0 && (
        <Group mt={10}>
          {resources.map(({ file, text }) => {
            return (
              <a key={file} href={file} target="_blank" rel="noreferrer">
                <Button leftSection={<IconReportSearch size={16} />} size="xs">
                  {text}
                </Button>
              </a>
            );
          })}
        </Group>
      )}
    </Timeline.Item>
  );
}
