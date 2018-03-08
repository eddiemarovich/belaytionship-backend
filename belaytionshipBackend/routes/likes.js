'use strict'

const express = require('express')
const knex = require('../knex')
const router = express.Router()


router.get('/likes', (req, res, next) => {
  knex('likes').orderBy('id', 'asc')
    .distinct('id', 'user_id', 'liked_id')
    // .join('users', 'users.name', '=', )
    .select()
    .then(data => {
      res.status(200).json(data)
    })
    .catch(err => {
      next(err)
    })
})

router.get('/likes/:id', (req, res, next) => {
  const id = req.params.id
  knex('likes')
    .where({ id })
    .distinct('id', 'user_id', 'liked_id')
    .select()
    .first()
    .then(data => {
      if (!data){
        res.status(404).json({error: 'like not found'})
      }
      res.status(200).json(data)  
    })
})

module.exports = router
