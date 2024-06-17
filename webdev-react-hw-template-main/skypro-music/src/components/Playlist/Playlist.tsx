import { TrackType } from "@/Types";
import Track from "../Track/Track";
import styles from "./Playlist.module.css";
import classNames from "classnames";
export default function Playlist({
  tracks,
  playlist,
}: {
  tracks: TrackType[];
  playlist: TrackType[];
  isFavorite?: boolean;
}) {
  return (
    <div className={styles.centerblockContent}>
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
      <div className={styles.contentPlaylist}>
        {tracks?.map((trackData) => (
          <Track
            track={trackData}
            tracksData={playlist}
            key={trackData.id}
          />
        ))}
      </div>
    </div>
  );
}




// "use client";

// import classnames from "classnames";
// import styles from "./Playlist.module.css";
// import Track from "@/components/Track/Track";
// import { TrackType } from "@/Types";

// export default function Playlist({
//   tracks,
//   playlist,
//   isFavorite,
// }: {
//   tracks: TrackType[];
//   playlist: TrackType[];
//   isFavorite?: boolean;
// }) {
//   return (
//     <div className={styles.centerblockContent}>
//       <div className={styles.contentTitle}>
//         <div className={classnames(styles.playlistTitleCol, styles.col01)}>
//           Трек
//         </div>
//         <div className={classnames(styles.playlistTitleCol, styles.col02)}>
//           Исполнитель
//         </div>
//         <div className={classnames(styles.playlistTitleCol, styles.col03)}>
//           Альбом
//         </div>
//         <div className={classnames(styles.playlistTitleCol, styles.col04)}>
//           <svg className={styles.playlistTitleSvg}>
//             <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
//           </svg>
//         </div>
//       </div>
//       <div className={styles.contentPlaylist}>
//         {tracks?.map((trackData) => (
//           <Track
//             track={trackData}
//             tracksData={playlist}
//             key={trackData.id}
            
//           />
//         ))}
//       </div>
//     </div>
//   );
// }






// import Track from "../Track/Track";
// import styles from "./Playlist.module.css";
// import classNames from "classnames";
// import { TrackType } from "@/Types";
// export default function Playlist({tracks, playlist}:{tracks:TrackType[], playlist:TrackType[]}) {

//   return (
//     <>
//     <div>
//     <div className={styles.playlistTitleContent}>
//       <div className={classNames(styles.playlistTitleColumn, styles.column01)}>
//         Трек
//       </div>
//       <div className={classNames(styles.playlistTitleColumn, styles.column02)}>
//         Исполнитель
//       </div>
//       <div className={classNames(styles.playlistTitleColumn, styles.column03)}>
//         Альбом
//       </div>
//       <div className={classNames(styles.playlistTitleColumn, styles.column04)}>
//         <svg className={styles.playlistTitleSvg}>
//           <use xlinkHref="img/icon/sprite.svg#icon-watch" />
//         </svg>
//       </div>
//     </div>
//     <div>
//       {tracks?.length === 0? 'Нету треков, удовлетворяющих условию фильтра' : ''}
//       {tracks?.map((track) => (
//         <Track key={track.id} track={track} tracksData={playlist} />
//       ))}
//     </div>
//     </div>
//     </>
//   );
// }

