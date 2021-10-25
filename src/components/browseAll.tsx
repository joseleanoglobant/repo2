import Post from '../components/Post/post';
import IPost from '../components/Post/index';

interface IBrowseAll {
  content:  IPost[]
}

export default function BrowseAll({ content }: IBrowseAll) {

  return (
    <>
      <h2 className="section-title">BROWSE ALL</h2>
      <div className="contentful-section browse-all">
        {content.slice(0, 9).map((p, i) => {
            return <Post {...p} type='standard' />;
        })}
      </div>
      <a className="browse-all__load-more"href="#">Load More</a>
      <style jsx global>{`
            .browse-all {
              display: flex;
              justify-content: space-around;
              flex-wrap: wrap;
            }
            .browse-all__load-more {
              position: relative;
              box-sizing: border-box;
              cursor: pointer;
              display: inline-block;
              width: 130px;
              left: 50%;
              transform: translateX(-50%);
              font-family: "Avenir Next W01", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
              text-align: center;
              white-space: nowrap;
              user-select: none;
              font-size: 16px;
              height: 41px;
              line-height: 39px;
              font-weight: 600;
              color: rgb(255, 255, 255);
              padding-left: 24px;
              padding-right: 24px;
              text-decoration: none;
              transition: transform 0.4s ease 0s, background-color, border-color, background, color;
              border-width: 1px;
              border-style: solid;
              border-color: rgb(11, 106, 230);
              border-image: initial;
              background: rgb(11, 106, 230);
              border-radius: 25px;
            }
          `}</style>
    </>
  );
}
