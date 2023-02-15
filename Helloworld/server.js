const express = require('express');
var app = express();
var bodyParser = require('body-parser')
const AccountModel = require('./models/account')

var router1 = require('./apiRouter.js')

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// var checkAdmin = (req, res, next) => {
//     if (dangnhap) {
//         user.role = 'admin'
//         next()
//     } else {
//         res.json('ban chua dang nhap')
//     }
// }

// var checkDangNhap = (req, res, next) => {
//     if (dangnhap) {
//         req.user = user
//         next()
//     } else {
//         res.json('ban chua dang nhap')
//     }
// }


app.post('/register', (req, res, next) => {
    var username = req.body.username;
    var password = req.body.password;

    AccountModel.findOne({
        username: username
    })
        .then(data => {
            if (data) {
                res.json('user nay da ton tai')
            } else {
                AccountModel.create({
                    username: username,
                    password: password
                })
                    .then(data => {
                        res.json('Tao tai khoan thanh cong')
                    })
            }
        })
        .catch(err => {
            res.status(500).json('Tao tai khoan that bai')
        })
})

app.post('/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) {
                res.json('dang nhap thanh cong')
            } else {
                res.status(400).json('dang nhap that bai')
            }
        })
        .catch(err => {
            res.status(500).json('co loi ben server')
        })
})

var accountRouter = require('./routers/account')

app.use('/api/account', accountRouter);

app.get('/', (req, res, next) => {
    res.json('du lieu')
})


app.listen(3000, () => {
    console.log(`server started on port`);
})