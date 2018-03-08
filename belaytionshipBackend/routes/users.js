'use strict'

const express = require('express')
const knex = require('../knex')
const router = express.Router()

router.get('/users', (req, res, next) => {
   knex('users').orderBy('id', 'asc')
    .distinct('id', 'name', 'about')
    .select()
    .then(data => {
      res.status(200).json(data)
    })
  .catch(err => {
    next(err)
  })
})

router.get('/users/:id', (req, res, next) => {
  const id = req.params.id
  knex('users')
    .where({ id })
    .distinct('id', 'name', 'about')
    .select()
    .first()
    .then(data => {
      if(!data){
        res.status(404).json({error: 'not found'})
      }
      res.status(200).json(data)
    })
})




router.post('/users/:id', (req, res, next) => {
  const about = req.params.about
  const name = req.params.name
  knex('users')
    .insert({ name, m})
})

router.patch('/users/:id', (req, res, next) => {
  const id = req.params.id
  const name = req.body.name
  const about = req.body.about
  return knex('about')
    .where('id', id)
    .update({ about })
    .returning(['id', 'name', 'about'])
    .then(data => {
      res.status(200).json(data[0])
    })
})

router.delete('/users/:id', (req, res, next) => {
  const id = parseInt(req.params.id)
  if (!Number.isInteger(id)){
    return next({status: 404, error: 'User not found'})
  }
  return knex('users')
    .where({ id })
    .first()
    .del()
    .then(data => {
      res.status(204).json(data)
    })
    .catch(err => {
      next(err)
    })
})

module.exports = router
