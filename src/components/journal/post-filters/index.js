import Link from 'next/Link'
import styles from './post-filters.module.scss'

function PostFilters({cats,currentCat,postsTotal}){

    return(
        <>
            {/* {console.log(cats)} */}
            <div className={styles.journal_nav}>
                <ul>
                    <li>
                        <Link href='/journal'>
                            <a className={ currentCat == null && 'active' }>All <span className='count'>{postsTotal}</span></a>
                        </Link>
                    </li>
                    {
                        cats.map((cat)=>{
                            return(
                                <li key={cat.slug}>
                                    <Link href={'/journal/category/'+cat.slug}>
                                        <a className={ currentCat == cat.slug && 'active' }>{cat.name} <span className="count">{cat.posts.pageInfo.total}</span></a>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )

}

export default PostFilters