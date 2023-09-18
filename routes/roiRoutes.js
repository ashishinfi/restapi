'use strict';

const express = require('express');
const roiControll = require('../controllers/roiController');
const router = express.Router();

router.get('/rois', roiControll.getAllRois);
router.get('/roi/:id', roiControll.getRoi);
router.post('/roi', roiControll.addRoi);
router.put('/roi/:id', roiControll.updatRoi);
router.delete('/roi/:id', roiControll.deleteRoi);


module.exports = {
    routes: router
}