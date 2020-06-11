const fs = require('fs');
var colors = require('colors');


let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject('La base tiene que ser un número.')
            return;
        }
        if (!Number(limite)) {
            reject('El limite tiene que ser un número.')
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else
                resolve(`tabla-${ base }.txt`)
        });
    })
}

let listarTabla = (base, limite = 10) => {
    console.log('==================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('==================='.green);
    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base*i}\n`)
    }
}

module.exports = {
    crearArchivo,
    listarTabla
}