const route = require('express').Router();
const User = require('../Model/userModel');

route.post('/user', (req, res) => {
    User.create(req.body).then((user)=>{
        if(!user) return res.status(400).send('there was an error')
        res.send('created user')
    })
    .catch((err) => res.status(400).send(err))
})

route.put('/user', (req, res) => {
    const {_id, name, password, role} = req.body
    User.findByIdAndUpdate(_id).then((user) => {
        if(!user) return res.status(400).send('no user found')
        res.status(200).send('user updated')
    })
    .catch((err) => {
        if(err) res.status(400).send(err)

    })
})

.post('/', (req, res) => {
    
})

.get('/', (req, res) => {
    
})