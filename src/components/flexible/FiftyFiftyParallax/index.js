import styles from './FiftyFiftyParallax.module.scss'
import Button from 'components/btn'
import Logo from 'components/svgs/logo'
import React, { useRef, useEffect } from 'react'


function FiftyFiftyParallax({data}){

    let $gradient = useRef(null);
    
 

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.fifty_fifty}>
                <div className="container">
                    <div className={styles.fifty_fifty__wrap}>

                        <div className={styles.fifty_fifty__image} style={ {backgroundImage:"url(/temp/fifty-bg.jpg)"} }>
                            <div className="spacer">
                            </div>
                        </div>

                        <div className={styles.fifty_fifty__content}>
                            <div className="content-wrap">
                                <div className="content" dangerouslySetInnerHTML={{__html: data.content}}></div>
                                { data.cta ? 
                                    <Button type="text" href={data.ctaLink} content={data.cta} />
                                : null }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FiftyFiftyParallax