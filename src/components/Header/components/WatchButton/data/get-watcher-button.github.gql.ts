import { gql } from '@apollo/client'

export default gql`
  query GetWatcherButton($owner: String!, $name: String!) {
    repository(name: $name, owner: $owner) {
      id
      watchers {
        totalCount
      }
      stargazerCount
      viewerSubscription
    }
  }
`
