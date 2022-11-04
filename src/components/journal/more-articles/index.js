import styles from './more-articles.module.scss'
import Link from 'next/link'
import ResImage from 'components/get-image'

function MoreArticles({posts}){

    return(
        <>
            {/* {console.log(posts)} */}
            <div className={[styles.more_articles, 'more-articles'].join(' ')}>
                <h3 className="h4">More Journal</h3>
                {
                    posts.map((post)=>{
                        return(
                            <Link href={'/journal/'+post.slug} key={post.slug}>
                                <a class={styles.post_card}>
                                    <div class={styles.post_card__image}>
                                        <div className="spacer">
                                            { post.featuredImage &&
                                                <ResImage image={post.featuredImage.node} alt={post.title} size="xs" />
                                            }
                                        </div>
                                    </div>
                                    <div className={styles.post_card__content}>
                                        { post.categories.nodes.length >= 1 &&
                                            <span className='category'>{post.categories.nodes[0].name}</span>
                                        }
                                        <h3 className="h5">{post.title.substring(0, 20)}...</h3>
                                    </div>
                                </a>
                            </Link>
                        )
                    })
                }
            </div>
        </>
    )

}

export default MoreArticles