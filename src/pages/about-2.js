import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {getPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'
import {getLatestPeople} from 'fetch/people'
import {checkIfPostsAreNeeded} from 'lib/util';
import Layout from 'components/layout'
import TitleBar from 'components/title-bar'

import { getGlobalSettings } from 'fetch/settings';

export default function About({flexibleContent,latestPort,latestPosts,latestPeople,gSettings}) {
  return (
    <>
      <Layout gSettings={gSettings}>
        <TitleBar title="About" />
        <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} latestPeople={latestPeople} />
      </Layout>
    </>
  )
}

export async function getStaticProps(){

  const gSettings = await getGlobalSettings();

  const getFlexible = await getFlexibleContent('Page','/about-2');

  const {flexible_content} = getFlexible.data[Object.keys(getFlexible.data)[0]]

  let loadPort = checkIfPostsAreNeeded(flexible_content,'_Flexiblecontent_LatestPortfolios');
  let loadPosts = checkIfPostsAreNeeded(flexible_content,'_Flexiblecontent_LatestJournal');
  let latestPort = null
  let latestPosts = null

  const latestPeople = await getLatestPeople(100);

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
        latestPeople:latestPeople,
        revalidate: 10,
      }
  };

}