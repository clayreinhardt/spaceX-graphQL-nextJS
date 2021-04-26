import { gql } from '@apollo/client'

const getRocketById = (rocketId) => {
  return gql`
{
  rocket(id: "${rocketId}"){
    name
    active
    boosters
    company
    description
    engines {
      type
    }
    first_flight
    diameter {
      feet
    }
    height {
      feet
    }
    id
    mass {
      lb
    }
    type
    wikipedia
  }
}
`
}


export default getRocketById
