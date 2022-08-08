const express = require('express');
const app = express();

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('./dist'));
    app.use(express.static('./public'));

    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
}

app.get("/api", (req, res) => {
    return res.json({
        message: "Express"
    })
})
module.exports = app;