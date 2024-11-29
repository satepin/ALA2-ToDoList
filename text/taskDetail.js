import {estados, dificultades} from '../task/mapas.js'
import readlineSync from 'readline-sync';

export function taskDetail(task){
    let editar = '0';
    if(task){
        const taskEstado = estados.get(task.status);
        const taskDificultad = dificultades.get(task.dificultad)
        console.log('\nEsta es la tarea que elegiste\n\n');
        console.log(task.titulo + '\n');
        console.log(task.descripcion + '\n');
        console.log('Estado: ' + taskEstado);
        console.log('Dificultad: ' + taskDificultad);
        console.log('Vencimiento: ' + task.vencimiento);
        console.log('Fecha de Creacion: ' + task.fechaCreacion);

        // edicion

        console.log('\nSi deseas editarla, presiona E\nPresiona cualquier otra tecla para continuar... ')
        editar = readlineSync.question()
        if(toLowerCase(editar) == 'e'){
            taskMake(task);
        }
    }
}