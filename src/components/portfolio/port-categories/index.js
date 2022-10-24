import styles from './port-categories.module.scss'
import {getCatImage} from 'lib/getCatImage'

function PortCategories({cats}){
    
    if( cats.length ){
        
        return(
            <>
                <ul className={[styles.port_cats, 'port-cats'].join(' ')}>
                    {
                        cats.map((cat,i)=>{
                            return(
                                <li key={cat.slug}>{getCatImage(cat.slug)} <span>{cat.name}</span></li>
                            )
                        })
                    }
                </ul>
            </>
        )

    }else{
        return false
    }

}

export default PortCategories