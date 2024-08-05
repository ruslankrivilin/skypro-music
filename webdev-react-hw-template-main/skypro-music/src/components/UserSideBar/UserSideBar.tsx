"use client"

import styles from "./UserSideBar.module.css";
import { useUser } from "@/hooks/useUser";

export default function UserSideBar() {
  const { user, logout } = useUser();
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>{user?.username}</p>
      <div onClick={logout} className={styles.sidebarIcon}>
        <svg>
          <use xlinkHref="/img/icon/sprite.svg#logout" />
        </svg>
      </div>
    </div>
  );
}
