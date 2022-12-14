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
                            effect="fade"
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            onSwiper={setFirstSwiper} 
                            controller={{ control: secondSwiper }}
                            >

                                <SwiperSlide>
                                    <div className="spacer">
                                        { data.portfolioSingle.squareImage ?
                                            <ResImage alt={data.title} image={data.portfolioSingle.squareImage} size="lg" />
                                        : data.featuredImage ?
                                            <ResImage alt={data.title} image={data.featuredImage.node} size="lg" />
                                        : null
                                        }
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="spacer">
                                        { data.portfolioSingle.squareImage ?
                                            <ResImage alt={data.title} image={data.portfolioSingle.squareImage} size="lg" />
                                        : data.featuredImage ?
                                            <ResImage alt={data.title} image={data.featuredImage.node} size="lg" />
                                        : null
                                        }
                                    </div>
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
                                            <h1>{data.title}</h1>
                                            <div className="content" dangerouslySetInnerHTML={{__html:data.content}}></div>
                                            <Button type="text" href={'/portfolio/'+data.slug} content="Learn More" />
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="content-wrap">
                                        <div className="container">
                                            <h1>{data.title}</h1>
                                            <div className="content" dangerouslySetInnerHTML={{__html:data.content}}></div>
                                            <Button type="text" href={'/portfolio/'+data.slug} content="Learn More 2" />
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

                            <PortCategories cats={data.categories.nodes} />

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FeaturedPortfolio