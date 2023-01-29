import app from '../app'

describe("check all routes get", () => {
    test("should respond with a 200 status code", async () => {
        const response = await request(app).get("/singup").send()
        expect(response.statusCode).toBe(200)

    })
})