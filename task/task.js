import { format } from 'date-fns';
let statusIndex = 1;
let difficultyIndex = 1;
class task {
        titulo = "sin nombre";
        descripcion = "sin descripcion";
        status = 1;
        fechaCreacion = format(new Date, 'yyyy/MM/dd - hh:mm a') + ' Hora Estandar Argentina';
        ultimaEdicion = this.fechaCreacion;
        vencimiento = null;
        dificultad = 1;
}
export { task };
