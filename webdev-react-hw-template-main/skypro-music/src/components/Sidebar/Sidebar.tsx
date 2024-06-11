import Image from "next/image";
import styles from "./Sidebar.module.css";

export default function Sidebar() {
    return (
        <div className={styles.mainSidebar}>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarList}>
              <div className={styles.sidebarItem}>
                <a className={styles.sidebarLink} href="#">
                  <Image
                    className={styles.sidebarImg}
                    src="/img/playlist01.png"
                    alt="day's playlist"
                    width={250}
                    height={150} 
                  />
                </a>
              </div>
              <div className={styles.sidebarItem}>
                <a className={styles.sidebarLink} href="#">
                  <Image
                    className={styles.sidebarImg}
                    src="/img/playlist02.png"
                    alt="day's playlist"
                    width={250}
                    height={150} 

                  />
                </a>
              </div>
              <div className={styles.sidebarItem}>
                <a className={styles.sidebarLink} href="#">
                  <Image
                    className={styles.sidebarImg}
                    src="/img/playlist03.png"
                    alt="day's playlist"
                    width={250}
                    height={150} 

                  />
                </a>
              </div>
            </div>
          </div>
        </div>
    )
}