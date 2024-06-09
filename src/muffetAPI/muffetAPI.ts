import Fastify, { FastifyInstance, FastifyHttpOptions, RawServerDefault, FastifyBaseLogger } from "fastify"
import MuffetClient from "../muffetClient/muffetClient.js";
interface APIOptions extends FastifyHttpOptions<RawServerDefault, FastifyBaseLogger> {
  port: number;
  muffetClient: MuffetClient
};

export default class MuffetAPI {
  apiOptions: APIOptions;
  fastify: FastifyInstance;
  constructor(apiOptions: APIOptions) {
    this.apiOptions = apiOptions
    this.fastify = Fastify({})
  }

  init() {
    this.fastify.get('/isready', () => {
      return {
        isReady: this.apiOptions.muffetClient.isReady()
      }
    })

    this.fastify.get('/', (req, res) => {
      res.type('text/html').send('<h1>Hi!!!!!!</h1>')
    })

    this.fastify.listen({port:8080}, () => {

    })
  }
};