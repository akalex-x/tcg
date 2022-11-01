import styles from './Featuredportfolio.module.scss'
import Button from 'components/btn'
import PortfolioLoop from 'components/portfolio/portfolio-loop'
import SectionIntro from 'components/section-intro'

function Featuredportfolio({latestPort}){
    
    return(
        <>
        <section className={styles.feat_port}>

            <SectionIntro title="Portfolio" link="/portfolio" mobCta="Explore" cta="Explore All Portfolio" />

            <PortfolioLoop latestPort={latestPort} skip={0} limit={18} />

            <div className={[styles.feat_port__footer, 'container'].join(' ')}>
                <Button href="/portfolio" content="Explore All" />
            </div>

        </section>
        </>
    )

}

export default Featuredportfolio