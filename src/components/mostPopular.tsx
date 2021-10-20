export default function MostPopular({ title, category, image, date, author, featured, order}) {
    let { file, description } = image
    let main = featured ? 'main editorial' : 'editorial';


    return (
        <div className={main}>
          <img alt={description} src={`https:${file.url}`} />
          <div className="description">{description}</div>
          <div className="text">
            <h2>{title}</h2>
            <h3>{date.substring(0, 10)}</h3>
          </div>
        </div>
      )
    }


