import styles from './article.module.scss'
import ResImage from 'components/get-image'
import {formatDate} from 'lib/util'
import ShareSVG from 'components/svgs/share'
import Twitter from 'components/svgs/socials/twitter'
import Facebook from 'components/svgs/socials/facebook'
import Email from 'components/svgs/socials/email'

import { useState } from 'react'

import AdjacentPosts from 'components/journal/adjacent-posts'

function Article({post,adjacentPosts}){

    const date = new Date(post.date);

    const [share,setShare] = useState(false)

    const regex = /<p\b[^<>\/]*>\s*(<img\b[^<>]*>)\s*<\/p>/g;

    const toggleShare = () => {
        share ? setShare(false) : setShare(true)
    }

    return(
        <>
            {/* {console.log(post)} */}
            <article className={styles.article}>

                <div className={styles.article_hero}>

                    <div className={styles.article_hero__meta}>
                        { post.categories.nodes.length >= 1 && post.categories.nodes[0].name != 'Uncategorized' &&
                            <span className='h4'>{post.categories.nodes[0].name}</span>
                        }
                        <span className='h4'>{formatDate(date)}</span>
                    </div>

                    <h1 className="h2">{post.title}</h1>

                    <div className={styles.article_hero__extra}>
                        <span className='h4'>by: {post.author.node.name}</span>
                        <div className={styles.share_box}>
                            <button className={[styles.share_btn, "reset h4"].join(' ')} onClick={()=>toggleShare()}><ShareSVG /> Share</button>
                            { share &&
                                <ul className={styles.share_links}>
                                    <li><a rel="noreferrer" href={'https://www.facebook.com/sharer/sharer.php?u=' + process.env.VERCEL_URL + '/journal/' + post.slug} target="_blank"><Facebook /></a></li>
                                    <li><a rel="noreferrer" href={'https://twitter.com/intent/tweet?text='+process.env.VERCEL_URL + '/journal/' + post.slug} target="_blank"><Twitter /></a></li>
                                    <li><a rel="noreferrer" href={'mailto:?subject=Check%20Out%20This%20Article&body='+process.env.VERCEL_URL + '/journal/' + post.slug} target="_blank"><Email /></a></li>
                                </ul>
                            }
                        </div>
                    </div>

                    { post.featuredImage &&
                        <ResImage image={post.featuredImage.node} alt={post.title} size={'lg'} />
                    }

                </div>

                <div className={styles.article_content} dangerouslySetInnerHTML={{ __html: post.content.replace(regex, '$1') }}></div>

                <AdjacentPosts posts={adjacentPosts} />

            </article>
        </>
    )
}

export default Article