import PageLayout from 'components/PageLayout'
import { getBlogBySlug } from 'lib/api'

function BlogDetail({ blog }) {
  console.log("Displaying page")

  return (
    <PageLayout>
      <h1>Welcome to blog detail page - {blog?.slug}</h1>
    </PageLayout>
  )
}

// This function is called during request time unlike 'getStaticProps'
// Provides props to your 'BlogDetail'
export async function getStaticProps({ params }) {
  console.log("Fetching blog by", params.slug)

  const blog = await getBlogBySlug(params.slug)

  return {
    props: {
      blog,
    },
  }
}

export async function getStaticPaths() {
  console.log("Getting paths for every page.")

  return {
    paths: [
      {
        params: {
          slug: 'my-second-blog',
        },
      },
      {
        params: {
          slug: 'my-third-blog',
        },
      },
      {
        params: {
          slug: 'my-first-blog',
        },
      },
    ],
    fallback: false,
  }
}

export default BlogDetail
