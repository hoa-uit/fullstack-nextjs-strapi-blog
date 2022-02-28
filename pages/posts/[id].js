import axios from 'axios';
import MarkdownIt from 'markdown-it';
function PostPage({ post }) {
  const md = new MarkdownIt();
  const htmlContent = md.render(post.attributes.content);
  return (
    <article>
      {console.log(post)}
      <header>
        <h1>{post.attributes.title}</h1>
      </header>
      <section dangerouslySetInnerHTML={{ __html: htmlContent }}></section>
    </article>
  );
}

export default PostPage;

export async function getStaticProps({ params }) {
  const postsRes = await axios.get(
    `http://localhost:1337/api/posts/${params.id}`
  );
  let post = postsRes.data;

  return {
    props: {
      post: post.data,
    },
  };
}

export async function getStaticPaths() {
  let postsRes = await axios.get(
    'http://localhost:1337/api/posts?populate=thumbnail'
  );
  postsRes = postsRes.data;
  const paths = postsRes.data.map((post) => {
    return { params: { id: post.id.toString() } };
  });
  return {
    paths,
    fallback: false,
  };
}
