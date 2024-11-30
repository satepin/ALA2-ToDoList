import * as readlineSync from 'readline-sync';
import { task } from '../task/task.js';
import { taskDetail } from '../text/taskDetail.js';

export function searchTask(taskList : any, busqueda: string) {
    let i = 0;
    let foundCount: number;
    foundCount = 0;
    let foundList: Array<task> = [];
    foundList = new Array;
    if (!(taskList === undefined)) {
        for (i = 0; i < taskList.length; i++) {
            if (taskList[i].titulo.toLowerCase().includes(busqueda.toLowerCase())) {
                foundCount++;
                foundList.push(taskList[i]);
                console.log('[' + foundCount + '] ' + taskList[i].titulo);
            }
        }
    }
    let result = chooseEdit(foundList, foundCount);
    if (!(result == null)) {
        taskDetail(result);
        return result;
    } else {
        return null;
    }
}

export function chooseEdit(foundList: Array<task>, foundCount: number) {
    if (foundCount != 0) {
        let i = Number(readlineSync.question('\nDeseas ver los detalles de alguna?\nIntroduce el numero o 0 para volver\n...'));
        if (isNaN(i) || i == 0 || i < 1 || i > foundCount) {
            return null;
        } else {
            return foundList[i-1];
        }
    } else {
        console.log("No se han encontrado tareas con ese titulo");
        return null;
    }
}