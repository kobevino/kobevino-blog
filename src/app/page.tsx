import { Background } from 'components/background';
import { Post } from 'components/post';
import { Profile } from 'components/profile';
import { getPosts } from 'services/post';

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <Profile />
      {posts.map((post, index) => (
        <Post key={post.slug} index={index} {...post} />
      ))}
      <Background />
    </>
  );
}
