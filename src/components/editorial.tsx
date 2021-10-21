export default function Editorial({ title, category, date, image, author, index}) {
  let { file, description } = image
  let postType = index === 0 ? 'post--featured' : 'post--secondary'
  return (
    <div className={`post ${postType}`}>
      <img width="100%" height="auto" className="post__img" alt={description} src={`https:${file.url}`} />
      <div className="post__info">
        <span className="post__category">{category}</span>
        <h3 className="post__title">{title}</h3>
        <div className="publisher">
          <span className="post__date">{date}</span>
          <span className="post__author">{author}</span>
        </div>
      </div>
      <style jsx global>{`
        .post {
          display: inline-block;
          position: relative;
        }
        .post__info {
          position: absolute;
          left:0;
          bottom: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.74);
        }
        .post--featured {
          width: 70%;
        }
        .post--featured .post__title {
          color: rgb(0, 60, 190);
          font-size: 22px;
        }
        .post--featured .post__category {
          color: rgb(11, 106, 230);
          font-size: 22px;
        }
        .post--featured .publisher span {
          color: rgb(11, 106, 230);
          font-size: 22px;
        }
        .post--secondary {
          width: 30%;
        }
        .post--secondary .post__title {
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}



