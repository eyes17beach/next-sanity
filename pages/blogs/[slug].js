import PageLayout from 'components/PageLayout'
import { getBlogBySlug, getAllBlogs } from 'lib/api'

function BlogDetail({ blog }) {
  return (
    <PageLayout>
      <h1>Welcome to blog detail page - {blog?.slug}</h1>
    </PageLayout>
  )
}

// This function is called during request time unlike 'getStaticProps'
// Provides props to your 'BlogDetail'
export async function getStaticProps({ params }) {
  const blog = await getBlogBySlug(params.slug)

  return {
    props: {
      blog,
    },
  }
}

export async function getStaticPaths() {
  const blogs = await getAllBlogs()

  return {
    paths: blogs?.map((blog) => ({ params: { slug: blog.slug } })),
    fallback: false,
  }
}

export default BlogDetail
