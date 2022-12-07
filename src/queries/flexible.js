import { gql } from '@apollo/client';

function QUERY_FLEXIBLE_LAYOUTS(type){
    const typeQuery = `
        flexible_content {
            flexiblecontent {
                ... on ${type}_FlexibleContent_Flexiblecontent_HeroImages {
                    fieldGroupName
                    mobileImage {
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
                    desktopImage {
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
                ... on ${type}_FlexibleContent_Flexiblecontent_LatestPortfolios {
                    fieldGroupName
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_LatestJournal {
                    fieldGroupName
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_FiftyFiftyParallax {
                    content
                    cta
                    ctaLink
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_CenteredContent {
                    content
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_Quote {
                    blurb
                    cite
                    quote
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_VideoWithContent {
                    title
                    content
                    video {
                        mediaItemUrl
                    }
                    meta {
                        label
                    }
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_GalleryWithContent {
                    heading
                    link
                    mobileCta
                    cta
                    slides {
                      content
                      image {
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
                ... on ${type}_FlexibleContent_Flexiblecontent_TwitterMarquee {
                    content
                    twitterCta
                    twitterLink
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_PeopleSection {
                    content
                    cta
                    ctaLink
                    people {
                        name
                        image {
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
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_LargeContentBoxes {
                    boxes {
                        content
                    }
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_SplitContent {
                    content
                    heading
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_PeopleInfo {
                    fieldGroupName
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_FiftyFifty {
                    content
                    ctaLink
                    image {
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
                ... on ${type}_FlexibleContent_Flexiblecontent_ContentWithList {
                    content
                    list {
                        text
                    }
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_ParallaxBubble {
                    fieldGroupName
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_ParallaxBubble2 {
                    fieldGroupName
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_ContentSpotify {
                    fieldGroupName
                    graphic {
                        fieldGroupName
                        preheading
                        image {
                            sourceUrl
                            mediaDetails {
                                height
                                width
                                sizes {
                                    width
                                    sourceUrl
                                    name
                                    height
                                }
                            }
                        }
                    }
                    contentGroup {
                        preheading
                        text
                        ctaLink
                        cta
                    }
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_ContentBlocksHeading {
                    heading
                    blocks {
                      heading
                      content
                    }
                }
            }
        }
    `;
    return typeQuery;
}

export function QUERY_FLEXIBLE_CONTENT(type,slug){
    
    let by = `${type.toLowerCase()}(id: "${slug}", idType: SLUG)`;

    if( type == 'Page' ){
      by = `page(id: "${slug}", idType: URI)`
    }

    const flexQuery = QUERY_FLEXIBLE_LAYOUTS(type);

    let query = ''

    if( type == 'PortfolioAcfcptOptions' ){
        query = gql`
            query getLayouts{
                ${type[0].toLowerCase() + type.slice(1)}{
                    ${flexQuery}
                }
            }
        `;
    }else{
        query = gql`
            query getLayouts{
                ${by}{
                    title
                    ${flexQuery}
                }
            }
        `;
    }

    // console.log('the query is', query)

    return query;

} 