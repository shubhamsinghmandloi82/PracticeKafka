const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const producer = require('./producer')
const consumer = require('./consumer')


app.use(express.json())
app.get('/test', (req, res) => {
    res.json("This App Is Runing Successfully")
})

app.get('/producer',producer.run)
app.get('/consumer',consumer.run)


// here is local server code written
app.listen(port, () => {
    console.log(`
    |******************** This App Is Runing Successfully **********************|
    |                                                                           |
    |                                                                           |
    |                       On The Port Of => ${port}                              |
    |                                                                           |
    |                                                                           |
    |***************************************************************************| 
    ` )
})
