const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));




const start = () => {
    app.listen(PORT)
}
start()