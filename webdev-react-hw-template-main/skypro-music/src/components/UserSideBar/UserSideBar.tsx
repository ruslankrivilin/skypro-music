import Link from "next/link";
import styles from "./UserSideBar.module.css";

export default function UserSideBar() {
  return (
    <div className={styles.sidebarPersonal}>
      <div className={styles.sidebarIcon}>
      <Link href="/signin" className={styles.menuLink}>
        <svg>
          <use xlinkHref="img/icon/sprite.svg#logout" />
        </svg>
      </Link>
      </div>
    </div>
  );
}
