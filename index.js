const express = require('express');
const app = express();

app.get('/', (req, res) => {
        res.send('hello world');
        res.end();
}
)

app.listen(8081, () => {
console.log('server is running')
})
