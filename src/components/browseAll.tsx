import { ContentfulPost } from "../../utils/contentfulPosts";
interface IBrowseAll {
  post: ContentfulPost;
}

export default function BrowseAll({ post }: IBrowseAll) {
  const { title, featuredImage } = post;
  let { file, description } = featuredImage.fields;
  let main = "editorial";

  return (
    <div className={main}>
      <img alt={description} src={`https:${file.url}`} />
      <div className="description">{description}</div>
      <div className="text">
        <h2>{title}</h2>
      </div>
    </div>
  );
}
