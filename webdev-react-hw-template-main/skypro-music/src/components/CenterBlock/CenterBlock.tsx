import { TrackType } from "@/Types";
import { getTracks } from "@/api/tracks";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import Track from "../Track/Track";
import styles from "./CenterBlock.module.css";
import Playlist from "../Playlist/Playlist";



export default async function CenterBlock() {
  let tracksData: TrackType[];
  try {
    tracksData = await getTracks();
  } catch (error: any) {
    throw new Error(error.message);
  }
  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters />
      <div className={styles.centerblockContent}>
        <Playlist />
        <div className={styles.contentPlaylist}>
          {tracksData.map((track) => (
            <Track key={track.id} track={track} tracksData={tracksData} />
          ))}
        </div>
      </div>
    </div>
  );
}
