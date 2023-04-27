const mongoose = require('mongoose');
let PersonSchema = new mongoose.Schema({ // se definen los datos y los tipos de estos.
    name: String,
    email: String,
    password: String
});

// contiene el nombre del documento y el schema creado con mongoose
module.exports = mongoose.model('Users', PersonSchema);