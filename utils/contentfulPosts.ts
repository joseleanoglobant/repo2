import { createClient, CreateClientParams, EntryCollection, Asset } from "contentful";

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  ? process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
  : "";
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  ? process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN
  : "";

const clientParams: CreateClientParams = {
  space: space,
  accessToken: accessToken,
};

const client = createClient(clientParams);

export interface ContentfulPost {
  name: string
  title: string
  category: string
  publishedDate: string
  featuredImage: Asset
  author: string
  slug: string
  body: string
}

export async function fetchEntries() {
  const entries: EntryCollection<ContentfulPost> = await client.getEntries();
  if (entries.items) return entries.items;
  console.log(`Error getting Contentful entries.`);

  return []
}

export function format(entry:ContentfulPost){

  const formattedPost = {
    title: entry.title,
    category: entry.category,
    publishedDate: entry.publishedDate,
    imageAlt: entry.featuredImage.fields.title,
    imageUrl: entry.featuredImage.fields.file.url,
    slug: entry.slug,
    author: entry.author

  }
  return (formattedPost)
}


