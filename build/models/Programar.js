"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Programar = void 0;
class Programar {
    constructor(titulo, completada, description, urgencia) {
        this.titulo = titulo;
        this.description = description;
        this.completada = completada;
        this.urgencia = urgencia;
    }
    resumen() {
        return `Tarea de Programación: ${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`;
    }
}
exports.Programar = Programar;
//# sourceMappingURL=Programar.js.map