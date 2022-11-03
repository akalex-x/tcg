import { getApolloClient } from 'lib/apollo-client';
import { QUERY_LATEST_PEOPLE } from 'queries/people';

export async function getLatestPeople(limit){
  
    const apolloClient = getApolloClient();
    
    let response = await apolloClient.query({
      query: QUERY_LATEST_PEOPLE,
      variables: {
        number:limit,
      },
    })

    return response.data.allPeople.nodes;

}