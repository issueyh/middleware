const express = require('express')
const app = express()
const port = 3000

const serverLog = function (req, res ,next) {
    const reqTime = new Date()
    const reqMeth = req.method
    const reqUrl = req.url
    res.on('finish', () => {
        const resTime = new Date()
        const runTime = resTime - reqTime
        const currentTime = new Date(reqTime).toLocaleString('zh', { timeZone: 'Asia/Taipei', hour12: false })
        console.log(`${currentTime} | ${reqMeth} from ${reqUrl} | total time : ${runTime} ms`)
    })
    next()
}
app.use(serverLog)

app.get('/', (req, res) => {
    res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
    res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
    res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
    res.send('新增一筆  Todo')
})

app.listen(port, () => {
    console.log(`App running on port ${port}`)
})