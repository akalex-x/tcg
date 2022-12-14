import {getMetaData} from 'fetch/meta';

import {getPostPaths,getPost,getRelatedPosts,getMorePosts} from 'fetch/posts'
import Article from 'components/journal/article'
import RelatedArticles from 'components/journal/retlated-articles'
import MoreArticles from 'components/journal/more-articles'
import ArticleBreadcrumbs from 'components/journal/breadcrumbs'

import styles from './journal.module.scss'

import Layout from 'components/layout'

import { getGlobalSettings } from 'fetch/settings';


export default function SingleJournal({post,related,morePosts,adjacentPosts,gSettings}) {
  return (
    <>
        <Layout gSettings={gSettings}>
            <div className={styles.journal}>
                <ArticleBreadcrumbs post={post} />
                <div className="container">
                    <Article post={post} adjacentPosts={adjacentPosts} />
                    <aside>
                        <RelatedArticles posts={related}/>
                        <MoreArticles posts={morePosts}/>
                    </aside>
                </div>
            </div>
        </Layout>
    </>
  )
}

export async function getStaticProps(context){

    const gSettings = await getGlobalSettings();

    const { params } = context

    const getMeta = await getMetaData('post',params.slug);

    const post = await getPost(params.slug);
    
    if (!post) {
        return {
            notFound: true
        };
    }
    
    let related = null;
    if( post.categories.nodes.length >= 1 && post.categories.nodes[0].name != 'Uncategorized' ){
        related = await getRelatedPosts(post.categories.nodes[0].name,post.id,3);
    }

    let moreCount = 5

    if( related == null ){
        moreCount = 8
    }

    const morePosts = await getMorePosts(post.id,moreCount);

    const adjacent = [post.previous,post.next]

    return {
        props:{
            meta: getMeta,
            gSettings: gSettings,
            post:post,
            related:related,
            morePosts:morePosts,
            adjacentPosts: adjacent,
            revalidate: 10,
        }
    };

}

export async function getStaticPaths(){

    const postPaths = await getPostPaths(30);

    const paths = postPaths.map(path => {
        return{
            params: {
                slug: `${path.slug}`
            }
        }
    })

    return{
        paths: paths,
        fallback:'blocking'
    }

}