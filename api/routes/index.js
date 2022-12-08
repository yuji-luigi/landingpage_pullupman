const express = require('express');

const router = express.Router();

//= ===============================================================================
// AUTH ROUTES
//= ===============================================================================
router.get('/', (req,res) => res.sendFile('./public/pages/index.html'));
router.get('/about', (req,res) => res.sendFile('./public/pages/about.html'));
router.get('/workout', (req,res) => res.sendFile('./public/pages/workout.html'));



module.exports = router;
