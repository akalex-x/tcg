import styles from './blue-quote.module.scss'

function Quote({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.blue_quote}>
                <div className="container">
                    <span className={styles.blue_quote__emoji}>&#128172;</span>
                    <blockquote className={styles.blue_quote__quote} dangerouslySetInnerHTML={{__html: data.quote}}>
                    </blockquote>
                    <span className={styles.blue_quote__cite}>{data.cite}</span>
                </div>
            </section>
        </>
    )

}

export default Quote