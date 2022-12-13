import { gql } from '@apollo/client';

export const QUERY_PORTFOLIO = gql`
    query latestPort($number: Int) {
        allPortfolio(first: $number, where:  {orderby: {field: TITLE, order: ASC},status: PUBLISH }) {
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
                portfolioSingle {
                    squareImage {
                        sourceUrl
                        mediaDetails {
                            height
                            width
                            sizes {
                                width
                                sourceUrl
                                height
                                name
                            }
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
                squareImage {
                    sourceUrl
                    mediaDetails {
                        height
                        width
                        sizes {
                            width
                            sourceUrl
                            height
                            name
                        }
                    }
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
                    featuredPortfolo {
                        ... on Portfolio {
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
                            portfolioSingle {
                                squareImage {
                                    sourceUrl
                                    mediaDetails {
                                        height
                                        width
                                        sizes {
                                            width
                                            sourceUrl
                                            height
                                            name
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
`;