import { gql } from '@apollo/client'

const getLaunchesUpcoming = () => {
  return gql`
{
  launchesUpcoming(limit: 20){
    id
    details
    is_tentative
    launch_date_local
    launch_date_utc
    launch_date_unix
    launch_site {
      site_id
      site_name
      site_name_long
    }
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
    rocket {
      rocket_name
    }
  }
}
`
}

export default getLaunchesUpcoming
