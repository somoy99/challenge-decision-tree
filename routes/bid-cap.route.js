const express = require('express')
const routes = express.Router()
const bidCapController = require('../controllers/bip-cap.controller')

const { check, validationResult } = require('express-validator');

routes.post('/', [
    check('rpcAlpha').isNumeric(),
    check('rpcBeta').isNumeric(),
    check('ebRpc').isNumeric(),
    check('net').isNumeric(),
    check('nonSocialClicks').isNumeric(),
    check('nonSocialClicksCutOff').isNumeric(),
    check('socialClicks').isNumeric(),
    check('socialClicksCutOff').isNumeric(),
    check('currentBidCap').isNumeric(),
    check('factor').isNumeric(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
],
    bidCapController.bipCapController
)

module.exports = routes
