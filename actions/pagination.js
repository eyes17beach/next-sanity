import { useSWRPages } from 'swr'
import { useGetBlogs } from 'actions'
import { Row, Col } from 'react-bootstrap'
import CardItem from 'components/CardItem'
import CardListItem from 'components/CardListItem'

export function useGetBlogsPages({ blogs: intitialData, filter }) {
  return useSWRPages(
    'index-page',
    ({ offset, withSWR }) => {
      const { data: blogs } = withSWR(useGetBlogs(intitialData))

      return !blogs ? (
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
      )
    },
    // Compute the offset that will get passed into the previous callback function with 'withSWR'
    // For 'SWR', this is the data you will get from 'withSWR' function
    // For 'index', this is the number of current page
    (SWR, index) => {
      return 0
    },
    [filter]
  )
}
