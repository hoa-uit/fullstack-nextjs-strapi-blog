import axios from 'axios';
import Image from 'next/image';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';

const myLoader = ({ src }) => {
  return `http://localhost:1337${src}`;
};
function Home({ posts }) {
  return (
    <>
      {/* <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet"> */}

      <div class="content">
        <div class="content__container">
          <p class="content__container__text">Hello</p>

          <ul class="content__container__list">
            <li class="content__container__list__item">world !</li>
            <li class="content__container__list__item">markintosh !</li>
            <li class="content__container__list__item">users !</li>
            <li class="content__container__list__item">everybody !</li>
          </ul>
        </div>
      </div>
      <div class="container">
        <div class="avatar">
          <a href="https://https://www.facebook.com/h2ndnt">
            <img
              src="https://i.pinimg.com/originals/9f/6f/04/9f6f04a46f99e3411cc7b021504bfc33.gif"
              alt="Skytsunami"
            />
          </a>
        </div>
      </div>
      <div className="wrap">
        <h3 className="description idiom">
          {' '}
          石の上にも三年/3 năm ngồi trên tảng đá{' '}
        </h3>
        <h3 className="description meaning">
          Điều gì xảy ra khi bạn ngồi trên một hòn đá trong 3 năm? Hòn đá đó sẽ
          ấm lên. Câu tục ngữ này có nghĩa là cho dù bạn đang trải qua thời kỳ
          khó khăn, thế nhưng nếu kiên trì, bạn cũng sẽ thay đổi được điều gì đó
          và mọi thứ sẽ trở nên tốt hơn.
        </h3>

        <div className="contentHome">
          <div className="recentlyPost">
            <h3 className="categoryHome">RECENTLY PUBLISHED</h3>
            {posts.map((post) => (
              <a
                key={post.id}
                class="effect-shine one-post"
                href={`/posts/${post.id}`}
              >
                <div>
                  <h4 className="effect-underline">{post.attributes.title}</h4>
                  <p className="description-home">
                    {post.attributes.description}
                  </p>
                  <p className="readmore">
                    {moment(post.attributes.publishedAt).format(
                      'MMMM Do YYYY, h:mm:ss a'
                    )}{' '}
                    | Read more...
                  </p>
                </div>
              </a>
            ))}
          </div>
          <div className="relateWebsite ">
            <div className="webs">
              <h3 className="categoryHome"> RELATED WEBSITE </h3>
              <p className="name-web">
                Website bán thiết bị điện tử {'   '}
                <FontAwesomeIcon
                  className="fa-handintdown-home"
                  icon={faHandPointDown}
                ></FontAwesomeIcon>
              </p>
              <embed
                src="https://team-13.herokuapp.com"
                className="team-13"
              ></embed>
              <p className="name-web">
                Profile dev.daily{' '}
                <FontAwesomeIcon
                  className="fa-handintdown-home"
                  icon={faHandPointDown}
                ></FontAwesomeIcon>
              </p>
              <embed
                src="https://app.daily.dev/h2ndnt"
                className="team-13"
              ></embed>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get('http://localhost:1337/api/posts');
    let posts = res.data;
    posts = posts.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};

export default Home;
