import Link from 'next/link'
import styles from './post-filters.module.scss'
import Arrow from 'components/svgs/arrow'
import {useState} from 'react'

function PostFilters({cats,currentCat,postsTotal,authors,onFilter}){

    let currentAuthors = [];

    if( currentCat != null ){
        authors.map((author)=>{
            const authorCats = author.posts.nodes
            authorCats.map((aCat)=>{
                if(aCat.categories.nodes.length){
                    const slug = aCat.categories.nodes[0].slug
                    if( slug == currentCat ){
                        currentAuthors.push(author)
                        return false;
                    }
                }
            })
        })
    }else{
        currentAuthors = authors
    }

    const [showAuth,setShowAuth] = useState(false)

    const toggleShowAuth = () => {
        showAuth ? setShowAuth(false) : setShowAuth(true)
    }
    
    return(
        <>
            {/* {console.log(cats)} */}
            {/* {console.log(authors)} */}
            {/* {console.log(currentAuthors)} */}
            <div className={styles.journal_nav}>
                <div className="container">
                    <ul className={styles.journal_cats}>
                        <li>
                            <Link href='/journal'>
                                <a className={ currentCat == null ? 'active' : null }>All <span className='count'>{postsTotal}</span></a>
                            </Link>
                        </li>
                        {
                            cats.map((cat)=>{
                                return(
                                    <li key={cat.slug}>
                                        <Link href={'/journal/category/'+cat.slug}>
                                            <a className={ currentCat == cat.slug ? 'active' : null }>{cat.name} <span className="count">{cat.posts.pageInfo.total}</span></a>
                                        </Link>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    { currentAuthors.length > 1 ?
                        <div className={styles.filter_bar}>
                            <button type='button' onClick={()=>toggleShowAuth()} className={[styles.filter_btn,'reset filter-btn',showAuth].join(' ')}>Filter <Arrow /></button>
                            { showAuth ? 
                                <div className={styles.filter_bar__authors}>
                                    <span>By Author:</span>
                                    {
                                        currentAuthors.map((author)=>{
                                            return(
                                                <button className='reset' key={author.userId} type='button' onClick={()=>{onFilter(author.userId)}}>{author.name}</button>
                                                )
                                            })
                                    }
                                </div>
                            : null }
                        </div>
                    : null }
                </div>
            </div>
        </>
    )

}

export default PostFilters