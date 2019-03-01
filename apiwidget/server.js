const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const hardserver = express();

hardserver.use(helmet());
hardserver.use(express.json());

const knexConfigy = require('../knexfile');

const deebee = knex(knexConfigy.development);

hardserver.get('/', (rec, rez) => {
    rez.send ({message: 'Well, the easy part is done, because you\'re seeing this'})
})

// get tests

hardserver.get('/api/project', (req, res) => {
    deebee('project')
    .then( stuff => {
      res.status(200).json(stuff)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  });

  
hardserver.get('/api/action', (req, res) => {
    deebee('action')
    .then( stuff => {
      res.status(200).json(stuff)
    })
    .catch(err => {
      res.status(500).json(err)
    })
  });

// now for the 'fun' parts...

hardserver.post('/api/project', (rec, rez) =>{
    deebee('project')
    .insert(rec.body)
    .then( thing => {
        rez.status(200).json(thing)
    })
    .catch(err =>{
        rez.status(500).json(err)
    })
})

hardserver.post('/api/action', (rec, rez) =>{
    deebee('action')
    .insert(rec.body)
    .then( dothething =>{
        rez.status(200).json(dothething)
    })
    .catch(err =>{
        rez.status(500).json(err)
    })
})


module.exports = hardserver;
