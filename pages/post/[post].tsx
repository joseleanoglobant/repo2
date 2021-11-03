import { fetchEntries } from "../../utils/contentfulPosts";
import { Asset } from "contentful";

interface IContent {
    title: string
    category: string
    publishedDate: string
    featuredImage: Asset
    imageAlt: string
    imageUrl: string
    slug: string
    author: string
    body: any
}

interface HomeProps {
    content: IContent
}

interface IBody {
    data: {}
    marks: {}
    nodeType: string
    value: string
}

export default function Home({ content }: HomeProps){

    console.log('content', content.body.content[0].content[0]);

    const { title, category, publishedDate, author } = content;
    const imageAlt = content.featuredImage.fields.title;
    const imageUrl = content.featuredImage.fields.file.url;

    return (
        <>
            <div className="post-detail">
            <h1 className="post-detail__title">{title}</h1>
                <main>
                    <div className="post-detail__left">
                        <div className="post-detail__img">
                            <img width="100%" height="auto" className="post__img" alt={imageAlt} src={`https:${imageUrl}`} />
                        </div>
                        <div className="post-detail__body">
                            {content.body.content.map((p:any, i:number) => {
                                return <p key={`body__text-${i}`} className="body__text">{p.content[0].value} </p>
                            })}
                        </div>
                    </div>
                    <div className="post-detail__right">
                        <div className="post-detail__info">
                            <span className="info__title">PUBLISHED</span>
                            <span className="info__data">{publishedDate}</span>
                            <span className="info__title">AUTHOR</span>
                            <span className="info__data">{author}</span>
                            <span className="info__title">CATEGORY</span>
                            <span className="info__data">{category}</span>                            
                        </div>
                    </div>
                </main>
            </div>

            <style jsx global>{`

                .post-detail {
                    display: block;
                    width: 1120px;
                    margin: 40px auto;
                    background: #fff;
                    font-family: 'Montserrat', sans-serif;
                }
                .post-detail__img {
                    margin-bottom: 100px;
                }
                .post-detail .post-detail__title {
                    width: 640px;
                    font-size: 56px;
                }
                main {
                    display: flex;
                    padding: 40px 0;
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    justify-content: space-between;
                }
                .post-detail__left {
                    display: inline-block;
                    width: 640px;
                }
                .post-detail__right {
                    display: inline-block;
                    width: 460px;
                    vertical-align: top;
                }
                .post-detail__info {
                    width: 100%;
                }
                .post-detail__info span {
                    display: block;
                    width: 100%;
                    margin-bottom: 10px;
                }
                .info__title {
                    font-size: 14px;
                    text-transform: uppercase;
                    margin-top: 20px;
                }
                .info__data {
                    color: rgb(11, 106, 230);
                    font-size: 14px;
                }
                .body__text {
                    font-size: 18px;
                    font-weight: 100;
                    line-height: 1.6;
                    color: rgb(42, 48, 57);
                    margin-bottom: 40px;                 
                }
            `}</style>
        </>
    )
}

export async function getStaticPaths() {
    const res = await fetchEntries('post');
    const cornucopia = await res.map((p) => {
      return `/post/${p.fields.slug}`
    })
    return { paths: cornucopia, fallback: false }
}

export async function getStaticProps({ params }) {

    const res = await fetchEntries('post')
    const content = await res
        .map((p) => {
        return p.fields
        })
        .filter((thing) => {
        return thing.slug === params.post
        })
  
    return {
        props: {
        content: content[0],
        },
    }
}