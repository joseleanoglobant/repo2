import Post from '../components/Post/post';
import IPost from '../components/Post/index';

interface IEditorial {
  content: IPost[]
}


export default function Editorial({ content }: IEditorial) {

  return (
    <div className="contentful-section editorial">
      <div className="editorial__primary">
        <Post {...content[0]} type='featured' />
      </div>
      <div className="editorial__secondary">
        {content.slice(1, 4).map((p, i) => {
          return <Post {...p} key={`editorial-${p.slug}`} type='secondary' />;
        })}
      </div>
      <style jsx global>{`
          .contentful-section.editorial {
            justify-content: space-between;
          }
          .editorial__primary {
            margin:0 20px;
          }
          .editorial__secondary {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin: 0 20px;
          }
        `}</style>
    </div>
  )
}



