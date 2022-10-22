import styles from 'components/flexible/Featuredportfolio/Featuredportfolio.module.scss'
import Portcard from 'components/portfolio/port-card'
import PortDetails from 'components/portfolio/port-details'
import React, { useRef, useState } from 'react'
import gsap from 'gsap'

function PortfolioLoop({latestPort,skip,limit}){

    let $portLoop = useRef(null);
    const [sPort,setPort] = useState(null)
    const [showAll,setShow] = useState(false)

    const portfolios = [...latestPort];
    
    if( skip ){
        portfolios.splice(0, skip)    
    }
    
    const portfolios2 = portfolios.splice(limit,portfolios.length)
    
    const tl = gsap.timeline();
    
    const updatePort = (index) => {

        const sIndex = index + skip;

        if( sPort != latestPort[sIndex] ){

            tl.to('.post_details',{
                height: 0,
                'margin-bottom': 0,
                onComplete: () => {
                    setPort(latestPort[sIndex])
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
                    { showAll &&
                        portfolios2.map((port,i)=>{
                            const index = i + limit;
                            return(
                                <Portcard key={port.slug} index={index} port={port} onClick={ (index) => updatePort(index) } />
                            )
                        })
                    }
                    <PortDetails sPort={sPort} />
                </div>
            </div>
            { portfolios2.length && !showAll && (
                <div className={styles.feat_port__footer}>
                    <button className='btn' type='button' onClick={() => setShow(true)}>Show All</button>
                </div>
            )}
        </>
    )
}

export default PortfolioLoop