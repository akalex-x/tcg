import styles from './latest-journal.module.scss'
import Button from 'components/btn'
import PostCard from 'components/journal/post-card'
import FeaturedPost from 'components/journal/featured-post'

import Image from 'next/future/image'


function LatestJournal({latestPosts}){

    const latestPost = latestPosts[0]

    const posts = [...latestPosts];

    posts.splice(0, 1)  

    return(
        <>
            {/* {console.log(latestPosts)} */}
            <section className={styles.latest_posts}>
                    
                <div className={styles.latest_posts__intro}>
                    <div className='container'>
                            <h2>Journal</h2>
                            <div className="mob-only">
                                <Button href="/journal" type="pill" content="Explore" />
                            </div>
                            <div className="desk-only">
                                <Button href="/journal" type="pill" content="Explore All Journal" />
                            </div>
                    </div>
                </div>

                <div className={styles.latest_posts__loop}>

                    <FeaturedPost post={latestPost}/>

                    <div className={styles.latest_posts__grid}>
                        <div className="container">
                            { 
                                posts.map((post)=>{
                                    return(
                                        <PostCard post={post} key={post.slug} />
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

            </section>
        </>
    )

}

export default LatestJournal