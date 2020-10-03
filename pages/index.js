import { useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import FilteringMenu from 'components/FilteringMenu'
import CardListItem from 'components/CardListItem'
import AuthorIntro from 'components/AuthorIntro'
import PageLayout from 'components/PageLayout'
import CardItem from 'components/CardItem'
import { getAllBlogs } from 'lib/api'
import { useGetBlogs } from 'actions'

export default function Home(props) {
  const { blogs: initialData } = props

  const [filter, setFilter] = useState({ view: { list: 0 } })

  const { data: blogs, error } = useGetBlogs(initialData)

  return (
    <PageLayout>
      <AuthorIntro />
      <FilteringMenu
        filter={filter}
        onChange={(option, value) => {
          setFilter({ ...filter, [option]: value })
        }}
      />

      <hr />

      {error ? (
        <di>Error loading data.</di>
      ) : !blogs ? (
        <div>Loading...</div>
      ) : (
        <Row className='mb-5'>
          {blogs.map((blog) =>
            filter.view.list ? (
              <Col key={`${blog.slug}-list`} md='9'>
                <CardListItem
                  date={blog.date}
                  title={blog.title}
                  author={blog.author}
                  subtitle={blog.subtitle}
                  link={{
                    href: 'blogs/[slug]',
                    as: `/blogs/${blog.slug}`,
                  }}
                />
              </Col>
            ) : (
              <Col key={blog.slug} md='4'>
                <CardItem
                  date={blog.date}
                  title={blog.title}
                  author={blog.author}
                  image={blog.coverImage}
                  subtitle={blog.subtitle}
                  link={{
                    href: 'blogs/[slug]',
                    as: `/blogs/${blog.slug}`,
                  }}
                />
              </Col>
            )
          )}
        </Row>
      )}
    </PageLayout>
  )
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 6 })

  return {
    props: {
      blogs,
    },
  }
}
