/**
 * Created by jbt on 18/02/2015.
 */
var mongoose = require('mongoose');

var GradeSchema = new mongoose.Schema({
    name: String,
    grade: Number
});


mongoose.model('Grade', GradeSchema);