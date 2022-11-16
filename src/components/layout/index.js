import Header from 'components/header'
import Footer from 'components/footer'
import DVD from 'components/dvd'
import { useEffect, useState } from 'react'

function Layout({ children }) {

    const [showDVD,setDVD] = useState(false)

    let showCounter = setTimeout(function(){
        !showDVD ? setDVD(true) : null 
    },20000)

    const checkDVD = () => {
        if( showDVD ){
            setDVD(false)
        }
        clearTimeout(showCounter)
        showCounter = setTimeout(function(){
            !showDVD ? setDVD(true) : null 
        },20000)
    }

    useEffect(()=>{

        document.addEventListener('mousemove', checkDVD)
        document.addEventListener('scroll', checkDVD)

        return () => [document.removeEventListener('mousemove', checkDVD),document.removeEventListener('scroll', checkDVD)];

    },[showDVD])

    return(
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            { showDVD &&
                <DVD />
            }
        </>
    )
}

export default Layout
  