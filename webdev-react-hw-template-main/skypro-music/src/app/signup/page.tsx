import Image from "next/image";
import Link from "next/link";
import styles from "./Signup.module.css";

export default function SignUp() {
    return (
  <div className={styles.wrapper}>
    <div className={styles.containerSignup}>
      <div className={styles.modalBlock}>
        <form className={styles.modalFormLogin}>
          <a href="../">
            <div className={styles.modalLogo}>
              <Image 
              src="/img/logo_modal.png" 
              alt="logo" 
              width={140}
              height={21}/>
            </div>
          </a>
          <input
            className={styles.modalInput}//login
            type="text"
            name="login"
            placeholder="Почта"
          />
          <input
            // className="modal__input password-first"
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <input
            // className="modal__input password-double"
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Повторите пароль"
          />
          <button className={styles.modalBtnSignupEnt}>
            <Link className={styles.modalBtnSignupEntLink} href="/">Зарегистрироваться</Link>
          </button>
        </form>
      </div>
    </div>
  </div>
    )
}