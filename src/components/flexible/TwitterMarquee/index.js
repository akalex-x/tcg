import styles from './twitter-marquee.module.scss'
import Twitter from 'components/svgs/socials/twitter'

import { useRef, useEffect } from 'react'
import horizontalLoop from 'lib/horizontalLoop'

function TwitterMarquee({data}){

    let $marquee = useRef(null);

    useEffect(() => {

        // function pauseTimeline(tl){
        //     if ( tl.paused() ) {
        //         tl.play();
        //     } else {
        //         tl.pause();
        //     }
        // }

        document.fonts.ready.then(function () {
                
            const clones =  Array.from($marquee.children);

            clones.forEach(function(item){
                const cln = item.cloneNode(true);
                $marquee.appendChild(cln);
            });

            clones.forEach(function(item){
                const cln = item.cloneNode(true);
                $marquee.appendChild(cln);
            });

            const $words = Array.from($marquee.children)
    
            let loop = horizontalLoop($words, {paused: false,repeat:-1, speed:.5,reversed: false });

            // $marquee.addEventListener('mouseenter', (e) => {
            //     pauseTimeline(loop)
            // });

            // $marquee.addEventListener('mouseleave', (e) => {
            //     pauseTimeline(loop)
            // });
        
        });

    },[]);

    return(
        <>
            {/* {console.log(data)} */}
            <div className={styles.twitter_marquee} ref={el => $marquee = el}>
                <div className={styles.twitter_marquee__content}>
                    <p>{data.content}</p>
                </div>
                <div className={styles.twitter_marquee__cta}>
                    <a href={data.twitterLink} target='_blank'><Twitter />{data.twitterCta}</a>
                </div>
            </div>
        </>
    )

}

export default TwitterMarquee