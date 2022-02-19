/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type UnStarRepoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type UnStarRepoMutation = { removeStar?: { starrable?: { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | null | undefined } | null | undefined };


export const UnStarRepoDocument = gql`
    mutation UnStarRepo($id: ID!) {
  removeStar(input: {starrableId: $id}) {
    starrable {
      id
      stargazerCount
      viewerHasStarred
    }
  }
}
    ` as unknown as DocumentNode<UnStarRepoMutation, UnStarRepoMutationVariables>;