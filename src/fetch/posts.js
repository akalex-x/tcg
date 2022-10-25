import { getApolloClient } from 'lib/apollo-client';
import { QUERY_LATEST_POSTS,QUERY_POSTS_PATHS,QUERY_SINGLE_POST } from 'queries/posts';

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

export async function getPostPaths(limit){

  const apolloClient = getApolloClient();
    
  let paths = await apolloClient.query({
    query: QUERY_POSTS_PATHS,
    variables: {
      number:limit,
    },
  })

  return paths.data.posts.nodes;

}

export async function getPost(slug){
  
    const apolloClient = getApolloClient();
    
    let response = await apolloClient.query({
      query: QUERY_SINGLE_POST,
      variables:{
        slug:slug
      }
    })

    return response.data.post;

}