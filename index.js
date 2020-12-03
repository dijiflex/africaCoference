
const express = require('express');
const app = express();
 


app.get('/', (req, res) => {

    res.send(req.query.name + 'Hello from the Microsoft Student Summit')
})

app.listen(process.env.PORT || 3000);
console.log('The applicaiton is running. 😁');