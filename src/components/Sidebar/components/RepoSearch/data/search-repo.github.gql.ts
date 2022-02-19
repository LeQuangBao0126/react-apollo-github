import {gql } from '@apollo/client'
export default gql`
    query SearchRepo($query: String!) {
    search(type: REPOSITORY, query: $query, first: 10) {
      edges {
        textMatches {
          ...RepoSearchTextMatch
        }
        node {
          ... on Repository {
            id
            name
            nameWithOwner
          }
        }
      }
    }
  }
    fragment RepoSearchTextMatch on TextMatch {
        fragment
        property
        highlights {
        text
        beginIndice
        endIndice
        }
    }
`