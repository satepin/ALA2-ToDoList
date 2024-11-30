import { task } from '../task/task.js';
import * as dates from 'date-fns';

export function isNewEmptyCheck(newTask : task){
    if(newTask.titulo == "sin nombre" || newTask.titulo == "" || newTask.titulo == undefined || newTask.titulo == null)
    {
        return 'titulo';
    }
    return '';
}

export function dateCheck(dateString : string){
    let result = dates.parseISO(dateString)
    if(isNaN(result.getTime())){
        return false;
    }else{
        return true;
    }
}

export function rangeCheck(number : number | undefined, max : number){
    if(!(number === undefined)){
        number = Math.floor(number);
        return (number >= 1 && number <= max);
    }return false;
}