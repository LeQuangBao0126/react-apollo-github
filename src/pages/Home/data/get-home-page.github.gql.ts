import { gql } from "@apollo/client";

export default gql`
  query getHomePage ($owner : String! , $name : String! ){
    repository(owner: $owner, name: $name) {
      id
      watchers {
        totalCount
      }
      stargazerCount
      viewerHasStarred
      object(expression: "main:README.md") {
        ... on Blob {
          text
        }
      }
    }
  }
`;
