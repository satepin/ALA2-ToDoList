"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.task = void 0;
var date_fns_1 = require("date-fns");
var statusIndex = 1;
var difficultyIndex = 1;
var task = /** @class */ (function () {
    function task() {
        this.titulo = "sin nombre";
        this.descripcion = "sin descripcion";
        this.status = 1;
        this.fechaCreacion = (0, date_fns_1.format)(new Date, 'yyyy/MM/dd - hh:mm a') + ' Hora Estandar Argentina';
        this.ultimaEdicion = this.fechaCreacion;
        this.vencimiento = 'ninguna';
        this.dificultad = 1;
    }
    return task;
}());
exports.task = task;
