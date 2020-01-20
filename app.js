const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.set('view engine', 'ejs');
app.use(morgan('dev'));

require('./database/connection');

const Employee = require('./models/employee');

app.get('/', (req, res) => {
    Employee.find({}, (err, employees) => {
        if(err) {
            res.render('error', {err});
        } else {
            res.render('employee', {employees: employees});
        }
    });
});

// Create Employee
app.post('/employee', (req, res) => {
    new Employee({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email
    }).save((err, data) => {
        if(err) {
            res.render('error', {err});
        } else {
            res.redirect('/');
        }
    });
});

// Update Employee
app.put('/employee/:id', (req, res) => {
    Employee.updateOne(
        {_id: req.params.id},
        {
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email
        },
        (err, info) => {
            if(err) {
                res.json({
                    code: 500,
                    error: err,
                    data: null,
                    message: 'Some error occurred!!'
                });
            } else {
                res.json({
                    code: 200,
                    error: null,
                    data: info,
                    message: 'Successfully Updated.'
                });
            }
        }
    )
});

app.delete('/employee/:id',(req, res)=>{
    Employee.deleteOne({_id: req.params.id}, (err,info)=>{
        if(err){
            res.json({
                code:500,
                error:err,
                data:null,
                message:'some error occured'
            })
        }else{
            res.json({
                code:200,
                error:null,
                data:info,
                message:'successful'
            })
        }
    })
})

app.listen(8080, () => {
    console.log('server is running at 8080')
});