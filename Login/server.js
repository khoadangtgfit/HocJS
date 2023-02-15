
const express = require('express')
const app = express()
const port = 3000
const path = require('path')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var jwt = require('jsonwebtoken');

app.use(cookieParser())

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
const AccountModel = require('./models/Account')

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', function (req, res) {
    var duongDanFile = path.join(__dirname, 'login.css')
    res.sendFile(duongDanFile)
})


//GET login
app.get('/login', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'login.html'))
})

//Post Login
app.post('/login', (req, res, next) => {
    var username = req.body.username
    var password = req.body.password

    AccountModel.findOne({
        username: username,
        password: password
    })
        .then(data => {
            if (data) {
                var token = jwt.sign({
                    _id: data._id
                }, 'mk')
                return res.json({
                    message: 'thanh cong',
                    token: token
                })
            } else {
                return res.json('dang nhap that bai')
            }
        })
        .catch(err => {
            res.status(500).json('loi server')
        })
})

app.get('/private', (req, res, next) => {
    try {
        var token = req.cookies.token
        var ketqua = jwt.verify(token, 'mk')
        if (ketqua) {
            next()
        }
    } catch (error) {
        return res.json('ban can phai login')
    }
}, (req, res, next) => {
    res.json('welcome')
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})