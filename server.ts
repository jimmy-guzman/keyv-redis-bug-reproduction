import fastify from 'fastify'
import Redis from 'ioredis'

import { keyvRedisPlugin } from './plugins/keyv-redis'

const redis = new Redis.Cluster([{ host: 'localhost', port: 26379 }])

const start = async () => {
  const instance = fastify({
    logger: true,
  })

  instance.get('/', async () => {
    return { hello: 'world' }
  })

  await instance.register(keyvRedisPlugin, { redis })

  try {
    await instance.listen({ port: 3000, host: '0.0.0.0' })
  } catch (err: unknown) {
    instance.log.error(err)
    process.exit(1)
  }
}

start()
