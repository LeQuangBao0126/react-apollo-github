/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetStarButtonQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type GetStarButtonQuery = { currentRepo: { owner: string, name: string }, repository?: { id: string, stargazerCount: number, viewerHasStarred: boolean } | null | undefined };


export const GetStarButtonDocument = gql`
    query GetStarButton($owner: String!, $name: String!) {
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
    ` as unknown as DocumentNode<GetStarButtonQuery, GetStarButtonQueryVariables>;