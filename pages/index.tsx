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
          <div className="editorial__primary">
          {
            <Editorial title={editorial[0].title} category={editorial[0].category} date={editorial[0].publishedDate} image={editorial[0].featuredImage.fields} author={editorial[0].author} slug={editorial[0].slug} body={editorial[0].body} type="1"/>       
          }
          </div>
          <div className="editorial__secondary">
            {editorial.slice(1, 4).map((p, i) => {
                return(
                  <Editorial title={p.title} category={p.category} date={p.publishedDate} image={p.featuredImage.fields} author={p.author} slug={p.slug} body={p.body} type="2"/>       
                ) 
            })}
          </div>
         
        </div>
        <h2 className="section-title">MOST POPULAR</h2>

        <div className="most-popular">
          {editorial.slice(0, 6).map((p, i) => {
            return (
              <MostPopular title={p.title} category={p.category} date={p.publishedDate} image={p.featuredImage.fields} author={p.author} slug={p.slug} body={p.body} index={i}/>       
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
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
          }
          .editorial {
            display: flex;
            width: 100%;
            max-width: 1080px;
            margin: 20px auto;
            justify-content: space-between;
          }
          .most-popular {
            display: flex;
            flex-wrap: wrap;
            width: 100%;
            max-width: 1120px;
            margin: 20px auto;
            justify-content: center;
          }
          .section-title {
            display: inline-block;
            font-size: 31px;
            margin-left: 60px;
            background-image: linear-gradient(-180deg, transparent 0%, transparent 64%, rgb(255, 216, 95) 64%, rgb(255, 216, 95) 87%, transparent 87%, transparent 100%);
          }
          .editorial__primary{
            width: calc(65% - 40px);
          }
          .editorial__secondary{
            width: 35%;
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