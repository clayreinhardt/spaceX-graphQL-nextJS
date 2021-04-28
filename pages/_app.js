import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Video from '../components/Video'

function MyApp({ Component, pageProps }) {
  return (

    <div>
      <Navbar />
      <Video />

      <Component {...pageProps} />
      <Footer />
    </div>


  )



}

export default MyApp
