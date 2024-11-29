import readlineSync from 'readline-sync';

export function searchTask(taskList, busqueda) {
    let i = 0;
    let foundCount = 0;
    let foundList = [];
    for (i = 0; i < taskList.length; i++) {
        if (taskList[i].titulo.toLowerCase().includes(busqueda.toLowerCase())) {
            foundCount++;
            foundList[foundCount] = taskList[i];
            console.log('[' + foundCount + '] ' + taskList[i].titulo);
        }
        return chooseEdit(foundList, foundCount);
    }
}

export function chooseEdit(foundList, foundCount) {
    if (foundCount != 0) {
        let i = readlineSync.question('\nDeseas ver los detalles de alguna?\nIntroduce el numero o 0 para volver\n...');
        if (isNaN(i) || i == 0 || foundList[Math.floor(i).title == undefined]) { return false } else {
            return foundList[Math.floor(i)];
        }
    } else {
        console.log("No se han encontrado tareas con ese titulo");
    }
}