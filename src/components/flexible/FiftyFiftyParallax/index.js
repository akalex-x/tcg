import styles from './FiftyFiftyParallax.module.scss'
import Button from 'components/btn'
import Logo from 'components/svgs/logo'
import React, { useRef, useEffect } from 'react'


function FiftyFiftyParallax({data}){

    let $gradient = useRef(null);
    
    useEffect(() => {

        function parallax(event) {
            const position = 5
            const x = (window.innerWidth - event.pageX * position) / 90;
            const y = (window.innerHeight - event.pageY * position) / 90;
            $gradient.style.transform = 'translateX('+x+'px) translateY('+y+'px)';
        }
        document.addEventListener("mousemove", parallax);

        return () => document.removeEventListener("mousemove", parallax);
    
    },[]);

    return(
        <>
            <section className={styles.fifty_fifty}>
                <div className="container">
                    <div className={styles.fifty_fifty__wrap}>

                        <div className={styles.fifty_fifty__image}>
                            <div className="spacer">
                                <div className="positioner" ref={el => $gradient = el}>
                                    <div className="gradient"></div>
                                </div>
                                <div className="logo">
                                    <Logo />
                                </div>
                            </div>
                        </div>

                        <div className={styles.fifty_fifty__content}>
                            <div className="content-wrap">
                                <div className="content" dangerouslySetInnerHTML={{__html: data.content}}></div>
                                <Button type="text" href={data.ctaLink} content='Learn More' />
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FiftyFiftyParallax