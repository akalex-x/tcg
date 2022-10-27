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

// query getLatestPosts($limit: Int, $postID: [ID]){
  //     posts(where: {notIn: $postID, status: PUBLISH}, first: $limit) {
  export const QUERY_RELATED_POSTS = gql`
    query getLatestPosts($cat: String, $limit: Int, $postID: [ID]){
    posts(where: {categoryName: $cat, notIn: $postID, status: PUBLISH}, first: $limit) {
        nodes {
          title
          slug
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

export const QUERY_MORE_POSTS = gql`
query getLatestPosts($limit: Int, $postID: [ID]){
    posts(where: {notIn: $postID, status: PUBLISH}, first: $limit) {
        nodes {
          title
          slug
          categories {
            nodes {
              slug
              name
            }
          }
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

export const QUERY_POSTS_PATHS = gql`
    query latestPort($number: Int) {
        posts(first: $number, where: {status: PUBLISH}) {
            nodes {
              slug
            }
        }
    }
`;

export const QUERY_SINGLE_POST = gql`
    query singleQuery($slug: ID!){
        post(id: $slug, idType: SLUG) {
          title
          slug
          content
          date
          id
          author {
            node {
              name
            }
          }
          categories {
            nodes {
              slug
              name
            }
          }
          featuredImage {
            node {
              sourceUrl
              mediaDetails {
                height
                width
              }
            }
          }
          next {
            title
            slug
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
          previous{
            title
            slug
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

// export const QUERY_ADJACENT_POSTS = gql`
//   query singleQuery($slug: ID!){
//     post(id: $slug, idType: SLUG) {
//       next {
//         title
//         slug
//         featuredImage {
//           node {
//             sourceUrl
//             mediaDetails {
//               height
//               width
//             }
//           }
//         }
//       }
//       previous{
//         title
//         slug
//         featuredImage {
//           node {
//             sourceUrl
//             mediaDetails {
//               height
//               width
//             }
//           }
//         }
//       }
//     }
//   }
// `;
