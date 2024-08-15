import { Blockquote, Flex, Stack, Title } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export default function Quote() {
  const icon = <IconInfoCircle />;

  return (
    <Stack>
      <Title order={2}>My favorite quotes</Title>
      <Flex align="center">
        <Blockquote color="blue" cite="– Kobe Bryant" icon={icon}>
          Rest at the end, not in the middle.
        </Blockquote>
        <Blockquote color="blue" cite="– Michael Phelps" icon={icon}>
          The great do things when they don't always want to.
        </Blockquote>
      </Flex>
    </Stack>
  );
}
