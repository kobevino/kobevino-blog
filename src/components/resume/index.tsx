import { Avatar, Button, Flex, Group, Text } from '@mantine/core';
import { IconReportSearch } from '@tabler/icons-react';

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
        <a href="korean-resume.pdf" target="_blank" rel="noreferrer">
          <Button leftSection={<IconReportSearch size={15} />} size="xs">
            Resume (KO)
          </Button>
        </a>
        <a href="english-resume.pdf" target="_blank" rel="noreferrer">
          <Button leftSection={<IconReportSearch size={15} />} size="xs">
            Resume (EN)
          </Button>
        </a>
      </Group>
    </Flex>
  );
}
