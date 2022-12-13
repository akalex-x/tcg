import Link from 'next/link'
import Arrow from 'components/svgs/arrow'
import { useRef,useState } from 'react'

function Footer(){

    const year = new Date().getFullYear()

    let $email = useRef(null);

    const [showSubcribe, setshowSubcribe] = useState(true)


    function klaviyoSubmit(e){

        e.preventDefault();

        const source = 'website footer'
        const email = $email.value
        var url = "https://manage.kmail-lists.com/ajax/subscriptions/subscribe";
                
        var xhr = new XMLHttpRequest();
        // assemble the form data for the request
        var data = `g=WbCvZa&email=${encodeURIComponent(email)}&$fields=$source&$source=${source}`;
        // open the request
        xhr.open("POST", url, true);
        // add the headers to the request
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.setRequestHeader("cache-control", "no-cache");
        // log response when request completes
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                const res = JSON.parse(xhr.response);
                if( res.success){
                    setshowSubcribe(false)
                }
            }
        };
        // send request with form data
        xhr.send(data);

    }

    return(
        <>
            <footer className="gfooter">
                <div className="gfooter__cta">
                    <div className="container">
                        <p>Work with us!</p>
                        <p><a href="" target="_blank">Available positions with TCG Crypto</a> &nbsp;|&nbsp; <a href="">Portfolio Companies</a></p>
                    </div>
                </div>
                <form className='gfooter__subscribe' action="" onSubmit={ e => klaviyoSubmit(e) }>
                    <h2>For the latest on TCG Crypto:</h2>
                    { showSubcribe ?
                            <>
                            <input type="email" placeholder='Enter email address' ref={el=>$email=el}/>
                            <button type='submit' className='reset text-btn'>Submit <Arrow /></button>
                            </>
                        :
                            <span className='thanks'>Thank you for subscribing!</span>    
                    }
                </form>
                <div className="gfooter__copy"> 
                    <p><a href="https://twitter.com/tcg_crypto" target="_blank"  rel="noreferrer">&copy; TCG crypto, {year}</a></p>
                    <ul>
                        <li><a href="https://twitter.com/tcg_crypto" target="_blank"  rel="noreferrer">Twitter</a>/</li>
                        <li><Link href="/contact"><a>Contact Us</a></Link>/</li>
                        <li><a href="https://tcg.co/" target="_blank"  rel="noreferrer">tcg.co</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )

}

export default Footer