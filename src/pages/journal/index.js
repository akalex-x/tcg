import {getMetaData} from 'fetch/meta';

import {getLatestPosts,getPostArchive,getPostsTotal,getPostAuthors} from 'fetch/posts'
import TitleBar from 'components/title-bar'
import PostArchive from 'components/journal/post-archive'
import PostFilters from 'components/journal/post-filters'
import { useState } from 'react'
import Layout from 'components/layout'

import { getGlobalSettings } from 'fetch/settings';

export default function Journal({latestPosts,cats,currentCat,postsTotal,authors,gSettings}){

    const [posts,setPosts] = useState(latestPosts)

    const filterByAuthor = async (authorId) => {
        const data = await getLatestPosts(100, null,authorId);
        setPosts(data)
    }

    return(
        <>
            <Layout gSettings={gSettings}>
                <TitleBar title="Journal" />
                <PostFilters cats={cats} currentCat={currentCat} postsTotal={postsTotal} authors={authors} onFilter={ (authorId) => filterByAuthor(authorId) } />
                <PostArchive posts={posts}/>
            </Layout>
        </>
    )

}

export async function getStaticProps(){

    const gSettings = await getGlobalSettings();

    const getMeta = await getMetaData('posts');

    const latestPosts = await getLatestPosts(100, null,null);

    const postsTotal = await getPostsTotal();

    const {blogArchive:{featuredCategories}} = await getPostArchive();

    const authors = await getPostAuthors();

    return {
        props:{
          meta: getMeta,
          gSettings: gSettings,
          latestPosts: latestPosts,
          cats: featuredCategories,
          currentCat: null,
          postsTotal:postsTotal,
          authors:authors,
          revalidate: 10,
          bodyClass: 'blog-archive'
        }
    };
  
  }