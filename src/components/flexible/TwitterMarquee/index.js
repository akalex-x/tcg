import styles from './twitter-marquee.module.scss'
import Twitter from 'components/svgs/socials/twitter'

import { useRef, useEffect } from 'react'
import horizontalLoop from 'lib/horizontalLoop'

function TwitterMarquee({data}){

    let $marquee = useRef(null);

    useEffect(() => {

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

            clones.forEach(function(item){
                const cln = item.cloneNode(true);
                $marquee.appendChild(cln);
            });

            clones.forEach(function(item){
                const cln = item.cloneNode(true);
                $marquee.appendChild(cln);
            });

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
        
        });

    },[]);

    return(
        <>
            {/* {console.log(data)} */}
            <div className={styles.twitter_marquee} ref={el => $marquee = el}>
                <div className={styles.twitter_marquee__content}>
                    <p>{data.content}</p>
                </div>
                { data.twitterCta ? 
                    <div className={styles.twitter_marquee__cta}>
                        <a href={data.twitterLink} target='_blank' rel="noreferrer"><Twitter />{data.twitterCta}</a>
                    </div>
                : null }
            </div>
        </>
    )

}

export default TwitterMarquee