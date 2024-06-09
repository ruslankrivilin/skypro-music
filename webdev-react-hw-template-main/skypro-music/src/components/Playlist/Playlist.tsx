// import Track from "../Track/Track";
// import classNames from "classnames";
// import styles from "./Playlist.module.css";
// import { TrackType } from "@/Types";
// import { useEffect, useState } from "react";
// import { getTracks } from "@/api/tracks";

// type PlaylistType = {
//   setTrack: (param: TrackType) => void;
// }
// export default function Playlist({ setTrack }: PlaylistType) {
//   // const tracksData: trackType[] = await getTracks();
//   // let tracksData: TrackType[];
//   // try {
//   //   tracksData = await getTracks();
//   // } catch (error: any) {
//   //   throw new Error(error.message);
//   // }
//   const [tracksData, setTracksData] = useState<TrackType[]>([]);

//   useEffect(() => {

//     getTracks().then((data: TrackType[]) => setTracksData(data))
//       .catch((error: any) => {
//         throw new Error(error.message);
//       });
//   }, []);
//   return (
//     <div className={styles.centerblockContent}>
//       <div className={styles.contentTitle}>
//         <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
//         <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
//         <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
//         <div className={classNames(styles.playlistTitleCol, styles.col04)}>
//           <svg className={styles.playlistTitleSvg}>
//             <use xlinkHref="img/icon/sprite.svg#icon-watch" />
//           </svg>
//         </div>
//       </div>
//       <div className={styles.contentPlaylist}>
//         {tracksData.map((trackData) => (
//           <Track
//             onClick={() => setTrack(trackData)}
//             key={trackData.id}
//             name={trackData.name}
//             author={trackData.author}
//             album={trackData.album}
//           />
//         ))}
//       </div>
//     </div>
//   )
// }

import styles from "./Playlist.module.css";
import classNames from "classnames";
export default function Playlist() {
  return (
    <div className={styles.playlistTitleContent}>
      <div className={classNames(styles.playlistTitleColumn, styles.column01)}>
        Трек
      </div>
      <div className={classNames(styles.playlistTitleColumn, styles.column02)}>
        Исполнитель
      </div>
      <div className={classNames(styles.playlistTitleColumn, styles.column03)}>
        Альбом
      </div>
      <div className={classNames(styles.playlistTitleColumn, styles.column04)}>
        <svg className={styles.playlistTitleSvg}>
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </svg>
      </div>
    </div>
  );
}
