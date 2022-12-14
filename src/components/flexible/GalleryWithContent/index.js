import SectionIntro from 'components/section-intro'
import styles from './gallery_content.module.scss'
import ResImage from 'components/get-image'

import {useEffect} from 'react'

import { EffectFade,Swiper,Controller,Pagination, Thumbs } from 'swiper';

import 'swiper/css';
import 'swiper/css/effect-fade';


function GalleryWithContent({data}){

    const slides = data.slides

    useEffect(() => {
        
        let thumbsSwiper = new Swiper(".gallery_content__thumbs .tslider", {
            // loop:true,
            // modules:[EffectFade],
            // effect:"fade",
            slidesPerView: "3",
            // spaceBetween: 16,
            createElements: true,
            slideToClickedSlide: true,
            direction: 'vertical',
        });

        let mainSwiper = new Swiper(".gallery_content__gallery", {
            modules:[Controller, Thumbs,EffectFade],
            effect:"fade",
            slidesPerView: "1",
            spaceBetween: 32,
            loop:true,
            createElements: true,
            thumbs: {
                swiper: thumbsSwiper
            },
            breakpoints: {
                960: {
                  spaceBetween: 0,
                },
            }
        });
        
        let contentSwiper = new Swiper(".gallery_content__content", {
            loop:true,
            modules:[Controller,Pagination,EffectFade],
            effect:"fade",
            fadeEffect: {
                crossFade: true
            },
            slidesPerView: "1",
            spaceBetween: 32,
            // createElements: true,
            pagination: {
                el: '.gallery_content__content .swiper-pagination',
                clickable:true,
            },
            breakpoints: {
                960: {
                  spaceBetween: 0,
                },
            }
        });

        mainSwiper.controller.control = contentSwiper;
        contentSwiper.controller.control = mainSwiper;

    },[]);

    return(
        <>
            <section className={styles.gallery_content}>

                <SectionIntro title={data.heading} link={data.link} mobCta={data.mobileCta} cta={data.cta} />
                
                <div className="container">
                    <div className={styles.gallery_content__wrap}>
                        <div className={styles.gallery_content__images}>
                            <div className="gallery_content__thumbs">
                                <div className="tslider">
                                    {
                                        slides.map((slide, i) => {
                                            return(
                                                <div className="swiper-slide" key={i}>
                                                    <div className="spacer">
                                                        <ResImage image={slide.image} alt='About Us' size='md'/>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                            <div className="gallery_content__gallery">
                                {
                                    slides.map((slide, i) => {
                                        return(
                                            <div className="swiper-slide" key={i}>
                                                <div className="spacer">
                                                    <ResImage image={slide.image} alt='About Us' size='md'/>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.gallery_content__content}>
                            <div className="gallery_content__content">
                                <div className="swiper-wrapper">
                                    {
                                        slides.map((slide, i) => {
                                            return(
                                                <div className="swiper-slide" key={i}>
                                                    <div className="content-wrap" dangerouslySetInnerHTML={{__html: slide.content}}>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GalleryWithContent