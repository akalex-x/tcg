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
                            height
                            width
                        }
                    }
                    desktopImage {
                        sourceUrl
                        mediaDetails {
                            height
                            width
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
                    ctaLink
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_CtaMarquee {
                    cta
                    ctaLink
                    text
                }
                ... on ${type}_FlexibleContent_Flexiblecontent_CenteredContent {
                    content
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

    console.log('the query is', query)

    return query;

} 