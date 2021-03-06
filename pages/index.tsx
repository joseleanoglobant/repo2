import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { ContentfulPost, fetchEntries, format } from "../utils/contentfulPosts";
import Editorial from "../src/components/editorial";
import MostPopular from "../src/components/mostPopular";
import BrowseAll from "../src/components/browseAll";
import IPost from '../src/components/Post/index'
import ICategories from '../src/components/categories/categories'


interface HomeProps {
  posts: IPost[],
  categories: ICategories[]
}

export default function Home({ posts, categories }: HomeProps) {

  return (
    <div className="container">
      <Head>
        <title>Contentful Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Editorial content={posts}/>
        <MostPopular content={posts}/>
        <BrowseAll content={posts} categories={categories}/>
      </main>
      <>
        <style jsx global>{`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
          
          body {
            background: rgb(242, 248, 251);
            font-family: 'Montserrat', sans-serif;
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
  const resPosts = await fetchEntries('post');
  const resCategories = await fetchEntries('categories');

  const posts = await resPosts.map((p) => {
    const item  = format(p.fields);
    return item;
  });

  const categories = await resCategories.map((p) => {
    const category = p.fields;
    return category;
  });
  
  return {
    props: {
      posts,
      categories
    },
  };
}
