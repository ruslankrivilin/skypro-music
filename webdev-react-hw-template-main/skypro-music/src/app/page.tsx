'use client'

import Nav from "@/components/Nav/Nav";
import styles from "./page.module.css";
import CenterBlock from "@/components/CenterBlock/CenterBlock";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import MainSideBar from "@/components/MainSideBar/MainSideBar";


export default function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <CenterBlock />
          <MainSideBar />
        </main>
        <PlayerBar />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
