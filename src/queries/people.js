import { gql } from '@apollo/client';

export const QUERY_LATEST_PEOPLE = gql`
    query people($number: Int)  {
        allPeople(first: $number, where: {status: PUBLISH}) {
            nodes {
                title
                slug
                content
                featuredImage {
                    node {
                        sourceUrl
                        mediaDetails {
                            width
                            height
                            sizes {
                                width
                                sourceUrl
                                name
                                height
                            }
                        }
                    }
                }
                peopleSingle {
                    position
                    socials {
                        facebook
                        linkedin
                        twitter
                    }
                }
            }
        }
    }
`;