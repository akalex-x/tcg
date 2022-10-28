import styles from './archive-loop.module.scss'
import ArchiveCard from 'components/journal/archive-card'
import Image from 'next/future/image'

function ArchiveLoop({posts}){

    let first = true
    let second = true
    let third = true

    return(
        <>
            {/* {console.log(posts)} */}
            {
                posts.map( (array,i) => {
                    return(
                        <div key={i} className={ first == true ? styles.box_1 : second == true ? styles.box_2 : third == true ? styles.box_3 : styles.box_4  }>

                            {
                                array.map( (post) => {
                                    return(
                                        <ArchiveCard key={post.slug} post={post}/>
                                    )
                                })
                            }

                            {
                                (first == true) ? first = false
                                :
                                (second == true) ?
                                    (
                                        <>
                                            {second = false}
                                            { array.length == 2 && 
                                                <div className={styles.peace_sign}>
                                                    <Image src="/journal/peace.png" width={601} height={121} alt="Peace Sign Emoji" />
                                                </div>
                                            }
                                        </>
                                    ) 
                                :
                                (third == true) ?
                                    (
                                        <>
                                            {third = false}
                                            { array.length == 3 && 
                                                <div className={styles.quote}>
                                                    <blockquote>
                                                        &quot;The true method of knowledge is experiment.&quot;
                                                    </blockquote>
                                                    <cite>William Blake</cite>
                                                </div>
                                            }
                                        </>
                                    ) 
                                :
                                (
                                    <>
                                        {first = true}
                                        {second = true}
                                        {third = true}
                                    </>
                                ) 
                            }

                        </div>
                    )
                })
            }
        </>
    )
}

export default ArchiveLoop