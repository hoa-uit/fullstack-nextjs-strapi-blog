import axios from 'axios';
import Image from 'next/image';
import moment from 'moment';
const myLoader = ({ src }) => {
  return `${src}`;
};
function Post({ posts }) {
  return (
    <>
      <h1>All Posts</h1>
      <div className="all-posts">
        {posts.map((post) => (
          <a key={post.id} className="single-post" href={`/posts/${post.id}`}>
            <Image
              height={100}
              width={250}
              className="img-post"
              loader={myLoader}
              src={post.attributes.thumbnail.data.attributes.url}
              alt="avatar-profile"
            ></Image>
            <div className="right-text">
              <h4>{post.attributes.title}</h4>
              <p>{post.attributes.description}</p>
              <p className="author">
                {post.attributes.author}/
                {moment(post.attributes.publishedAt).format(
                  'MMMM Do YYYY, h:mm:ss a'
                )}
              </p>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}
Post.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      'https://markintosh.herokuapp.com/api/posts?populate=thumbnail'
    );
    let posts = res.data;
    posts = posts.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};

export default Post;
