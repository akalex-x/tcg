import {getLatestPosts,getPostArchive,getPostsTotal,getPostAuthors} from 'fetch/posts'
import TitleBar from 'components/title-bar'
import PostArchive from 'components/journal/post-archive'
import PostFilters from 'components/journal/post-filters'
import {useState,useEffect} from 'react'
import {useRouter} from 'next/router'
import Layout from 'components/layout'

import { getGlobalSettings } from 'fetch/settings';


export default function JournalCategory({latestPosts,cats,currentCat,postsTotal,authors,featuredQuote,gSettings}){

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
            <Layout gSettings={gSettings}>
                <TitleBar title="Journal" />
                <PostFilters cats={cats} currentCat={currentCat} postsTotal={postsTotal} authors={authors} onFilter={ (authorId) => filterByAuthor(authorId) } />
                <PostArchive posts={posts} featuredQuote={featuredQuote}/>
            </Layout>
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

    const gSettings = await getGlobalSettings();

    const {params} = context

    const latestPosts = await getLatestPosts(100, params.slug,null);

    const {blogArchive:{featuredCategories,featuredQuote}} = await getPostArchive();

    const postsTotal = await getPostsTotal();

    const authors = await getPostAuthors();

    return {
        props:{
          latestPosts: latestPosts,
          gSettings: gSettings,
          featuredQuote: featuredQuote,
          cats: featuredCategories,
          currentCat: params.slug,
          postsTotal:postsTotal,
          authors:authors,
          revalidate: 10,
          bodyClass: 'blog-archive'
        }
    };
  
  }