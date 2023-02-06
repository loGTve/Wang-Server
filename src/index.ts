import Fastify from 'fastify'
import fastifyPostgres from '@fastify/postgres';
import dotenv from 'dotenv';
import * as path from 'path';
import fastifyStatic from '@fastify/static';


//envPath config
const envPath = process.env.NODE_ENV === "production"
    ? path.join(__dirname, '../env/.env.production')
    : path.join(__dirname, '../env/.env.development');

dotenv.config({path: envPath});

/** Fastify */
const fastify = Fastify();

fastify.register(fastifyStatic, {
    root: path.join(__dirname, '../public'),
});


//Show Status
fastify.get('/status_page', async () => {
    return {status: 200, message: "is Good"}
});


//Show Normal Html page
fastify.get('/html', async (req, reply) => {
    return reply.sendFile('index.html');
});


//Get Input Email, Name from User
fastify.get('/create_account', async (req, reply) => {
    return reply.sendFile('register/register.html');
});

//Get JSON Response, INSERT to SQL
fastify.post('/register', async (req: any, rep) => {
    return fastify.pg.transact(async client => {
            const id = await client.query(
                    `INSERT INTO account(nickname, email)
                    VALUES($1, $2)`, [req.body.nickname, req.body.email]
                    )
        console.log("Successfully Sended to Server");
    })
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
    fastify.get('/get_account', async () => {
        return fastify.pg.transact(async client => {
            const accountList = await client.query(
                `SELECT nickname, email FROM account`
            )
            return accountList;
        })
    });


    //Server Port, shown error
    fastify.listen({port: 8080}, (err, address) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`Server listening at ${address}`);
    });
