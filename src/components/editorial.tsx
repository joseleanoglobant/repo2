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

      </div>
    </div>
  )
}



