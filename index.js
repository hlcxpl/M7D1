const {registrar, leer } = require('./operaciones.js')

const argumentos = process.argv.slice(2)


const operacion = argumentos[0]
const nombre = argumentos[1]
const edad = argumentos[2]
const animal = argumentos[3]
const color = argumentos[4]
const enfermedad = argumentos[5]

if (operacion === "registrar") {
    registrar(nombre, edad, animal, color, enfermedad)
}

if (operacion === "leer") {
    leer()
}
