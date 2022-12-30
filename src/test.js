const app = require('./app.js');
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://test:0WRtPWROKsnWGBku@cluster0.ktnzwlb.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true }).then(() => {
    app.listen(3001, () => {
        console.log('Server is running on port 3000');
    })
}).catch(err => {
    console.log("error al conectar a la base de datos");
});



//mongodb+srv://test:0WRtPWROKsnWGBku@cluster0.ktnzwlb.mongodb.net/?retryWrites=true&w=majority