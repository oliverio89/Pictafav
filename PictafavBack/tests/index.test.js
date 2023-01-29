import imageRoutes from '../routes/image.routes'


describe("check all routes get", () => {

    test("should respond with a 200 status code", async () => {
        const response = await request(imageRoutes).get("/api/images/getAllImages").send()
        expect(response.statusCode).toBe(200)
    })
})