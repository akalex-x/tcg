import Image from 'next/future/image'

export function getCatImage(cat){

    switch (cat) {
      case 'fandom':
        return <Image alt="Fandom Icon" width={16} height={16} src='/cats/fandom.svg' />
      case 'globe':
        return <Image alt="Globe Icon" width={16} height={16} src='/cats/globe.svg' />
      case 'digital-identity':
        return <Image alt="Digital Identity Icon" width={16} height={16} src='/cats/digital-identity.svg' />
    }

}
  