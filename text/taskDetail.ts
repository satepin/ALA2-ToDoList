import {estados, dificultades} from '../task/mapas.js'
import * as readlineSync from 'readline-sync';
import { taskMake } from '../menus/taskMake.js'

export function taskDetail(taskDetail : any){
    try {
    if (!taskDetail) {
        console.log("Error: La tarea no existe o no ha sido seleccionada correctamente.");
        return;
    }
    let editar = '0';
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
        process.stdout.write('');
        editar = readlineSync.question('\nSi deseas editarla, presiona E\nPresiona cualquier otra tecla para continuar... ')
        if(editar.toLowerCase() == 'e'){
            return taskMake(taskDetail);
        }
    } catch (error) {
            console.error("Error in taskDetail function:", error);
        }
}