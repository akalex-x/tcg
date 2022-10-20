import { useRef, useState, useEffect } from "react";
import styles from "./customVideo.module.scss";
import Image from 'next/future/image'

function CustomVideo({video, name}) {

	const videoRef = useRef(null);
	const [playing, setPlaying] = useState(false);
	const [played, setPlayed] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [videoTime, setVideoTime] = useState(0);
	const [progress, setProgress] = useState(0);

	
	const videoHandler = (control) => {
		if (control === "play") {
			videoRef.current.play();
			setPlaying(true);
			setPlayed(true);
		} else if (control === "pause") {
			videoRef.current.pause();
			setPlaying(false);
		}
	};

	const fastForward = () => {
		videoRef.current.currentTime += 5;
	};

	const revert = () => {
		videoRef.current.currentTime -= 5;
	};

	const setMetaData = event => {
		setVideoTime(videoRef.current.duration);
	};
	
    useEffect(() => {
        window.setInterval(function () {
            setCurrentTime(videoRef.current?.currentTime);
            setProgress((videoRef.current?.currentTime / videoTime) * 100);
        }, 1000);
    });

	return (
		<div className={styles.custom_video}>

			<video
				ref={videoRef}
				onLoadedMetadata={setMetaData} 
				className="video"
				src={video}
			></video>

			<div className={styles.custom_video__tools}>

				<div className={styles.custom_video__controls}>
					{/* <img
					onClick={revert}
					className="controlsIcon"
					alt=""
					src="/backward-5.svg"
					/> */}
					{playing ? (
						<button onClick={() => videoHandler("pause")} type="button" className="reset">
							<Image src="/pause.svg" width={7.5} height={7.5}  alt="Pause Icon" />
						</button>
					) : (
						<button onClick={() => videoHandler("play")} type="button" className="reset">
							<Image src="/play.svg" width={7.5} height={9.6} alt="Play Icon" />
						</button>
					)}
					{/* <img
					className="controlsIcon"
					onClick={fastForward}
					alt=""
					src="/forward-5.svg"
					/> */}
				</div>
				
				<div className={styles.custom_video__name}>
					<p>{name}</p>
				</div>

				<div className={styles.custom_video__progress}>
					<div
						className={styles.custom_video__progress__bar}
						style={{ width: `${progress}%` }}
					></div>
				</div>

				<div className={styles.custom_video__counter}>
					{played ? (
						<span className="controlsTime current">
							{Math.floor(currentTime / 60) +
							":" +
							("0" + Math.floor(currentTime % 60)).slice(-2)}
						</span>
					) : (
						<span className="controlsTime total">
							{Math.floor(videoTime / 60) +
							":" +
							("0" + Math.floor(videoTime % 60)).slice(-2)}
						</span>
					)}
				</div>

			</div>

		</div>
	);
}

export default CustomVideo;