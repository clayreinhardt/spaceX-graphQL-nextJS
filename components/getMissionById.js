import { gql } from '@apollo/client'

const getMissionById = (missionId) => {
  return gql`
{
  mission(id: ${missionId}){
    id
    name
    description
    manufacturers
    payloads {
      id
      manufacturer
      nationality
      customers
      orbit
      orbit_params {
        lifespan_years
        longitude
      }
      payload_mass_lbs
      payload_type
      reused
    }
    twitter
    website
    wikipedia
  }
}
`
}

export default getMissionById
