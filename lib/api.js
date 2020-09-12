import client from './sanity'

const blogFields = `
  title,
  subtitle,
  date,
  'slug': slug.current,
  'coverImage' : coverImage.asset->url,
  'author': author->{ name, 'avatar': avatar.asset->url },
`

export async function getAllBlogs() {
  const results = await client.fetch(`*[_type == "blog"]{${blogFields}}`)
  return results
}
