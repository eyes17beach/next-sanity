import { library } from '@fortawesome/fontawesome-svg-core'
import { faBorderAll, faList } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-svg-core/styles.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'highlight.js/styles/night-owl.css'
import 'styles/index.scss'

library.add(faList, faBorderAll)

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
