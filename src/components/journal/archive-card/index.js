import styles from './archive-card.module.scss'
import Link from 'next/link'
import Image from 'next/future/image'
import {formatDate} from 'lib/util'

function ArchiveCard({post}){

    const date = new Date(post.date);

    return(
        <>
            {/* {console.log(post)} */}
            <Link href={'/journal/'+post.slug}>
                <a className={[styles.post_card, 'post-card'].join(' ')}>

                    <div className={styles.post_card__meta}>
                        { post.categories.nodes.length >= 1 &&
                            <span className='h5'>{post.categories.nodes[0].name}</span>
                        }
                        <span className='h5'>{formatDate(date)}</span>
                    </div>

                    <div className={styles.post_card__image}>
                        <div className="spacer">
                            {post.featuredImage &&
                                <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
                            }
                        </div>
                    </div>

                    <div className={styles.post_card__content}>
                        <h4>{post.title.substring(0, 30)}...</h4>
                        <span className="h5">by {post.author.node.name}</span>
                    </div>

                </a>
            </Link>
        </>
    )

}

export default ArchiveCard