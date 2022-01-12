import Thumbnail from '../components/Thumbnail';
import type { NextPage, GetStaticProps } from 'next';
import { IPost } from '../types/post';
import Link from 'next/link';
import { getAllPosts } from '../utils/mdxUtils';
import Image from 'next/image';

type Props = {
  posts: [IPost];
};

const Home: NextPage<Props> = ({ posts }: Props) => {
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 content-center mt-6'>
        {posts.map((post) => (
          <div
            key={post.slug}
            className='rounded-lg border-2 border-gray-300 border-dashed overflow-hidden shadow-sm pb-4 hover:-translate-y-1 hover:shadow-xl transition-all duration-200 ease-in-out'>
            <div className='mb-0'>
              <Link href={`/post/${post.slug}`}>
                <a>
                  <Image
                    height={720}
                    width={1280}
                    src={post.thumbnail}
                    alt={`Thumbnail cover image ${post.title}`}
                    className='rounded-t-lg grayscale hover:grayscale-0 transition-all ease-in-out'
                  />
                </a>
              </Link>
            </div>
            <div className='px-6 py-4'>
              <h2 className='text-2xl font-bold mb-4'>
                <Link href={`/post/${post.slug}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

// get posts from serverside at build time
export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(['title', 'slug', 'date', 'description', 'thumbnail']);

  // retunr the posts props
  return { props: { posts } };
};
