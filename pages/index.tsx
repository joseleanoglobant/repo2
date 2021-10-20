import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import bootstrap from 'bootstrap'
import styles from '../styles/Home.module.css'
import { fetchEntries } from '../utils/contentfulPosts'
import Editorial from '../src/components/editorial'


export default function Home({ editorial }) {
  return (
    <div className="container">
      <Head>
        <title>Happy Birthday!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>

        <div className="posts">

          {editorial.map((p) => {
            return <Editorial title={p.title} category={p.category} date={p.date} image={p.editorialImage.fields} author={p.author} featured={p.featured} order={p.order}/>
          })}

        </div>
      </main>

    </div>
  )
}

export async function getStaticProps() {
  const res = await fetchEntries()
  const editorial = await res.map((p) => {
    return p.fields
  })

  console.log(editorial)

  return {
    props: {
      editorial,
    },
  }
}