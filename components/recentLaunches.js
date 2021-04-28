import { gql } from '@apollo/client'

const recentLaunches = gql`
{
  launchesPast(limit: 2) {
    id
    mission_name
    launch_date_local
    launch_site {
      site_name_long
    }
    links {
      article_link
      video_link
      mission_patch
    }
    rocket {
      rocket_name
    }
    ships {
      name
      home_port
      image
    }
  }
}
`

export default recentLaunches
