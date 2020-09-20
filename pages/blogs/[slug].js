import { useRouter } from 'next/router'
import PageLayout from 'components/PageLayout'

function BlogDetail() {
  const { query } = useRouter()
  debugger

  return (
    <PageLayout>
      <h1>Welcome to blog detail page - {query?.slug}</h1>
    </PageLayout>
  )
}

export default BlogDetail
