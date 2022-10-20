import styles from 'components/flexible/Featuredportfolio/Featuredportfolio.module.scss'
import Portcard from 'components/portfolio/port-card'
import PortDetails from 'components/portfolio/port-details'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

function PortfolioLoop({latestPort,skip,limit}){

    const portfolios = [...latestPort];
    
    if( skip ){
        portfolios.splice(0, skip)    
    }

    let $portLoop = useRef(null);
    const [sPort,setPort] = useState(null)

    const tl = gsap.timeline();
    
    const updatePort = (index) => {

        if( sPort != latestPort[index] ){

            tl.to('.post_details',{
                height: 0,
                'margin-bottom': 0,
                onComplete: () => {
                    setPort(latestPort[index])
                }
            });

            const colCount = window.getComputedStyle($portLoop.current).getPropertyValue('grid-template-columns').split(' ').length
            const rowPosition = Math.floor(index / colCount) + 2;
            
            tl.set('.post_details',{
                'grid-row': rowPosition,
            });
            
            tl.to('.post_details',{
                delay:.05,
                height: 'auto',
                'margin-bottom': '3rem',
                onComplete: () => {
                    let $details = gsap.utils.selector($portLoop.current);
                    $details('.post_details')[0].scrollIntoView({behavior: "smooth", block: "center"});
                }
            });

            
        }else{
            tl.to('.post_details',{
                height: 0,
                'margin-bottom': 0,
                onComplete: () => {
                    setPort(null)
                }
            });
        }
        
    }

    return(
        <>
            <div className={styles.feat_port__loop}>
                <div ref={$portLoop} className='container'>
                    {
                        portfolios.map((port,i)=>{
                            return(
                                <Portcard key={port.slug} index={i} port={port} onClick={ (i) => updatePort(i) } />
                            )
                        })
                    }
                    <PortDetails sPort={sPort} />
                </div>
            </div>
        </>
    )
}

export default PortfolioLoop