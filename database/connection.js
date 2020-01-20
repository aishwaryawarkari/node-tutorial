const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/nodejs',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    },
    (err) => {
    if(err) {
        console.log('mongo connection error', err);
    } else {
        console.log('connected to mongo')
    }
});