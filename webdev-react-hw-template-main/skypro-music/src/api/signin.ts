type SigninType = {
    email: string;
    password: string;
};

export async function signin({ email, password }: SigninType) {
    try {
        const res = await fetch("https://skypro-music-api.skyeng.tech/user/login/", {
            method: "POST",
            body: JSON.stringify({
                email: email,
                password: password,
            }),
            headers: {
                "content-type": "application/json",
            },
        });

        if (!res.ok) {
            const errorData = await res.json();
            if (res.status === 400) {
                throw new Error(JSON.stringify(errorData));
            } else if (res.status === 401) {
                throw new Error(errorData.detail || "Ошибка авторизации");
            } else if (res.status === 500) {
                throw new Error("Сервер сломался");
            } else {
                throw new Error("Неизвестная ошибка");
            }
        }

        const data = await res.json();
        return data;
    } catch (error: any) {
        throw new Error(error.message);
    }
}