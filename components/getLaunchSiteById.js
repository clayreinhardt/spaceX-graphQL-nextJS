import { gql } from '@apollo/client'

const getLaunchSiteById = (launchSiteId) => {
  return gql`
{
  launchpad(id: ${launchSiteId}) {
    id
    name
    status
    location {
      name
      region
      latitude
      longitude
    }
    details
    successful_launches
    vehicles_launched {
      id
      name
      company
      country
      cost_per_launch
      description
      diameter {
        feet
      }
      height {
        feet
      }
      mass {
        lb
      }
      type
      wikipedia
    }
  }
}
`
}


export default getLaunchSiteById
