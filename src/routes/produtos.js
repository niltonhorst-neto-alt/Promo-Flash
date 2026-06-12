import { Router } from "express"
import { validarProduto } from "../middlewares/validarProduto.js"

import {
  listarProdutos,
  buscarProduto,
  criarProduto,
  atualizarProduto,
  deletarProduto
} from "../controllers/produtosController.js"

const router = Router()

router.get("/produtos", listarProdutos)

router.get("/produtos/:id", buscarProduto)

router.post("/produtos", validarProduto, criarProduto)

router.put("/produtos/:id", validarProduto, atualizarProduto)

router.delete("/produtos/:id", deletarProduto)

export default router