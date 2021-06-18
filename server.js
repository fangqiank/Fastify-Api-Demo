require('dotenv').config()

const fastify = require('fastify')({
    logger: true
})

fastify.register(require('fastify-swagger'),{
    exposeRoute: true,
    routePrefix: '/docs',
    swagger:{
        info:{
            title: 'fastify-api'
        }
    }
})

fastify.register(require('./routes'))

const PORT = process.env.PORT || 6001

const start = async () =>{
    try{
        await fastify.listen(PORT)
    }catch(err){
        fastify.log.error(err)
        process.exit(1)
    }
}

start()