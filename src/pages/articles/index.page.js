import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { POSTS_PATH, postFilePaths } from 'utils/mdx';
export { Articles as default } from './Articles';

export function getStaticProps() {
  const allPosts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath));
    const { data, content } = matter(source);
    return {
      ...data,
      slug: filePath.replace(/\.mdx?$/, ''),
    };
  });

  const featured = allPosts.find(post => post.featured);

  const posts = allPosts
    .filter(post => post.slug !== featured.slug)
    .sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    })
    .reverse();

  return {
    props: { posts, featured },
  };
}
