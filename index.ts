"use strict";
import * as readlineSync from 'readline-sync';
import { mainMenu, viewMenu } from './text/menus.js';
import menuWarning from './text/warning.js';
import { taskMake } from './menus/taskMake.js';
import { searchTask } from './menus/search.js';

let menu = 0;
let loop = true;
let newTask;
const taskList = [];
//preguntar nombre de usuario
let username = readlineSync.question('\nCual es tu nombre?\n...');
username.slice(0, 30);
do {
    console.log('\nHola ' + username + '!');
    mainMenu();
    menu = Number(readlineSync.question());
    switch (menu) {
        case 1:
            viewMenu(taskList);
            break;
        case 2:
            searchTask(taskList, readlineSync.question('Ingrese el titulo de la tarea a buscar\n...'))
            break;
        case 3:
            newTask = taskMake(false);
            if (newTask) {
                taskList.push(newTask);
                newTask = null;
            } else {
                console.log('\nSe ha cancelado la tarea\n')
            }
            break;
        case 0:
            loop = false;
            console.log('\nTerminando Programa...\n');
            break;
        default:
            menuWarning(menu);
            break;
    }
    menu = 0;
} while (loop);
