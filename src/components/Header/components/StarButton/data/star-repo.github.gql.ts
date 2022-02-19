import { gql } from "@apollo/client";
export default gql`
  mutation StarRepo($id: ID!) {
    addStar(input: { starrableId: $id }) {
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;
