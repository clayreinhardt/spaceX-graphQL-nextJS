import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import client from '../../../apollo-client';
import getRocketById from '../../../components/getRocketById';
import getRockets from '../../../components/getRockets';

export async function getStaticProps({ params }) {
  const { rocketId } = params;
  const query = getRocketById(rocketId);
  const { data: rocket } = await client.query({
    query,
  });
  return {
    props: {
      rocket,
    }
  }
}

export async function getStaticPaths() {
  const { data: { rockets } } = await client.query({
    query: getRockets
  })
  const paths = rockets.map((rocket) => {
    const { id } = rocket;
    const juice = { params: { rocketId: id } }
    return juice
  })
  return {
    paths,
    fallback: false,
  }
}

export default function Home({ rocket }) {
  const router = useRouter()
  const { rocketId } = router.query
  const newRocket = rocket.rocket;
  return (
    <div className="flex flex-col items-start md:items-center justify-center w-screen min-h-screen py-2 ">
      <Head>
        <title>SpaceX Rocket: {rocketId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex text-gray-900 flex-wrap space-y-0 py-5 items-center w-full justify-center flex-1 px-20 text-center">
        <div className=" bg-gray-200 rounded lg:rounded-xl max-w-lg" >
          <div className=" bg-gradient-to-r from-gray-400 bg-contain rounded-t-sm lg:rounded-t-lg via-transparent to-gray-400 lg:px-10 lg:py-4 flex items-center justify-between px-2 py-1 text-2xl text-blue-600 uppercase font-extrabold " >
            <span className="">{newRocket.name}</span>
            {newRocket.active ? (
              <span className=" text-xl font-semibold uppercase font-mono text-green-500 ">Active</span>
            ) : (
              <span className=" text-xl font-semibold uppercase font-mono line-through text-red-500 ">Active</span>
            )}
          </div>
          <div className=" lg:mx-4 lg:py-4 flex items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" text-lg font-bold ">Boosters</span>
            <span className=" text-lg font-bold ">{newRocket.boosters}</span>
          </div>
          <div className=" lg:mx-4 lg:py-4 flex items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" text-lg font-bold ">Company</span>
            <Link href="/company">
              <a className=" bg-transparent text-gray-800 text-lg font-bold ">{newRocket.company}</a>
            </Link>
          </div>
          <div className=" lg:mx-4 lg:py-4 flex items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" text-lg font-bold ">Diameter</span>
            <span className=" text-lg font-bold ">{newRocket.diameter.feet}<small>ft</small></span>
          </div>
          <div className=" lg:mx-4 lg:py-4 flex items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" text-lg font-bold ">Height</span>
            <span className=" text-lg font-bold ">{newRocket.height.feet}<small>ft</small></span>
          </div>
          <div className=" lg:mx-4 lg:py-4 flex items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" text-lg font-bold ">Mass</span>
            <span className=" text-lg font-bold ">{newRocket.mass.lb}<small>lbs</small></span>
          </div>
          <div className=" lg:mx-4 lg:py-4 flex items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" text-lg font-bold ">Engines</span>
            <span className=" text-lg font-bold italic ">{newRocket.engines.type}</span>
          </div>
          <div className=" lg:mx-4 lg:py-4 flex items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" block text-lg font-bold ">First Flight</span>
            <span className=" text-lg font-bold italic ">{newRocket.first_flight.slice(2)}</span>
          </div>
          <div className=" lg:mx-4 lg:py-4 flex flex-col items-center justify-between px-2 py-1 border-b-2 border-gray-400 " >
            <span className=" text-lg font-bold self-center pt-2 ">Description</span>
            <p className=" px-2 my-2 bg-transparent text-gray-800 text-sm leading-snug font-bold ">{newRocket.description}</p>
          </div>
          <div className=" lg:justify-around my-3 flex items-center justify-evenly">
            <Link href={newRocket.wikipedia}>
              <a className=" px-3 py-1 rounded hover:bg-gray-300 ease-in-out delay-100 hover:text-gray-800 transform hover:scale-105">Wiki</a>
            </Link>
            <Link href="/rockets">
              <a className=" px-3 py-1 rounded hover:bg-gray-300 ease-in-out delay-100 hover:text-gray-800 transform hover:scale-105">Back</a>
            </Link>
          </div>
        </div>
      </main>


    </div>
  )
}

