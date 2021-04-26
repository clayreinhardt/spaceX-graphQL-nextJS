import { gql } from '@apollo/client'

const getRecentStarlinkLaunches = gql`
{
  launchesPastResult(limit: 20, find: {mission_name: "Starlink"}) {
    data {
      details
      id
      launch_date_local
      launch_site {
        site_id
        site_name
        site_name_long
      }
      launch_success
      launch_year
      links {
        article_link
        flickr_images
        mission_patch
        mission_patch_small
        presskit
        reddit_campaign
        reddit_launch
        reddit_media
        reddit_recovery
        video_link
        wikipedia
      }
      mission_id
      mission_name
      telemetry {
        flight_club
      }
      upcoming
    }
    result {
      totalCount
    }
  }
}
`

export default getRecentStarlinkLaunches
