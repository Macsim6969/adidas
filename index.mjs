import express from 'express'

const app = express()

app.get('/' ,(req, res)=>{
    res.send('Adidas Server')
})


app.listen(8888, (err)=>{
    if(err) {
       return console.log(err)
    }

    console.log("Server Adidas working ...")
})