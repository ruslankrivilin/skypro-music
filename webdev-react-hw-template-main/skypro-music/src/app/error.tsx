// Обратите внимание, что компонент ошибки – клиентский
'use client';

import { useEffect } from 'react';

// type ErrorType = {
//     error: string;
//     reser: string[];
// }

export default function Error({ error, reset }) {
    useEffect(() => {
        // Логирование ошибки
        console.error(error);
    }, [error]);

    return (
        <div>
            <h2>Что-то пошло не так!</h2>
            <button onClick={reset}>Попробовать снова</button>
        </div>
    );
}