import {getLatestPosts,getPostArchive,getPostsTotal} from 'fetch/posts'
import TitleBar from 'components/title-bar'
import PostArchive from 'components/journal/post-archive'
import PostFilters from 'components/journal/post-filters'

export default function Journal({latestPosts,cats,currentCat,postsTotal}){

    return(
        <>
            <TitleBar title="Journal" />
            <PostFilters cats={cats} currentCat={currentCat} postsTotal={postsTotal} />
            <PostArchive posts={latestPosts}/>
        </>
    )

}

export async function getStaticProps(){

    const latestPosts = await getLatestPosts(100, null);

    const postsTotal = await getPostsTotal();

    const {blogArchive:{featuredCategories}} = await getPostArchive();

    return {
        props:{
          latestPosts: latestPosts,
          cats: featuredCategories,
          currentCat: null,
          postsTotal:postsTotal,
          revalidate: 10,
        }
    };
  
  }