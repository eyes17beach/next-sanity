import { Row, Col } from 'react-bootstrap'
import PageLayout from 'components/PageLayout'
import BlogHeader from 'components/BlogHeader'
import BlogContent from 'components/BlogContent'
import { getBlogBySlug, getAllBlogs, urlFor } from 'lib/api'

function BlogDetail({ blog }) {
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader
            {...blog}
            coverImage={urlFor(blog.coverImage)
              .height(600)
              .crop('center')
              .fit('clip')
              .url()}
          />
          <hr />
          <BlogContent content={blog.content} />
        </Col>
      </Row>
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
