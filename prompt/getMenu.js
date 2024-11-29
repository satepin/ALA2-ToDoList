import readlineSync from 'readline-sync';
import { menuWarning } from '../text/warning.js';
import { chooseEdit } from '../menus/search.js';

export function viewTask(taskList) {
    let i = 0;
    let foundCount = 0;
    let foundList = []
    let filter = Number(readlineSync.question());
    let filterType = null;
    switch (filter) {
        case 1:
            filterType = ':'
            break;
        case 2:
            filterType = ' pendientes:';
            break;
        case 3:
            filterType = ' en curso:';
            break;
        case 4:
            filterType = ' terminadas';
            break;
        case 0:
            return;
        default:
            menuWarning(filter);
            return;
    }
    console.log('\nEstas son todas tus tareas' + filterType + ':\n')
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].status == filter - 1 || filter == 1) {
            console.log('[' + (i + 1) + '] ' + taskList[i].titulo);
            foundCount++;
            foundList[foundCount] = taskList[i];
        }
    }
    return chooseEdit(foundList, foundCount);
}

