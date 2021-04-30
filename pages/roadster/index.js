import Link from "next/link"
import Head from 'next/head'
const roadster = () => {
  const array = [1,2,-5,9,8,-5,9,-3,9,3,2,1,1,-8]
  const one = array[0]
  const sum = array.reduce((sum, value) => (sum + value))
  console.log('sum', sum)

  return (
    <div className=" w-full min-h-screen md:max-w-7xl md:mx-auto">
      <Head>
        <title>Roadster</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col items-center justify-center">
        <div className=" text-6xl md:text-9xl w-min h-min bg-gradient-to-tr from-transparent backdrop-filter backdrop-blur-1 backdrop-saturate-100 backdrop-brightness-50 via-white text-black rounded-xl mx-auto mt-20 flex items-center justify-center  ">
          Roadster
        </div>
        <Link href="/">
          <a className=" w-max">Back Home</a>
        </Link>
      </div>
    </div>
  )
}

export default roadster