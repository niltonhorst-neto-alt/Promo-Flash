export function validarProduto(req, res, next) {
  const { nome, preco } = req.body

  if (!nome || preco == null) {
    return res.status(400).json({
      mensagem: "Nome e preço são obrigatórios"
    })
  }

  next()
}