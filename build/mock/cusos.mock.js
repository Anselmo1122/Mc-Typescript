"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaDeCursos = void 0;
const Curso_1 = require("../models/Curso");
const cursoTs = new Curso_1.Curso("TypeScript", 8);
const cursoJs = new Curso_1.Curso("JavaScript", 10);
const cursos = [];
cursos.push(cursoTs, cursoJs);
exports.listaDeCursos = cursos; // Lista de Cursos
//# sourceMappingURL=cusos.mock.js.map