"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchTask = searchTask;
exports.chooseEdit = chooseEdit;
var readlineSync = require("readline-sync");
function searchTask(taskList, busqueda) {
    var i = 0;
    var foundCount;
    foundCount = 0;
    var foundList = [];
    foundList = new Array;
    if (!(taskList === undefined)) {
        for (i = 0; i < taskList.length; i++) {
            if (taskList[i].titulo.toLowerCase().includes(busqueda.toLowerCase())) {
                foundCount++;
                foundList[foundCount] = taskList[i];
                console.log('[' + foundCount + '] ' + taskList[i].titulo);
            }
        }
    }
    var result = chooseEdit(foundList, foundCount);
    if (!(result === false)) {
        return result;
    }
}
function chooseEdit(foundList, foundCount) {
    if (foundCount != 0) {
        var i = Number(readlineSync.question('\nDeseas ver los detalles de alguna?\nIntroduce el numero o 0 para volver\n...'));
        if (isNaN(i) || i == 0 || i < 1 || (foundList[Math.floor(i)].titulo == undefined || i > foundCount)) {
            return false;
        }
        else {
            return foundList[Math.floor(i)];
        }
    }
    else {
        console.log("No se han encontrado tareas con ese titulo");
    }
}
