import styles from './post-archive.module.scss'
import ArchiveLoop from 'components/journal/archive-loop';
import {useState} from 'react'

function PostArchive({posts}){

    const [showAll,setShow] = useState(false)

    let allPosts = [...posts];
    let startArray = [];
    let moreArray = [];

    function breakArray( posts, saveArray, loop ){
        if(posts.length){
            saveArray.push(posts.splice(0,1))
        }
        if(posts.length){
            saveArray.push(posts.splice(0,2))
        }
        if(posts.length){
            saveArray.push(posts.splice(0,3))
        }
        if(posts.length){
            saveArray.push(posts.splice(0,3))
        }
        if(posts.length && loop == true){
            breakArray(posts,saveArray,true)
        }
    }

    breakArray(allPosts,startArray,false)
    breakArray(allPosts,moreArray,true)

    return(
        <>
            <section className={styles.port_loop}>
                <div className='container'>
                    
                    <ArchiveLoop posts={startArray} />

                    { showAll ? 
                        <ArchiveLoop posts={moreArray} />
                    : null }

                    { moreArray.length && !showAll ? (
                        <div className={styles.port_loop__footer}>
                            <button className='btn' type='button' onClick={() => setShow(true)}>Show All</button>
                        </div>
                    ) : null }

                </div>
            </section>
        </>
    )

}

export default PostArchive