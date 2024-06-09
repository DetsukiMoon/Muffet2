const tesInt: number[] = [1,2,3]
function addInt(int:number): void {
  tesInt.push(int)
}
addInt(25)
console.log(tesInt)
import Fastify, { FastifyInstance } from "fastify"

const fastify: FastifyInstance = Fastify({
  logger: true
})

fastify.get('/', (request, reply) => {
  return {
    meow:'Meoooooowww'
  }
})

fastify.listen({port:8080}, (err, addr) => {
  if(err) {
    console.log(err, addr)
  }
})