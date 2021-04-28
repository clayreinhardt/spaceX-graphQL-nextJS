import Head from 'next/head'
import Link from 'next/link'
import client from '../../apollo-client'
import getRockets from '../../components/getRockets';
const query = getRockets;

export async function getStaticProps() {
  const { data: { rockets } } = await client.query({
    query,
  });
  return {
    props: {
      rockets,
    },
    revalidate: 1
  }
}


export default function Home({ rockets }) {


  // testing if the rockets are coming through

  return (
    <div className="flex flex-col items-start md:items-center justify-center w-screen min-h-screen py-2 ">
      <Head>
        <title>SpaceX Rockets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" flex flex-wrap my-4 gap-y-4 md:gap-x-4 bg-transparent space-y-0 py-5 items-center w-full justify-center flex-1 px-20 text-center">
        {rockets.map((rocket) => {
          return (
            <div key={rocket.id} className=" backdrop-filter backdrop-blur-sm shadow-md ease-in-out duration-500 transform scale-95 hover:scale-100 hover:shadow-3xl w-96 h-auto bg-transparent ring-2 rounded-xl items-evenly flex flex-col justify-evenly">
              <div className=" w-full justify-between items-center p-2">
                <span className=" block text-xl font-bold">Rocket Name</span>
                <span>{rocket.name}</span>
              </div>
              <div className=" w-full flex justify-between items-center p-2">
                <span className=" block text-xl font-bold">Rocket ID</span>
                <span>{rocket.id}</span>
              </div>
              <div className=" w-full flex justify-between items-center p-2">
                <span className=" block text-xl font-bold">Company</span>
                <span>{rocket.company}</span>
              </div>
              <div className=" w-full flex justify-between items-center p-2">
                <span className=" block text-xl font-bold">Boosters</span>
                <span>{rocket.boosters}</span>
              </div>
              <div className=" w-full flex justify-between items-center p-2">
                <span className=" block text-xl font-bold">Diameter</span>
                <span>{rocket.diameter.meters}</span>
              </div>
              <div className=" w-full flex min-h-[250px] h-auto flex-col justify-around items-center p-2">
                <span className=" block text-xl font-bold">Description</span>
                <p className=" flex justify-center items-center">{rocket.description}</p>
              </div>
              <div className=" py-4 px-2">
                <span className=" block text-xl font-bold">More Rocket Info</span>
                <Link href={`/rockets/${rocket.id}`} >
                  <button className=" outline-none focus:outline-none text-white bg-gray-600 text-sm transform hover:pulse hover:scale-110 rounded-lg px-4 py-3">{rocket.name}</button>
                </Link>
              </div>
            </div>
          )
        })}
      </main>


    </div>
  )
}

