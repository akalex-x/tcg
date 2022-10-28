import Link from 'next/link'
import styles from './post-filters.module.scss'
import Arrow from 'components/svgs/arrow'

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
    
    return(
        <>
            {/* {console.log(cats)} */}
            {/* {console.log(authors)} */}
            {/* {console.log(currentAuthors)} */}
            <div className={styles.journal_nav}>
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
                        <button type='button' className={[styles.filter_btn,'reset filter-btn'].join(' ')}>Filter <Arrow /></button>
                        <div className={styles.filter_bar__authors}>
                            {
                                currentAuthors.map((author)=>{
                                    return(
                                        <button key={author.userId} type='button' onClick={()=>{onFilter(author.userId)}}>{author.name}</button>
                                    )
                                })
                            }
                        </div>
                    </div>
                : null }
            </div>
        </>
    )

}

export default PostFilters