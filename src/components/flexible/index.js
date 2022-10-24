import Imagehero from './Imagehero'
import Featuredportfolio from './Featuredportfolio'
import FiftyFiftyParallax from './FiftyFiftyParallax'
import LatestJournal from './LatestJournal'

import Quote from './Quote'
import Video from './Video'

import dynamic from 'next/dynamic'

const Spotify = dynamic(import('components/flexible/Spotify'), {
    ssr: false
})

function FlexibleContent({flexibleContent,latestPort,latestPosts}){

    const type = flexibleContent.__typename
    const layouts = flexibleContent.flexiblecontent

    const replace = type + '_Flexiblecontent_'

    return(
        <>
            {console.log(layouts)}
            {layouts.map( (layout, i) => {
                const layoutName = layout['__typename'].replace(replace, '');
                switch (layoutName) {
                    case 'HeroImages':
                        return <Imagehero key={i} data={layout} />
                    case 'LatestPortfolios':
                        return <Featuredportfolio key={i} latestPort={latestPort} />
                    case 'FiftyFiftyParallax':
                        return <FiftyFiftyParallax key={i} data={layout} />
                    case 'LatestJournal': 
                        return <LatestJournal key={i} latestPosts={latestPosts} />
                    case 'Spotify': 
                        return <Spotify key={i} data={layout} />
                    case 'VideoWithContent': 
                        return <Video key={i} data={layout} />
                    case 'Quote': 
                        return <Quote key={i} data={layout} />
                }
            })}
        </>
    )
}

export default FlexibleContent