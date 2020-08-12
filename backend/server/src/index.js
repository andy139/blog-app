const express = require("express");
const routes = require("../../routes");
const app = express();

const path = require('path')

// if (process.env.NODE_ENV === 'production') {
//     app.use(express.static('frontend/build'))
//     app.get('/api', (req, res) => {
//         res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
//     })
// }
app.use(express.json());
app.use("/api", routes);

module.exports = app;
