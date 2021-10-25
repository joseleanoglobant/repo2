import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ContentfulPost, fetchEntries, format } from "../utils/contentfulPosts";
import Editorial from "../src/components/editorial";
import MostPopular from "../src/components/mostPopular";
import BrowseAll from "../src/components/browseAll";
import IPost from '../src/components/Post/index'

interface HomeProps {
  posts: IPost[];
}

export default function Home({ posts }: HomeProps) {

  return (
    <div className="container">
      <Head>
        <title>Contentful Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Editorial content={posts}/>
        <MostPopular content={posts}/>
        <BrowseAll content={posts}/>
      </main>
      <>
        <style jsx global>{`
          body {
            background: rgb(242, 248, 251);
            font-family: "Gill Sans", "Gill Sans MT", Calibri, sans-serif;
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
          }
          .section-title {
            display: inline-block;
            font-size: 31px;
            margin-left: 80px;
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


export async function getStaticProps() {
  const res = await fetchEntries();
  const posts = await res.map((p) => {

    const item  = format(p.fields);
    return item;
  });
  return {
    props: {
      posts,
    },
  };
}
