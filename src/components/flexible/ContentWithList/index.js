import styles from './ContentWithList.module.scss'

function ContentWithList({data}){
    
    return(
        <>
            <section className={styles.content_list}>
                <div className="container">

                    <div className={styles.content_list__content}>
                        <div className="content-wrap"  dangerouslySetInnerHTML={{__html: data.content}}></div>
                    </div>

                    <div className={styles.content_list__list}>
                        <ol>
                            {
                                data.list.map((item,i)=>{
                                    return(
                                        <li key={i}>{item.text}</li>
                                    )
                                })
                            }
                        </ol>
                    </div>

                </div>
            </section>
        </>
    )

}

export default ContentWithList