import Image from 'next/future/image'

export function getCatImage(cat){

    switch (cat) {
      case 'digital-identity':
        return <Image alt="Digital Identity Icon" width={16} height={16} src='/cats/digital-identity.png' />

      case 'art':
        return <Image alt="Digital Art Icon" width={16} height={16} src='/cats/art.png' />
      case 'design':
        return <Image alt="Digital Design Icon" width={16} height={16} src='/cats/design.png' />
      case 'education':
        return <Image alt="Digital Educatin Icon" width={16} height={16} src='/cats/education.png' />
      case 'mobile':
        return <Image alt="Digital Mobile Icon" width={16} height={16} src='/cats/mobile.png' />
      case 'music':
        return <Image alt="Digital Music Icon" width={16} height={16} src='/cats/music.png' />

      case 'utility':
        return <Image alt="Utility Icon" width={16} height={16} src='/cats/utility.png' />
      case 'gaming':
        return <Image alt="Gaming Icon" width={16} height={16} src='/cats/gaming.png' />
      case 'entertainment':
        return <Image alt="Entertainment Icon" width={16} height={16} src='/cats/entertainment.png' />
      case 'collectives':
        return <Image alt="Collectives Icon" width={16} height={16} src='/cats/collectives.png' />
    }

}
  