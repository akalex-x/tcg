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
        }
      }
`;
