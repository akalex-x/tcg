import styles from './related-articles.module.scss'
import Link from "next/link"
import Image from "next/future/image"

function RelatedArticles({posts}){

    if(posts == null){
        return false
    }

    return(
        <>
            {/* {console.log(posts)} */}
            <div className={[styles.related_articles, 'related-articles'].join(' ')}>
                <h3 className="h4">Explore More</h3>
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
                                        <h3 className="h5">{post.title}</h3>
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

export default RelatedArticles