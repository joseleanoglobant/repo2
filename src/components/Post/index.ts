// Component Props
export default interface IPost {
    title: string
    category: string
    publishedDate: string
    imageAlt: string
    imageUrl: string
    slug: string
    author: string
    type?: 'featured'| 'secondary'| 'standard'
}
