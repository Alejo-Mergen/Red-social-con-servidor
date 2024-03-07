const express = require('express')
const path = require('path')

const startServer = (options) => {
    const { port, public_path = "public"} = options
    const app = express()
    // Para poder usar middlewares se usa la palabra use (express)
    app.use(express.static(public_path)) //Contenido estatico que ponemos disponible
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    }) //petisiones (req:petision, res:respuesta)

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })
}

module.exports = { startServer}