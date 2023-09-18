'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getRois = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rois');
        const roisList = await pool.request().query(sqlQueries.roislist);
        return roisList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(roiId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rois');
        const roi = await pool.request()
                            .input('roiId', sql.Int, roiId)
                            .query(sqlQueries.roibyId);
        return roi.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatRoi = async (roidata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rois');
        const insertRoi = await pool.request()
                            .input('projectname', sql.NVarChar(100), roidata.projectname)
                            .input('projectDescription', sql.NVarChar(1500), roidata.projectDescription)
                            .input('cpc', sql.NVarChar(200), roidata.cpc)
                            .input('cpi', sql.NVarChar, roidata.cpi)
                            .input('cpl', sql.NVarChar, roidata.cpl)
                            .input('cps', sql.NVarChar, roidata.cps)
                            .input('uac', sql.NVarChar, roidata.uac)
                            .input('cv', sql.NVarChar, roidata.cv)
                            .input('startDate', sql.Date, roidata.startDate)
                            .input('endDate', sql.Date, roidata.endDate)
                            .query(sqlQueries.createRoi);                            
        return insertRoi.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateRoi = async (roiId, data) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rois');
        const update = await pool.request()
                        .input('roiId', sql.Int, roiId)
                        .input('projectname', sql.NVarChar(100), data.projectname)
                        .input('projectDescription', sql.NVarChar(1500), data.projectDescription)
                        .input('cpc', sql.NVarChar(200), data.cpc)
                        .input('cpi', sql.NVarChar, data.cpi)
                        .input('cpl', sql.NVarChar, data.cpl)
                        .input('cps', sql.NVarChar, data.cps)
                        .input('uac', sql.NVarChar, data.uac)
                        .input('cv', sql.NVarChar, data.cv)
                        .input('startDate', sql.Date, data.startDate)
                        .input('endDate', sql.Date, data.endDate)
                        .query(sqlQueries.updateRoi);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteRoi = async (roiId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('rois');
        const deleteRoi = await pool.request()
                            .input('roiId', sql.Int, roiId)
                            .query(sqlQueries.deleteRoi);
        return deleteRoi.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getRois,
    getById,
    creatRoi,
    updateRoi,
    deleteRoi
}