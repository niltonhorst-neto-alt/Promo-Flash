import { Router } from "express"

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

router.post("/produtos", criarProduto)

router.put("/produtos/:id", atualizarProduto)

router.delete("/produtos/:id", deletarProduto)

export default router