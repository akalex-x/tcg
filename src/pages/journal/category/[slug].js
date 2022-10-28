import {getLatestPosts,getPostArchive,getPostsTotal,getPostAuthors} from 'fetch/posts'
import TitleBar from 'components/title-bar'
import PostArchive from 'components/journal/post-archive'
import PostFilters from 'components/journal/post-filters'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'

export default function Journal({latestPosts,cats,currentCat,postsTotal,authors}){

    const [posts,setPosts] = useState(latestPosts)

    const filterByAuthor = async (authorId) => {
        const data = await getLatestPosts(100, currentCat,authorId);
        setPosts(data)
    }

    const dynamicRoute = useRouter().asPath
    useEffect(() => {
        setPosts(latestPosts)
    }, [dynamicRoute])

    return(
        <>
            <TitleBar title="Journal" />
            <PostFilters cats={cats} currentCat={currentCat} postsTotal={postsTotal} authors={authors} onFilter={ (authorId) => filterByAuthor(authorId) } />
            <PostArchive posts={posts} />
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

    const latestPosts = await getLatestPosts(100, params.slug,null);

    const {blogArchive:{featuredCategories}} = await getPostArchive();

    const postsTotal = await getPostsTotal();

    const authors = await getPostAuthors();

    return {
        props:{
          latestPosts: latestPosts,
          cats: featuredCategories,
          currentCat: params.slug,
          postsTotal:postsTotal,
          authors:authors,
          revalidate: 10,
        }
    };
  
  }