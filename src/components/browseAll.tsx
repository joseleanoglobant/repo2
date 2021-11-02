import Post from '../components/Post/post';
import IPost from '../components/Post/index';
import Dropdown from './dropdown';
import React, { useState } from "react";
import ICategories from './categories/categories';

interface IBrowseAll {
  content: IPost[],
  categories: ICategories[]
}

export default function BrowseAll({ content, categories }:IBrowseAll) {

  const [categoryFilter, setCategoryFilter] = useState('');
  const [postLimit, setPostLimit] = useState(9);

  const contentLimit: number = postLimit + 9;


  const currentContent = content.filter((val) => {
    if (categoryFilter === '' || val.category.toLowerCase() === categoryFilter.toLowerCase()) {
      return val
    }
  }).slice(0, postLimit);

  return (
    <>
      <div className="section-title-container">
        <h2 className="section-title">BROWSE ALL</h2>
        <Dropdown list={categories} filter={setCategoryFilter} />
      </div>
      <div className="contentful-section browse-all">
        {currentContent.map((p, i) => {
          return <Post {...p} key={`browseAll-${p.slug}`} type='standard' />;
        })}
      </div>
      {postLimit <= content.length && 
        <span className="browse-all__load-more" onClick={() => postLimit <= content.length && setPostLimit(contentLimit) }>Load More</span> 
        }
      <style jsx global>{`
            .browse-all {
              display: flex;
              justify-content: left;
              flex-wrap: wrap;
              flex-grow: 3;
            }
            .section-title-container {
              display: flex;
              justify-content: space-between;
              width: 100%;
              margin: 0 auto;
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
