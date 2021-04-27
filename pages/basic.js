import dynamic from 'next/dynamic'

const DynamicDashboard = dynamic(() => import('../components/tail/FullDash'), { ssr: false })

export async function getStaticProps() {  
  const response = await fetch(`${process.env.BASE_URL}/api/profileData`, {method:'get'});
  const responseQuestions = await fetch(`${process.env.BASE_URL}/api/questions`, {method:'get'});
  const responseTrending = await fetch(`${process.env.BASE_URL}/api/trendingPosts`, {method:'get'});
  const responseWhoToFollow = await fetch(`${process.env.BASE_URL}/api/whoToFollow`, {method:'get'});
  const profileData = await response.json()
  const questionsData = await responseQuestions.json()
  const trendingData = await responseTrending.json()
  const whoToFollowData = await responseWhoToFollow.json()

  

  return {
    props: {
      profileData,
      questionsData,
      trendingData,
      whoToFollowData,
    }
  }
}

export default function basic({ profileData, questionsData, trendingData, whoToFollowData }) {
  return (
    <DynamicDashboard profileData={profileData} questionsData={questionsData} trendingData={trendingData} whoToFollowData={whoToFollowData} />
  )
}

