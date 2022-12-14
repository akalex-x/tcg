import styles from './ParallaxBubble2.module.scss'
import { useEffect,useRef } from 'react'

import { gsap } from 'lib/gsap'

function ParallaxBubble2(){

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
        
        // var request = null;
        // var mouse = { x: 0, y: 0 };
        // var cx = window.innerWidth / 2;
        // var cy = window.innerHeight / 2;
        
        // function gparallax1(){
        //     mouse.x = event.pageX;
        //     mouse.y = event.pageY;
        //     cancelAnimationFrame(request);
        //     request = requestAnimationFrame(update);	
        // }

        // function update() {
        //     let dx = mouse.x - cx;
        //     let dy = mouse.y - cy;
        //     let tiltx = (dy / cy);
        //     let tilty = - (dx / cx);
        //     let radius = Math.sqrt(Math.pow(tiltx,2) + Math.pow(tilty,2));
        //     let degree = (radius * 20);
        //     gsap.to($svg, 1, {
        //         transform:'rotate3d(' + tiltx + ', ' + tilty + ', 0, ' + degree + 'deg)'}
        //     );
        // }

        // function gparallax2(event) {
        //     const position = 5
        //     const x = (window.innerWidth - event.pageX * position) / 100;
        //     const y = (window.innerHeight - event.pageY * position) / 300;
        //     $spacer.style.transform = 'translateX('+x+'px) translateY('+y+'px)';
        // }
        
        // window.addEventListener("mousemove", gparallax1);
        // document.addEventListener("mousemove", gparallax2);
    
        // return () => { window.removeEventListener("mousemove", gparallax1); document.removeEventListener("mousemove", gparallax2); }

    },[]);

    return(
        <>
            <div className={styles.parallax_bubble} ref={el => $section = el}>
                <div className="spacer" ref={el => $spacer = el}>

                    <div className="clipping-path">

                        <svg ref={el => $svg = el} viewBox="0 0 1 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox" >
                            
                            <path className={styles.s1} ref={el => $s1 = el} d="M0.864508 0.39152C0.864508 0.592751 0.701379 0.75588 0.500148 0.75588C0.298918 0.75588 0.135788 0.592751 0.135788 0.39152C0.135788 0.190289 0.298918 0.0271606 0.500148 0.0271606C0.701379 0.0271606 0.864508 0.190289 0.864508 0.39152Z" fill="#10069F"/>
                            <path className={styles.s2} ref={el => $s2 = el} d="M0.0882568 0.248475C0.0882568 0.449706 0.355304 0.698834 0.733242 0.633203C1.11118 0.567573 0.812451 -0.0230974 0.590667 0.180582C0.368882 0.384262 0.174255 0.0312171 0.0882568 0.248475Z" fill="#10069F"/>
                            <path className={styles.s3} ref={el => $s3 = el} d="M0.897996 0.556724C0.91006 0.644985 0.886201 0.780772 0.68497 0.780772C0.48374 0.780772 0.101837 0.425278 0.101837 0.224048C0.101837 0.0228171 0.224338 0 0.314862 0C0.516093 0 0.897996 0.355494 0.897996 0.556724Z" fill="#10069F"/>
                            <path className={styles.s4} ref={el => $s4 = el} d="M1 0.342919C1 0.544149 0.664874 0.641649 0.463644 0.641649C0.262413 0.641649 0 0.68876 0 0.487529C0 0.286299 0.332677 0.0213295 0.536356 0.188799C0.676669 0.344954 1 0.141688 1 0.342919Z" fill="#10069F"/>

                            {/* <defs>
                                <filter id="filter0_f_2_11" color-interpolation-filters="sRGB"
                                x="-0.20000000000000001"
                                y="-0.20000000000000001"
                                height="1.3999999999999999"
                                width="1.3999999999999999">
                                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                                <feGaussianBlur stdDeviation="25" result="effect1_foregroundBlur_2_11"/>
                                </filter>
                            </defs> */}
                            </clipPath>
                        </svg>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ParallaxBubble2