import { Row, Col } from 'react-bootstrap'
import PageLayout from 'components/PageLayout'
import BlogHeader from 'components/BlogHeader'
import { getBlogBySlug, getAllBlogs } from 'lib/api'

function BlogDetail({ blog }) {
  return (
    <PageLayout className='blog-detail-page'>
      <Row>
        <Col md={{ span: 10, offset: 1 }}>
          <BlogHeader {...blog} />
          <hr />
          {/* Blog Content Here */}
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
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
