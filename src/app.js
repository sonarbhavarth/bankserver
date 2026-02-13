const express = require("express")
const authRouter = require("./routes/auth.routes")
const cookies = require("cookie-parser");
const accountrouter = require("./routes/account.routes")





const app = express()
app.use(express.json())
app.use("/api/auth", authRouter)
app.use("/api/account", accountrouter)
app.use(cookies())
module.exports = app