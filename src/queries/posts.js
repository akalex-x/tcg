import { gql } from '@apollo/client';

export const QUERY_LATEST_POSTS = gql`
    query getLatestPosts($number: Int, $cat: String, $author: Int){
    posts(first: $number, where: {status: PUBLISH, categoryName: $cat, author: $author}) {
      nodes {
        title
        slug
        excerpt
        content
        date
        categories {
          nodes {
            slug
            name
          }
        }
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
            mediaDetails {
              width
              height
              sizes {
                width
                height
                name
                sourceUrl
              }
            }
          }
        }
      }
    }
  }
`;


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
                  width
                  height
                  sizes {
                    width
                    height
                    name
                    sourceUrl
                  }
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
                  width
                  height
                  sizes {
                    width
                    height
                    name
                    sourceUrl
                  }
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
          postSingle {
            singlePostAcf {
              excerpt
              subtitle
            }
          }
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
              caption
              mediaDetails {
                width
                height
                sizes {
                  width
                  height
                  name
                  sourceUrl
                }
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
                  width
                  height
                  sizes {
                    width
                    height
                    name
                    sourceUrl
                  }
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
                  width
                  height
                  sizes {
                    width
                    height
                    name
                    sourceUrl
                  }
                }
              }
            }
          }
        }
      }
`;

export const QUERY_POST_ARCHIVE = gql`
  query getLayouts {
    page(idType: DATABASE_ID, id: "10") {
      blogArchive {
        blogArchive {
          featuredQuote {
            quote
            cite
          }
          featuredCategories {
            slug
            name
            posts {
              pageInfo {
                total
              }
            }
          }
        }
      }
    }
  }
`;

export const QUERY_POSTS_TOTAL = gql`
  query getLayouts {
    posts(where: {status: PUBLISH}) {
      pageInfo {
        total
      }
    }
  }
`;

export const QUERY_AUTHORS = gql`
  query getLayouts {
    users(where: {hasPublishedPosts: POST}) {
      nodes {
        name
        userId
        posts {
          nodes {
            categories {
              nodes {
                slug
              }
            }
          }
        }
      }
    }
  }
`;
