import { gql } from '@apollo/client';

export const QUERY_LATEST_PORTFOLIO = gql`
    query latestPort($number: Int) {
        allPortfolio(first: $number, where: {status: PUBLISH}) {
            nodes {
                title
                slug
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
            portfolioSingle {
                introOverwrite
                socials {
                  twitter
                }
                website
                cta {
                  title
                  url
                }
                contacts {
                  name
                  position
                }
              }
        }
    }
`;

export const QUERY_PORT_ARCHIVE_ACF = gql`
    query getACF {
        portfolioAcfcptOptions {
            portfolio_acf {
                arhiveOptions {
                    introContent
                }
            }
        }
    }
`;