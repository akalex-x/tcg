import styles from './PeopleSection.module.scss'
import Button from 'components/btn'
import ResImage from 'components/get-image'

function PeopleSection({data}){
    
    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.people_section}>
                <div className='container'>

                    <div className={styles.people_section__people}>
                        {
                            data.people.map((staff,i) => {
                                return(
                                    <div key={i} className={[styles.staff_card, 'staff_card'].join(' ')}>
                                        <ResImage image={staff.image} alt={staff.name} size='sm' />
                                        <h5>{staff.name}</h5>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className={styles.people_section__content}>
                        <div className="content-wrap" dangerouslySetInnerHTML={{__html:data.content}}></div>
                        { data.cta ?
                            <Button href={data.ctaLink} content={data.cta} type="text" />
                        : null }
                    </div>

                </div>
            </section>
        </>
    )
    
}

export default PeopleSection