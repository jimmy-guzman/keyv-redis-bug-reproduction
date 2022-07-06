import KeyvRedis from '@keyv/redis'
import fp from 'fastify-plugin'
import { Cluster } from 'ioredis'
import Keyv from 'keyv'

export const keyvRedisPlugin = fp<{
  redis: Cluster
}>(
  async (fastify, { redis }) => {
    const keyvRedis = new KeyvRedis(redis)

    const cache = new Keyv({ store: keyvRedis })

    fastify.decorate('cache', cache)
  },
  { fastify: '4.x' }
)
