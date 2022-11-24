// Este es un comentarion en TS.

import { table } from "console";

console.log("Hola TypeScript");
console.log("Hola Anselmo");
console.log("Adiós Anselmo");

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Declaración de variables.

let email = "anselmodelhoyo11@gmail.com";
var nombre = "Anselmo";

console.log("Hola " + nombre);
console.log("¿Qué tal ", nombre, "?");
console.log(`¿Cómo han ido las vacaciones, ${nombre}?`);

console.log(`El email de ${nombre} es ${email}`);

const PI = 3.1416;

// En Typescript podemos escribir código de manera inferida.
// Pero también podemos aplicar el tipado fuerte a nuestro código, lo cual se considera una buena práctica.

let emailFuerte: string = "anselmodelhoyo22@gmail.com";

var nombreFuerte: string = "Anselmo";

const myIq: number = 100;

let error: boolean;
error = false;

console.log(
  `Mis datos con tipado fuerte: `,
  emailFuerte,
  nombreFuerte,
  myIq,
  error
);

var phoneNumber: any = "12345"; // El tipo de dato "any", indica que esta variable puede cambiar de tipo.
console.log("String: ", phoneNumber);
phoneNumber = 12345;
console.log("Number: ", phoneNumber);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Instanciación multiple.
let a: string, b: number, c: boolean;

a = "jajajaja...";
b = 2022;
c = 1 < 10;

console.log(`${a}, ${b}, ${c}`);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Primitive Types: string, number, boolean, void, any, null y undefined.

// Lista de Strings.
let nombres: string[] = ["Anselmo", "Pedro", "Juan"];

// Lista de diferentes valores.
// Al definir de esta forma tenemos que nuestro array "valores" aceptará esos tipos de datos.
let valores: (string | number | boolean | null)[] = [true, "string", 1992, null];

console.log(nombres);
console.log(valores);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Enumerados.
enum Estados {
  "Completado" = "C",
  "Incompleto" = "I",
  "Pendiente" = "P"
}
enum Posicion {
  "Primero" = 1,
  "Segundo",
  "Tercero",
}

let EstadoTarea: Estados = Estados.Completado;
let PosicionCarrera: Posicion = Posicion.Primero;

console.log("Estado: ", EstadoTarea)

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Interfaces.
// En TypeScript podemos crear interfaces.

interface Tarea {
  titulo: string,
  estado: Estados,
  urgencia: number,
}

// Podemos crear variables que sigan la interfaz "Tarea".
let tarea1: Tarea = {
  titulo: "Tarea - 1",
  estado: Estados.Incompleto,
  urgencia: 100,
}

console.log(`Tarea: ${tarea1.titulo}`);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Nuestros tipos de datos.
// Podemos crear nuestros propios tipos de datos.

type productType = {
  nombre: string,
  precio: number,
  anio: number,
}

let coche: productType = {
  nombre: "Pagani Huayra",
  precio: 1000000,
  anio: 2010,
}

console.log(`Mi coche es un ${coche.nombre}, y me costó ${coche.precio}€.`);

// Usando el operador ternario.
console.log(coche.anio <= 2010 ? `Mi coche es viejo` : `Mi coche es nuevo`)

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Para condicionar podemos esperar los valores Falsy: false, null, undefined.

// If / Else
if (error) console.log("Auxilio, ¡ha ocurrido un error!");
else console.log("Tranquilo, no ha pasado nada.");

// If / Else If / Else 
if (coche.anio < 2010) console.log("Mi coche es viejo")
else if (coche.anio === 2010) console.log("Mi coche es de 2010")
else console.log("Mi coche es nuevo");

// Switch 
switch (tarea1.estado) {
  case "C":
    console.log("Tarea completada.")
    break;
  case "I":
    console.log("Tarea no ha sido completada.")
    break;
  case "P":
    console.log("Tarea está pendiente.")
    break;
  default:
    break;
}

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Bucles.

// Bucle While.
let contador1: number = 0;

while (contador1 < 10) {
  contador1++;
  console.log(contador1);
}

// Bucle Do While.
let contador2: number = 0

do {
  contador2++;
  console.log(contador2);
} while (contador2 < 0);

// Bucle For
let arrayLetras: string[] = ["A", "B", "C", "D", "E"];

for (let index = 0; index < arrayLetras.length; index++) {
  const element = arrayLetras[index];
  console.log(element);
}

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Método "foreach"
let arrayNombres: string[] = ["Anselmo", "Marciano", "Fernando", "Arturo"];

arrayNombres.forEach((nombre, index) => console.log(`${index}: ${nombre}`));

// Método "filter"
let nombresA = arrayNombres.filter((nombre) => nombre.startsWith("A"));
console.log(nombresA);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Operador Spread

// Factor de propagación para declarar variables.
const miTarea: Tarea = {
  titulo: "Mi Tarea",
  estado: Estados.Incompleto,
  urgencia: 10,
}

let { titulo, estado, urgencia } = miTarea;

// Factor de propagación para copiar arrays.
let comprasLunes: string[] = ["Harina","Leche","Café"]
let comprasMartes: string[] = [...comprasLunes, "Arroz","Carne","Yuca"]
let comprasViernes: string[] = [...comprasMartes, "Naranjas", "Fresas"]
let comprasSemana: string[] = [...comprasViernes]

comprasSemana.forEach((producto) => console.log(producto));

// Facto de propagación para reasignar valores de un objeto.
const usuario: object = {
  nombre: "Anselmo",
  id: "1s452fqac",
  isDeveloper: false
}

const usuarioActual: object = {
  ...usuario,
  isDeveloper: true,
}

console.log(usuarioActual)

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")


