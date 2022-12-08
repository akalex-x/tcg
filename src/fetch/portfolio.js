import { getApolloClient } from 'lib/apollo-client';
import { QUERY_PORTFOLIO, QUERY_PORTFOLIO_PATHS, QUERY_SINGLE_PORTFOLIO,QUERY_PORT_ARCHIVE_ACF } from 'queries/portfolio';

export async function getPort(limit){
  
    const apolloClient = getApolloClient();
    
    let latestPort = await apolloClient.query({
      query: QUERY_PORTFOLIO,
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

export async function getPortArchiveACF(){

  const apolloClient = getApolloClient();
    
  let res = await apolloClient.query({
    query: QUERY_PORT_ARCHIVE_ACF,
  })

  return res;

}