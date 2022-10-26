import styles from './more-articles.module.scss'
import Link from 'next/link'
import Image from 'next/future/image'

function MoreArticles({posts}){

    return(
        <>
            {console.log(posts)}
            <div className={styles.more_articles}>
                <h3 className="h4">More Journal</h3>
                {
                    posts.map((post)=>{
                        return(
                            <Link href={'/journal/'+post.slug} key={post.slug}>
                                <a class={styles.post_card}>
                                    <div class={styles.post_card__image}>
                                        <div className="spacer">
                                            <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
                                        </div>
                                    </div>
                                    <div className={styles.post_card__content}>
                                        <span className='category'>{post.categories.nodes[0].name}</span>
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