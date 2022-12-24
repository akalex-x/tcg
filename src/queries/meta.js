import { gql } from '@apollo/client';

export function QUERY_META(type,slug){
    
    let by = `${type.toLowerCase()}(id: "${slug}", idType: SLUG)`;

    if( type == 'Page' ){
      by = `page(id: "${slug}", idType: URI)`
    }

    if( type == 'posts' ){
      by = `page(idType: DATABASE_ID, id: "10")`
    }

    let query = ''

    if( !slug && type != 'posts' ){
        query = gql`
            query getMeta{
                seo {
                    contentTypes {
                        ${type}{
                            archive {
                                title
                                metaDesc
                            }
                        }
                    }
                }
            }
        `;
    }else{
        query = gql`
            query getMeta{
                ${by}{
                    seo {
                        title
                        metaDesc
                    }
                }
            }
        `;
    }

    // console.log('the query is', query)

    return query;

} 