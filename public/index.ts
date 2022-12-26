import fastify from 'fastify'

const server = fastify()

server.get('/status_page', async (request, reply) => {
    return {status: 200, message: "is Good"};
})

server.listen({ port: 8080 }, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})