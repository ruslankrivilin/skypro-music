// Обратите внимание, что компонент ошибки – клиентский
'use client'

import { useEffect } from 'react';
import styles from './error.module.css'
import Image from 'next/image';


type ErrorType = {
    error: string;
    reset: () => void;
}

export default function Error({ error, reset }: ErrorType) {
    useEffect(() => {
        // Логирование ошибки
        console.error(error);
    }, [error]);

    return (
        <div className={styles.block}>

            <Image
                className={styles.logo}
                src="/img/error.jpg"
                alt='logo'
                width={2020}
                height={1400}
            />
            <div className={styles.hh}>
                <h2 className={styles.h}>Что-то пошло не так!</h2>
                <button className={styles.c} onClick={reset}>
                    <span className={styles.cc}>Попробовать снова</span>
                </button>
            </div>

        </div>
    );
}