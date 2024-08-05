import { signin } from "@/api/signin";
import fetchMock from "jest-fetch-mock";

type Signin = {
    username: string;
    email: string;
};

fetchMock.enableMocks();

beforeEach(() => {
    fetchMock.resetMocks();
});

describe("signin", () => {
    it("должен успешно авторизовать пользователя и вернуть данные", async () => {
        // Задаем мок-данные
        const mockResponse: Signin = {
            username: "fffdddfdfdfdf@fsdfs.ru",
            email: "fffdddfdfdfdf@fsdfs.ru",
        };

        fetchMock.mockResponseOnce(JSON.stringify(mockResponse), {
            status: 200,
        });

        const response = await signin({
            email: "fffdddfdfdfdf@fsdfs.ru",
            password: "54654165881365",
        });

        // Проверяем, что полученные данные соответствуют типу AuthUserResponse
        expect(response).toEqual(mockResponse);
        expect(response).toHaveProperty("username", "fffdddfdfdfdf@fsdfs.ru");
        expect(response).toHaveProperty("email", "fffdddfdfdfdf@fsdfs.ru");
    });
});
