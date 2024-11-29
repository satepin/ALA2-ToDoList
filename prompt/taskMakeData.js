"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskMakeNumber = taskMakeNumber;
exports.taskMakeString = taskMakeString;
exports.taskSetDate = taskSetDate;
exports.lastEditDate = lastEditDate;
var readlineSync = require("readline-sync");
var warning_js_1 = require("../text/warning.js");
var date_fns_1 = require("date-fns");
var check_js_1 = require("../menus/check.js");
function taskMakeNumber(dataName, extraData) {
    var taskData = Number(readlineSync.question('\nIngrese ' + dataName + ' de la tarea ' + extraData + '\n'));
    if (isNaN(taskData)) {
        (0, warning_js_1.default)(taskData);
        return;
    }
    return taskData;
}
function taskMakeString(dataName, extraData, limit) {
    var taskData = readlineSync.question('\nIngrese ' + dataName + ' de la tarea ' + extraData + '\n');
    taskData = taskData.slice(0, limit);
    return taskData.trimEnd();
}
function taskSetDate(dataName, extraData, fechaCreacion) {
    var taskData = readlineSync.question('\nIngrese la fecha de ' + dataName + extraData + '\n');
    var newDate;
    if ((0, check_js_1.dateCheck)(taskData)) {
        newDate = (0, date_fns_1.parse)(taskData, 'yyyy-MM-dd', new Date());
        taskData = (0, date_fns_1.format)(newDate, 'yyyy/MM/dd');
    }
    else {
        console.log('\nFecha Invalida\n');
        return null;
    }
    if (taskData > fechaCreacion) {
        return taskData;
    }
    else {
        console.log('\nLa fecha no puede ser mas antigua que la creacion de la tarea.');
    }
}
function lastEditDate() {
    var editDate = (0, date_fns_1.format)(new Date, 'yyyy/MM/dd - hh:mm a') + ' Hora Estandar Argentina';
    return editDate;
}
