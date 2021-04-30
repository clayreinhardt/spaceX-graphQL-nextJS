import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import client from '../../../apollo-client';
import getMissionById from '../../../components/getMissionById';
import getMissions from '../../../components/getMissions';

// const items = [
//   { id: 1 },
//   // More items...
// ]

// export default function Example() {
//   return (
//     <ul className="space-y-3">
//       {items.map((item) => (
//         <li key={item.id} className="bg-white shadow overflow-hidden px-4 py-4 sm:px-6 sm:rounded-md">
//           {/* Your content */}
//         </li>
//       ))}
//     </ul>
//   )

export async function getStaticProps({ params }) {
  const { missionId } = params;
  const query = getMissionById(missionId);
  const { data: mission } = await client.query({
    query,
  });
  // console.log('mission', mission)
  return {
    props: {
      mission,
    }
  }
}
/**
 * 
 * we need to 'build' all different route possibilities
 * if we had 'MISSION_1', 'MISSION_2', 'MISSION_3'
 * our missions/[missionId] page needs to have 
 *  a paths obj with this structure:
 *   const paths = [
 *    { params: { missionId: id }},
 *    { params: { missionId: id }},
 *    { params: { missionId: id }},
 * ]
 */
export async function getStaticPaths() {
  const { data: { missions } } = await client.query({
    query: getMissions
  })
  const paths = missions.map((mission) => {
    const { id } = mission;
    const juice = { params: { missionId: id } }
    return juice
  })
  return {
    paths,
    fallback: false,
  }
}

// export default function Home({ mission }) {

export default function Home({ mission }) {
  const router = useRouter()
  const { missionId } = router.query
  const newMission = mission.mission;
  // console.log('mission', newMission)
  return (
    <div className="flex flex-col items-start md:items-center mt-10 justify-start w-screen min-h-screen py-2 ">
      <Head>
        <title>{missionId}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" w-full leading-relaxed min-w-[300px] max-w-[800px] text-md sm:text-xl md:text-3xl xl:text-4xl ring-2 ring-white rounded-xl">
        <div className="flex justify-between px-4 md:px-10 pb-2 pt-4 md:pt-10 items-center w-full bg-black text-white">
          <span>Name</span><span>{ newMission.name}</span>
        </div>
        <div className="flex justify-between px-4 md:px-10 py-2 items-center w-full bg-black text-white">
          <span>Manufacturers</span><span>{ newMission.manufacturers[0] }</span>
        </div>
        <div className="flex justify-between px-4 md:px-10 py-2 items-center w-full bg-black text-white">
          <div>Payloads</div><div className=" text-white">{newMission.payloads.length}</div>
        </div>
        <div className="flex flex-col justify-evenly items-center w-full bg-black text-white">
          <div>Description</div><p className=" text-center leading-snug px-4 md:px-10 pb-10 pt-3 text-sm">{ newMission.description}</p>
        </div>
      </div>
    </div>
  )
}

// ONE MISSION OBJECT RESULT 
// {
//     "__typename": "Mission",
//     "id": "9D1B7E0",
//     "name": "Thaicom",
//     "description": "Thaicom is the name of a series of communications satellites operated from Thailand, and also the name of Thaicom Public Company Limited, which is the company that owns and operates the Thaicom satellite fleet and other telecommunication businesses in Thailand and throughout the Asia-Pacific region. The satellite projects were named Thaicom by the King of Thailand, His Majesty the King Bhumibol Adulyadej, as a symbol of the linkage between Thailand and modern communications technology.",
//     "manufacturers": [
//         "Orbital ATK"
//     ],
//     "payloads": [
//         {
//             "__typename": "Payload",
//             "id": "Thaicom 6",
//             "orbit": "GTO",
//             "orbit_params": {
//                 "__typename": "PayloadOrbitParams",
//                 "lifespan_years": 15,
//                 "longitude": 78.5
//             },
//             "payload_type": "Satellite",
//             "reused": false
//         },
//         {
//             "__typename": "Payload",
//             "id": "Thaicom 8",
//             "orbit": "GTO",
//             "orbit_params": {
//                 "__typename": "PayloadOrbitParams",
//                 "lifespan_years": 15,
//                 "longitude": 78.5
//             },
//             "payload_type": "Satellite",
//             "reused": false
//         }
//     ],
//     "twitter": "https://twitter.com/thaicomplc",
//     "website": "http://www.thaicom.net/en/satellites/overview",
//     "wikipedia": "https://en.wikipedia.org/wiki/Thaicom"
// }