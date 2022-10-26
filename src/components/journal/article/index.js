import styles from './article.module.scss'
import Image from 'next/future/image'
import {formatDate} from 'lib/util'

function Article({post}){

    const date = new Date(post.date);

    return(
        <>
            {/* {console.log(post)} */}
            <article className={styles.article}>

                <div className={styles.article_hero}>
                    <div className={styles.article_hero__meta}>
                        { post.categories.nodes.length >= 1 && post.categories.nodes[0].name != 'Uncategorized' &&
                            <span>{post.categories.nodes[0].name}</span>
                        }
                        <span>{formatDate(date)}</span>
                    </div>
                    <h1>{post.title}</h1>
                    <div className={styles.article_hero__extra}>
                        <span>by: {post.author.node.name}</span>
                        <button className="reset">Share</button>
                    </div>
                    { post.featuredImage &&
                        <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
                    }
                </div>

                <div className={styles.article_content} dangerouslySetInnerHTML={{__html: post.content}}></div>

            </article>
        </>
    )
}

export default Article