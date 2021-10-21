export default function MostPopular({ title, category, date, image, author, slug, body, index}) {
    let { file, description } = image

    return (
        <div className="post--popular">
            <img width="100%" height="auto" className="post__img" alt={description} src={`https:${file.url}`} />
            <div className="post__info">
                <span className="post__category">{category}</span>
                <h3 className="post__title"><a href={slug}>{title}</a></h3>
                <div className="publisher">
                    <span className="post__date">{date}</span>
                    <span className="post__author">{author}</span>
                </div>
            </div>
            <style jsx global>{`
        .post {
          display: inline-block;
        }
        .post--popular .post__info {
          padding: 20px;
        }
        .post--popular {
          width: 333px;
          margin: 20px;
        }
        .post--popular .post__title {
          color: rgb(42, 48, 57);
          font-size: 22px;
          margin: 10px 0;
        }
        .post--popular .post__title a {
          color: rgb(42, 48, 57);
          font-size: 22px;
          margin: 0;
        }
        .post--popular .post__category {
          color: rgb(11, 106, 230);
          font-size: 16px;
        }
        .post--popular .publisher span {
          display: inline-block;
          margin-right: 20px;
          color: rgb(11, 106, 230);
          font-size: 16px;
          color: rgb(42, 48, 57);
        }
      `}</style>
        </div>
      )
    }


