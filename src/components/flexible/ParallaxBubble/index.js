import styles from './ParallaxBubble.module.scss'
import { useEffect,useRef } from 'react'

import { gsap } from 'lib/gsap'

function ParallaxBubble(){

    let $section = useRef(null)
    let $spacer = useRef(null)
    let $svg = useRef(null)
    let $s1 = useRef(null)
    let $s2 = useRef(null)
    let $s3 = useRef(null)
    let $s4 = useRef(null)

    useEffect(() => {

        const tl = gsap.timeline({repeat:'-1',});
    
        tl.to($s1,{
            morphSVG: $s2,
            duration:4,
        });
    
        tl.to($s1,{
            morphSVG: $s3,
            duration:4,
        });
    
        tl.to($s1,{
            morphSVG: $s4,
            duration:4,
        });
        
        tl.to($s1,{
            morphSVG: $s1,
            duration:4,
        });
        
        var request = null;
        var mouse = { x: 0, y: 0 };
        var cx = window.innerWidth / 2;
        var cy = window.innerHeight / 2;
        
        function gparallax1(){
            mouse.x = event.pageX;
            mouse.y = event.pageY;
            cancelAnimationFrame(request);
            request = requestAnimationFrame(update);	
        }

        function update() {
            let dx = mouse.x - cx;
            let dy = mouse.y - cy;
            let tiltx = (dy / cy);
            let tilty = - (dx / cx);
            let radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
            let degree = (radius * 20);
            gsap.to($svg, 1, {
                transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'}
            );
        }

        function gparallax2(event) {
            const position = 5
            const x = (window.innerWidth - event.pageX * position) / 100;
            const y = (window.innerHeight - event.pageY * position) / 300;
            $spacer.style.transform = 'translateX('+x+'px) translateY('+y+'px)';
        }
        
        window.addEventListener("mousemove", gparallax1);
        document.addEventListener("mousemove", gparallax2);
    
        return () => { window.removeEventListener("mousemove", gparallax1); document.removeEventListener("mousemove", gparallax2); }

    },[]);

    return(
        <>
            <div className={styles.parallax_bubble} ref={el => $section = el}>
                <div className="spacer" ref={el => $spacer = el}>

                    <svg ref={el => $svg = el} viewBox="0 0 542 445" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className={styles.s1} ref={el => $s1 = el} filter="url(#filter0_f_2_11)" d="M432 223C432 311.917 359.918 383.999 271 383.999C182.082 383.999 110 311.917 110 223C110 134.082 182.082 62 271 62C359.918 62 432 134.082 432 223Z" fill="#10069F"/>
                        <path className={styles.s2} ref={el => $s2 = el} d="M89 159.789C89 248.706 207 358.789 374 329.789C541 300.789 409 39.7886 311 129.789C213 219.789 127 63.7886 89 159.789Z" fill="#10069F"/>
                        <path className={styles.s3} ref={el => $s3 = el} d="M446.799 296C452.13 335 441.587 395 352.669 395C263.751 395 95 237.918 95 149C95 60.0822 149.13 50 189.13 50C278.047 50 446.799 207.082 446.799 296Z" fill="#10069F"/>
                        <path className={styles.s4} ref={el => $s4 = el} d="M491.87 201.532C491.87 290.45 343.788 333.532 254.87 333.532C165.953 333.532 50 354.349 50 265.431C50 176.513 197 59.4309 287 133.431C349 202.431 491.87 112.614 491.87 201.532Z" fill="#10069F"/>
                        <defs>
                            <filter id="filter0_f_2_11" color-interpolation-filters="sRGB"
                            x="-0.20000000000000001"
                            y="-0.20000000000000001"
                            height="1.3999999999999999"
                            width="1.3999999999999999">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_11"/>
                            </filter>
                        </defs>
                    </svg>

                </div>
            </div>
        </>
    )
}

export default ParallaxBubble