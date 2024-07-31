type Signup = {
    email: string;
    password: string;
    username: string;
}

export async function signup({ email, password, username }: Signup) {
    const res = await fetch("https://skypro-music-api.skyeng.tech/user/signup/", {
        method: "POST",
        body: JSON.stringify({
            email: email,
            password: password,
            username: username,
        }),
        headers: {
            // API требует обязательного указания заголовка content-type, так апи понимает что мы посылаем ему json строчку в теле запроса
            "content-type": "application/json",
        },
    });
    if (!res.ok) {
        if (res.status === 400) {
            const errorData = await res.json();
            throw new Error(JSON.stringify(errorData));
        } else if (res.status === 500) {
            throw new Error("Сервер сломался");
        } else {
            throw new Error("Неизвестная ошибка");
        }
    }console.log(res)
    const data = await res.json();
    return data;
}