import FlexibleContent from 'components/flexible';
import {getFlexibleContent} from 'fetch/flexible';
import {getLatestPort} from 'fetch/portfolio'
import {getLatestPosts} from 'fetch/posts'
import {checkIfPortsAreNeeded,checkIfPostsAreNeeded} from 'lib/util';

export default function Home({flexibleContent,latestPort,latestPosts}) {
  return (
    <>
      <FlexibleContent flexibleContent={flexibleContent} latestPort={latestPort} latestPosts={latestPosts} />
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
    latestPort = await getLatestPort(18);
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