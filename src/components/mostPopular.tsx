import Post from '../components/Post/post';
import IPost from '../components/Post/index';

interface IMostPopular {
  content: IPost[]
}

export default function MostPopular({ content }: IMostPopular) {

    return (
      <>
        <h2 className="section-title">MOST POPULAR</h2>
        <div className="contentful-section most-popular">      
          {content.slice(0, 6).map((p, i) => {
              return <Post {...p} type='standard' />;
            })}
        </div>
        <style jsx global>{`
            .most-popular {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
            }
          `}</style>
      </>
      )
    }


