import { getApolloClient } from 'lib/apollo-client';
import { QUERY_GLOBAL_SETTINGS } from 'queries/settings';

export function getGlobalSettings(){
  
    const apolloClient = getApolloClient();

    const getSettings = apolloClient.query({
      query: QUERY_GLOBAL_SETTINGS,
    })

    return getSettings;

}
