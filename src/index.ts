// Cookies Utils
// import { setCookie, deleteCookie, deleteAllCookies, cookieExists, cookieHasValue } from "cookies-utils";
import { listaDeCursos } from "./mock/cusos.mock";
import { Curso } from "./models/Curso";
import { Estudiante } from "./models/Estudiante";
import { InterfaceTarea, Nivel } from "./models/interfaces/InterfaceTarea";
import { Singleton } from "./models/Patterns/Creacionales/singleton";
import { Jefe, Persona, Trabajador } from "./models/Persona";
import { Programar } from "./models/Programar";

// Este es un comentario en TS.

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

// Primitive Types: string, number, boolean, any, null y undefined.

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

// Factor de propagación para reasignar valores de un objeto.
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

// Funciones
/**
 * Función que muestra un saludo por consola.
 */
function saludar() {
  let nombre: string = "Anselmo";
  console.log(`!Hola, ${nombre}`);
}

// Invocación de la función
saludar();

/**
 * Función que muestra un saludo por consola a persona.
 * @param nombre Nombre ha mostrar por consola.
 */
function saludarPersona(nombre: string) {
  console.log(`¡Hola, ${nombre}!`)
}

saludarPersona("Anselmo");
// saludarPersona(4);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Parámetro por defecto
function despedir(nombre: string = "Carles") {
  console.log(`¡Adiós, ${nombre}!`)
}  
despedir();
despedir("Anselmo");

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Parámetro opcional 
/**
 * Función para despedir persona.
 * @param nombre string | undefined
 */
function despedirPersona(nombre?: string) {
  if (nombre) console.log(`¡Adiós, ${nombre}!`)
  else console.log("Adiós amigo mio.")
}
despedirPersona("Anselmo");
despedirPersona();

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Usando varios parámetros
function variosParametros(nombre: string, apellidos?: string, edad: number = 17) {
  if (apellidos) console.log(`${nombre} ${apellidos} tiene ${edad}`)
  else console.log(`${nombre} tiene ${edad}`)
}

variosParametros("Anselmo");
variosParametros("Anselmo", "Del Hoyo");
variosParametros("Anselmo", "Del Hoyo", 18);
variosParametros("Anselmo", undefined, 18);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Parámetro de diferentes tipos
function variosTipos(parametro: string | number) {
  if (typeof(parametro) === "string") console.log("Parámetro de tipo string.")
  else console.log("Parámetro de tipo number.")
}

variosTipos("string")
variosTipos(2022)

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Retornando valores
function obtenerNombre(nombre: string) {
  return `Nombre: ${nombre}`;
}

let miNombre = obtenerNombre("Anselmo");
console.log(miNombre)

// Podemos definir tipos de valores a retornar
function obtenerEdad(edad?: string): string | number {
  return `Edad: ${edad}`;
  // return 12;
}

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

let miEdad = obtenerEdad("17")
console.log(miEdad)

// Funciones flecha
const sumar = (num1: number, num2: number): number => num1 + num2;
const suma = sumar(2,2);
console.log(`Resultado: ${suma}`);
console.log(`Resultado: ${sumar(5,4)}`);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Operador Spread como parámetro.
function sumarNumeros(...numeros: number[]): void {
  numeros.forEach((numero, index )=>{
    let suma = numero + numeros[--index]
    !isNaN(suma) 
      ? console.log(`Suma:`, suma) 
      : console.log("--- Resultados ---")
  })
} 
sumarNumeros(12,54,32,2,8)

function restarNumeros(numeros: number[]): void {
  numeros.forEach((numero, index)=>{
    let resta = numero - numeros[--index]
    !isNaN(resta) 
      ? console.log(`Resta:`, resta) 
      : console.log("--- Resultados ---")
  })
}
restarNumeros([12, 54, 32, 2, 8])

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

type persona = {
  nombre: string,
  apellido: string,
  edad: number,
}

let empleado: persona = {
  nombre: "Fabio",
  apellido: "Martinez",
  edad: 32,
}

const obtenerEmpleado = (empleado: persona): string => `El empleado ${empleado.nombre} tiene ${empleado.edad} años.`

console.log(obtenerEmpleado(empleado));

const cobrarEmpleado = (empleado: persona, cobrarMas: Function, cobrarMenos: Function) => {
  if (empleado.edad > 24) console.log(cobrarMas(empleado.edad))
  else console.log(cobrarMenos(empleado.edad))
}

const cobrarMas = (edad: number): string => `Este empleado tiene ${edad}, por eso cobrará: 2000 €`
const cobrarMenos = (edad: number): string => `Este empleado tiene ${edad}, por eso cobrará: 500 €`

cobrarEmpleado(empleado, cobrarMas, cobrarMenos);

// Funciones asíncronas.
async function obtenerDatos(): Promise<string> {
  let result = await "Hago una acción tardía."
  return result
}
obtenerDatos()
  // .then((result) => console.log(result))
  .catch((error) => console.log(error))
  // .finally(() => console.log("A finalizado la operación"))

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Funciones generadoras.
function* generarNumeros() {
  // Yield --> sirve para emitir errores.
  let index = 0;
  while (index < 5) {
    // Emitimos un valor
    yield index;
    index++
  }
}

let numeroGenerado = generarNumeros();

console.log(numeroGenerado.next().value);
console.log(numeroGenerado.next().value);
console.log(numeroGenerado.next().value);

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Funciones generadoras dentro de funciones generadoras
function* watcher(numero: number) {
  // Emitimos el valor inicial.
  yield numero ;
  // Llamamos a las emisiones del Worker para que emite más valores.
  yield* worker(numero); 
  // Emitimos el valor final.
  yield numero + 4; 
}

function* worker(numero: number) {
  yield numero + 1;
  yield numero + 2;
  yield numero + 3;
}

let generarSaga = watcher(0);

// Valores obtenidos por la función generadora.
console.log(generarSaga.next().value);
console.log(generarSaga.next().value);
console.log(generarSaga.next().value);
console.log(generarSaga.next().value);

// Sobrecarga de funciones.
/*
  Tiende a ocurrir dentro de las clases, funciones con mismo nombre 
  nombre pero dependiendo del parámetro pasado, esta ejecutará algo distinto.
*/

// Persistencia de datos en el navegador
/*
  - Session Storage --> Almacenamiento durante la sesión.
  - Local Storage   --> Almacenamiento en el navegador del cliente.
  - Cookies         --> Tienen una fecha de caducidad y también tienen un ámbito de URL.
*/

// Local and Session Storage

// function saveSession(key: string | number, value: any):void {
//   sessionStorage.setItem(key, value);
// }
// const item = saveSession("Name", "Anselmo");
// const myItem = sessionStorage.getItem("Name");

// Cookies

// type Cookie = {
//   name: string,    // string,
//   value: string,   // string,
//   maxAge: number,  // optional number (value in seconds),
//   expires: Date,   // optional Date,
//   path: string,    // optional string,
//   domain: string | undefined,  // optional string,
//   secure: boolean | undefined, // optional boolean,
// }

// more information about the options in documentation https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie
// const cookieOptions: Cookie = {
//   name: "name", // string,
//   value: "value", // string,
//   maxAge: 10 * 60, // optional number (value in seconds),
//   expires: new Date(2099, 10, 1), // optional Date,
//   path: "/", // optional string,
//   domain: undefined,
//   secure: undefined,
// };
// setCookie(cookieOptions);

// Confirmar si existe
// const isExist = cookieExists("name");

// Eliminar cookie
// deleteCookie("name")

// Confirmar su valor
// const hasValue = cookieHasValue("name", "value");

// Eliminar todas las cookies
// deleteAllCookies();

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Breve introducción a las clases y gestión de eventos

class Temporizador {

  public terminar?: Function = (): void => {};

  public empezar(time: number): void {

    setTimeout(() => {
      if (!this.terminar) return;
      this.terminar();
    }, time)

  }

}

const miTemporizador: Temporizador = new Temporizador();

miTemporizador.terminar = () => console.log("El Temporizador ha terminado.");

miTemporizador.empezar(1000);

// Eliminar la ejecución de la función.
delete miTemporizador.terminar;

// ? Clases 

// ----------------> Creamos los cursos

// const cursoTs: Curso = new Curso("TypeScript", 8);
// const cursoJs: Curso = new Curso("JavaScript", 10);

// const listaDeCursos: Curso[] = [];

// listaDeCursos.push(cursoTs, cursoJs); // Lista de Cursos

// ----------------> Creamos un mock que exporta la lista de cursos y lo importamos.

// ----------------> Creamos estudiante.

const anselmo: Estudiante = new Estudiante("Anselmo", "Del Hoyo", listaDeCursos)

console.log(`Hola! soy ${anselmo.nombre} ${anselmo.apellidos}, y he completado estos cursos.`);

listaDeCursos.forEach((curso) => console.log(`${curso.nombre}: ${curso.horas} horas invertidas`))

// Podemos crear más cursos.

const cursoAngular: Curso = new Curso("Angular", 25);

listaDeCursos.push(cursoAngular);

// Validar la instancia de un Objeto/Variable.

// typeof / instanceof

if (cursoAngular instanceof Curso) console.log("- Es una instancia de Curso");

// Mock: hace referencia a datos inventados o falsos.

const horasTotalesAnselmo = anselmo.obtenerHorasCursos;
console.log(`- Horas Totales estudiadas: ${horasTotalesAnselmo}`);

const DNINuevo: number = 123456;

// Asignamos un nuevo valor a la propiedad privada DNI
anselmo.modificarDNI = DNINuevo;

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Herencia y Polimorfismo

const persona1 = new Persona("Frank", "Stwart", 15);

const trabajador1 = new Trabajador("Anselmo", "Del Hoyo", 18, 2500);
const trabajador2 = new Trabajador("Fernando", "García", 30, 900);
const trabajador3 = new Trabajador("William", "Park", 20, 1000);

const jefe1 = new Jefe("Mark", "Smith", 53, []);
jefe1.trabajadores.push(trabajador1, trabajador2, trabajador3);

persona1.saludar(); // Saludo de Persona

trabajador1.saludar(); // Saludo heredado de persona, especficado en trabajador

jefe1.saludar(); // Saludo heredado de persona

console.log("--- Trabajadores del jefe1 ---");
jefe1.trabajadores.forEach((trabajador) => console.log(`- ${trabajador.nombre} ${trabajador.apellido}`));

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Uso de Interfaces.

// Uso para la implementación en objetos

const TareaIngles: InterfaceTarea = {

  titulo: "Estudiar Inglés",
  description: "Debo hacer la tarea sobre genitivo sajón.",
  completada: false,
  resumen: function(): string {
    return `${this.titulo} - ${this.description}`
  }

}

console.log(TareaIngles.resumen());

// Uso para la implementación en Clases

const ProgramoTypeScript = new Programar(
  "Programar en TypeScript", 
  false, 
  undefined,
  Nivel.Bloqueante,
)

console.log(ProgramoTypeScript.resumen());

console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")

// Decoradores ---> @ 

// Experimentales
// Añadir para:
// - Clases
// - Parámetros
// - Métodos
// - Propiedades

// function Override(label: string) {
//   return function decoratedProperty(target: object, propertyKey: string) {
//     Object.defineProperty(target, propertyKey, {
//       configurable: false,
//       get: () => label,
//     })
//   }
// }

// class PruebaDecorador {
//   @Override("Prueba") nombre: string = "Anselmo";
// }

// let decorador: PruebaDecorador = new PruebaDecorador();
// console.log(decorador.nombre);

// Decoradores para Parámetros y Propiedades

function decoratedProperty(target: Object, propertyKey: string) {
  console.log('Nombre de la propiedad', propertyKey);
  console.log('Clase', target.constructor);

  console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\")
}

function decoratedParam(target: Object, propertyKey: string, parameterIndex: number) {
  console.log('Nombre del metodo', propertyKey);
  console.log('Posicion del parámetro', parameterIndex);
  console.log('Clase', target.constructor);
}

class ExampleClass {
  @decoratedProperty exampleProperty: string = 'Hello World';

  sum(a: number, @decoratedParam b:number): number {
    return a + b
  }
}

// Patrones de diseño 
// --- Patrones creacionales
// --- --- Singleton

const s1 = Singleton.getInstance();
const s2 = Singleton.getInstance();

if (s1 === s2) {
  console.log('Singleton funciona, ambas variables contienen la misma instancia.');
} else {
  console.log('Singleton falló, las variables contienen diferentes instancias.');
}
