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

                    <svg ref={el => $svg = el} viewBox="0 0 542 445" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="my-clip-path" clipPathUnits="objectBoundingBox">
                        <path className={styles.s1} ref={el => $s1 = el} d="M1,0.693 C1,0.969,1,1,0.842,1 C0.565,1,0.342,0.969,0.342,0.693 C0.342,0.416,0.565,0.193,0.842,0.193 C1,0.193,1,0.416,1,0.693" fill="#10069F"/>
                        <path className={styles.s2} ref={el => $s2 = el} d="M0.244,0.715 C0.244,1,0.568,1,1,1 C1,1,1,0.178,0.853,0.581 C0.584,0.983,0.348,0.285,0.244,0.715" fill="#10069F"/>
                        <path className={styles.s3} ref={el => $s3 = el} d="M1,0.858 C1,0.971,1,1,0.999,1 C0.747,1,0.269,0.69,0.269,0.432 C0.269,0.174,0.423,0.145,0.536,0.145 C0.788,0.145,1,0.6,1,0.858" fill="#10069F"/>
                        <path className={styles.s4} ref={el => $s4 = el} d="M1,0.893 C1,1,0.778,1,0.577,1 C0.376,1,0.113,1,0.113,1 C0.113,0.782,0.446,0.263,0.65,0.591 C0.79,0.897,1,0.499,1,0.893" fill="#10069F"/>
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
        </>
    )
}

export default ParallaxBubble2