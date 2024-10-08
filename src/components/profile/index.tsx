import {
  Anchor,
  Avatar,
  Badge,
  Button,
  Group,
  Stack,
  Text,
} from '@mantine/core';
import {
  IconHandFingerLeft,
  IconMail,
  IconPhoneCall,
  IconSend2,
} from '@tabler/icons-react';
import Link from 'next/link';
import styles from './index.module.css';

export function Profile() {
  return (
    <Stack mb={30}>
      <Group wrap="nowrap" mb={10}>
        <Avatar src="/profile.jpg" size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Frontend Engineer
          </Text>

          <Group gap={5}>
            <Text fz="lg" fw={500} className={styles.name}>
              Jaesung Lee
            </Text>
            <Link href="about" style={{ textDecoration: 'none' }}>
              <Badge
                className={styles.badge}
                size="xs"
                variant="gradient"
                gradient={{ from: 'blue', to: 'cyan', deg: 90 }}
              >
                @kobevino
              </Badge>
            </Link>
            <IconHandFingerLeft className={styles.finger} />
          </Group>

          <Group wrap="nowrap" gap={10} mt={3}>
            <IconMail stroke={1.5} size="1rem" className={styles.icon} />
            <Text fz="xs" c="dimmed">
              kobe8vino24@gmail.com
            </Text>
          </Group>

          <Group wrap="nowrap" gap={10} mt={5}>
            <IconPhoneCall stroke={1.5} size="1rem" className={styles.icon} />
            <Text fz="xs" c="dimmed">
              (+82) 1026190853
            </Text>
          </Group>
        </div>
      </Group>
      <Group>
        <Anchor href="mailto:kobe8vino24@gmail.com">
          <Button
            style={{ width: '270px' }}
            variant="gradient"
            rightSection={<IconSend2 stroke={1.5} size="1rem" />}
          >
            SEND
          </Button>
        </Anchor>
      </Group>
    </Stack>
  );
}
