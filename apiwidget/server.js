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



module.exports = hardserver;
