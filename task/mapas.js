"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dificultades = exports.estados = void 0;
var estados = new Map([
    [1, "pendiente"],
    [2, "en curso"],
    [3, "terminada"],
    [4, "cancelada"]
]);
exports.estados = estados;
var dificultades = new Map([
    [1, "facil ★☆☆"],
    [2, "normal ★★☆"],
    [3, "dificil ★★★"]
]);
exports.dificultades = dificultades;
