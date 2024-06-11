'use client';

import { TrackType } from "@/Types";
import { getTracks } from "@/api/tracks";
import Search from "../Search/Search";
import Filters from "../Filters/Filters";
import Track from "../Track/Track";
import styles from "./CenterBlock.module.css";
import Playlist from "../Playlist/Playlist";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useEffect, useState } from "react";
import { setInitialTracks } from "@/store/features/playlistSlice";



export default function CenterBlock() {
  const dispatch = useAppDispatch();
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const filteredTracks = useAppSelector((state) => state.playlist.filteredTracks)

  let tracksData: TrackType[];

  useEffect(() => {
    getTracks().then((tracksData) => {
      setTracks(tracksData);
      dispatch(setInitialTracks({ initialTracks: tracksData }));
    });
  }, [dispatch]);

  return (
    <div className={styles.mainCenterblock}>
      <Search />
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters tracksData={tracks} />
      <div className={styles.centerblockContent}>
        <Playlist />
        <div className={styles.contentPlaylist}>
          {filteredTracks.map((track) => (
            <Track key={track.id} track={track} tracksData={tracksData} />
          ))}
        </div>
      </div>
    </div>
  );
}
