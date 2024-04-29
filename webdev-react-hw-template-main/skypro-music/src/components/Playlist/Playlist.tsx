import Track from "../Track/Track";
import classNames from "classnames";
import styles from "./Playlist.module.css";
import { getTracks } from "@/api/tracks";
import { TrackType } from "@/Types";

export default async function Playlist() {
  // const tracksData: trackType[] = await getTracks();
  let tracksData: TrackType[];
  try {
    tracksData = await getTracks();
  } catch (error: any) {
    throw new Error(error.message);
  }
  return (
    <div className={styles.centerblockContent}>
      <div className={styles.contentTitle}>
        <div className={classNames(styles.playlistTitleCol, styles.col01)}>Трек</div>
        <div className={classNames(styles.playlistTitleCol, styles.col02)}>Исполнитель</div>
        <div className={classNames(styles.playlistTitleCol, styles.col03)}>Альбом</div>
        <div className={classNames(styles.playlistTitleCol, styles.col04)}>
          <svg className={styles.playlistTitleSvg}>
            <use xlinkHref="img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracksData.map((trackData) => (
          <Track
            key={trackData.id}
            name={trackData.name}
            author={trackData.author}
            album={trackData.album}
          />
        ))}
      </div>
    </div>
  )
}

