import http from 'http'
import sqlite3 from 'sqlite3'

const port = 80

const server = http.createServer((req, resp) => {
    const addr = new URL("http://360.com" + req.url)
    const param = addr.searchParams
    const method = param.get("method")
    let rd = Math.ceil(Math.random() * 11)
    let sql = `SELECT word FROM Words WHERE id=${rd}`;

    resp.statusCode = 200
    resp.setHeader('Content-Type', 'text/plain;charset=utf-8')

    if (method === "json") {
        let db = new sqlite3.Database("words.db", err => {
            if (err)
                console.log("DataBase Fucked Up.")
        })
        db.all(sql, (err, res) => {
            if (err)
                console.log("DataBase Fucked Up.")
            resp.end(JSON.stringify(res[0]))
        })
        db.close()
    } else if (method === 'js') {
        let db = new sqlite3.Database("words.db", err => {
            if (err)
                console.log("DataBase Fucked Up.")
        })

        db.all(sql, (err, res) => {
            if (err)
                console.log("DataBase Fucked Up.")
            resp.end(`(function(){let kotoba="${res[0].word}";let dom=document.querySelector('#kotoba');dom.innerText=kotoba;})()`)
        })
        db.close()
    } else {
        resp.statusCode = 406
        resp.end("Method not Acceptable")
    }

})

server.listen(port, () => {
    console.log(`服务器运行中`)
})
