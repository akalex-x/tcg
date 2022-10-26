import {getPostPaths,getPost,getRelatedPosts,getMorePosts} from 'fetch/posts'
import Article from 'components/journal/article'
import RelatedArticles from 'components/journal/retlated-articles'
import MoreArticles from 'components/journal/more-articles'

import styles from './journal.module.scss'


export default function SinglePortfolio({post,related,morePosts}) {
  return (
    <>
        <div className={styles.journal}>
            <div className="container">
                <Article post={post} />
                <aside>
                    <RelatedArticles posts={related}/>
                    <MoreArticles posts={morePosts}/>
                </aside>
            </div>
        </div>
    </>
  )
}

export async function getStaticProps(context){

    const { params } = context

    const post = await getPost(params.slug);

    let related = null;
    if( post.categories.nodes.length >= 1 && post.categories.nodes[0].name != 'Uncategorized' ){
        related = await getRelatedPosts(post.categories.nodes[0].name,post.id,3);
    }

    let moreCount = 5

    console.log(related)
    
    if( related == null ){
        moreCount = 8
    }
    console.log(related)
    console.log(moreCount)

    const morePosts = await getMorePosts(post.id,moreCount);

    if (!post) {
        return {
            notFound: true
        };
    }

    return {
        props:{
            post:post,
            related:related,
            morePosts:morePosts,
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