import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'
import Video from '../components/Video'

function MyApp({ Component, pageProps }) {
  return (

    <div className=" flex flex-col items-stretch justify-stretch max-w-full h-full ">
      <Navbar />
      <Video />
      <Component {...pageProps} />
      <Footer />
    </div>


  )



}

export default MyApp
