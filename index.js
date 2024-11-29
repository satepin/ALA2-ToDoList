"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var menus_js_1 = require("./text/menus.js");
var warning_js_1 = require("./text/warning.js");
var taskMake_js_1 = require("./menus/taskMake.js");
var search_js_1 = require("./menus/search.js");
var menu = 0;
var loop = true;
var newTask;
var searchFlag;
var taskList = [];
//preguntar nombre de usuario
var username = readlineSync.question('\nCual es tu nombre?\n...');
username.slice(0, 30);
do {
    console.log('\nHola ' + username + '!');
    (0, menus_js_1.mainMenu)();
    menu = Number(readlineSync.question());
    switch (menu) {
        case 1:
            newTask = (0, menus_js_1.viewMenu)(taskList);
            if (newTask) {
                (0, taskMake_js_1.taskMake)(newTask);
                newTask = null;
            }
            break;
        case 2:
            searchFlag = (0, search_js_1.searchTask)(taskList, readlineSync.question('Ingrese el titulo de la tarea a buscar\n...'));
            if (searchFlag !== null) {
                newTask = searchFlag;
            }
            if (newTask) {
                (0, taskMake_js_1.taskMake)(newTask);
                newTask = null;
            }
            break;
        case 3:
            newTask = (0, taskMake_js_1.taskMake)(false);
            if (newTask) {
                taskList.push(newTask);
                newTask = null;
            }
            else {
                console.log('\nSe ha cancelado la tarea\n');
            }
            break;
        case 0:
            loop = false;
            console.log('\nTerminando Programa...\n');
            break;
        default:
            (0, warning_js_1.default)(menu);
            break;
    }
    menu = 0;
} while (loop);
