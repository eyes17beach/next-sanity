import Head from 'next/head'
import { Container } from 'react-bootstrap'
import CustomNavbar from 'components/Navbar'

function Content(props) {
  const { children, className } = props

  return (
    <div className={`page-wrapper ${className}`}>
      {children}
    </div>
  )
}

function Footer() {
  return (
    <footer className='page-footer'>
      <div>
        <a href='#'>Courses</a>
        {' | '}
        <a href='#'>Github</a>
        {' | '}
        <a href='#'>Facebook</a>
      </div>
    </footer>
  )
}

function PageLayout(props) {
  const { children, className } = props

  return (
    <>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito:wght@400;700;900&display=swap'
          rel='stylesheet'
        />
      </Head>
      <Container>
        <CustomNavbar />
        <Content className={className}>{children}</Content>
        <Footer />
      </Container>
    </>
  )
}

export default PageLayout
