"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNewEmptyCheck = isNewEmptyCheck;
exports.dateCheck = dateCheck;
exports.rangeCheck = rangeCheck;
var dates = require("date-fns");
function isNewEmptyCheck(newTask) {
    if (newTask.titulo == "sin nombre" || newTask.titulo == "" || newTask.titulo == undefined || newTask.titulo == null) {
        return 'titulo';
    }
    return '';
}
function dateCheck(dateString) {
    var result = dates.parseISO(dateString);
    if (isNaN(result.getTime())) {
        return false;
    }
    else {
        return true;
    }
}
function rangeCheck(number, max) {
    if (!(number === undefined)) {
        number = Math.floor(number);
        return (number >= 1 && number <= max);
    }
    return false;
}
