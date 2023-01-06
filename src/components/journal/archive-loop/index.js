import styles from './archive-loop.module.scss'
import ArchiveCard from 'components/journal/archive-card'
import Image from 'next/future/image'

function ArchiveLoop({posts,featuredQuote}){

    let first = true
    let second = true
    let third = true

    return(
        <>
            {/* {console.log(posts)} */}
            {/* {console.log(featuredQuote)} */}
            {
                posts.map( (array,i) => {
                    return(
                        <div key={i} className={ first == true ? styles.box_1 : second == true ? styles.box_2 : third == true ? styles.box_3 : styles.box_4  }>

                            {
                                array.map( (post) => {
                                    return(
                                        <ArchiveCard key={post.slug} post={post} box={ first == true ? 'box_1' : second == true ? 'box_2' : third == true ? 'box_3' : 'box_4' }/>
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
                                                        &quot;{featuredQuote.quote}&quot;
                                                    </blockquote>
                                                    { featuredQuote.cite &&
                                                        <cite>{featuredQuote.cite}</cite>
                                                    }
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