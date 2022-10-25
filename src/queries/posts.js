import { gql } from '@apollo/client';

export const QUERY_LATEST_POSTS = gql`
    query getLatestPosts($number: Int){
    posts(first: $number, where: {status: PUBLISH}) {
      nodes {
        title
        slug
        excerpt
        content
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
        }
      }
    }
  }
`;