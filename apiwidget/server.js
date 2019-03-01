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

// now for the one I don't know how to do, and was never taught in JS...

hardserver.get('/api/project/:id', (req, res) => {
    const id = req.params.id;
    deebee('project')
        .first()
        .where({ id })
        .then(project => {
            return deebee('action')
                .where({ 'project_id': id })
                .then(bullshit => {
                    project.bullshit = bullshit;
                    
                    res.status(200).json(project)
                })
                .catch(err =>{
                    rez.status(500).json(err)
                })
        })
        .catch(err =>{
            rez.status(500).json(err)
        })
})
    // deebee('action')
    // .where({project_id: wreck.params.id})
    // .then(seeminglyrandomshit => {
    //     rezz.status(200).json(seeminglyrandomshit);
    // })
    // .catch(err =>{
    //     rezz.status(500).json(err)
    // })

    // I'm sure knowing how to program a fuction to do this shit would help

    // went and found some code... it works... would have been nice to have
    // gone over something like this at some point during the week...

    // It's always nice to cry during a sprint challenge because you have
    // never gone over or seen shit like this before...

    // I don't really understand why this works... and would like to see
    // another way to do this... or understand this one better...



module.exports = hardserver;
