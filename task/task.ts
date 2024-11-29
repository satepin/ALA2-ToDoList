import { format } from 'date-fns';
let statusIndex = 1;
let difficultyIndex = 1;
type statusType = 1 | 2 | 3 | 4;
type dificultadType = 1 | 2 | 3;
interface task{
        titulo : string;
        descripcion : string;
        status : statusType;
        fechaCreacion : string;
        ultimaEdicion : string;
        vencimiento : string;
        dificultad : dificultadType;
}
class task {
        titulo = "sin nombre";
        descripcion = "sin descripcion";
        status : statusType = 1;
        fechaCreacion = format(new Date, 'yyyy/MM/dd - hh:mm a') + ' Hora Estandar Argentina';
        ultimaEdicion = this.fechaCreacion;
        vencimiento = 'ninguna';
        dificultad : dificultadType = 1;
}
export { task };
