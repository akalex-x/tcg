import SectionIntro from 'components/section-intro'
import styles from './gallery_content.module.scss'
import ResImage from 'components/get-image'

import {useEffect} from 'react'

import { Swiper,Controller } from 'swiper';

// import 'swiper/css';

function GalleryWithContent({data}){

    const slides = data.slides

    useEffect(() => {

        let mainSwiper = new Swiper(".gallery_content__gallery", {
            modules:[Controller],
            slidesPerView: "1",
            spaceBetween: 0,
            loop:true,
            createElements: true,
        });
        
        let contentSwiper = new Swiper(".gallery_content__content", {
            loop:true,
            modules:[Controller],
            slidesPerView: "1",
            spaceBetween: 0,
            createElements: true,
        });

        mainSwiper.controller.control = contentSwiper;
        contentSwiper.controller.control = mainSwiper;

    },[]);

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.gallery_content}>
                <SectionIntro title="About Us" link="/about" mobCta="Explore" cta="Learn About Us" />
                <div className="container">
                    <div className={styles.gallery_content__wrap}>
                        <div className={styles.gallery_content__images}>
                            <div className="gallery_content__gallery">
                                {
                                    slides.map((slide, i) => {
                                        return(
                                            <>
                                                {console.log(slide)}
                                                <div className="swiper-slide" key={i}>
                                                    <div className="spacer">
                                                        <ResImage image={slide.image} alt='About Us' size='md'/>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className={styles.gallery_content__content}>
                            <div className="gallery_content__content">
                                {
                                    slides.map((slide, i) => {
                                        return(
                                            <>
                                                {console.log(slide)}
                                                <div className="swiper-slide" key={i}>
                                                    <div className="content-wrap" dangerouslySetInnerHTML={{__html: slide.content}}>
                                                    </div>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GalleryWithContent