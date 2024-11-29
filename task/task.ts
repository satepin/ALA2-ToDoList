import { format } from 'date-fns';
let statusIndex = 1;
let difficultyIndex = 1;
interface task{
        titulo : string;
        descripcion : string;
        status : number ;
        fechaCreacion : string;
        ultimaEdicion : string;
        vencimiento : string;
        dificultad : number;
}
class task {
        titulo = "sin nombre";
        descripcion = "sin descripcion";
        status = 1;
        fechaCreacion = format(new Date, 'yyyy/MM/dd - hh:mm a') + ' Hora Estandar Argentina';
        ultimaEdicion = this.fechaCreacion;
        vencimiento = 'ninguna';
        dificultad = 1;
}
export { task };
