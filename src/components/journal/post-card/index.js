import styles from './post-card.module.scss'
import Image from 'next/future/image'
import Link from "next/link"



function PostCard({post}){

    const regex = /(<([^>]+)>)/ig;

    return(
        <>
            {/* {console.log(post)} */}
            <div className={styles.post_card}>
                <div className={styles.post_card__image}>
                    <Link href={'/journal/'+post.slug}>
                        <a className="spacer">
                            <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
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