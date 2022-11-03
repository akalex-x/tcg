import styles from './socials.module.scss'
import Twitter from 'components/svgs/socials/twitter'
import Facebook from 'components/svgs/socials/facebook'

function Socials({socials}){

    return(
        <>
            { socials && 
                <ul className={ [styles.socials_list, 'socials-list'].join(' ')}>
                    {socials.facebook &&
                        <li><a href={socials.facebook} target="_blank" rel="noreferrer" ><Facebook /></a></li>
                    }
                    {socials.twitter &&
                        <li><a href={socials.twitter} target="_blank" rel="noreferrer" ><Twitter /></a></li>
                    }
                    {socials.linkedin &&
                        <li><a href={socials.linkedin} target="_blank" rel="noreferrer" ><Twitter /></a></li>
                    }
                </ul>
            }
        </>
    )

}

export default Socials