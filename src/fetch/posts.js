import { getApolloClient } from 'lib/apollo-client';
import { QUERY_LATEST_POSTS } from 'queries/posts';

export async function getLatestPosts($limit){
  
    const apolloClient = getApolloClient();
    
    let latestPosts = await apolloClient.query({
      query: QUERY_LATEST_POSTS,
      variables: {
        number:$limit,
      },
    })

    return latestPosts.data.posts.nodes;

}

export async function getSinglePost(slug){
  
    const apolloClient = getApolloClient();
    
    let singlePort = await apolloClient.query({
      query: QUERY_SINGLE_PORTFOLIO,
      variables:{
        slug:slug
      }
    })

    return singlePort.data.portfolioBy;

}