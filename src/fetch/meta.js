import { getApolloClient } from 'lib/apollo-client';
import { QUERY_META } from 'queries/meta';

export function getMetaData(type,slug){
  
    const apolloClient = getApolloClient();

    const getMeta = apolloClient.query({
      query: QUERY_META(type,slug),
    })

    return getMeta;

}
