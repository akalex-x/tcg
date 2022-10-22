import { gql } from '@apollo/client';

export const QUERY_LATEST_PORTFOLIO = gql`
    query latestPort($number: Int) {
        allPortfolio(first: $number, where: {status: PUBLISH}) {
            nodes {
                title
                slug
                portfolioId
                content
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

export const QUERY_PORTFOLIO_PATHS = gql`
    query latestPort($number: Int) {
        allPortfolio(first: $number, where: {status: PUBLISH}) {
            nodes {
              slug
            }
        }
    }
`;

export const QUERY_SINGLE_PORTFOLIO = gql`
    query singleQuery($slug: ID!){
        portfolio(id: $slug, idType: SLUG) {
            title
            slug
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
`;