import { gql } from '@apollo/client'

const getDragons = () => {
    return gql`
{
    dragons  {
        id
        description
        }
    }
    `
}

export default getDragons

