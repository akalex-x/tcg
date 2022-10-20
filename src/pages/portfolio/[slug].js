import {getPortfolioPaths,getPortfolio} from 'fetch/portfolio'
import PortfolioHero from 'components/portfolio/portfolio-hero'
import PortfolioVideo from 'components/portfolio/portfolio-video'
import PortfolioQuote from 'components/portfolio/portfolio-quote'

export default function SinglePortfolio({portfolio}) {
  return (
    <>
        <PortfolioHero port={portfolio} />
        <PortfolioVideo port={portfolio} />
        <PortfolioQuote port={portfolio} />
    </>
  )
}

export async function getStaticProps(context){

    const { params } = context
    const portfolio = await getPortfolio(params.slug);

    if (!portfolio) {
        return {
            notFound: true
        };
    }

    return {
        props:{
          portfolio:portfolio,
          revalidate: 30,
        }
    };

}

export async function getStaticPaths(){

    const portfolioPaths = await getPortfolioPaths(30);

    const paths = portfolioPaths.map(path => {
        return{
            params: {
                slug: `${path.slug}`
            }
        }
    })

    return{
        paths: paths,
        fallback:'blocking'
    }

}