import { Header, Profile } from 'components';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Profile />
    </main>
  );
}
