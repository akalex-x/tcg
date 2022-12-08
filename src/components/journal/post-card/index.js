import styles from './post-card.module.scss'
import ResImage from 'components/get-image'
import Link from "next/link"



function PostCard({post}){

    const regex = /(<([^>]+)>)/ig;

    return(
        <>
            {/* {console.log(post)} */}
            <div className={styles.post_card}>
                <div className={ [styles.post_card__image, !post.featuredImage ? 'placeholder-fill' : null].join(' ')}>
                    <Link href={'/journal/'+post.slug}>
                        <a className="spacer">
                            {post.featuredImage &&
                                <ResImage alt={post.title} image={post.featuredImage.node} size="md" />
                            }                        
                        </a>
                    </Link>
                </div>
                <div className={styles.post_card__content}>
                    <Link href={'/journal/'+post.slug}>
                        <a className="content-wrap">
                            <h4>{ post.title }</h4>
                            <p>{ post.content.replace(regex, '').substring(0, 75) }...</p>
                        </a>
                    </Link>
                </div>
            </div>
        </>
    )

}

export default PostCard