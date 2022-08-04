const express = require('express');
const path = require('path');

const app = express();

app.get('/api', (req, res) => {
    res.json({message: 'It works! :)'});
});

if (process.env.NODE_ENV === 'production') {
    console.log(`__dirname = ${__dirname}`);
    app.use(express.static(path.join(__dirname, '..', 'dist')));
    app.use(express.static(path.join(__dirname, '..', 'public')));

    app.listen(5000, () => console.log('listening on port 5000'));
}


module.exports = app;