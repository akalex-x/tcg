import { getApolloClient } from 'lib/apollo-client';
import { QUERY_FLEXIBLE_CONTENT } from 'queries/flexible';

export function getFlexibleContent(type,slug){
  
    const apolloClient = getApolloClient();

    const getFlexible = apolloClient.query({
      query: QUERY_FLEXIBLE_CONTENT(type,slug),
    })

    return getFlexible;

}
