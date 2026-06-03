import { Router } from "express"

const router = Router()

const produtos = [
  {
    id: 1,
    nome: "Notebook Gamer",
    preco: 4999.90
  }
]

router.get("/produtos", (req, res) => {
  res.status(200).json(produtos)
})

router.post("/produtos", (req, res) => {
  const { nome, preco } = req.body

  const novoProduto = {
    id: produtos.length + 1,
    nome,
    preco
  }

  produtos.push(novoProduto)

  res.status(201).json({
    mensagem: "Produto criado",
    dados: novoProduto
  })
})

router.get("/produtos/:id", (req, res) => {
  const id = Number(req.params.id)

  const produto = produtos.find(p => p.id === id)

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado"
    })
  }

  res.status(200).json(produto)
})

export default router