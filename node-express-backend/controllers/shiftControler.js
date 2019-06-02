const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

const Shift = require('../models/shift');

//Returns all Shifts in db
exports.shifts_list = function (req, res, next) {
    Shift.find()
        .sort([['start_date', 'ascending']])
        .exec(function (err, shifts_list) {
            if (err) { return next(err); }
            res.send(shifts_list);
        })
}

exports.shift_details = function (req, res, next) {
    res.send('NOT IMPLEMENTED: Shift detals');
}

exports.shift_delete = function (req, res, next) {
    res.send('NOT IMPLEMENTED: Shift delete');
}

exports.shift_create = function (req, res, next) {

    //create schma obj
    let shift = new Shift(
        {
            person: req.body.name,
            start_date: req.body.start_date,
            duration: req.body.duration
        }
    )
    // save to db
    shift.save(function (err) {
        if (err) { res.status(500).send(`could not add shift for ${req.body.name}`); }
        res.status(200).send({});
    });   
}

exports.shift_update_details = function (req, res, next) {
    res.send('NOT IMPLEMENTED: Shift update details');
}