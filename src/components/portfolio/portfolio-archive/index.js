import styles from './portfolio-archive.module.scss'
import PortfolioLoop from 'components/portfolio/portfolio-loop'

function PortfolioArchive({latestPort}){

    return(
        <>
        <section className={styles.port_archive}>
            <PortfolioLoop latestPort={latestPort} skip={1} limit={12} />
        </section>
        </>
    )
    
}

export default PortfolioArchive