import styles from './Portcard.module.scss'
import ResImage from 'components/get-image'

import React, { useRef, useEffect } from 'react'
import { gsap } from "lib/gsap";
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';


function Portcard({onClick,port,index}){

    let $card = useRef(null);

    useEffect(() => {

        ScrollTrigger.batch('.port_card', {
            interval: 0.5,
            batchMax: 6,
            onEnter: batch => gsap.to(batch, {opacity: 1, y: 0, stagger: {each: 0.1} }),
        });
    
    },[]);

    return(
        <div ref={el => $card = el} onClick={(event) => onClick(index)} className={[styles.port_card, 'port_card'].join(' ')}>
            <div className={styles.port_card__thumb}>
                <ResImage alt={port.title} image={port.featuredImage.node} size="md" />
            </div>
            <h3 className='h5'>{port.title}</h3>
        </div>
    )
}

export default Portcard