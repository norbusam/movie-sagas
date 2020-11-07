const express = require('express');
const router = express.Router();
const pool = require('../modules/pool')

router.get('/', (req, res) => {
  // Add query to get all genres
  pool.query('SELECT * FROM "genres";')
    .then(result=>{
        res.send(result.rows)
    }).catch(err => {
      console.log('error in genre GET server', err);
      res.sendStatus(500)
    })
});

module.exports = router;