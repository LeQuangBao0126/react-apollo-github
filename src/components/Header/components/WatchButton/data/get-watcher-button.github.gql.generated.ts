/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetWatcherButtonQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type GetWatcherButtonQuery = { repository?: { id: string, stargazerCount: number, viewerSubscription?: Types.SubscriptionState | null | undefined, watchers: { totalCount: number } } | null | undefined };


export const GetWatcherButtonDocument = gql`
    query GetWatcherButton($owner: String!, $name: String!) {
  repository(name: $name, owner: $owner) {
    id
    watchers {
      totalCount
    }
    stargazerCount
    viewerSubscription
  }
}
    ` as unknown as DocumentNode<GetWatcherButtonQuery, GetWatcherButtonQueryVariables>;