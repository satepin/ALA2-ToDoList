"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskMake = taskMake;
var readlineSync = require("readline-sync");
var task_js_1 = require("../task/task.js");
var warning_js_1 = require("../text/warning.js");
var menus_js_1 = require("../text/menus.js");
var taskMakeData = require("../prompt/taskMakeData.js");
var mapas = require("../task/mapas.js");
var check_js_1 = require("./check.js");
function taskMake(editTask) {
    var loop = true;
    var check;
    var menu = 6;
    var newTask;
    var nuevaFlag;
    if (editTask == false || editTask == true) {
        newTask = new task_js_1.task();
        nuevaFlag = true;
    }
    else {
        newTask = editTask;
        nuevaFlag = false;
    }
    do {
        (0, menus_js_1.makeMenu)(newTask, mapas.estados, mapas.dificultades, nuevaFlag);
        menu = Number(readlineSync.question());
        switch (menu) {
            case 1: //nombre
                newTask.titulo = taskMakeData.taskMakeString('el nombre', '(100 caracteres maximo)', 100);
                newTask.ultimaEdicion = taskMakeData.lastEditDate();
                break;
            case 2: //descripcion
                newTask.descripcion = taskMakeData.taskMakeString('una descripcion', '(500 caracteres maximo)', 500);
                newTask.ultimaEdicion = taskMakeData.lastEditDate();
                break;
            case 3: //estado ; check de status valido
                newTask.status = (taskMakeData.taskMakeNumber('el estado', newTask.titulo + '\n[1] Pendiente\n[2] En Curso\n[3] Terminada\n[4] Cancelada'));
                if (!(0, check_js_1.rangeCheck)(newTask.status, 4)) {
                    newTask.status = 1;
                }
                newTask.ultimaEdicion = taskMakeData.lastEditDate();
                break;
            case 4: //Dificultad
                newTask.dificultad = taskMakeData.taskMakeNumber('la dificultad', newTask.titulo + '\n[1] facil\n[2] normal\n[3] dificil');
                if (!(0, check_js_1.rangeCheck)(newTask.dificultad, 3)) {
                    newTask.dificultad = 1;
                }
                ;
                newTask.ultimaEdicion = taskMakeData.lastEditDate();
                break;
            case 5: //vencimiento
                newTask.vencimiento = taskMakeData.taskSetDate('vencimiento', ' (yyyy-mm-dd)', newTask.fechaCreacion);
                newTask.ultimaEdicion = taskMakeData.lastEditDate();
                break;
            case 0: //guardar tarea
                check = (0, check_js_1.isNewEmptyCheck)(newTask);
                if (check.length == 0) {
                    loop = false;
                    return newTask;
                }
                else {
                    console.log('\nEl atributo ' + check + ' se encuentra no definido o vacio, por favor corregir para guardar la tarea.');
                }
                break;
            case -1:
                loop = false;
                return false;
            default:
                (0, warning_js_1.menuWarning)(menu);
                break;
        }
        menu = 6;
    } while (loop);
}
