import styles from './latest-journal.module.scss'
import Button from 'components/btn'
import PostCard from 'components/journal/post-card'
import FeaturedPost from 'components/journal/featured-post'

import { useEffect } from 'react'

import { Swiper } from 'swiper';

import 'swiper/css';


function LatestJournal({latestPosts}){

    const latestPost = latestPosts[0]

    const posts = [...latestPosts];

    posts.splice(0, 1)

    var init = false;

    const options = {
        slidesPerView: "1.05",
        spaceBetween: 16,
        createElements: true,
    }

    useEffect(() => {

        var swiper = new Swiper(".slider", options);
        var init = true;

        function swiperCard() {
            if (window.innerWidth <= 960) {
                if (!init) {
                    init = true;
                    swiper = new Swiper(".slider", options);
                }
            } else if (init) {
                console.log('destroy')
                swiper.destroy();
                init = false;
            }
        }

        swiperCard();
        
        window.addEventListener("resize", swiperCard);

        return () => window.removeEventListener("resize", swiperCard)

    },[]);

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
                            <div className="slider">
                                { 
                                    posts.map((post)=>{
                                        return(
                                            <div className='swiper-slide' key={post.slug}>
                                                <PostCard post={post} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>

            </section>
        </>
    )

}

export default LatestJournal