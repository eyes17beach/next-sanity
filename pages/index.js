import { Row, Col } from 'react-bootstrap'
import CardListItem from 'components/CardListItem'
import AuthorIntro from 'components/AuthorIntro'
import PageLayout from 'components/PageLayout'
import CardItem from 'components/CardItem'
import { getAllBlogs } from 'lib/api'

export default function Home(props) {
  const { blogs } = props

  return (
    <PageLayout>
      <AuthorIntro />

      <hr />

      <Row className='mb-5'>
        {/* <Col md='10'>
          <CardListItem />
        </Col> */}

        {blogs.map((blog) => (
          <Col key={blog.slug} md='4'>
            <CardItem
              date={blog.date}
              title={blog.title}
              author={blog.author}
              image={blog.coverImage}
              subtitle={blog.subtitle}
            />
          </Col>
        ))}
      </Row>
    </PageLayout>
  )
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs()

  return {
    props: {
      blogs,
    },
  }
}
