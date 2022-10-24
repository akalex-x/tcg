import styles from './LargeCenteredContent.module.scss'

function LargeCenteredContent({content}){

    return(
        <>
            <section className={styles.lcenterd_content}>
                <div className="container">
                    <div className="content-wrap" dangerouslySetInnerHTML={{__html: content}}></div>
                </div>
            </section>
        </>
    )

}

export default LargeCenteredContent