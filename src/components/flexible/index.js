import Imagehero from './Imagehero'
import Featuredportfolio from './Featuredportfolio'
import FiftyFifty from './FiftyFifty'
import LatestJournal from './LatestJournal'

import Quote from './Quote'
import Video from './Video'
import TwitterMarquee from './TwitterMarquee'
import GalleryWithContent from './GalleryWithContent'

import PeopleSection from './PeopleSection'
import CenteredContent from './CenteredContent'
import LargeContentBoxes from './LargeContentBoxes'
import PeopleInfo from './PeopleInfo'
import SplitContent from './SplitContent'
import ContentWithList from './ContentWithList'

import FiftyFiftyParallax from './FiftyFiftyParallax'
import FiftyFiftyParallax2 from './FiftyFiftyParallax2'
import ParallaxBubble from './ParallaxBubble'
import ParallaxBubble2 from './ParallaxBubble2'

import ContentSpotify from './ContentSpotify'

import ContentBlocksHeading from './ContentBlocksHeading'

import dynamic from 'next/dynamic'

const Spotify = dynamic(import('components/flexible/Spotify'), {
    ssr: false
})

function FlexibleContent({flexibleContent,latestPort,latestPosts,latestPeople}){

    const type = flexibleContent.__typename
    const layouts = flexibleContent.flexiblecontent

    const replace = type + '_Flexiblecontent_'

    return(
        <>
            {/* {console.log(layouts)} */}
            {layouts.map( (layout, i) => {
                const layoutName = layout['__typename'].replace(replace, '');
                switch (layoutName) {
                    case 'HeroImages':
                        return <Imagehero key={i} data={layout} />
                    case 'LatestPortfolios':
                        return <Featuredportfolio key={i} latestPort={latestPort} />
                        case 'FiftyFifty':
                            return <FiftyFifty key={i} data={layout} />
                            case 'LatestJournal': 
                            return <LatestJournal key={i} latestPosts={latestPosts} />
                            case 'Spotify': 
                            return <Spotify key={i} data={layout} />
                    case 'VideoWithContent': 
                        return <Video key={i} data={layout} />
                    case 'Quote': 
                        return <Quote key={i} data={layout} />
                        case 'TwitterMarquee': 
                        return <TwitterMarquee key={i} data={layout} />
                    case 'GalleryWithContent':
                        return <GalleryWithContent key={i} data={layout} />
                        case 'PeopleSection':
                        return <PeopleSection key={i} data={layout} />
                    case 'CenteredContent':
                        return <CenteredContent key={i} data={layout} />
                    case 'LargeContentBoxes':
                        return <LargeContentBoxes key={i} data={layout} />
                        case 'PeopleInfo':
                            return <PeopleInfo key={i} data={latestPeople} />
                    case 'SplitContent':
                        return <SplitContent key={i} data={layout} />
                    case 'ContentWithList':
                        return <ContentWithList key={i} data={layout} />
                    case 'ContentSpotify':
                        return <ContentSpotify key={i} data={layout} />
                    case 'ContentBlocksHeading':
                        return <ContentBlocksHeading key={i} data={layout} />
                    case 'FiftyFiftyParallax':
                        return <FiftyFiftyParallax key={i} data={layout} />
                    case 'FiftyFiftyParallax2':
                        return <FiftyFiftyParallax2 key={i} data={layout} />
                    case 'ParallaxBubble':
                        return <ParallaxBubble key={i}/>
                    case 'ParallaxBubble2':
                        return <ParallaxBubble2 key={i}/>
                }
            })}
        </>
    )
}

export default FlexibleContent