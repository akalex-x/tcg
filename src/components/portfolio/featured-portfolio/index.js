import styles from './featured-portfolio.module.scss'
import Image from 'next/future/image'
import Button from 'components/btn'
import CategoryIcons from 'components/category-icons'
import React, { useState, useRef } from 'react'

import Arrow from 'components/svgs/arrow'

import { Controller, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

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
                        modules={[Controller,Pagination]}
                        slidesPerView={1}
                        pagination={{ clickable: true }}
                        onSwiper={setFirstSwiper} 
                        controller={{ control: secondSwiper }}
                        >
                            <SwiperSlide>
                                <Image src={port.featuredImage.node.sourceUrl} height={port.featuredImage.node.mediaDetails.height} width={port.featuredImage.node.mediaDetails.width} alt={port.title} />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src={port.featuredImage.node.sourceUrl} height={port.featuredImage.node.mediaDetails.height} width={port.featuredImage.node.mediaDetails.width} alt={port.title} />
                            </SwiperSlide>
                        </Swiper>
                    </div>

                    <div className={styles.feat_port__contents}>
                        {/* <CategoryIcons cats={port} /> */}
                        <Swiper
                        modules={[Controller,Pagination,Navigation]}
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
                        <div className={styles.feat_port__controls}>
                            <div className="feat_port__pag"></div>
                            <div className="feat_port__nav">
                                <button className="feat_port__navigation feat_port__prev reset"><Arrow /></button>
                                <button className='feat_port__navigation feat_port__next reset'><Arrow /></button>
                            </div> 
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}

export default FeaturedPortfolio