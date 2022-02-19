/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetHomePageQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type GetHomePageQuery = { repository?: { id: string, stargazerCount: number, viewerHasStarred: boolean, watchers: { totalCount: number }, object?: { text?: string | null | undefined } | {} | null | undefined } | null | undefined };


export const GetHomePageDocument = gql`
    query getHomePage($owner: String!, $name: String!) {
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
    ` as unknown as DocumentNode<GetHomePageQuery, GetHomePageQueryVariables>;