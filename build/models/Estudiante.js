"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
class Estudiante {
    // Constructor
    constructor(nombre, apellidos, cursos) {
        // Definimos una propiedad como privada
        this.DNI = 154256;
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.cursos = cursos;
    }
    // getters y setters;
    get obtenerHorasCursos() {
        let horasCursos = 0;
        this.cursos.forEach((curso) => {
            return horasCursos += curso.horas;
        });
        return horasCursos;
    }
    set modificarDNI(id) {
        this.DNI = id;
    }
}
exports.Estudiante = Estudiante;
//# sourceMappingURL=Estudiante.js.map