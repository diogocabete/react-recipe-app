const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/:recipe', async(req, res) => {
    try {
        const {recipe} = req.params
        const response = await fetch(`https://api.edamam.com/search?q=${recipe}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`)
        const data = await response.json()
        res.json(data)
    } catch (err) {
        console.error(err)

        res.status(500).json({
            message: 'Server error'
        })
    }
});

module.exports = router;