import styles from './PortfolioHero.module.scss'
import Image from 'next/future/image'
import Socials from 'components/socials'
import Button from 'components/btn'

function PortfolioHero({port}){

    const socials = {twitter:'twitter.com'}

    return(
        <>
            <section className={styles.port_hero}>
                <div className={styles.port_hero__wrap}>
                    <div className={styles.port_hero__image}>
                        <Image src={port.featuredImage.node.sourceUrl} height={port.featuredImage.node.mediaDetails.height} width={port.featuredImage.node.mediaDetails.width} alt={port.title} />
                    </div>
                    <div className={styles.port_hero__content}>
                        <div className="content-wrap">
                            <h1>{port.title}</h1>
                            <div className="content" dangerouslySetInnerHTML={{__html:port.content}}></div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>CEO:</td>
                                        <td>Jordan Topoleski</td>
                                    </tr>
                                    <tr>
                                        <td>Co-Founder:</td>
                                        <td>Thomas McLeod</td>
                                    </tr>
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
                    <a className="main-link" href="arkive.net" target="_blank">arkive.net</a>
                    <Button type="text--blank" content="Apply Now" href="" />
                </div>
            </section>
        </>
    )
}

export default PortfolioHero