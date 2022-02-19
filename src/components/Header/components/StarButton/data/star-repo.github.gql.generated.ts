/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type StarRepoMutationVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;


export type StarRepoMutation = { addStar?: { starrable?: { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | { id: string, stargazerCount: number, viewerHasStarred: boolean } | null | undefined } | null | undefined };


export const StarRepoDocument = gql`
    mutation StarRepo($id: ID!) {
  addStar(input: {starrableId: $id}) {
    starrable {
      id
      stargazerCount
      viewerHasStarred
    }
  }
}
    ` as unknown as DocumentNode<StarRepoMutation, StarRepoMutationVariables>;