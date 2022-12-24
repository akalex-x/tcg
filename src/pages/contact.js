import {getMetaData} from 'fetch/meta';

import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {getPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'
import {checkIfPostsAreNeeded} from 'lib/util';
import Layout from 'components/layout'

export default function Contact({flexibleContent,latestPort,latestPosts}) {
  return (
    <>
      <Layout>
        <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
      </Layout>
    </>
  )
}

export async function getStaticProps(){

  const getMeta = await getMetaData('Page','/contact');

  const getFlexible = await getFlexibleContent('Page','/contact');

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
        meta: getMeta,
        flexibleContent:flexible_content,
        latestPort:latestPort,
        latestPosts: latestPosts,
        revalidate: 10,
      }
  };

}