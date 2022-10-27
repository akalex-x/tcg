import styles from "./breadcrumbs.module.scss"
import Link from "next/link"
import Arrow from "components/svgs/arrow"

function ArticleBreadcrumbs({post}){

    return(
        <>
            {console.log(post)}
            <ul className={styles.breadcrumbs}>
                <li>
                    <Link href="/journal">
                        <a>Journal <Arrow/></a>
                    </Link>
                </li>
                { post.categories.nodes.length >= 1 && post.categories.nodes[0].name != 'Uncategorized' &&
                    <li>
                        <Link href={'/journal/category/'+post.categories.nodes[0].slug}>
                            <a>{post.categories.nodes[0].name} <Arrow/></a>
                        </Link>
                    </li>
                }
                <li>{post.title}</li>
            </ul>
        </>
    )

}

export default ArticleBreadcrumbs