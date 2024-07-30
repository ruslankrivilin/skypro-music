'use client'

import { TrackType } from "@/Types";
import { getTracks } from "@/api/tracks";
import Filters from "@/components/Filters/Filters";
import Playlist from "@/components/Playlist/Playlist";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setInitialTracks } from "@/store/features/playlistSlice";
import { useEffect, useState } from "react";
import styles from "./layout.module.css";
import { useUser } from "@/hooks/useUser";


export default function MainTraksPage() {
  const dispatch = useAppDispatch();
  const [tracks, setTracks] = useState<TrackType[]>([]);
  const filteredTracks = useAppSelector(
    (state) => state.playlist.filteredTracks
  );
  const { user } = useUser();

  useEffect(() => {
    getTracks({ id: user?.id ?? 0 }).then((tracksData) => {
      setTracks(tracksData);
      dispatch(setInitialTracks({ initialTracks: tracksData }));
    });
  }, [dispatch]);
  return (
    <>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filters />
      <Playlist tracks={filteredTracks} playlist={tracks} isFavorite={true} />
    </>
  );
}
