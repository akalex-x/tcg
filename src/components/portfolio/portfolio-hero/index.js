import styles from './PortfolioHero.module.scss'
import Image from 'next/future/image'
import Socials from 'components/socials'
import Button from 'components/btn'
import PortCategories from 'components/portfolio/port-categories'

function PortfolioHero({port}){

    const acf = port.portfolioSingle

    let content = port.content

    if( acf.introOverwrite ){
        content = acf.introOverwrite
    }

    const contacts = acf.contacts

    const {socials} = acf

    return(
        <>
            {/* {console.log(port)} */}
            {console.log(acf)}
            <section className={styles.port_hero}>
                <div className={styles.port_hero__wrap}>
                    <div className={styles.port_hero__image}>
                        <Image src={port.featuredImage.node.sourceUrl} height={port.featuredImage.node.mediaDetails.height} width={port.featuredImage.node.mediaDetails.width} alt={port.title} />
                    </div>
                    <div className={styles.port_hero__content}>
                        <PortCategories cats={port.categories.nodes} />
                        <div className="content-wrap">
                            <h1>{port.title}</h1>
                            <div className="content" dangerouslySetInnerHTML={{__html:content}}></div>
                            <table>
                                <tbody>
                                    { contacts && 
                                        contacts.map((contact,i) => {
                                            return(
                                                <td key={i}>
                                                    <tr>{contact.position}</tr>
                                                    <tr>{contact.name}</tr>
                                                </td>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className="mob-only">
                                <Socials socials={socials} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.port_hero__links}>
                    <div className="desk-only">
                        <Socials socials={socials} />
                    </div>
                    { acf.website && 
                        <a className="main-link" href={acf.website} rel="noreferrer" target="_blank">{acf.website}</a>
                    }
                    { acf.cta && 
                    <Button type="text--blank" content={acf.cta.title} href={acf.cta.url} />
                    }
                </div>
            </section>
        </>
    )
}

export default PortfolioHero