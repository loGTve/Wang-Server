import Fastify from 'fastify'
import fastifyPostgres from '@fastify/postgres';
import dotenv from 'dotenv';
import * as path from 'path';
import fastifyStatic from "@fastify/static";




//envPath config
const envPath = process.env.NODE_ENV === "production"
    ? path.join(__dirname, '../env/.env.production')
    : path.join(__dirname, '../env/.env.development');

dotenv.config({path: envPath});


const fastify = Fastify();

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../public/'),
    prefix: '/public/'
})

//Show Status
fastify.get('/status_page', async (req, reply) => {
    return {status: 200, message: "is Good"};
});

//Show Normal Html page
fastify.get('/html', async (req, reply) => {
    return reply.sendFile('index.html')
});

//Create account table
fastify.post('/create_account', async (req, reply) =>{
    return { hello: 'world' }
});

//SQL connect
fastify.register(fastifyPostgres, {
    user: process.env.DATABASE_USER,
    host: process.env.DATABASE_HOST,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    port: 5432
});

//get Account Lists from account Table !transact
fastify.get('/get_account', async (req, reply) => {
    return fastify.pg.transact(async client => {
        const accountList = await client.query(
            'SELECT email, nickname FROM account'
        )
        return accountList;
    })
});

//Server Port, shown error
fastify.listen({port: 8080}, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`);
});