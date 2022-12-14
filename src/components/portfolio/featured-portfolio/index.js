import styles from './featured-portfolio.module.scss'
import ResImage from 'components/get-image'
import Button from 'components/btn'
import PortCategories from 'components/portfolio/port-categories'
import React, { useState, useRef } from 'react'

import Arrow from 'components/svgs/arrow'

import { EffectFade, Controller, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

function FeaturedPortfolio({data}){

    // let $pagination = useRef(null)
    // let $prev = useRef(null)
    // let $next = useRef(null)

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return(
        <>
            <section className={styles.feat_port}>
                <div className="container">
                    <div className={styles.feat_port__wrap}>

                        <div className={styles.feat_port__images}>
                            <Swiper
                            modules={[Controller,Pagination,EffectFade]}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={setFirstSwiper} 
                            controller={{ control: secondSwiper }}
                            >

                                { data.map((port,i)=>{
                                    return(
                                        <SwiperSlide key={'image'+i}>
                                            <div className="spacer">
                                                { port.portfolioSingle.squareImage ?
                                                    <ResImage alt={port.title} image={port.portfolioSingle.squareImage} size="lg" />
                                                    : port.featuredImage ?
                                                    <ResImage alt={port.title} image={port.featuredImage.node} size="lg" />
                                                    : null
                                                }
                                            </div>
                                            <PortCategories cats={port.categories.nodes} />
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>
                        </div>

                        <div className={styles.feat_port__contents}>
                            
                            <Swiper
                            modules={[Controller,Pagination,Navigation,EffectFade]}
                            effect="fade"
                            slidesPerView={1}
                            navigation={{
                                prevEl: '.feat_port__prev',
                                nextEl: '.feat_port__next',
                            }}
                            pagination={{
                                el: '.feat_port__pag',
                                clickable: true,
                            }}
                            onSwiper={setSecondSwiper} 
                            controller={{ control: firstSwiper }} 
                            >
                                
                                { data.map((port,i)=>{
                                    return(
                                        <SwiperSlide key={'content'+i}>
                                            <div className="content-wrap">
                                                <div className="container">
                                                    <h1>{port.title}</h1>
                                                    <div className="content" dangerouslySetInnerHTML={{__html:port.content}}></div>
                                                    <Button type="text" href={'/portfolio/'+port.slug} content="Learn More" />
                                                </div>
                                            </div>
                                            <PortCategories cats={port.categories.nodes} />
                                        </SwiperSlide>
                                    )
                                })}

                            </Swiper>

                            <div className={styles.feat_port__controls}>
                                <div className="feat_port__pag"></div>
                                <div className="feat_port__nav">
                                    <button className="feat_port__navigation feat_port__prev reset"><Arrow /></button>
                                    <button className='feat_port__navigation feat_port__next reset'><Arrow /></button>
                                </div> 
                            </div>


                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedPortfolio