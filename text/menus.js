import { viewTask } from '../prompt/getMenu.js';

export function mainMenu() {
    console.log('\n¿Que deseas hacer?\n\n[1] Ver mis tareas\n[2] Buscar una tarea\n[3] Agregar una tarea\n[0] Salir\n...')
}

export function makeMenu(task, estados, dificultades, nueva) {
    if (nueva == true) { console.log('\nEstas creando una nueva tarea'); }
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

export function searchMenu(taskList) {
    let busqueda = console.log('Introduce el titulo de una tarea para buscarla:\n >');
    busqueda.splice(0, 100); //limita largo de string al mismo que los titulos poseen
    taskDetail(searchTask(taskList, busqueda));
}

export function viewMenu(taskList) {
    if (taskList.length == 0) {
        console.log('Tu lista de tareas se encuentra vacia\n')
    } else {
        console.log('¿Que tareas deseas ver?');
        console.log('[1] Ver todas las tareas');
        console.log('[2] Ver tareas pendientes');
        console.log('[3] Ver tareas en curso');
        console.log('[4] Ver tareas terminadas');
        console.log('[0] Volver')
        return viewTask(taskList);
    }
}