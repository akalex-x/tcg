import styles from './ParallaxBubble.module.scss'
import { useEffect, useRef} from 'react'

import { gsap } from 'lib/gsap'

function ParallaxBubble(){



    return(
        <>
            <div className={styles.parallax_bubble} style={ {backgroundImage:"url(/temp/about-bg.jpg)"} }>
            </div>
        </>
    )
}

export default ParallaxBubble