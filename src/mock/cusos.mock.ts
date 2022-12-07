import { Curso } from "../models/Curso";

const cursoTs: Curso = new Curso("TypeScript", 8);
const cursoJs: Curso = new Curso("JavaScript", 10);

const cursos: Curso[] = [];

cursos.push(cursoTs, cursoJs);

export const listaDeCursos: Curso[] = cursos // Lista de Cursos
