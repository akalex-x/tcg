import styles from './CenteredContent.module.scss'

function CenteredContent({data}){

    return(
        <>
            <section className={[styles.centerd_content,data.largeContent && styles.centerd_content__large, data.largePadding && styles.centered_content__padding].join(' ')}>
                <div className="container">
                    <div className="content-wrap" dangerouslySetInnerHTML={{__html: data.content}}></div>
                </div>
            </section>
        </>
    )

}

export default CenteredContent