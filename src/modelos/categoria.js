const mongoose = require('mongoose')

const CategoriaSchema = new mongoose.Schema({
    nombre:{ type: String, require: true, unique: true},
    descripcion:{ type: String},
    fechaCreacion:{ type: String, default: Date.now},
})
module.exports = mongoose.model('Categoria',CategoriaSchema)