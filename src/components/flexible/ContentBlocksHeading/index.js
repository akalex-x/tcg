import styles from './ContentBlocksHeading.module.scss'

function ContentBlocksHeading({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <section className={[styles.contentBlocks, 'content-blocks'].join(' ')}>
                <div className="container">
                    <div className={styles.contentBlocks__loop}>
                        { data.blocks.map( (item,i) => {
                            return(
                                <div key={i} className={styles.contentBlocks__block}>
                                    <div className="content-wrap">
                                        <h3 className='heading' dangerouslySetInnerHTML={{__html: item.heading}}></h3>
                                        <div className='content' dangerouslySetInnerHTML={{__html: item.content}}></div>
                                    </div>
                                </div>
                            )
                        }) }
                    </div>
                </div>
            </section>
        </>
    )

}

export default ContentBlocksHeading