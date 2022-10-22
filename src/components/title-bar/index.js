import styles from './title-bar.module.scss' 

function TitleBar({title}){

    return(
        <div className={[styles.title_bar, 'section'].join(' ')}>
            <div className="container">
                <h1 className={styles.title_bar__title}>{title}</h1>
            </div>
        </div>
    )

}

export default TitleBar