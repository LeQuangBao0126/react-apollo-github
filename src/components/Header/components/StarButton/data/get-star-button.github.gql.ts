import { gql } from "@apollo/client";

export default gql`
  query GetStarButton($owner: String!, $name: String!) {
    #update trong reactiveVar roi thi tự chạy lai cái query này và truyen tham số vô luôn
    currentRepo @client {
      owner @export(as: "owner")
      name @export(as: "name")
    }
    repository(name: $name, owner: $owner) {
      id
      stargazerCount
      viewerHasStarred
    }
  }
`
