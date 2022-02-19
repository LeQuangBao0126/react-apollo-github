/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetUserQuery = { viewer: { login: string, avatarUrl: any } };


export const GetUserDocument = gql`
    query GetUser {
  viewer {
    login
    avatarUrl
  }
}
    ` as unknown as DocumentNode<GetUserQuery, GetUserQueryVariables>;