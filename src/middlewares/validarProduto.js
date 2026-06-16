export function validarProduto(req, res, next) {
  const { nome, preco } = req.body

  if (!nome || preco === undefined) {
    return res.status(400).json({
      mensagem: "Nome e preço são obrigatórios"
    })
  }

  if (preco <= 0) {
    return res.status(400).json({
      mensagem: "Preço deve ser maior que zero"
    })
  }

  next()
}