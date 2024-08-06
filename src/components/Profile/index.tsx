import { Anchor, Avatar, Button, Container, Group, Text } from '@mantine/core';
import { IconMail, IconPhoneCall, IconSend2 } from '@tabler/icons-react';
import styles from './index.module.css';

export function Profile() {
  return (
    <Container size="md">
      <Group wrap="nowrap" mb={10}>
        <Avatar src="/profile.jpg" size={94} radius="md" />
        <div>
          <Text fz="xs" tt="uppercase" fw={700} c="dimmed">
            Frontend Engineer
          </Text>

          <Text fz="lg" fw={500} className={styles.name}>
            Jaesung Lee
          </Text>

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
      <Anchor href="mailto:kobe8vino24@gmail.com">
        <Button
          style={{ width: '270px' }}
          variant="gradient"
          rightSection={<IconSend2 stroke={1.5} size="1rem" />}
        >
          SEND
        </Button>
      </Anchor>
    </Container>
  );
}
