import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
// import client from '../../../apollo-client';
// import getRocketById from '../../../components/getRocketById';
// import getRockets from '../../../components/getRockets';

// export async function getStaticProps({ params }) {
//   const { rocketId } = params;
//   const query = getRocketById(rocketId);
//   const { data: rocket } = await client.query({
//     query,
//   });
//   return {
//     props: {
//       rocket,
//     }
//   }
// }

// export async function getStaticPaths() {
//   const { data: { rockets } } = await client.query({
//     query: getRockets
//   })
//   const paths = rockets.map((rocket) => {
//     const { id } = rocket;
//     const juice = { params: { rocketId: id } }
//     return juice
//   })
//   return {
//     paths,
//     fallback: false,
//   }
// }

export default function Home() {
  const router = useRouter()
  // const { rocketId } = router.query
  // const newRocket = rocket.rocket;
  return (
    <div className="flex flex-col items-start md:items-center justify-center w-screen min-h-screen py-2 ">
      Mission ID
    </div>
  )
}

