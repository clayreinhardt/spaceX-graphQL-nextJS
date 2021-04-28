import Head from 'next/head'
import client from '../apollo-client'
import Image from 'next/image'
import recentLaunches from '../components/recentLaunches'
import Video from '../components/Video'

export default function Home({ launches }) {

  return (
    <div>
      <Head>
        <title>Space X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col space-y-5 py-5 items-center w-full min-h-screen justify-center px-20 text-center" >

        <h1 className=" backdrop-filter backdrop-blur-sm backdrop-opacity-75 rounded-xl bg-transparent  text-4xl md:text-6xl font-bold">
          S P A C E - X{' '}<div className="pt-5 text-red-600">L A U N C H E S</div>
        </h1>

        <p className=" backdrop-filter backdrop-blur-sm backdrop-opacity-50 rounded-xl bg-transparent mt-3 h-min flex items-center justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 space-x-0 text-2xl">
          <div className=" text-lg md:text-3xl text-gray-200">Latest satellite launch information from{' '}</div>
          <code className="p-2 font-bold text-sm md:text-lg bg-[#145DA0] rounded-md ">
            StarLink
          </code>
        </p>



        <div className=" w-full flex-wrap justify-center items-center flex-shrink-0 flex ">
        {/* <div className="flex flex-wrap border border-none max-w-7xl items-center w-screen justify-evenly mt-6 "> */}
          {launches.map((launch) => {
            const {
              id,
              launch_date_local,
              launch_site: {
                site_name_long,
              },
              links: {
                article_link = null,
                mission_patch,
                video_link,
              },
              mission_name,
              rocket: {
                rocket_name,
              },
              ships
            } = launch;

            return (
              <a
                key={id}
                href={video_link}
                className=" backdrop-filter backdrop-blur-sm backdrop-opacity-75 shadow-md ease-in-out duration-500 transform scale-90 hover:scale-100 hover:shadow-3xl group flex flex-col items-center justify-center space-y-5 p-6 mt-6 text-left border w-96 rounded-xl hover:text-gray-200 focus:text-red-600"
              >
                <h3 className="text-2xl transform group-hover:ease-in-out duration-500 font-bold">{mission_name}</h3>
                <Image src={mission_patch ? mission_patch : 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png'} alt="hi" layout="fixed" height={60} width={60} />
                <p className=" mt-4 text-xl ease-in-out transform duration-500 w-min relative group-hover:flex group-hover:font-mono ">
                  {new Date(launch_date_local).toLocaleDateString('en-US')}
                </p>
              </a>
            )
          })}
        </div>
      </main>










    </div >
  )
}

export async function getStaticProps() {
  const query = recentLaunches;

  const { data: { launchesPast } } = await client.query({
    query,
  });

  return {
    props: {
      launches: launchesPast,
    }
  }
}