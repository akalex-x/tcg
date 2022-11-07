import styles from './ContentSpotify.module.scss'
import ResImage from 'components/get-image'
import Button from 'components/btn'
import PlayWidget from 'react-spotify-widgets';

function ContentSpotify({data}){

    const content = data.contentGroup
    const graphic = data.graphic

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.content_spotify}>
                <div className='container'>
                    <div className={styles.content_spotify__content}>
                        <div className="content-wrap">
                            <span className='preheading'>{content.preheading}</span>
                            <div className="the-content" dangerouslySetInnerHTML={{__html:content.text}}></div>
                            <Button type='text--blank' href={content.ctaLink} content={content.cta} />
                        </div>
                        <div className="spotify-wrap">
                            <PlayWidget
                                width='100%'
                                height={300}
                                uri={'spotify:playlist:37i9dQZF1DZ06evO4jkBCE'}
                                lightTheme={true}
                                />
                        </div>
                    </div>
                    <div className={styles.content_spotify__image}>
                        <span className='preheading'>{graphic.preheading}</span>
                        <ResImage image={graphic.image} size="lg" alt={graphic.preheading} />
                    </div>
                </div>
            </section>
        </>
    )

}

export default ContentSpotify