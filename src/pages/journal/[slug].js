import {getPostPaths,getPost} from 'fetch/posts'
import Article from 'components/article'


export default function SinglePortfolio({post}) {
  return (
    <>
        {console.log(post)}
        <Article post={post} />
    </>
  )
}

export async function getStaticProps(context){

    const { params } = context

    const post = await getPost(params.slug);

    if (!post) {
        return {
            notFound: true
        };
    }

    return {
        props:{
            post:post,
            revalidate: 10,
        }
    };

}

export async function getStaticPaths(){

    const postPaths = await getPostPaths(30);

    const paths = postPaths.map(path => {
        return{
            params: {
                slug: `${path.slug}`
            }
        }
    })

    return{
        paths: paths,
        fallback:'blocking'
    }

}