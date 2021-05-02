import '../styles/globals.css'
import { Navbar } from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (

    <div className=" flex flex-col items-stretch justify-stretch max-w-full h-full ">
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </div>


  )



}

export default MyApp
