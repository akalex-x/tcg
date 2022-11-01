import Image from 'next/future/image'

function ResImage({image,size,alt}){
    
    const resImages = image.mediaDetails

    const defaultImage = {
        sourceUrl: image.sourceUrl,
        height: resImages.height,
        width: resImages.width,
    };

    const sizes = resImages.sizes

    // console.log(sizes)
    
    let sImage =  null

    sizes.map((cimage) => {
        cimage.name == size ? sImage = cimage : null
    })

    sImage == null ? sImage = defaultImage : null

    return(
        <>
            { sImage != null ?
                <Image src={sImage.sourceUrl} height={sImage.height} width={sImage.width} alt={alt} />
            : null }
        </>
    )
}

export default ResImage