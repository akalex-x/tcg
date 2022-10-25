import styles from './Featuredportfolio.module.scss'
import Button from 'components/btn'
import PortfolioLoop from 'components/portfolio/portfolio-loop'

function Featuredportfolio({latestPort}){
    
    return(
        <>
        <section className={styles.feat_port}>

            <div className={styles.feat_port__intro}>
                <div className='container'>
                        <h2>Portfolio</h2>
                        <div className="mob-only">
                            <Button href="/portfolio" type="pill" content="Explore" />
                        </div>
                        <div className="desk-only">
                            <Button href="/portfolio" type="pill" content="Explore All Portfolio" />
                        </div>
                </div>
            </div>

            <PortfolioLoop latestPort={latestPort} skip={0} limit={18} />

            <div className={[styles.feat_port__footer, 'container'].join(' ')}>
                <Button href="/portfolio" content="Explore All" />
            </div>

        </section>
        </>
    )

}

export default Featuredportfolio