import {getMetaData} from 'fetch/meta';

import {getPortfolioPaths,getPortfolio} from 'fetch/portfolio'
import PortfolioHero from 'components/portfolio/portfolio-hero'

import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {getPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'
import {checkIfPostsAreNeeded} from 'lib/util';

import { getGlobalSettings } from 'fetch/settings';

import Layout from 'components/layout'

export default function SinglePortfolio({portfolio,flexibleContent,latestPort,latestPosts,gSettings}) {
  return (
    <>
        <Layout gSettings={gSettings}>
            <PortfolioHero port={portfolio} />
            <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
        </Layout>
    </>
  )
}

export async function getStaticProps(context){

    const gSettings = await getGlobalSettings();

    const { params } = context

    const getMeta = await getMetaData('Portfolio',params.slug);

    const getFlexible = await getFlexibleContent('Portfolio',params.slug);

    const {flexible_content} = getFlexible.data[Object.keys(getFlexible.data)[0]]
  
    let loadPort = checkIfPostsAreNeeded(flexible_content,'_Flexiblecontent_LatestPortfolios');
    let loadPosts = checkIfPostsAreNeeded(flexible_content,'_Flexiblecontent_LatestJournal');
    let latestPort = null
    let latestPosts = null
  
    if( loadPort ){
      latestPort = await getPort(18);
    }
  
    if( loadPosts ){
      latestPosts = await getLatestPosts(5);
    }

    const portfolio = await getPortfolio(params.slug);

    if (!portfolio) {
        return {
            notFound: true
        };
    }

    return {
        props:{
            meta: getMeta,
            gSettings: gSettings,
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