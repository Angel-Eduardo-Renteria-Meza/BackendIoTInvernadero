const mongoose = require('mongoose');

const mediaSchema = mongoose.Schema({
    promedioTemperatura: {
        type: Number,
        required: true,
    },
    promedioHumedadAtm: {
        type: Number,
        required: true,
    },
    promedioHumedadCultivo1: {
        type: Number,
        required: true,
    },
    promedioHumedadCultivo2: {
        type: Number,
        required: true,
    },
    fecha: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('mediaDia', mediaSchema, 'PromMedias');