import styles from './featured-post.module.scss'
import Image from 'next/future/image'
import Button from 'components/btn'

function FeaturedPost({post}){

    const regex = /(<([^>]+)>)/ig;

    return(
        <>
            <div className={styles.featured_post}>
                <div className='container'>
                    <div className={styles.featured_post__image}>
                        <Image src={post.featuredImage.node.sourceUrl} width={post.featuredImage.node.mediaDetails.width} height={post.featuredImage.node.mediaDetails.height} alt={post.title} />
                    </div>
                    <div className={styles.featured_post__content}>
                        <div className="content-wrap">
                            <h3>{ post.title }</h3>
                            <p>{ post.content.replace(regex, '').substring(0, 360) }...</p>
                            <Button href={'/journal/'+post.slug} type="text" content="Learn More" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FeaturedPost