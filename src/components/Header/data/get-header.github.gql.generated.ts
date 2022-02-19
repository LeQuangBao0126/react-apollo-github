/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type GetHeaderQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetHeaderQuery = { repository?: { id: string, viewerSubscription?: Types.SubscriptionState | null | undefined, stargazerCount: number, viewerHasStarred: boolean, watchers: { totalCount: number }, object?: { text?: string | null | undefined } | {} | null | undefined } | null | undefined };


export const GetHeaderDocument = gql`
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
    ` as unknown as DocumentNode<GetHeaderQuery, GetHeaderQueryVariables>;