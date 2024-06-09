// 'use client'

// import classNames from "classnames";
// import styles from "./Player.module.css";
// import { ChangeEvent, useEffect, useRef, useState } from "react";
// import { TrackType } from "@/Types";
// import ProgressBar from "../ProgressBar/ProgressBar";

// type PlayerType = {
//   track: TrackType;
// }

// export default function Player({ track }: PlayerType) {
//   const audioRef = useRef<null | HTMLAudioElement>(null);
//   const [currentTime, setCurrentTime] = useState<number>(0);
//   const [isPlaying, setIsPlaying] = useState<boolean>(false);


//   const duration = audioRef.current?.duration;

//   const togglePlay = () => {
//     if (audioRef.current) {
//       if (isPlaying) {
//         audioRef.current.pause();
//       } else {
//         audioRef.current.play();
//       }
//       setIsPlaying(!isPlaying);
//     }
//   };

//   useEffect(() => {
//     audioRef.current?.addEventListener("timeupdate", () => setCurrentTime(audioRef.current!.currentTime))
//   }, []);

//   const handleSeek = (event:ChangeEvent<HTMLInputElement>) => {
//     if (audioRef.current) {
//       setCurrentTime(Number(event.target.value));
//     audioRef.current.currentTime = Number(event.target.value);
//   }
//   };


//   return (
//     <div className={styles.bar}>
//       <div className={styles.barContent}>
//         <audio ref={audioRef} src={track.track_file}></audio>
//         <ProgressBar
//               value={currentTime}
//               max={duration}
//               step={0.01}
//               onChange={handleSeek}
//             />
//         <div className={styles.barPlayerBlock}>
//           <div className={styles.barPlayer}>
//             <div className={styles.playerControls}>
//               <div className={styles.playerBtnPrev}>

//               </div>
//               <div onClick={togglePlay} className={classNames(styles.playerBtnPlay, styles.btn)}>
//                 <svg className={styles.playerBtnPrevSvg}>
//                   <use xlinkHref={`img/icon/sprite.svg#${isPlaying ? "icon-pause" : "icon-play"}`} />
//                 </svg>
//               </div>
//               <div className={styles.playerBtnNext}>
//                 <svg className={styles.playerBtnNextSvg}>
//                   <use xlinkHref="img/icon/sprite.svg#icon-next" />
//                 </svg>
//               </div>
//               <div className={classNames(styles.playerBtnRepeat, styles.btnIcon)}>
//                 <svg className={styles.playerBtnRepeatSvg}>
//                   <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
//                 </svg>
//               </div>
//               <div className={classNames(styles.playerBtnShuffle, styles.btnIcon)}>
//                 <svg className={styles.playerBtnShuffleSvg}>
//                   <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
//                 </svg>
//               </div>
//             </div>
//             <div className={classNames(styles.playerTrackPlay, styles.trackPlay)}>
//               <div className={styles.trackPlayContain}>
//                 <div className={styles.trackPlayImage}>
//                   <svg className={styles.trackPlaySvg}>
//                     <use xlinkHref="img/icon/sprite.svg#icon-note" />
//                   </svg>
//                 </div>
//                 <div className={styles.trackPlayAuthor}>
//                   <a className={styles.trackPlayAuthorLink} href="http://">
//                     Ты та...
//                   </a>
//                 </div>
//                 <div className={styles.trackPlayAlbum}>
//                   <a className={styles.trackPlayAlbumLink} href="http://">
//                     Баста
//                   </a>
//                 </div>
//               </div>
//               <div className={styles.trackPlayLikeDis}>
//                 <div className={classNames(styles.trackPlayLike, styles.btnIcon)}>
//                   <svg className={styles.trackPlayLikeSvg}>
//                     <use xlinkHref="img/icon/sprite.svg#icon-like" />
//                   </svg>
//                 </div>
//                 <div className={classNames(styles.trackPlayDislike, styles.btnIcon)}>
//                   <svg className={styles.trackPlayDislikeSvg}>
//                     <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className={styles.barVolumeBlock}>
//             <div className={styles.volumeContent}>
//               <div className={styles.volumeImage}>
//                 <svg className={styles.volumeSvg}>
//                   <use xlinkHref="img/icon/sprite.svg#icon-volume" />
//                 </svg>
//               </div>
//               <div className={classNames(styles.volumeProgress, styles.btn)}>
//                 <input
//                   className={classNames(styles.volumeProgressLine, styles.btn)}
//                   type="range"
//                   name="range"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }