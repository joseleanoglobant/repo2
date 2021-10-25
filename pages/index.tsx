import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ContentfulPost, fetchEntries } from "../utils/contentfulPosts";
import Editorial from "../src/components/editorial";
import MostPopular from "../src/components/mostPopular";
import BrowseAll from "../src/components/browseAll";

interface PostProps {
  posts: ContentfulPost[];
}

export default function Home({ posts }: PostProps) {
  return (
    <div className="container">
      <Head>
        <title>Contentful Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Editorial post={posts} type={1}/>
        <h2 className="section-title">MOST POPULAR</h2>

        <div className="contentful-section most-popular">
          {posts.slice(0, 6).map((p, i) => {
            return <MostPopular key={i} post={p} />;
          })}
        </div>

        <h2 className="section-title">BROWSE ALL</h2>

        <div className="contentful-section browse-all">
          {posts.slice(0, 9).map((p, i) => {
            return <MostPopular key={i} post={p} />;
          })}
        </div>
      </main>
      <>
        <style jsx global>{`
          body {
            background: rgb(242, 248, 251);
            font-family: "Gill Sans", "Gill Sans MT", Calibri;
          }
          main {
            background: #fff;
            padding: 80px 0;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .contentful-section {
            display: flex;
            width: 100%;
            max-width: 1080px;
            margin: 20px auto;
            justify-content: space-between;
          }
          .contenful-section.most-popular {
            justify-content: center;
          }
          .section-title {
            display: inline-block;
            font-size: 31px;
            margin-left: 60px;
            background-image: linear-gradient(
              -180deg,
              transparent 0%,
              transparent 64%,
              rgb(255, 216, 95) 64%,
              rgb(255, 216, 95) 87%,
              transparent 87%,
              transparent 100%
            );
          }

        `}</style>
      </>
    </div>
  );
}


