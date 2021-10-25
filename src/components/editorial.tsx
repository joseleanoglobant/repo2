import Post from '../components/Post/post';
import IPost from '../components/Post/index';


export default function Editorial(content : IPost[]) {

  console.log(content);
  //const { category, slug, title, publishedDate: date, author } = post

  return ( 
    <div className="contentful-section editorial">
      <div className="editorial__primary">
        <Post post={content} type={1} />
      </div>
      <div className="editorial__secondary">
 
      </div>
    </div>
  )
}



