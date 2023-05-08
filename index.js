const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

const users = [ 
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com'},
    { id: 1, name: 'sabnoor', email: 'sabnoor@gmail.com'},
    { id: 1, name: 'alomgir', email: 'alomgir@gmail.com'}
]

app.get('/', (req, res) => {
    res.send('Users management server is running')
})

app.get('/users', (req, res) => {
    res.send(users);
})

app.listen(port, ()=> {
    console.log(`Server is running on PORT: ${port}`)
})