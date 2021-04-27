import dynamic from 'next/dynamic'

const DynamicDashboard = dynamic(() => import('../components/tail/FullDash'))

export async function getStaticProps() {
  
  const response = await fetch('http://localhost:3000/api/profileData', {method:'get'});
  const responseQuestions = await fetch('http://localhost:3000/api/questions', {method:'get'});
  const responseTrending = await fetch('http://localhost:3000/api/trendingPosts', {method:'get'});
  const responseWhoToFollow = await fetch('http://localhost:3000/api/whoToFollow', {method:'get'});
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

