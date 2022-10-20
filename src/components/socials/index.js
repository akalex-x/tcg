import styles from './socials.module.scss'
import Twitter from 'components/svgs/socials/twitter'
import Facebook from 'components/svgs/socials/facebook'

function Socials({socials}){

    return(
        <>
            <ul className={ [styles.socials_list, 'socials-list'].join(' ')}>
                {socials.twitter &&
                    <li><a href={socials.twitter} target="_blank" rel="noreferrer" ><Twitter /></a></li>
                }
                {socials.facebook &&
                    <li><a href={socials.facebook} target="_blank" rel="noreferrer" ><Facebook /></a></li>
                }
            </ul>
        </>
    )

}

export default Socials