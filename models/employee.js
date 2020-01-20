const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employee = new Schema({
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    }
});

const Employee = mongoose.model('employees', employee);
module.exports = Employee;

// INSERT
// new Employee({
//     first_name: 'Sumit',
//     last_name: 'Warkari',
//     email: 'sumitwarkari@gmail.com'
// }).save((err, data) => {
//     console.log(err)
//     console.log(data)
// });

// READ
// Employee.find({first_name: 'Sumit'}, (err, employee) => {
//     console.log(err)
//     console.log(employee)
// })

// UPDATE
// Employee.updateOne({first_name: 'Aishwarya'}, {last_name: 'Singh'}, (err, info) => {
//     console.log(err)
//     console.log(info)
// })

// DELETE
// Employee.deleteOne({email: 'sumitwarkari@gmail.com'}, (err, info) => {
//     console.log(err)
//     console.log(info)
// })