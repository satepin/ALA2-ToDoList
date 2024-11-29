import {estados, dificultades} from '../task/mapas.js'
var readlineSync = require("readline-sync");
const taskMake = require('../menus/taskMake.ts');
import { task } from '../task/task';

export function taskDetail(taskDetail : task | undefined){
    let editar = '0';
    if(!(taskDetail === undefined)){
        const taskEstado = estados.get(taskDetail.status);
        const taskDificultad = dificultades.get(taskDetail.dificultad)
        console.log('\nEsta es la tarea que elegiste\n\n');
        console.log(taskDetail.titulo + '\n');
        console.log(taskDetail.descripcion + '\n');
        console.log('Estado: ' + taskEstado);
        console.log('Dificultad: ' + taskDificultad);
        console.log('Vencimiento: ' + taskDetail.vencimiento);
        console.log('Fecha de Creacion: ' + taskDetail.fechaCreacion);

        // edicion

        console.log('\nSi deseas editarla, presiona E\nPresiona cualquier otra tecla para continuar... ')
        editar = readlineSync.question()
        if(editar.toLowerCase() == 'e'){
            taskMake(taskDetail);
        }
    }
}