import { gql } from '@apollo/client'
const getMissions = gql`
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
      payload_type
      reused
    }
    twitter
    website
    wikipedia
   }
}
`

export default getMissions

/**
 * 
 * you can change the query data here test it 
 * out on the SXAPI and paste paste it back 
 * in the qql function
 */
