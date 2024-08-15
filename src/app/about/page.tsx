import { Paper, Title } from '@mantine/core';

import Career from 'components/career';
import Quote from 'components/quote';
import Resume from 'components/resume';
import styles from './page.module.css';

export default function AboutPage() {
  return (
    <>
      <Paper withBorder radius="md" className={styles.about}>
        <Resume />
      </Paper>
      <Paper withBorder radius="md" mt="lg" className={styles.about}>
        <Quote />
      </Paper>
      <Paper withBorder radius="md" mt="lg" mb={30} className={styles.about}>
        <Title order={2} mb={25}>
          Career
        </Title>
        <Career />
      </Paper>
    </>
  );
}
