import axios from 'axios';
import Image from 'next/image';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// import the icons you need
import { faHandPointDown } from '@fortawesome/free-solid-svg-icons';

const myLoader = ({ src }) => {
  return `https://markintosh.herokuapp.com/${src}`;
};
const myLoaderImgAva = ({ src }) => {
  return `${src}`;
};
function Home({ posts }) {
  return (
    <>
      <div className="introduction">
        <div className="content">
          <div className="content__container">
            <p className="content__container__text">Hello</p>

            <ul className="content__container__list">
              <li className="content__container__list__item">world !</li>
              <li className="content__container__list__item">markintosh !</li>
              <li className="content__container__list__item">users !</li>
              <li className="content__container__list__item">everybody !</li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="avatar">
            <a href="https://https://www.facebook.com/h2ndnt">
              <Image
                width={200}
                height={200}
                loader={myLoaderImgAva}
                src="https://res.cloudinary.com/deojoci86/image/upload/v1646490461/marin-kitagawa_fm6nfq.gif"
                alt="markintosh-avatar"
              />
            </a>
          </div>
        </div>
      </div>

      <div className="wrap">
        <h3 className="description idiom">
          {' '}
          石の上にも三年 - 3 năm ngồi trên tảng đá{' '}
        </h3>
        <h3 className="description meaning">
          "Điều gì xảy ra khi bạn ngồi trên một hòn đá trong 3 năm? Hòn đá đó sẽ
          ấm lên. Câu tục ngữ này có nghĩa là cho dù bạn đang trải qua thời kỳ
          khó khăn, thế nhưng nếu kiên trì, bạn cũng sẽ thay đổi được điều gì đó
          và mọi thứ sẽ trở nên tốt hơn" một câu tục ngữ mình rất thích.
          Markintosh's blog là một blog nơi mình chia sẻ những kiến thức và tâm
          sự cá nhân, rảnh rỗi thì có thể dịch. bài
        </h3>

        <div className="contentHome">
          <div className="recentlyPost">
            <h3 className="categoryHome">RECENTLY PUBLISHED</h3>
            {posts.map((post) => (
              <a
                key={post.id}
                className="effect-shine one-post"
                href={`/posts/${post.id}`}
              >
                <div>
                  <h4>{post.attributes.title}</h4>
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
    const res = await axios.get('https://markintosh.herokuapp.com/api/posts');
    let posts = res.data;
    posts = posts.data;
    return { posts };
  } catch (error) {
    return { error };
  }
};

export default Home;
