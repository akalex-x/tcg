import styles from './SplitContent.module.scss'
import Image from 'next/future/image'

function SplitContent({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.split_content}>
                <div className={styles.split_content__heading}>
                    <div className="container">
                        <h2>{data.heading}</h2>
                    </div>
                </div>
                <div className={styles.split_content__wrap}>
                    <div className="container">
                        <div className={styles.split_content__content}>
                            <div className="content-wrap"  dangerouslySetInnerHTML={{__html: data.content}}></div>
                        </div>
                        <div className={styles.split_content__emoji}>
                            <Image src="/about/emoji.jpg" width={576} height={193} alt="Emoji" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default SplitContent