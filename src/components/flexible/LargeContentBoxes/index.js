import styles from './LargeContentBoxes.module.scss'

function LargeContentBoxes({data}){

    return(
        <>
            {/* {console.log(data)} */}
            <div className={styles.content_box_wrap}>
                {
                    data.boxes.map((box,i)=>{
                        return(
                            <div key={i} className={[styles.content_box, 'content_box'].join(' ')} dangerouslySetInnerHTML={{__html:box.content}}></div>
                        )
                    })
                }
            </div>
        </>
    )

}

export default LargeContentBoxes