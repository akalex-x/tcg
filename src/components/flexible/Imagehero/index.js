import styles from './Imagehero.module.scss'
import ResImage from 'components/get-image'

function Imagehero({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.image_hero}>
                <div className="container">

                    <div className="mob-only">
                        <ResImage image={data.mobileImage} alt="Let's Work Together" size='lg' />
                    </div>

                    <div className="desk-only">
                        <ResImage image={data.desktopImage} alt="Let's Work Together" size='xxl' />
                    </div>

                </div>
            </section>
        </>
    )

}

export default Imagehero