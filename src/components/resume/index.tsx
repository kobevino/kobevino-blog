import { Avatar, Button, Flex, Group, Text } from '@mantine/core';
import { IconReportSearch } from '@tabler/icons-react';
import Link from 'next/link';

export default function Resume() {
  return (
    <Flex justify={'space-between'}>
      <Group>
        <Avatar src="/profile.jpg" alt="Jacob Warnhalter" radius="xl" />
        <div>
          <Text fz="sm">Jaesung Lee</Text>
          <Text fz="xs" c="dimmed">
            Frontend Engineer
          </Text>
        </div>
      </Group>
      <Group>
        <Link href="korean-resume.pdf" target="_blank">
          <Button leftSection={<IconReportSearch size={15} />} size="xs">
            Resume (KO)
          </Button>
        </Link>
        <Link href="english-resume.pdf" target="_blank">
          <Button leftSection={<IconReportSearch size={15} />} size="xs">
            Resume (EN)
          </Button>
        </Link>
      </Group>
    </Flex>
  );
}
