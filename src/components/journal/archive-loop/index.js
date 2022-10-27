import styles from './archive-loop.module.scss'
import ArchiveCard from 'components/journal/archive-card'
import Image from 'next/future/image'

function ArchiveLoop({posts}){

    let first = false
    let second = false
    let third = false

    return(
        <>
            {
                posts.map( (array,i) => {
                    return(
                        <div key={i} className={ first == false ? styles.box_1 : second == false ? styles.box_2 : third == false ? styles.box_3 : styles.box_4  }>
                            {
                                array.map( (post) => {
                                    return(
                                        <ArchiveCard key={post.slug} post={post}/>
                                    )
                                })
                            }

                            {
                                (first == false) ?
                                    (
                                        <>
                                            {first = true}
                                        </>
                                    ) 
                                :
                                    (second == false) ?
                                    (
                                        <>
                                            {second = true}
                                            { array.length == 2 && 
                                                <div className={styles.peace_sign}>
                                                    <Image src="/journal/peace.png" width={601} height={121} alt="Peace Sign Emoji" />
                                                </div>
                                            }
                                        </>
                                    ) 
                                :
                                    (third == false) ?
                                    (
                                        <>
                                            {third = true}
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
                                        {first = false}
                                        {second = false}
                                        {third = false}
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