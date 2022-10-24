import {getPortfolioPaths,getPortfolio} from 'fetch/portfolio'
import PortfolioHero from 'components/portfolio/portfolio-hero'

import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {getLatestPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'
import {checkIfPortsAreNeeded,checkIfPostsAreNeeded} from 'lib/util';

export default function SinglePortfolio({portfolio,flexibleContent,latestPort,latestPosts}) {
  return (
    <>
        <PortfolioHero port={portfolio} />
        <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
    </>
  )
}

export async function getStaticProps(context){

    const { params } = context

    const getFlexible = await getFlexibleContent('Portfolio',params.slug);

    const {flexible_content} = getFlexible.data[Object.keys(getFlexible.data)[0]]
  
    let loadPort = checkIfPostsAreNeeded(flexible_content,'_Flexiblecontent_LatestPortfolios');
    let loadPosts = checkIfPostsAreNeeded(flexible_content,'_Flexiblecontent_LatestJournal');
    let latestPort = null
    let latestPosts = null
  
    if( loadPort ){
      latestPort = await getLatestPort(18);
    }
  
    if( loadPosts ){
      latestPosts = await getLatestPosts();
    }

    const portfolio = await getPortfolio(params.slug);

    if (!portfolio) {
        return {
            notFound: true
        };
    }

    return {
        props:{
            portfolio:portfolio,
            flexibleContent:flexible_content,
            latestPort:latestPort,
            latestPosts: latestPosts,
            revalidate: 10,
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