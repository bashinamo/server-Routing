import oExpress from "express"
let app = oExpress()

const PORT = 3000
app.listen(PORT, () =>
    {
        console.log(`Server is running on port ${PORT}. localhost:${PORT}`)
    })