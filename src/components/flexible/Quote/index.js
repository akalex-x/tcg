import styles from './portfolio-quote.module.scss'

function Quote({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.port_quote}>
                <div className="container">
                    <span>Quote</span>
                    <blockquote className={styles.port_quote__quote} dangerouslySetInnerHTML={{__html: data.quote}}>
                    </blockquote>
                    <div className={styles.port_quote__footer}>
                        <span className="author">{data.cite}</span>
                        <span className="meta">{data.blurb}</span>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Quote