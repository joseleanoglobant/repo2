import { ContentfulPost } from '../../utils/contentfulPosts';
import Post from '../components/Post/post';
import IPost from '../components/Post/index';


export default function Editorial(post : IPost) {

  //const { category, slug, title, publishedDate: date, author } = post

  return ( 
    <div className="contentful-section editorial">
      <div className="editorial__primary">
        {<Post post={{ ...post[0] }} type={1} />}
      </div>
      <div className="editorial__secondary">
        {post.slice(1, 4).map((p, i) => {
          return <Post key={i} post={p} type={2} />;
        })}
      </div>
    </div>
  )
}



