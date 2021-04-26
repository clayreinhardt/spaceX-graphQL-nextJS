import { gql } from '@apollo/client'

const getMissions = () => {
  return gql`
{
  missions(limit: 40) {
    id
    name
    description
    manufacturers
    payloads {
      id
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

export default getMissions
