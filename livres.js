const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const schema = new Schema({
    titre: String,
    auteur: String,
    genre: String
});

const Livre = mongoose.model('Livre', schema);
module.exports = Livre;
