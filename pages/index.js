import { useState } from 'react'
import { Row } from 'react-bootstrap'
import FilteringMenu from 'components/FilteringMenu'
import AuthorIntro from 'components/AuthorIntro'
import PageLayout from 'components/PageLayout'
import { getAllBlogs } from 'lib/api'
import { useGetBlogsPages } from 'actions/pagination'

export default function Home({ blogs }) {
  const [filter, setFilter] = useState({ view: { list: 0 } })

  const blogPages = useGetBlogsPages({ blogs, filter })

  const { pages, isLoadingMore, isReachingEnd, loadMore } = blogPages

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
      <Row className='mb-5'>{pages}</Row>
    </PageLayout>
  )
}

// This function is called during the build (build time)
// Provides props to your page
// It will create static page
export async function getStaticProps() {
  const blogs = await getAllBlogs({ offset: 0 })

  return {
    props: {
      blogs,
    },
  }
}
