import styles from '../FiftyFiftyParallax/FiftyFiftyParallax.module.scss'
import Button from 'components/btn'
import ResImage from 'components/get-image'


function FiftyFifty({data}){


    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.fifty_fifty}>
                <div className="container">
                    <div className={styles.fifty_fifty__wrap}>

                        <div className={styles.fifty_fifty__image}>
                            <ResImage image={data.image} size="lg" alt="Image" />
                        </div>

                        <div className={styles.fifty_fifty__content}>
                            <div className="content-wrap">
                                <div className="content" dangerouslySetInnerHTML={{__html: data.content}}></div>
                                { data.cta ? 
                                    <Button type="text" href={data.ctaLink} content={data.cta} />
                                : null }
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default FiftyFifty