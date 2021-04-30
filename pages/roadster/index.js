import Link from "next/link"
import Head from 'next/head'
import Image from "next/image"
import client from '../../apollo-client'
import getRoadsterData from '../../components/getRoadsterData';
const query = getRoadsterData;

export async function getStaticProps() {
    const { data: { roadster } } = await client.query({
      query,
    });
    return {
      props: {
        roadster,
      }
    }
  }


const roadster = ({ roadster }) => {
  return (
    <div className=" w-full min-h-screen md:max-w-7xl md:mx-auto">
      <Head>
        <title>{roadster.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" flex flex-col items-center justify-center max-w-7xl mt-16 space-y-5 md:space-y-10">
        <div className=" max-w-7xl text-center text-5xl md:text-7xl backdrop-filter backdrop-blur-sm backdrop-opacity-70">{roadster.name}</div>
        <p className=" backdrop-filter backdrop-blur-sm backdrop-opacity-70 w-10/12 leading-relaxed text-lg md:text-xl text-center font-semibold">{roadster.details}</p>
        <div className="responsive w-full px-4 py-5 flex flex-wrap gap-4 items-center justify-center slashed-zero">
          <div className=" rounded ring-4 ring-white">
            <Image height={'300px'} width={`300px`} layout="intrinsic" src={'/roadster1.jpeg'} />
          </div>
          <div className=" rounded ring-4 ring-white">
            <Image height={'300px'} width={`300px`} layout="intrinsic" src={'/roadster2.jpeg'} />
          </div>
          <div className=" rounded ring-4 ring-white">
            <Image height={'300px'} width={`300px`} layout="intrinsic" src={'/roadster3.jpeg'} />
          </div>
          <div className=" rounded ring-4 ring-white">
            <Image height={'300px'} width={`300px`} layout="intrinsic" src={'/roadster4.jpeg'} />
          </div>
        </div>
        <Link href="/">
          <a className=" text-3xl hover:text-4xl hover:animate-pulse w-max">Back Home</a>
        </Link>
      </div>
    </div>
  )
}

export default roadster;
