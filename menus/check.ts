
import * as dates from 'date-fns';
export function isNewEmptyCheck(newTask){
    if(newTask.titulo == "sin nombre" || newTask.titulo == "" || newTask.titulo == undefined || newTask.titulo == null)
    {
        return 'titulo';
    }
    return '';
}

export function dateCheck(dateString){
    let result = dates.parseISO(dateString)
    if(isNaN(result.getTime())){
        return false;
    }else{
        return true;
    }
}

export function rangeCheck(number, max){
    if(!isNaN(number)){
        number = Math.floor(number);
        return (number >= 1 && number <= max);
    }return false;
}