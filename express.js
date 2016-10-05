const express = require('express'),
    path = require('path');

function start() {
    const app = express(),
        pwd = path.join(__dirname, 'public');

    app.use(express.static(pwd));

    app.listen(3000, () => console.log('Express server started on port 3000.'));
}

module.exports = { start };
