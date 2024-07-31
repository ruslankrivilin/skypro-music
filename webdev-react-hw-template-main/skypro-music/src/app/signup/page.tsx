"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./Signup.module.css";
import { useState } from "react";
import { useUser } from "@/hooks/useUser";
import { signup } from "@/api/signup";
// import { useRouter } from "next/router";

export default function SignUp() {
  const { login } = useUser();
  // const router = useRouter();
  const [signupData, setSignupData] = useState({
    email: "",
    username: "",
    password: "",

  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleSignup = async () => {
    await signup(signupData)
      .then((data) => {
        login(data, signupData);
      })
      .catch((error) => {
        alert(error);
      });
    // router.push('/signin')
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <Link href="../">
              <div className={styles.modalLogo}>
                <Image
                  src="/img/logo_modal.png"
                  alt="logo"
                  width={140}
                  height={21} />
              </div>
            </Link>
            <input
              className={styles.modalInput}
              type="text"
              name="email"
              placeholder="Почта"
              value={signupData.email}
              onChange={handleInputChange}
            />
            <input
              className={styles.modalInput}
              type="text"
              name="username"
              placeholder="Имя пользователя"
              value={signupData.username}
              onChange={handleInputChange}
            />
            <input
              className={styles.modalInput}
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={signupData.password}
              onChange={handleInputChange}
            />
            <button onClick={handleSignup} className={styles.modalBtnSignupEnt}>
              <Link className={styles.modalBtnSignupEntLink} href="/signin">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}