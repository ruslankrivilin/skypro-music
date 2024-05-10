'use client';

import Nav from "@/components/Nav/Nav";
import Player from "@/components/Player/Player";
import Playlist from "@/components/Playlist/Playlist";
import Search from "@/components/Search/Search";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./page.module.css";
import { useState } from "react";
import { TrackType } from "@/Types";


export default function Home() {
  const [track, setTrack] = useState<TrackType | null>(null);
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div className={styles.mainCenterblock}>
            <Search />
            <Playlist setTrack={setTrack} />
          </div>
          <Sidebar />
        </main>
        {track && (<Player track={track} />)}
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
