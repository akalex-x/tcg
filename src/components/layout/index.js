import Header from 'components/header'
import Footer from 'components/footer'
import DVD from 'components/dvd'
import { useEffect, useState } from 'react'

function Layout({ children, showTerms, gSettings }) {

    const globalSettings = gSettings.data.themeGeneralSettings
    const headerSettings = globalSettings.settings_header.header

    const [showDVD,setDVD] = useState(false)

    let showCounter = setTimeout(function(){
        !showDVD ? setDVD(true) : null 
    // },5000)
    },180000)

    const checkDVD = () => {
        if( showDVD ){
            setDVD(false)
        }
        clearTimeout(showCounter)
        showCounter = setTimeout(function(){
            !showDVD ? setDVD(true) : null 
        // },5000)
        },180000)
    }

    const gBanner = headerSettings.bannerMessage

    useEffect(()=>{

        document.addEventListener('mousemove', checkDVD)
        document.addEventListener('scroll', checkDVD)
        document.addEventListener('click', checkDVD)

        return () => [document.removeEventListener('mousemove', checkDVD),document.removeEventListener('scroll', checkDVD),document.removeEventListener('click', checkDVD)];

    },[showDVD])

    return(
        <>
            <Header gBanner={gBanner} />
            <main>
                {children}
            </main>
            <Footer showTerms={showTerms} />
            { showDVD &&
                <DVD />
            }
        </>
    )
}

export default Layout
  