const mongoose = require('mongoose')

const OrdenSchema = new mongoose.Schema({
    usuario:{ 
        type: Number, 
        required: true },
    carritoId:{type: mongoose.Schema.Types.ObjectId, ref: 'Carrito', required: true},
    productos:[{
        producto:{type: mongoose.Schema.Types.ObjectId, ref: 'Producto',require: true},
        contidad: { type: Number, require:true},
        precio:{type: Number, require: true}
    }],
    total: {type: String, require: true},
    estado: { type: String, enum: ['pendiente','enviado','entregado','cancelado'], default:'pendiente'},
    fechaCreacion: {type: Date, default:Date.now},
})
module.exports = mongoose.model('Orden',OrdenSchema)