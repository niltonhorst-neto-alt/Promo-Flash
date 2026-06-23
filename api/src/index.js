import express from "express"
import produtosRoutes from "./routes/produtos.routes.js"

const app = express()

app.use(express.json())

app.use(produtosRoutes)

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})