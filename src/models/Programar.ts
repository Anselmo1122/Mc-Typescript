import { InterfaceTarea, Nivel } from "./interfaces/InterfaceTarea";

export class Programar implements InterfaceTarea {
  titulo: string;
  description?: string | undefined;
  completada: boolean;
  urgencia?: Nivel | undefined;

  constructor(titulo: string, completada: boolean, description?: string, urgencia?: Nivel) {
    this.titulo = titulo;
    this.description = description;
    this.completada = completada;
    this.urgencia = urgencia;
  }

  resumen(): string {
    return `Tarea de Programación: ${this.titulo} - ${this.completada} - Nivel: ${this.urgencia}`
  }
}