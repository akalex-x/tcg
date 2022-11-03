import styles from './people-info.module.scss'
import { useState } from 'react'
import SectionIntro from 'components/section-intro'
import ResImage from 'components/get-image'
import Socials from 'components/socials'
import Arrow from 'components/svgs/arrow'

function PeopleInfo({data}){

    const [person,setPerson] = useState(data[0])

    const acf = person.peopleSingle

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.people_section}>

                <SectionIntro title="People" />

                <div className="container">

                    <div className={styles.people_section__names}>
                        <ul>
                            {
                                data.map((people)=>{
                                    return(
                                        <li key={people.slug}>
                                            <button 
                                                className={ [people.slug == person.slug ? 'active' : null,'reset'].join(' ') }
                                                onClick={()=>setPerson(people)}
                                                type="button"><Arrow />{people.title}</button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className={styles.people_section__profile}>
                        <div className={styles.person_profile}>

                            <div className={styles.person_profile__top}>
                                <div className={styles.person_profile__image}>
                                    <ResImage image={person.featuredImage.node} size="sm" alt={person.title} />
                                </div>
                                <div className={styles.person_profile__position}>
                                    <span>{acf.position}</span>
                                </div>
                            </div>

                            <div className={styles.person_profile__content}>
                                <h3>{person.title}</h3>
                                <div className="content-wrap" dangerouslySetInnerHTML={{__html:person.content}}></div>
                                <Socials socials={acf.socials} />
                            </div>

                        </div>
                    </div>
                    
                </div>
                
            </section>
        </>
    )

}

export default PeopleInfo