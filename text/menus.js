"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mainMenu = mainMenu;
exports.makeMenu = makeMenu;
exports.searchMenu = searchMenu;
exports.viewMenu = viewMenu;
var viewTask = require('../prompt/getMenu.js');
var readlineSync = require("readline-sync");
var taskDetail_js_1 = require("./taskDetail.js");
var search_js_1 = require("../menus/search.js");
function mainMenu() {
    console.log('\n¿Que deseas hacer?\n\n[1] Ver mis tareas\n[2] Buscar una tarea\n[3] Agregar una tarea\n[0] Salir\n...');
}
function makeMenu(task, estados, dificultades, nueva) {
    if (nueva == true) {
        console.log('\nEstas creando una nueva tarea');
    }
    else {
        console.log('\nEstas editando una tarea');
    }
    console.log('\nFecha de creacion: ' + task.fechaCreacion + '\nUltima edicion: ' + task.ultimaEdicion);
    console.log('\n[1] Ingresa el Titulo: ' + task.titulo);
    console.log('[2] Ingresa la descripcion: ' + task.descripcion);
    console.log('[3] Estado: ' + estados.get(task.status));
    console.log('[4] Dificultad: ' + dificultades.get(task.dificultad));
    console.log('[5] Vencimiento: ' + task.vencimiento);
    console.log('[0] Guardar Tarea');
    console.log('[-1] Cancelar Tarea\n');
}
function searchMenu(taskList) {
    var busqueda = readlineSync.question('Introduce el titulo de una tarea para buscarla:\n >');
    busqueda.slice(0, 100); //limita largo de string al mismo que los titulos poseen
    (0, taskDetail_js_1.taskDetail)((0, search_js_1.searchTask)(taskList, busqueda));
}
function viewMenu(taskList) {
    if (taskList.length == 0) {
        console.log('Tu lista de tareas se encuentra vacia\n');
    }
    else {
        console.log('¿Que tareas deseas ver?');
        console.log('[1] Ver todas las tareas');
        console.log('[2] Ver tareas pendientes');
        console.log('[3] Ver tareas en curso');
        console.log('[4] Ver tareas terminadas');
        console.log('[0] Volver');
        return viewTask(taskList);
    }
}
