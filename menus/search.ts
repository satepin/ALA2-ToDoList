var readlineSync = require("readline-sync");
import { task } from '../task/task';
export function searchTask(taskList: Array<task> | undefined, busqueda: string) {
    let i = 0;
    let foundCount: number;
    foundCount = 0;
    let foundList: Array<task> = [];
    foundList = new Array;
    if (!(taskList === undefined)) {
        for (i = 0; i < taskList.length; i++) {
            if (taskList[i].titulo.toLowerCase().includes(busqueda.toLowerCase())) {
                foundCount++;
                foundList[foundCount] = taskList[i];
                console.log('[' + foundCount + '] ' + taskList[i].titulo);
            }
        }
    }
    let result = chooseEdit(foundList, foundCount);
    if (!(result === false)) {
        return result;
    }
}

export function chooseEdit(foundList: Array<task>, foundCount: number) {
    if (foundCount != 0) {
        let i = Number(readlineSync.question('\nDeseas ver los detalles de alguna?\nIntroduce el numero o 0 para volver\n...'));
        if (isNaN(i) || i == 0 || i < 1 || (foundList[Math.floor(i)].titulo == undefined || i > foundCount)) { return false } else {
            return foundList[Math.floor(i)];
        }
    } else {
        console.log("No se han encontrado tareas con ese titulo");
    }
}