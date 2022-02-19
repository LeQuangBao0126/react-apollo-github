import {  gql } from "@apollo/client";
import { request } from 'graphql-request'
import { GetUserQuery,GetUserQueryVariables ,GetUserDocument } from './userDataQuery.github.gql.generated'
const query = gql`
    query GetUser {
      viewer {
        login
        avatarUrl
      }
    }
`;

const getData = (variables : GetUserQueryVariables ) : Promise<GetUserQuery>=>{
  return  request('https://api.github.com/graphql' , query )
}
export default getData ;