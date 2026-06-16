const fastify = require('fastify')({ logger: true })

fastify.get('/itens', async (request, reply) => {
  return { itens: [] }
})

fastify.post('/itens', async (request, reply) => {
  const { nome } = request.body

  reply.code(201)
  return { nome }
})

fastify.put('/itens/:id', async (request, reply) => {
  const { id } = request.params
  const { nome } = request.body

  return { id, nome }
})

fastify.delete('/itens/:id', async (request, reply) => {
  const { id } = request.params

  reply.code(204)
  return null
})

fastify.listen({ port: 3000 }, (err) => {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
})