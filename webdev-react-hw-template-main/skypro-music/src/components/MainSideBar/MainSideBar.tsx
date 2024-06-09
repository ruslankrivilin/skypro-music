import Sidebar from "../Sidebar/Sidebar";
import UserSideBar from "../UserSideBar/UserSideBar";
import styles from "./MainSideBar.module.css";

export default function MainSideBar() {
  return (
    <div className={styles.mainSidebar}>
      <UserSideBar />
      <Sidebar />
    </div>
  );
}
