import { getApolloClient } from 'lib/apollo-client';
import { QUERY_AUTHORS, QUERY_LATEST_POSTS,QUERY_POSTS_PATHS,QUERY_SINGLE_POST,QUERY_RELATED_POSTS,QUERY_MORE_POSTS,QUERY_POST_ARCHIVE,QUERY_POSTS_TOTAL } from 'queries/posts';

export async function getLatestPosts($limit,$cat,$author){
  
    const apolloClient = getApolloClient();
    
    let latestPosts = await apolloClient.query({
      query: QUERY_LATEST_POSTS,
      variables: {
        number:$limit,
        cat:$cat,
        author:$author
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

export async function getRelatedPosts(cat,postID,limit){
  
  const apolloClient = getApolloClient();
  
  let response = await apolloClient.query({
    query: QUERY_RELATED_POSTS,
    variables:{
      cat:cat,
      postID:postID,
      limit:limit,
    }
  })

  return response.data.posts.nodes;
}

export async function getMorePosts(postID,limit){
  
  const apolloClient = getApolloClient();
  
  let response = await apolloClient.query({
    query: QUERY_MORE_POSTS,
    variables:{
      postID:postID,
      limit:limit,
    }
  })

  return response.data.posts.nodes;

}

export async function getPostArchive(){
  
  const apolloClient = getApolloClient();
  
  let response = await apolloClient.query({
    query: QUERY_POST_ARCHIVE,
  })

  return response.data.page.blogArchive;

}

export async function getPostsTotal(){
  
  const apolloClient = getApolloClient();
  
  let response = await apolloClient.query({
    query: QUERY_POSTS_TOTAL,
  })

  return response.data.posts.pageInfo.total;

}

export async function getPostAuthors(){
  
  const apolloClient = getApolloClient();
  
  let response = await apolloClient.query({
    query: QUERY_AUTHORS,
  })

  return response.data.users.nodes;

}