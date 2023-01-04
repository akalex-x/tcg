import Link from 'next/link'
import SiteLogo from 'components/svgs/site-logo'
import SiteLogoDark from 'components/svgs/site-logo-dark'
import styles from './header.module.scss'

import { useState, useRef, useEffect  } from 'react'
import horizontalLoop from 'lib/horizontalLoop'

function Header({gBanner}){

    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        showMenu ? setShowMenu(false) : setShowMenu(true)
    }

    let $marquee = useRef(null);

    useEffect(() => {

        document.fonts.ready.then(function () {
                
            const $words = Array.from($marquee.children)
    
            let loop = horizontalLoop($words, {paused: false,repeat:-1, speed:.5,reversed: false });
        
        });

    },[]);

    return(
        <>
            <header className={styles.site_header}>

                <div className={styles.marquee} ref={el => $marquee = el}>
                    <div className={styles.marquee__text} dangerouslySetInnerHTML={{__html: gBanner}}></div>
                    <div className={styles.marquee__text} dangerouslySetInnerHTML={{__html: gBanner}}></div>
                    <div className={styles.marquee__text} dangerouslySetInnerHTML={{__html: gBanner}}></div>
                </div>

                <Link href="/">
                    <a className={styles.site_logo}>
                        { showMenu ? 
                            <SiteLogoDark/>
                            :
                            <SiteLogo/>
                        }
                    </a>
                </Link>

                <nav className={[styles.nav, 'show-menu--'+showMenu].join(' ')}>
                    <ul>
                        <li><Link href="/about"><a>About</a></Link><span>/</span></li>
                        <li><Link href="/portfolio"><a>Portfolio</a></Link><span>/</span></li>
                        <li><Link href="/journal"><a>Journal</a></Link><span>/</span></li>
                        <li><Link href="/contact"><a>Contact</a></Link></li>
                    </ul>
                </nav>

                <button type="button" onClick={()=>toggleMenu()} className={[styles.menu_burger, showMenu?styles.menu_burger__active:null].join(' ')} title="Menu">
                    <span className={styles.menu_burger__text}>Menu</span>
                    <span className={styles.menu_burger__icon}><span></span></span>
                </button>

            </header>
        </>
    )
}

export default Header