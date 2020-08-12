const app = require("./server/src");
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is live at localhost:${PORT}`));
const path = require('path')

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('frontend/build'))
    app.get('/', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    })
}