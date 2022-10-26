import styles from './article-hero.module.scss'

function Article({post}){
    return(
        <>
            {/* {console.log(post)} */}
            <div></div>
            <article className={styles.blog_post}>
                <h1>{post.title}</h1>
                <div className={styles.blog_post__content} dangerouslySetInnerHTML={{__html: post.content}}></div>
            </article>
        </>
    )
}

export default Article