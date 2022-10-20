import styles from './portfolio-quote.module.scss'

function PortfolioQuote(){

    return(
        <>
            <section className={styles.port_quote}>
                <div className="container">
                    <span>Quote</span>
                    <blockquote className={styles.port_quote__quote}>
                        <p>"The seduction of media causes a phenomenon in which reproductive technological parts sprout from the image of the female, creating a cyborgian reformation as parts of the real body disappear."</p>
                    </blockquote>
                    <div className={styles.port_quote__footer}>
                        <span className="author">Lynn Hershman Leeson</span>
                        <span className="meta">Romancing the Anti-body: Lust and Longing in (Cyber)space</span>
                    </div>
                </div>
            </section>
        </>
    )

}

export default PortfolioQuote