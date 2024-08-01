"use client"

import Image from "next/image";
import Link from "next/link";
import styles from "./Signin.module.css"
import classNames from "classnames";
import { useState } from "react";
import { signin } from "@/api/signin";
import { useUser } from "@/hooks/useUser";
import { useRouter } from "next/navigation";

type SigninType = {
  email: string;
  password: string;
};

export default function SigninPage() {
  const [loginData, setLoginData] = useState<SigninType>({ email: "", password: "" });
  const router = useRouter();
  const { login } = useUser();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    await signin(loginData)
      .then((data) => {
        login(data, loginData);
      })
      .catch((error) => {
        alert(error);
      });
    router.push('/tracks')
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerEnter}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin} action="#">
            <Link href="../">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21}
                />
              </div>
            </Link>
            <input
              className={classNames(styles.modalInput, styles.login)}
              type="text"
              name="email"
              placeholder="Почта"
              value={loginData.email}
              onChange={handleInputChange}
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Пароль"
              value={loginData.password}
              onChange={handleInputChange}
            />
            <button onClick={handleLogin} className={styles.modalBtnEnter}>
              <span className={styles.modalBtnEnterLink}>Войти</span>
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