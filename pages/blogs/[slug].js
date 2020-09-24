import PageLayout from 'components/PageLayout'
import { getBlogBySlug } from 'lib/api'

function BlogDetail({ blog }) {
  debugger

  return (
    <PageLayout>
      <h1>Welcome to blog detail page - {blog?.slug}</h1>
    </PageLayout>
  )
}

// This function is called during request time unlike 'getStaticProps'
// Provides props to your 'BlogDetail'
export async function getServerSideProps({ params }) {
  const blog = await getBlogBySlug(params.slug)

  return {
    props: {
      blog,
    },
  }
}

export default BlogDetail
