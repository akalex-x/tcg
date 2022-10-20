import { getApolloClient } from 'lib/apollo-client';
import { QUERY_LATEST_PORTFOLIO, QUERY_PORTFOLIO_PATHS, QUERY_SINGLE_PORTFOLIO } from 'queries/portfolio';

export async function getLatestPort(limit){
  
    const apolloClient = getApolloClient();
    
    let latestPort = await apolloClient.query({
      query: QUERY_LATEST_PORTFOLIO,
      variables: {
        number:limit,
      },
    })

    return latestPort.data.allPortfolio.nodes;

}

export async function getPortfolioPaths(limit){

  const apolloClient = getApolloClient();
    
  let paths = await apolloClient.query({
    query: QUERY_PORTFOLIO_PATHS,
    variables: {
      number:limit,
    },
  })

  return paths.data.allPortfolio.nodes;

}

export async function getPortfolio(slug){
  
    const apolloClient = getApolloClient();
    
    let singlePort = await apolloClient.query({
      query: QUERY_SINGLE_PORTFOLIO,
      variables:{
        slug:slug
      }
    })

    return singlePort.data.portfolio;

}