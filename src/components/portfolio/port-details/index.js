import styles from './PortDetails.module.scss'
import Button from 'components/btn'
import ResImage from 'components/get-image'
import PortCategories from 'components/portfolio/port-categories'
import XIcon from 'components/svgs/xIcon.js'


function PortDetails({ sPort }){

    return(
        <div className={ [styles.port_details, 'post_details'].join(' ') }>
            { sPort != null &&
                <div className={styles.port_details__wrap}>
                    <div className={styles.port_details__image}>
                        <div className="spacer">
                            <ResImage alt={sPort.title} image={sPort.featuredImage.node} size="lg" />
                        </div>
                    </div>
                    <div className={styles.port_details__content}>
                        <div className='content-wrap'>
                            <button type='button' className={['reset',styles.close_icon].join(' ')}><XIcon/></button>
                            <PortCategories cats={sPort.categories.nodes} />
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