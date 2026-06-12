import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export async function listarProdutos(req, res) {
  const produtos = await prisma.produto.findMany()

  res.status(200).json(produtos)
}

export async function buscarProduto(req, res) {
  const id = Number(req.params.id)

  const produto = await prisma.produto.findUnique({
    where: { id }
  })

  if (!produto) {
    return res.status(404).json({
      mensagem: "Produto não encontrado"
    })
  }

  res.status(200).json(produto)
}

export async function criarProduto(req, res) {
  const { nome, preco } = req.body

  const produto = await prisma.produto.create({
    data: {
      nome,
      preco
    }
  })

  res.status(201).json({
    mensagem: "Produto criado",
    dados: produto
  })
}

export async function atualizarProduto(req, res) {
  const id = Number(req.params.id)
  const { nome, preco } = req.body

  try {
    const produto = await prisma.produto.update({
      where: { id },
      data: {
        nome,
        preco
      }
    })

    res.status(200).json({
      mensagem: "Produto atualizado",
      dados: produto
    })

  } catch {
    res.status(404).json({
      mensagem: "Produto não encontrado"
    })
  }
}

export async function deletarProduto(req, res) {
  const id = Number(req.params.id)

  try {
    await prisma.produto.delete({
      where: { id }
    })

    res.status(200).json({
      mensagem: "Produto deletado com sucesso"
    })

  } catch {
    res.status(404).json({
      mensagem: "Produto não encontrado"
    })
  }
}