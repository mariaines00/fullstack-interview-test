const express = require('express');
const router = express.Router();

// Controllers
const shift_controller = require('../controllers/shiftControler');

//Routes

//GET ALL SHIFTS
router.get('/', shift_controller.shifts_list);

// CREATE NEW
router.put('/', shift_controller.shift_create);

// DELETE SHIFT
router.delete('/', shift_controller.shift_delete);

// UPDATE SHIFT
router.post('/', shift_controller.shift_update_details);

module.exports = router;