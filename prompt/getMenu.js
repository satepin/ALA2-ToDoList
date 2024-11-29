"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.viewTask = viewTask;
var readline_sync_1 = require("readline-sync");
var warning_js_1 = require("../text/warning.js");
var search_js_1 = require("../menus/search.js");
function viewTask(taskList) {
    var i = 0;
    var foundCount = 0;
    var foundList = Array;
    var filter = Number(readline_sync_1.default.question());
    var filterType;
    switch (filter) {
        case 1:
            filterType = ':';
            break;
        case 2:
            filterType = ' pendientes:';
            break;
        case 3:
            filterType = ' en curso:';
            break;
        case 4:
            filterType = ' terminadas';
            break;
        case 0:
            return;
        default:
            (0, warning_js_1.menuWarning)(filter);
            return;
    }
    console.log('\nEstas son todas tus tareas' + filterType + ':\n');
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].status == filter - 1 || filter == 1) {
            console.log('[' + (i + 1) + '] ' + taskList[i].titulo);
            foundCount++;
            foundList[foundCount] = taskList[i];
        }
    }
    return (0, search_js_1.chooseEdit)(foundList, foundCount);
}
