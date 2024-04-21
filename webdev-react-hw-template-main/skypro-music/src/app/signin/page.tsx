import Image from "next/image";
import Link from "next/link";
import styles from "./Signin.module.css"

export default function SigninPage () {
    return (
  <div className={styles.wrapper}>
    <div className={styles.containerEnter}>
      <div className={styles.modalBlock}>
        <form className={styles.modalFormLogin} action="#">
          <a href="../">
            <div className={styles.modalLogo}>
              <Image 
              src="/img/logo_modal.png" 
              alt="logo" 
              width={140}
              height={21}
              />
            </div>
          </a>
          <input
            // className="modal__input login"
            className={styles.modalInput}
            type="text"
            name="login"
            placeholder="Почта"
          />
          <input
            // className="modal__input password"
            className={styles.modalInput}
            type="password"
            name="password"
            placeholder="Пароль"
          />
          <button className={styles.modalBtnEnter}>
            <Link className={styles.modalBtnEnterLink} href="/">Войти</Link>
          </button>
          <button className={styles.modalBtnSignup}>
            <Link className={styles.modalBtnSignupLink} href="/signup">Зарегистрироваться</Link>
          </button>
        </form>
      </div>
    </div>
  </div>
    )
}