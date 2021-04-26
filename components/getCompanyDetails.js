import { gql } from '@apollo/client'

const getCompanyDetails = gql`
{
  company {
    ceo
    coo
    cto
    cto_propulsion
    employees
    founded
    founder
    headquarters {
      address
      city
      state
    }
    launch_sites
    links {
      elon_twitter
      flickr
      twitter
      website
    }
    name
    summary
    test_sites
    valuation
    vehicles
  }
}
`

export default getCompanyDetails
