import styles from './PortfolioVideo.module.scss'
import dynamic from 'next/dynamic'

const CustomVideo = dynamic(import('components/custom-video'), {
    ssr: false
})

function PortfolioVideo(){

    return(
        <>
            <section className={styles.portfolio_video}>
                <div className="container">
                    <span>Video</span>
                    <div className={styles.portfolio_video__player}>
                        <CustomVideo name="Lynn Hershman Lesson: Seduction (1985)" video="https://powerdigitalmarketing.com/wp-content/uploads/2020/12/Griz_PowerDigital_Homepage-Animation_New.mp4" type="video/mp4" src="https://powerdigitalmarketing.com/wp-content/uploads/2020/12/Griz_PowerDigital_Homepage-Animation_New.mp4" />
                    </div>
                    <div className={styles.portfolio_video__content}>
                        <div className="content-wrap">
                            <h2>Fabrications of Feminine Allure</h2>
                            <p>This photograph is part of a larger series called the Phantom Limb series, made before the advent of Photoshop, where Leeson collaged objects such as cameras, binoculars, electric plugs, clocks and televisions to replace the limbs of women cut out from magazine ads and photographs. From her earliest works, often located in domestic settings, she has been interested in the gendered way that technological advances present themselves in popular media: as ventures to be conquered, but also as alien or other femme fatales. It remain an iconic image from Leesons long career.</p>
                        </div>
                        <div className="meta-wrap">
                            <ul>
                                <li>Vintage print</li>
                                <li>Acquired Jun 2022</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default PortfolioVideo