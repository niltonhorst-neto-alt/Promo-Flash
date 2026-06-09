import { Router } from "express"

import {
  listarProdutos,
  buscarProduto,
  criarProduto
} from "../controllers/produtosController.js"

const router = Router()

router.get("/produtos", listarProdutos)

router.get("/produtos/:id", buscarProduto)

router.post("/produtos", criarProduto)

export default router