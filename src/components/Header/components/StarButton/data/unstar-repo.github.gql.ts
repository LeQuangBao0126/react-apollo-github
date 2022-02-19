import { gql } from "@apollo/client";
export default gql`
  mutation UnStarRepo($id: ID!) {
    removeStar(input: { starrableId: $id }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;
