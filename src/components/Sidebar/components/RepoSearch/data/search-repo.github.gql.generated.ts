/* eslint-disable */

 // ⚠️⚠️⚠️⚠️⚠️
 // This file was automatically generated and should not be edited.
 // ⚠️⚠️⚠️⚠️⚠️

import * as Types from '../../../../../generated/github';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
import gql from 'graphql-tag';
export type SearchRepoQueryVariables = Types.Exact<{
  query: Types.Scalars['String'];
}>;


export type SearchRepoQuery = { search: { edges?: Array<{ textMatches?: Array<{ fragment: string, property: string, highlights: Array<{ text: string, beginIndice: number, endIndice: number }> } | null | undefined> | null | undefined, node?: { id: string, name: string, nameWithOwner: string } | {} | null | undefined } | null | undefined> | null | undefined } };

export type RepoSearchTextMatchFragment = { fragment: string, property: string, highlights: Array<{ text: string, beginIndice: number, endIndice: number }> };

export const RepoSearchTextMatchFragmentDoc = gql`
    fragment RepoSearchTextMatch on TextMatch {
  fragment
  property
  highlights {
    text
    beginIndice
    endIndice
  }
}
    ` as unknown as DocumentNode<RepoSearchTextMatchFragment, unknown>;
export const SearchRepoDocument = gql`
    query SearchRepo($query: String!) {
  search(type: REPOSITORY, query: $query, first: 10) {
    edges {
      textMatches {
        ...RepoSearchTextMatch
      }
      node {
        ... on Repository {
          id
          name
          nameWithOwner
        }
      }
    }
  }
}
    ${RepoSearchTextMatchFragmentDoc}` as unknown as DocumentNode<SearchRepoQuery, SearchRepoQueryVariables>;