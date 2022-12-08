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

function FeaturedPortfolio({port}){

    // let $pagination = useRef(null)
    // let $prev = useRef(null)
    // let $next = useRef(null)

    const [firstSwiper, setFirstSwiper] = useState(null);
    const [secondSwiper, setSecondSwiper] = useState(null);

    return(
        <>
            <section className={styles.feat_port}>
                <div className={styles.feat_port__wrap}>

                    <div className={styles.feat_port__images}>
                        <Swiper
                        modules={[Controller,Pagination,EffectFade]}
                        effect="fade"
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={setFirstSwiper} 
                        controller={{ control: secondSwiper }}
                        >
                            <SwiperSlide>
                                <ResImage image={port.featuredImage.node} alt={port.title} />
                            </SwiperSlide>
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
                            <SwiperSlide>
                                <div className="content-wrap">
                                    <div className="container">
                                        <h1>{port.title}</h1>
                                        <div className="content" dangerouslySetInnerHTML={{__html:port.content}}></div>
                                        <Button type="text" href={'/portfolio/'+port.slug} content="Learn More" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>

                        {/* <div className={styles.feat_port__controls}>
                            <div className="feat_port__pag"></div>
                            <div className="feat_port__nav">
                                <button className="feat_port__navigation feat_port__prev reset"><Arrow /></button>
                                <button className='feat_port__navigation feat_port__next reset'><Arrow /></button>
                            </div> 
                        </div> */}

                        <PortCategories cats={port.categories.nodes} />

                    </div>

                </div>
            </section>
        </>
    )
}

export default FeaturedPortfolio