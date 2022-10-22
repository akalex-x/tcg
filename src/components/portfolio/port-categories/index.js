import styles from './port-categories.module.scss'

function PortCategories({cats}){
    
    if( cats.length ){
        
        return(
            <>
                <ul className={[styles.port_cats, 'port-cats'].join(' ')}>
                    {
                        cats.map((cat,i)=>{
                            return(
                                <li>{cat.name}</li>
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