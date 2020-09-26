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

export async function getBlogBySlug(slug) {
  const result = await client
    .fetch(
      `*[_type == "blog" && slug.current == $slug]{
          ${blogFields}content[]{..., "asset": asset->}
        }`,
      {
        slug,
      }
    )
    .then((response) => response?.[0])

  return result
}
