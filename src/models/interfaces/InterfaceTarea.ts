export enum Nivel {
  "Informative",
  "Urgente",
  "Bloqueante"
}

/*
  Una Interface sirve para definir la firma y los
  puntos necesarios a implementar por quien la use.
*/

export interface InterfaceTarea {
  titulo: string;
  description?: string;
  completada: boolean;
  urgencia?: Nivel;
  resumen: () => string;
}