import { Curso } from "./Curso";

export class Estudiante {

  // Propiedades de clase
  nombre: string;
  apellidos?: string;
  cursos: Curso[];

  // Definimos una propiedad como privada
  private DNI: number = 154256;

  // Constructor
  constructor(nombre: string, apellidos: string, cursos: Curso[]) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.cursos = cursos;
  }

  // getters y setters;

  get obtenerHorasCursos(): number {

    let horasCursos = 0;

    this.cursos.forEach((curso: Curso)=>{
      return horasCursos += curso.horas
    })

    return horasCursos;
  }

  set modificarDNI(id: number) {
    this.DNI = id;
  }

}