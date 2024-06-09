'use client'

import Nav from "@/components/Nav/Nav";
import Sidebar from "@/components/Sidebar/Sidebar";
import styles from "./page.module.css";
// import { useState } from "react";
// import { TrackType } from "@/Types";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import MainSideBar from "@/components/MainSideBar/MainSideBar";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          {/* <div className={styles.mainCenterblock}> */}
          <CenterBlock />
          {/* </div> */}
          <Sidebar />
          <MainSideBar />
        </main>
        <PlayerBar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
