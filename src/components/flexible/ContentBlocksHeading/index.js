import styles from './ContentBlocksHeading.module.scss'

function ContentBlocksHeading({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.contentBlocks}>
                <div className="container">
                    <h2 className={styles.contentBlocks__heading}>{data.heading}</h2>
                    <div className={styles.contentBlocks__loop}>
                        { data.blocks.map( (item,i) => {
                            return(
                                <div key={i} className={styles.contentBlocks__block}>
                                    <h3 className='heading'>{item.heading}</h3>
                                    <div className='content' dangerouslySetInnerHTML={{__html: item.content}}>
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