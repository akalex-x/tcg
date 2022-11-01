import styles from './related-articles.module.scss'
import Link from "next/link"
import ResImage from "components/get-image"

function RelatedArticles({posts}){

    // console.log('posts',posts)

    if(posts == null || posts.length == 0){
        return null;
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
                                            <ResImage image={post.featuredImage.node} alt={post.title} size='sm' />
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