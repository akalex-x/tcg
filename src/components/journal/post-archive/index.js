import styles from './post-archive.module.scss'
import ArchiveCard from 'components/journal/archive-card'
import Image from 'next/future/image'

function PostArchive({posts}){


    let allPosts = [...posts];
    let splitArray = [];

    function breakArray(array){
        if(array.length){
            splitArray.push(array.splice(0,1))
        }
        if(array.length){
            splitArray.push(array.splice(0,2))
        }
        if(array.length){
            splitArray.push(array.splice(0,3))
        }
        if(array.length){
            splitArray.push(array.splice(0,3))
        }
        if(array.length){
            breakArray(array)
        }
    }

    breakArray(allPosts)

    let first = false
    let second = false
    let third = false

    return(
        <>
            <section className={styles.port_loop}>
                <div className='container'>
                    {
                        splitArray.map( (array,i) => {
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
                </div>
            </section>
        </>
    )

}

export default PostArchive