import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {getPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'
import {checkIfPostsAreNeeded} from 'lib/util';
import Layout from 'components/layout'
import { getGlobalSettings } from 'fetch/settings';

export default function Home({flexibleContent,latestPort,latestPosts,gSettings}) {
  return (
    <>
      {/* { console.log(flexibleContent) } */}
      <Layout gSettings={gSettings}>
        <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps(){

  const gSettings = await getGlobalSettings();

  const getFlexible = await getFlexibleContent('Page','/home-2');

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
        gSettings: gSettings,
        flexibleContent:flexible_content,
        latestPort:latestPort,
        latestPosts: latestPosts,
        revalidate: 10,
      }
  };

}