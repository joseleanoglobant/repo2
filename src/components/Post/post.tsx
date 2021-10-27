import IPost from '../Post/index';

export default function Post(props: IPost) {

  let { title, category, publishedDate, imageAlt, imageUrl, slug, author, type } = props;

  return (
    <div className={`post post--${type}`}>
      <div className="post__image">
        <a href={slug}>
          <img width="100%" height="auto" className="post__img" alt={imageAlt} src={`https:${imageUrl}`} />
        </a>
      </div>
      <div className="post__info">
        <span className="post__category">{category}</span>
        <h3 className="post__title"><a href={slug}>{title}</a></h3>
        <div className="publisher">
          <span className="post__date">{publishedDate}</span>
          <span className="post__author">{author}</span>
        </div>
      </div>

      <style jsx global>{`
        .post {
            display: inline-block;
          }
          .post--featured .post__info {
            padding: 20px;
            position: absolute;
            left:0;
            bottom: 0;
            width: 100%;
            background: rgba(255, 255, 255, 0.74);
          }
          .post.post--standard {
            width: 30%;
            flex-grow: revert;
            margin-bottom: 40px;
          }
          .post.post--standard .post__info{
            padding: 20px;
          }
          .post--featured {
            position: relative;
          }
          .post--featured .post__title {
            color: rgb(42, 48, 57);
            font-size: 22px;
            margin: 10px 0;
          }
          .post--featured .post__title a {
            color: rgb(42, 48, 57);
            font-size: 22px;
            margin: 0;
          }
          .post__category {
            color: rgb(11, 106, 230);
            text-transform: uppercase;
          }
          .post--featured .post__category {
            font-size: 16px;
            text-transform: uppercase;
          }
          .post--featured .publisher span {
            display: inline-block;
            margin-right: 20px;
            color: rgb(11, 106, 230);
            font-size: 16px;
            color: rgb(42, 48, 57);
          }
          .post.post--secondary {
            display: flex;
            justify-content: space-between;
            width: 100%;
            height: 101px;
            overflow: hiddcen;
            text-overflow: ellipsis;
          }
          .post--secondary .post__img {
            display: inline-block;
            width: 173px;
            height: auto;
          }
          .post--secondary .post__image a {
            display: inline-block;
          }
          .post--secondary .post__info {
            display: inline-block;
            width: calc(100% - 200px);
          }
          .post--secondary .post__category {
            color: rgb(11, 106, 230);
            font-size: 16px;
            font-weight: normal;
          }
          .post--secondary .post__title {
            font-size: 16px;
            font-weight: 400;
            margin: 0;
            overflow: hidden;
          }
          .post--secondary .post__title a{
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
          }
          .post--secondary .publisher {
            display: none;
          }
      `}</style>
    </div>
  )
}




