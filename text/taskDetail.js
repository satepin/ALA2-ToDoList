"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskDetail = taskDetail;
var mapas_js_1 = require("../task/mapas.js");
var readlineSync = require("readline-sync");
var taskMake = require('../menus/taskMake.ts');
function taskDetail(taskDetail) {
    var editar = '0';
    if (!(taskDetail === undefined)) {
        var taskEstado = mapas_js_1.estados.get(taskDetail.status);
        var taskDificultad = mapas_js_1.dificultades.get(taskDetail.dificultad);
        console.log('\nEsta es la tarea que elegiste\n\n');
        console.log(taskDetail.titulo + '\n');
        console.log(taskDetail.descripcion + '\n');
        console.log('Estado: ' + taskEstado);
        console.log('Dificultad: ' + taskDificultad);
        console.log('Vencimiento: ' + taskDetail.vencimiento);
        console.log('Fecha de Creacion: ' + taskDetail.fechaCreacion);
        // edicion
        console.log('\nSi deseas editarla, presiona E\nPresiona cualquier otra tecla para continuar... ');
        editar = readlineSync.question();
        if (editar.toLowerCase() == 'e') {
            taskMake(taskDetail);
        }
    }
}
