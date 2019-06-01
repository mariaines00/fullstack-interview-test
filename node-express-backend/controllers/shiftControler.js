const async = require('async');

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
    res.send('NOT IMPLEMENTED: Shift create');
}

exports.shift_update_details = function (req, res, next) {
    res.send('NOT IMPLEMENTED: Shift update details');
}