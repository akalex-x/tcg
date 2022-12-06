import styles from './featured-post.module.scss'
import ResImage from 'components/get-image'
import Button from 'components/btn'

function FeaturedPost({post}){

    const regex = /(<([^>]+)>)/ig;

    return(
        <>
            <div className={styles.featured_post}>
                <div className='container'>
                    <div className={ [styles.featured_post__image,!post.featuredImage?'placeholder-fill':null].join(' ') }>
                        <div className="spacer">
                            { post.featuredImage &&
                                <ResImage alt={post.title} image={post.featuredImage.node} size="lg" />
                            }
                        </div>
                    </div>
                    <div className={styles.featured_post__content}>
                        <div className="content-wrap">
                            <h3>{ post.title }</h3>
                            <p>{ post.content.replace(regex, '').substring(0, 360) }...</p>
                            <Button href={'/journal/'+post.slug} type="text" content="Keep Reading" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default FeaturedPost