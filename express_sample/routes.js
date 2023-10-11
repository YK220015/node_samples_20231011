const express = require('express')
const router = express.Router()

// GETリクエストの処理
router.get('/', (req, res) => {
    // リクエストの処理
    console.log(req.body)
    console.log(req.url)
    console.log(req.query)

    // レスポンスの処理
    res.send('Hello!!!!!!')
})

router.get('/profile', (req, res) => {
    res.send('Profile Page')
})

module.exports=router