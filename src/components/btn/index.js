import Link from "next/link"
import Arrow from "components/svgs/arrow"

function Button({href,content,type}){

    if( href == '' || href == null ){
        return false;
    }

    switch (type) {
        case 'text':
            return(
                <Link href={href}>
                    <a className="text-btn">{content} <Arrow /></a>
                </Link>
            )
        case 'text--blank':
            return(
                <a href={href} target="_blank" rel="noreferrer" className="text-btn">{content} <Arrow /></a>
            )
        case 'pill':
            return(
                <Link href={href}>
                    <a className="btn btn--pill">{content} <Arrow /></a>
                </Link>
            )
        default:
            return(
                <Link href={href}>
                    <a className="btn">{content}</a>
                </Link>
            )
    }

}

export default Button