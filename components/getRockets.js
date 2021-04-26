import { gql } from '@apollo/client'

const getRockets = gql`
{
  rockets(limit: 20) {
    name
    boosters
    company
    description
    diameter {
      meters
    }
    id
    type
    wikipedia
  }
}
`

export default getRockets
