import Post from '../components/Post/post';
import IPost from '../components/Post/index';

interface IBrowseAll {
  content:  IPost[]
}

export default function BrowseAll({ content }: IBrowseAll) {

  return (
    <>
      <h2 className="section-title">BROWSE ALL</h2>
      <div className="contentful-section most-popular">
        {content.slice(0, 9).map((p, i) => {
            return <Post {...p} type='standard' />;
        })}
      </div>
    </>
  );
}
