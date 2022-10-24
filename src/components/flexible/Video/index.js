import styles from './PortfolioVideo.module.scss'
import dynamic from 'next/dynamic'

const CustomVideo = dynamic(import('components/custom-video'), {
    ssr: false
})

function Video({data}){

    const meta = data.meta

    return(
        <>
            {/* {console.log(data)} */}
            <section className={styles.portfolio_video}>
                <div className="container">
                    <span>Video</span>
                    <div className={styles.portfolio_video__player}>
                        <CustomVideo name={data.title} video={data.video.mediaItemUrl} />
                    </div>
                    <div className={styles.portfolio_video__content}>
                        <div className="content-wrap" dangerouslySetInnerHTML={{__html: data.content}}>
                        </div>
                        <div className="meta-wrap">
                            <ul>
                                {
                                    meta.map((label,i) => {
                                        return(
                                            <li key={i}>{label.label}</li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Video