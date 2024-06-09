"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tesInt = [1, 2, 3];
function addInt(int) {
    tesInt.push(int);
}
addInt(25);
console.log(tesInt);
const fastify_1 = __importDefault(require("fastify"));
const fastify = (0, fastify_1.default)({
    logger: true
});
fastify.get('/', (request, reply) => {
    return {
        meow: 'Meoooooowww'
    };
});
fastify.listen({ port: 8080 }, (err, addr) => {
    if (err) {
        console.log(err, addr);
    }
});
