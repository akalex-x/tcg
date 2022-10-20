import styles from './PortDetails.module.scss'
import Button from 'components/btn'
import Image from 'next/future/image'

function PortDetails({ sPort }){

    return(
        <div className={ [styles.port_details, 'post_details'].join(' ') }>
            { sPort != null &&
                <div className={styles.port_details__wrap}>
                    <div className={styles.port_details__image}>
                        <Image src={sPort.featuredImage.node.sourceUrl} height={sPort.featuredImage.node.mediaDetails.height} width={sPort.featuredImage.node.mediaDetails.width} alt={sPort.title} />
                    </div>
                    <div className={styles.port_details__content}>
                        <div className='content-wrap'>
                            <h3>{sPort.title}</h3>
                            <div className="content" dangerouslySetInnerHTML={{ __html:sPort.content}}></div>
                            <Button type="text" href={'/portfolio/'+sPort.slug} content="Learn More" />
                        </div>
                    </div>
                </div>
            }
        </div>
    )

}

export default PortDetails