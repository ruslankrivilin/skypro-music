import { TrackType } from "@/Types";
import Track from "../Track/Track";
import styles from "./Playlist.module.css";
import classNames from "classnames";

export default function Playlist({
  tracks,
  playlist,
  isFavorite,
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
            <use xlinkHref="/img/icon/sprite.svg#icon-watch" />
          </svg>
        </div>
      </div>
      <div className={styles.contentPlaylist}>
        {tracks?.length === 0? 'Нет треков, удовлетворяющих условию фильтра' : ''}
        {tracks?.map((trackData) => (
          <Track
            track={trackData}
            tracksData={playlist}
            key={trackData.id}
            isFavorite={isFavorite}
          />
        ))}
      </div>
    </div>
  );
}