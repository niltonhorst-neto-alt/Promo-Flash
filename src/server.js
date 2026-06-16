import express from "express"
import produtos from "./routes/produtos.js"
import morgan from "morgan"
import { errorHandler } from "./middlewares/errorHandler.js"

const app = express()

app.use(express.json())

app.use(morgan("dev"))

app.use(produtos)

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})
