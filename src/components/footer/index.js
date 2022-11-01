import Link from 'next/link'
import Arrow from 'components/svgs/arrow'

function Footer(){

    const year = new Date().getFullYear()

    return(
        <>
            <footer className="gfooter">
                <div className="gfooter__cta">
                    <div className="container">
                        <p>Work with us!</p>
                        <p><a href="" target="_blank">Available Positions</a> &nbsp;|&nbsp; <a href="">Portfolio Positions</a></p>
                    </div>
                </div>
                <form className='gfooter__subscribe' action="">
                    <h2>Sign up for <span>our mailing list.</span></h2>
                    <input type="text" placeholder='Enter email address' />
                    <button type='submit' className='reset text-btn'>Submit <Arrow /></button>
                </form>
                <div className="gfooter__copy"> 
                    <p>&copy; TCG crypto, {year}</p>
                    <ul>
                        <li><a href="" target="_blank"  rel="noreferrer" >Twitter</a>/</li>
                        <li><a href="" target="_blank"  rel="noreferrer" >Instagram</a>/</li>
                        <li><Link href="/contact"><a>Contact Us</a></Link>/</li>
                        <li><a href="https://tcg.co/" target="_blank"  rel="noreferrer" >tcg.co</a></li>
                    </ul>
                </div>
            </footer>
        </>
    )

}

export default Footer