import styles from './section-intro.module.scss'
import Button from 'components/btn'

function SectionIntro({title,link,cta,mobCta}){
    return(
        <>
            <div className={styles.section_intro}>
                <div className='container'>
                        <h2>{title}</h2>
                        <div className="mob-only">
                            <Button href={link} type="pill" content={mobCta} />
                        </div>
                        <div className="desk-only">
                            <Button href={link} type="pill" content={cta} />
                        </div>
                </div>
            </div>
        </>
    )
}

export default SectionIntro