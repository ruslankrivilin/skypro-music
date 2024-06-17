import Nav from "@/components/Nav/Nav";
import PlayerBar from "@/components/PlayerBar/PlayerBar";
import styles from "./layout.module.css";
import Search from "@/components/Search/Search";
import dynamic from "next/dynamic";

const Sidebar = dynamic(() => import("@/components/Sidebar/Sidebar"), {
  ssr: false,
});

export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Nav />
          <div className={styles.mainCenterblock}>
            <Search />
            {children}
          </div>
          <Sidebar />
        </main>
        <PlayerBar />
        <footer className="footer" />
      </div>
    </div>
  );
}
