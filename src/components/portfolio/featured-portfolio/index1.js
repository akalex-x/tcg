import styles from './featured-portfolio.module.scss'
import ResImage from 'components/get-image'
import Button from 'components/btn'
import PortCategories from 'components/portfolio/port-categories'

function FeaturedPortfolio({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.feat_port}>
                <div className="container">

                    <div className={styles.feat_port__wrap}>

                        <div className={styles.feat_port__image}>
                            <div className="spacer">
                                { data.portfolioSingle.squareImage ?
                                    <ResImage alt={data.title} image={data.portfolioSingle.squareImage} size="lg" />
                                : data.featuredImage ?
                                    <ResImage alt={data.title} image={data.featuredImage.node} size="lg" />
                                : null
                                }
                            </div>
                        </div>

                        <div className={styles.feat_port__content}>
                            <div className="content-wrap">
                                <div className="container">
                                    <h1>{data.title}</h1>
                                    <div className="content" dangerouslySetInnerHTML={{__html:data.content}}></div>
                                    <Button type="text" href={'/portfolio/'+data.slug} content="Learn More" />
                                </div>
                            </div>
                            <PortCategories cats={data.categories.nodes} />
                        </div>

                    </div>

                </div>
            </section>
        </>
    )

}

export default FeaturedPortfolio