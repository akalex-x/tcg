import styles from './archive-card.module.scss'
import Link from 'next/link'
import ResImage from 'components/get-image'
import {formatDate} from 'lib/util'

function ArchiveCard({post,box}){

    const date = new Date(post.date);

    let size = 'sm'

    box == 'box_1' ? size = 'xl' : null

    box == 'box_4' ? size = 'lg' : null

    return(
        <>
            {/* {console.log(post)} */}
            {console.log(box)}
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
                                <ResImage image={post.featuredImage.node} alt={post.title} size={size} />
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