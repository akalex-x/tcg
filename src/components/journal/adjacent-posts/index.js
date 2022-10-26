import Link from 'next/link'
import Image from 'next/future/image'
import styles from './adjacent-posts.module.scss'

function AdjacentPosts({posts}){

    const adjacent = [posts.next,posts.previous]


    return(
        <>
            {console.log(adjacent)}
            {
                adjacent.map((post,i)=>{
                    if( post != null ){
                        let linkText = 'Previous Post'
                        if( i == 1 ){
                            linkText = 'Next Post'
                        }
                        return(
                            <>
                                {/* {console.log(post)} */}
                                    <div class={styles.post_card}>
                                        <div class={styles.post_card__image}>
                                            <div className="spacer">
                                                <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
                                            </div>
                                        </div>
                                        <div className={styles.post_card__content}>
                                            <h3 className="h5">{post.title.substring(0, 20)}...</h3>
                                            <Link href={'/journal/'+post.slug} key={post.slug}>
                                                <a>{linkText}</a>
                                            </Link>
                                        </div>
                                    </div>
                            </>
                        )
                    }
                })
            }
        </>
    )
    
}

export default AdjacentPosts