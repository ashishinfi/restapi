'use strict';

const roiData = require('../data/rois');

const getAllRois = async (req, res, next) => {
    try {

        const roilist = await roiData.getRois();
        res.send(roilist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRoi = async (req, res, next) => {
    try {
        const roiId = req.params.id;
        const roi = await roiData.getById(roiId);
        res.send(roi);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addRoi = async (req, res, next) => {
    try {
        const data = req.body;
        const insert = await roiData.creatRoi(data);
        res.send(insert);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatRoi = async (req, res, next) => {
    try {
        const roiId =  req.params.id;
        const data = req.body;
        const updated = await roiData.updateRoi(roiId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteRoi = async (req, res, next) => {
    try {
        const roiId = req.params.id;
        const deletedRoi = await roiData.deleteRoi(roiId);
        res.send(deletedRoi);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllRois,
    getRoi,
    addRoi,
    updatRoi,
    deleteRoi
}