import { Row, Col } from 'react-bootstrap'
import CardListItem from 'components/CardListItem'
import AuthorIntro from 'components/AuthorIntro'
import PageLayout from 'components/PageLayout'
import CardItem from 'components/CardItem'

export default function Home() {
  return (
    <PageLayout>
      <AuthorIntro />

      <hr />

      <Row className='mb-5'>
        <Col md='10'>
          <CardListItem />
        </Col>

        <Col md='4'>
          <CardItem />
        </Col>
      </Row>
    </PageLayout>
  )
}
