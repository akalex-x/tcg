import {getLatestPosts} from 'fetch/posts'
import TitleBar from 'components/title-bar'
import PostArchive from 'components/journal/post-archive'

export default function Journal({latestPosts}){

    return(
        <>
            <TitleBar title="Journal" />
            <PostArchive posts={latestPosts}/>
        </>
    )

}

export async function getStaticProps(){

    const latestPosts = await getLatestPosts(100);
  
    return {
        props:{
          latestPosts: latestPosts,
          revalidate: 10,
        }
    };
  
  }