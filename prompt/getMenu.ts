import * as readlineSync from 'readline-sync';
import menuWarning from '../text/warning.js';
import { chooseEdit } from '../menus/search.js';
import { taskDetail } from '../text/taskDetail.js';
import { task } from '../task/task.js';

export function viewTask(taskList : Array<task>) {
    let i = 0;
    let foundCount : number = 0;
    let foundList = [];
    let filter = Number(readlineSync.question());
    let filterType : String;
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
            foundList.push(taskList[i]);
            foundCount++;

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

