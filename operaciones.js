
const registrar = (nombre, edad, animal, color, enfermedad) => {

    let cita =[
    {
        nombre: nombre,
        edad: edad,
        animal: animal,
        color: color,
        enfermedad: enfermedad
    }];

    const fs = require('fs')
    fs.writeFileSync('citas.json', JSON.stringify(cita))
}

const leer = () => {
    const fs = require('fs')
    const citas = fs.readFileSync('./citas.json', 'utf8')
    const data = JSON.stringify(citas)
    console.log(data)
}

module.exports = { registrar, leer }