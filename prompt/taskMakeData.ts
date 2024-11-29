import readlineSync from 'readline-sync';
import { menuWarning } from '../text/warning.js';
import { format, parse, getMilliseconds } from 'date-fns';
import { dateCheck } from '../menus/check.js';

export function taskMakeNumber(dataName, extraData) {
    let taskData = Number(readlineSync.question('\nIngrese ' + dataName + ' de la tarea ' + extraData + '\n'));
    if (isNaN(taskData)) {
        menuWarning(taskData);
        return;
    }
    return taskData;
}

export function taskMakeString(dataName, extraData, limit) {
    let taskData = readlineSync.question('\nIngrese ' + dataName + ' de la tarea ' + extraData + '\n');
    taskData = taskData.slice(0, limit);
    return taskData.trimEnd();
}

export function taskSetDate(dataName, extraData, fechaCreacion) {
    let taskData = readlineSync.question('\nIngrese la fecha de ' + dataName + extraData + '\n');
    if (dateCheck(taskData)) {
        taskData = parse(taskData, 'yyyy-MM-dd', new Date());
        taskData = format(taskData, 'yyyy/MM/dd');
    } else {
        console.log('\nFecha Invalida\n')
        return null
    }
    if (taskData > fechaCreacion) {
        return taskData;
    } else {
        console.log('\nLa fecha no puede ser mas antigua que la creacion de la tarea.');
    }
}

export function lastEditDate() {
    let editDate = format(new Date, 'yyyy/MM/dd - hh:mm a') + ' Hora Estandar Argentina';
    return editDate
}