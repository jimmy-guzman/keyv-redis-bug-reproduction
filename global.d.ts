// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { FastifyInstance } from 'fastify'
import Keyv from 'keyv'

declare module 'fastify' {
  interface FastifyInstance {
    cache: Keyv<string, any>
  }
}
