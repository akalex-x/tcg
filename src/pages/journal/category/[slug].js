import {getLatestPosts,getPostArchive,getPostsTotal} from 'fetch/posts'
import TitleBar from 'components/title-bar'
import PostArchive from 'components/journal/post-archive'
import PostFilters from 'components/journal/post-filters'

export default function Journal({latestPosts,cats,currentCat,postsTotal}){

    return(
        <>
            <TitleBar title="Journal" />
            <PostFilters cats={cats} currentCat={currentCat} postsTotal={postsTotal}/>
            <PostArchive posts={latestPosts} />
        </>
    )

}

export async function getStaticPaths(){

    const {blogArchive:cats} = await getPostArchive();

    const paths = []

    cats.featuredCategories.map((cat)=>{
        paths.push( {params:{slug:cat.slug}} )
    })

    return{
        paths: paths,
        fallback:'blocking'
    }

}

export async function getStaticProps(context){

    const {params} = context

    const latestPosts = await getLatestPosts(100,params.slug);

    const {blogArchive:{featuredCategories}} = await getPostArchive();

    const postsTotal = await getPostsTotal();

    return {
        props:{
          latestPosts: latestPosts,
          cats: featuredCategories,
          currentCat: params.slug,
          postsTotal:postsTotal,
          revalidate: 10,
        }
    };
  
  }