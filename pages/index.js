import Head from 'next/head'
import client from '../apollo-client'
import Image from 'next/image'
import recentLaunches from '../components/recentLaunches'
import Link from 'next/link'
import dynamic from 'next/dynamic'
const DynamicVideo = dynamic(import('../components/Video'), { ssr: false })
const DynamicYouTube = dynamic(
  () => import('../components/youtube/YouTube'),
  { loading: () => <p>...</p> ,
    ssr: false,  
  }
)
// const YOUTUBE_PLAYLIST_ITEMS_API = 'https://www.googleapis.com/youtube/v3/playlistItems';
// const PLAYLIST_ID = 'PLXhBGTh6SLZhaGfZigq0kIzdWdcSbJzVm'
export default function Home({ launches }) {

  const opts = {
    height: '100%',
    width: '100%',
    playerVars: {
      autoPlay: 1,
    }
  }

  return (
    <div className=" w-full min-h-screen">
      <Head>
        <title>Space X</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-col space-y-5 py-5 items-center w-full min-h-screen justify-center px-20 text-center" >

        <h1 className=" backdrop-filter backdrop-blur-sm backdrop-opacity-50 rounded-3xl bg-transparent  text-4xl md:text-6xl font-bold">
          S P A C E - X{' '}<div className="pt-5 text-red-600">L A U N C H E S</div>
        </h1>

        <p className=" backdrop-filter backdrop-blur-sm backdrop-opacity-75 h-min rounded-3xl bg-transparent mt-3 h-min flex items-center justify-center flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-2 space-x-0 text-2xl">
          <span className=" text-lg md:text-3xl text-gray-200">Latest satellite launch information from{' '}</span>
          <code className="p-2 font-bold text-sm md:text-lg bg-[#145DA0] rounded-md ">
            StarLink
          </code>
        </p>



          <div className=" w-full border-transparent border-red-400 mx-auto">
        <div className=" w-full md:max-w-7xl md:mx-auto md:min-w-5xl flex-wrap justify-center items-center flex-shrink-0 flex ">
            {launches.map((launch, i) => {
              const {
                // id,
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
                  rocket: {
                    id,
                  },
                  rocket_name,
                },
                ships
              } = launch;
              const splitUrl = video_link.split('/')
              const vId = splitUrl[splitUrl.length - 1]
              return (
                <div key={i}
                //  className="w-max h-max"
                className=" backdrop-filter backdrop-brightness-150 backdrop-blur-sm backdrop-opacity-75 shadow-md ease-in-out duration-500 transform scale-90 hover:scale-100 hover:shadow-3xl group flex flex-col items-center justify-center space-y-5 p-6 mt-6 text-left border w-auto md:w-96 rounded-xl hover:text-gray-200 focus:text-red-600"
                >
                  {/* <DynamicVideo url={video_link} /> */}
                  <DynamicYouTube id={video_link} videoId={vId} opts={opts} className="" />
                  {/* <a                    
                    href='#'
                    className="w-max h-max"
                    // className=" backdrop-filter backdrop-brightness-150 backdrop-blur-sm backdrop-opacity-75 shadow-md ease-in-out duration-500 transform scale-90 hover:scale-100 hover:shadow-3xl group flex flex-col items-center justify-center space-y-5 p-6 mt-6 text-left border w-auto md:w-96 rounded-xl hover:text-gray-200 focus:text-red-600"
                  > */}
                    <h3 className="text-2xl transform group-hover:ease-in-out duration-500 font-bold">{mission_name}</h3>
                    <h4><Link href={`/rockets/${id}`}><a className=" hover:text-blue-500 hover:bg-black">{rocket_name}</a></Link></h4>
                    <Image src={mission_patch ? mission_patch : 'https://images2.imgbox.com/d2/3b/bQaWiil0_o.png'} alt="hi" layout="fixed" height={60} width={60} />
                    <p className=" mt-4 text-xl ease-in-out transform duration-500 w-min relative group-hover:flex group-hover:font-mono ">
                      {new Date(launch_date_local).toLocaleDateString('en-US')}
                    </p>
                  {/* </a> */}
                </div>
              )
            })}
          </div>
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