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
        <title>Happy Birthday!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="posts">
        <style jsx>{`
                .posts {
                    display: flex;
                    justify-content: space-between;
                    max-width: 1200px;
                  }
              `}</style>
          {editorial.map((p) => {
            return (
              <div class='post'>
                <Editorial title={p.title} category={p.category} date={p.publishedDate} image={p.featuredImage.fields} author={p.author}/>
     
              </div>
            )
          })}
        </div>
        <div className="most-popular">
        <style jsx>{`
                .posts {
                    display: flex;
                    justify-content: space-between;
                    max-width: 1200px;
                  }
              `}</style>
          {editorial.map((p) => {
            return (
              <div class='post'>
                <MostPopular title={p.title} category={p.category} date={p.publishedDate} image={p.featuredImage.fields} author={p.author}/>
     
              </div>
            )
          })}
        </div>

        <div className="browse-all">
        <style jsx>{`
                .posts {
                    display: flex;
                    justify-content: space-between;
                    max-width: 1200px;
                  }
              `}</style>
          {editorial.map((p) => {
            return (
              <div class='post'>
                <BrowseAll title={p.title} category={p.category} date={p.publishedDate} image={p.featuredImage.fields} author={p.author}/>
     
              </div>
            )
          })}
        </div>

      </main>

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