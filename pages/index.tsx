import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { fetchEntries } from '../utils/contentfulPosts'
import Editorial from '../src/components/editorial'
import MostPopular from '../src/components/mostPopular'
import BrowseAll from '../src/components/browseAll'


export default function Home({ editorial }) {
  return (
    <div className="container">
      <Head>
        <title>Contentful Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="editorial">
          {editorial.map((p, i) => {
            return (
              <Editorial title={p.title} category={p.category} date={p.publishedDate} image={p.featuredImage.fields} author={p.author} slug={p.slug} body={p.body} index={i}/>       
            )       
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
          }
          .editorial {
            display: flex;
            width: 100%;
            max-width: 1080px;
            margin: 20px auto;
            justify-content: space-between;
          }
      `}</style>
    </>
    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const editorial = await res.map((p) => {
    console.log(res);
    return p.fields
  })

  console.log(editorial)

  return {
    props: {
      editorial,
    },
  }
}