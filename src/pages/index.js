import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {getPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'
import {checkIfPostsAreNeeded} from 'lib/util';
import Layout from 'components/layout'
// import HomeHero from 'components/home-hero'

export default function Home({flexibleContent,latestPort,latestPosts}) {
  return (
    <>
      <Layout>
        {/* <HomeHero /> */}
        <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps(){

  const getFlexible = await getFlexibleContent('Page','/');

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

  return {
      props:{
        flexibleContent:flexible_content,
        latestPort:latestPort,
        latestPosts: latestPosts,
        revalidate: 10,
      }
  };

}