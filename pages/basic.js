import BannerWithImage from '../components/tail/BannerWithImage'
import BasicNav from '../components/tail/BasicNav'
import CardAvatarStats from '../components/tail/CardAvatarStats'
import DashboardSidebar from '../components/tail/DashboardSidebar'
import FullDash from '../components/tail/FullDash'
import GridList from '../components/tail/GridList'

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

const basic = ({ profileData, questionsData, trendingData, whoToFollowData }) => {
  return (
    // <BasicNav />
    // <DashboardSidebar />
    // <BannerWithImage />
    // <CardAvatarStats />
    // <GridList />
    <FullDash profileData={profileData} questionsData={questionsData} trendingData={trendingData} whoToFollowData={whoToFollowData} />
  )
}

export default basic
