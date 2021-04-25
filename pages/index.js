import Head from 'next/head'
import client from '../apollo-client'
import Image from 'next/image'
import recentLaunches from '../components/recentLaunches'
export default function Home({ launches }) {
  return (
    <div className="flex flex-col items-start md:items-center justify-center w-screen min-h-screen py-2 ">
      <Head>
        <title>Space X Clay Reinhardt</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col space-y-5 py-5 items-center w-full justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          SpaceX{' '}<div className=" transform animate-bounce pt-5 font-mono text-red-600">Launches</div>
        </h1>

        <p className="mt-3 flex items-center justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 space-x-0 text-2xl">
          <div className="text-gray-200">Latest launches from{' '}</div>
          <code className="p-2 font-bold text-lg bg-gray-200 rounded-md">
            SpaceX
          </code>
        </p>

        <div className="flex flex-wrap border border-none max-w-7xl items-center w-screen justify-evenly mt-6 ">
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
                className=" shadow-md ease-in-out duration-500 transform scale-90 hover:scale-100 hover:shadow-3xl group flex flex-col items-center justify-center space-y-5 p-6 mt-6 text-left border w-96 rounded-xl hover:text-gray-200 focus:text-red-600"
              >
                <h3 className="text-2xl transform group-hover:ease-in-out duration-500 font-bold">{mission_name}</h3>
                <Image src={mission_patch ? mission_patch : 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png'} alt="hi" layout="fixed" height={60} width={60}/>
                <p className=" mt-4 text-xl ease-in-out transform duration-500 w-min relative group-hover:flex group-hover:font-mono ">
                  { new Date(launch_date_local).toLocaleDateString('en-US') }
                </p>
              </a>
            )
          })}
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <div
          className="flex items-center justify-center"
          href="https://clayreinhardt.com"
          target="_blank"
          rel="noopener"
        >
          Powered by Clay Reinhardt
        </div>
      </footer>
    </div>
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