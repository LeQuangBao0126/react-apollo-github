import { gql } from "@apollo/client";

export default gql`
  query getHeader {
    repository(name: "react-router", owner: "remix-run") {
        id
        viewerSubscription
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
