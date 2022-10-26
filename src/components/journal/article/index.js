import styles from './article.module.scss'
import Image from 'next/future/image'
import {formatDate} from 'lib/util'

import AdjacentPosts from 'components/journal/adjacent-posts'

function Article({post,adjacentPosts}){

    const date = new Date(post.date);

    const regex = /<p\b[^<>\/]*>\s*(<img\b[^<>]*>)\s*<\/p>/g;

    return(
        <>
            {/* {console.log(post)} */}
            <article className={styles.article}>

                <div className={styles.article_hero}>

                    <div className={styles.article_hero__meta}>
                        { post.categories.nodes.length >= 1 && post.categories.nodes[0].name != 'Uncategorized' &&
                            <span className='h4'>{post.categories.nodes[0].name}</span>
                        }
                        <span className='h4'>{formatDate(date)}</span>
                    </div>

                    <h1 className="h2">{post.title}</h1>

                    <div className={styles.article_hero__extra}>
                        <span className='h4'>by: {post.author.node.name}</span>
                        <button className="reset">Share</button>
                    </div>

                    { post.featuredImage &&
                        <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
                    }

                </div>

                <div className={styles.article_content} dangerouslySetInnerHTML={{ __html: post.content.replace(regex, '$1') }}></div>

                <AdjacentPosts posts={adjacentPosts} />

            </article>
        </>
    )
}

export default Article