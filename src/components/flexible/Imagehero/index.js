import styles from './Imagehero.module.scss'
import HeroDesktop from 'components/svgs/hero-desktop'
import HeroMobile from 'components/svgs/hero-mobile'

function Imagehero(){

    return(
        <section className={styles.image_hero}>
            <div className="container">

                <div className="mob-only">
                    <HeroMobile />
                </div>

                <div className="desk-only">
                    <HeroDesktop />
                </div>

            </div>
        </section>
    )

}

export default Imagehero