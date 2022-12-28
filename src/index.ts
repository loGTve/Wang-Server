import fastify from 'fastify'
import fastifyPostgres from '@fastify/postgres';



const server = fastify()


//Show Status
server.get('/status_page', async (req, reply) => {
    return {status: 200, message: "is Good"};
});

//Show Normal Html page
server.get('/html', async (req, reply) => {
    return
});

//Create account table
server.post('/create_account', async (req, reply) => {

});
//SQL connect
server.register(fastifyPostgres, {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASS,
    database: process.env.DATABASE_NAME,
    port: 5432
});

//get Account Lists from account Table
server.get('/get_account', async (req, reply) => {
    const client = await server.pg.connect()
    try {
        const {rows} = await client.query(
            'SELECT email, nickname FROM account'
        )
        return rows
    } finally {
        client.release()
    }
});

//Server Port, shown error
server.listen({port: 8080}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)
})