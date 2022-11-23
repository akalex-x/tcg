import styles from './dvd.module.scss'
import { useEffect } from 'react'

function DVD(){

    useEffect( () => {

        let speed = .01;
        let scale = 0.3; // Image scale (I work on 1080p monitor)
        let canvas;
        let ctx;
        let logoColor;

        let dvd = {
            x: 200,
            y: 300,
            xspeed: 2,
            yspeed: 2,
            img: new Image()
        };

        (function main(){
            canvas = document.getElementById("tv-screen");
            ctx = canvas.getContext("2d");
            dvd.img.src = '/dvd-logo.png';

            //Draw the "tv screen"
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;

            pickColor();
            update();
        })();

        function updateCanvas(){
            canvas.width  = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        function update() {
            setTimeout(() => {
                //Draw the canvas background
                ctx.fillStyle = '#10069f';
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                //Draw DVD Logo and his background
                ctx.fillStyle = logoColor;
                ctx.fillRect(dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
                ctx.drawImage(dvd.img, dvd.x, dvd.y, dvd.img.width*scale, dvd.img.height*scale);
                //Move the logo
                dvd.x+=dvd.xspeed;
                dvd.y+=dvd.yspeed;
                //Check for collision 
                checkHitBox();
                update();   
            }, speed)
        }

        //Check for border collision
        function checkHitBox(){
            if(dvd.x+dvd.img.width*scale >= canvas.width || dvd.x <= 0){
                dvd.xspeed *= -1;
                pickColor();
            }
                
            if(dvd.y+dvd.img.height*scale >= canvas.height || dvd.y <= 0){
                dvd.yspeed *= -1;
                pickColor();
            }    
        }

        //Pick a random color in RGB format
        function pickColor(){
            // let r = Math.random() * (254 - 0) + 0;
            let r = '255';
            // let g = Math.random() * (254 - 0) + 0;
            let g = '255';
            // let b = Math.random() * (254 - 0) + 0;
            let b = '255';

            // logoColor = 'rgb('+r+','+g+', '+b+')';
            logoColor = '#10069f';
        }

        window.addEventListener('resize',updateCanvas)

        return () => { window.removeEventListener('resize',updateCanvas) }

    },[]);

    return(
        <>
            <canvas id="tv-screen" className={styles.dvd}></canvas>
        </>
    )

}

export default DVD