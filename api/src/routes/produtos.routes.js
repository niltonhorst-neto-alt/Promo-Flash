import { Router } from "express"
import { prisma } from "../database.js"

const router = Router()

// LISTAR
router.get("/produtos", async (req, res) => {
  const produtos = await prisma.produto.findMany()

  res.status(200).json(produtos)
})

// CRIAR
router.post("/produtos", async (req, res) => {
  const {
    nome,
    preco,
    descricao,
    estoque,
    categoria,
    marca,
    ativo
  } = req.body

  const produto = await prisma.produto.create({
    data: {
      nome,
      preco,
      descricao,
      estoque,
      categoria,
      marca,
      ativo
    }
  })

  res.status(201).json(produto)
})

// BUSCAR POR ID
router.get("/produtos/:id", async (req, res) => {
  const id = Number(req.params.id)
  const produto = await prisma.produto.findUnique({
    where: { id }
  })

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado"
    })
  }

  res.json(produto)
})

// ATUALIZAR
router.put("/produtos/:id", async (req, res) => {
  const id = Number(req.params.id)

  const produto = await prisma.produto.update({
    where: {
      id
    },
    data: req.body
  })

  res.json(produto)
})

// DELETAR
router.delete("/produtos/:id", async (req, res) => {
  const id = Number(req.params.id)

  await prisma.produto.delete({
    where: { id }
  })

  res.json({
    mensagem: "Produto removido com sucesso"
  })
})

export default router