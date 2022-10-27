import Link from 'next/link'
import Image from 'next/future/image'
import styles from './adjacent-posts.module.scss'

import Arrow from "components/svgs/arrow"

function AdjacentPosts({posts}){

    return(
        <>
            {/* {console.log(posts)} */}
            <div className={styles.adjacent_posts}>
                {
                    posts.map((post,i)=>{
                        if( post != null ){
                            return(
                                <>
                                    <Link href={'/journal/'+post.slug} key={post.slug}>
                                        <a class={styles.post_card}>
                                            <div class={styles.post_card__image}>
                                                <div className="spacer">
                                                    { post.featuredImage &&
                                                        <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
                                                    }
                                                </div>
                                            </div>
                                            <div className={styles.post_card__content}>
                                                <h3 className="h5">{post.title}</h3>
                                                { i == 1 ? 
                                                    <span className='nav-btn nav-btn--next'>Next post <Arrow /></span>
                                                    :
                                                    <span className='nav-btn nav-btn--prev'><Arrow /> Previous post</span>
                                                }
                                            </div>
                                        </a>
                                    </Link>
                                </>
                            )
                        }
                    })
                }
            </div>
        </>
    )
    
}

export default AdjacentPosts