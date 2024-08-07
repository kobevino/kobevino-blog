import { Container } from '@mantine/core';
import { Header } from 'components/Header';
import { Post } from 'components/Post';
import { Profile } from 'components/Profile';
import { getPosts } from 'services/post';
import styles from './page.module.css';

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className={styles.main}>
      <Header />
      <Container>
        <Profile />
        {posts.map((post, index) => (
          <Post key={post.slug} index={index} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={1} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={2} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={3} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={4} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={5} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={6} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={7} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={8} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={9} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={10} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={11} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={12} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={13} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={14} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={15} {...post} />
        ))}
        {posts.map((post, index) => (
          <Post key={post.slug} index={16} {...post} />
        ))}
      </Container>
    </main>
  );
}
