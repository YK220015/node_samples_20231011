// expressモジュール読み込み
const express = require('express')
// dotenvモジュール読み込み
const dotenv = require('dotenv')

const routes = require('./routes')

// dotenvの設定読み込み
dotenv.config()
const HOST = process.env.HOST
const PORT = process.env.PORT

// サーバ作成
const app = express()

app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: true }))

app.use(routes)

// GETリクエストの処理
app.get('/', (req, res) => {
    // リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンスの処理
    res.send('Hello!!!!!!')
})

app.get('/profile', (req, res) => {
    res.send('Profile Page')
})

app.post('/auth', (req, res) => {
    var loginName = req.body.login_name
    var password = req.body.password
    console.log(loginName,password)

    var message="No fumo"
    if(loginName == process.env.LOGIN_NAME && process.env.PASSWORD){
        message="Fumo"
    }

    res.send(message)
    res.send('認証')
})

//　サーバ停止: 起動中のターミナルで Ctrl + C
// サーバ待機（Listen）
app.listen(PORT, HOST, () => {
    console.log(HOST)
    console.log(PORT)
    console.log('wait...')
})