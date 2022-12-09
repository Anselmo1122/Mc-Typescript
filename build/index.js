"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// Cookies Utils
// import { setCookie, deleteCookie, deleteAllCookies, cookieExists, cookieHasValue } from "cookies-utils";
const cusos_mock_1 = require("./mock/cusos.mock");
const Curso_1 = require("./models/Curso");
const Estudiante_1 = require("./models/Estudiante");
const InterfaceTarea_1 = require("./models/interfaces/InterfaceTarea");
const singleton_1 = require("./models/Patterns/Creacionales/singleton");
const Persona_1 = require("./models/Persona");
const Programar_1 = require("./models/Programar");
// Este es un comentario en TS.
console.log("Hola TypeScript");
console.log("Hola Anselmo");
console.log("Adiós Anselmo");
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
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
let emailFuerte = "anselmodelhoyo22@gmail.com";
var nombreFuerte = "Anselmo";
const myIq = 100;
let error;
error = false;
console.log(`Mis datos con tipado fuerte: `, emailFuerte, nombreFuerte, myIq, error);
var phoneNumber = "12345"; // El tipo de dato "any", indica que esta variable puede cambiar de tipo.
console.log("String: ", phoneNumber);
phoneNumber = 12345;
console.log("Number: ", phoneNumber);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Instanciación multiple.
let a, b, c;
a = "jajajaja...";
b = 2022;
c = 1 < 10;
console.log(`${a}, ${b}, ${c}`);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Primitive Types: string, number, boolean, any, null y undefined.
// Lista de Strings.
let nombres = ["Anselmo", "Pedro", "Juan"];
// Lista de diferentes valores.
// Al definir de esta forma tenemos que nuestro array "valores" aceptará esos tipos de datos.
let valores = [true, "string", 1992, null];
console.log(nombres);
console.log(valores);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Enumerados.
var Estados;
(function (Estados) {
    Estados["Completado"] = "C";
    Estados["Incompleto"] = "I";
    Estados["Pendiente"] = "P";
})(Estados || (Estados = {}));
var Posicion;
(function (Posicion) {
    Posicion[Posicion["Primero"] = 1] = "Primero";
    Posicion[Posicion["Segundo"] = 2] = "Segundo";
    Posicion[Posicion["Tercero"] = 3] = "Tercero";
})(Posicion || (Posicion = {}));
let EstadoTarea = Estados.Completado;
let PosicionCarrera = Posicion.Primero;
console.log("Estado: ", EstadoTarea);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Podemos crear variables que sigan la interfaz "Tarea".
let tarea1 = {
    titulo: "Tarea - 1",
    estado: Estados.Incompleto,
    urgencia: 100,
};
console.log(`Tarea: ${tarea1.titulo}`);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
let coche = {
    nombre: "Pagani Huayra",
    precio: 1000000,
    anio: 2010,
};
console.log(`Mi coche es un ${coche.nombre}, y me costó ${coche.precio}€.`);
// Usando el operador ternario.
console.log(coche.anio <= 2010 ? `Mi coche es viejo` : `Mi coche es nuevo`);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Para condicionar podemos esperar los valores Falsy: false, null, undefined.
// If / Else
if (error)
    console.log("Auxilio, ¡ha ocurrido un error!");
else
    console.log("Tranquilo, no ha pasado nada.");
// If / Else If / Else 
if (coche.anio < 2010)
    console.log("Mi coche es viejo");
else if (coche.anio === 2010)
    console.log("Mi coche es de 2010");
else
    console.log("Mi coche es nuevo");
// Switch 
switch (tarea1.estado) {
    case "C":
        console.log("Tarea completada.");
        break;
    case "I":
        console.log("Tarea no ha sido completada.");
        break;
    case "P":
        console.log("Tarea está pendiente.");
        break;
    default:
        break;
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Bucles.
// Bucle While.
let contador1 = 0;
while (contador1 < 10) {
    contador1++;
    console.log(contador1);
}
// Bucle Do While.
let contador2 = 0;
do {
    contador2++;
    console.log(contador2);
} while (contador2 < 0);
// Bucle For
let arrayLetras = ["A", "B", "C", "D", "E"];
for (let index = 0; index < arrayLetras.length; index++) {
    const element = arrayLetras[index];
    console.log(element);
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Método "foreach"
let arrayNombres = ["Anselmo", "Marciano", "Fernando", "Arturo"];
arrayNombres.forEach((nombre, index) => console.log(`${index}: ${nombre}`));
// Método "filter"
let nombresA = arrayNombres.filter((nombre) => nombre.startsWith("A"));
console.log(nombresA);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Operador Spread
// Factor de propagación para declarar variables.
const miTarea = {
    titulo: "Mi Tarea",
    estado: Estados.Incompleto,
    urgencia: 10,
};
let { titulo, estado, urgencia } = miTarea;
// Factor de propagación para copiar arrays.
let comprasLunes = ["Harina", "Leche", "Café"];
let comprasMartes = [...comprasLunes, "Arroz", "Carne", "Yuca"];
let comprasViernes = [...comprasMartes, "Naranjas", "Fresas"];
let comprasSemana = [...comprasViernes];
comprasSemana.forEach((producto) => console.log(producto));
// Factor de propagación para reasignar valores de un objeto.
const usuario = {
    nombre: "Anselmo",
    id: "1s452fqac",
    isDeveloper: false
};
const usuarioActual = Object.assign(Object.assign({}, usuario), { isDeveloper: true });
console.log(usuarioActual);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Funciones
/**
 * Función que muestra un saludo por consola.
 */
function saludar() {
    let nombre = "Anselmo";
    console.log(`!Hola, ${nombre}`);
}
// Invocación de la función
saludar();
/**
 * Función que muestra un saludo por consola a persona.
 * @param nombre Nombre ha mostrar por consola.
 */
function saludarPersona(nombre) {
    console.log(`¡Hola, ${nombre}!`);
}
saludarPersona("Anselmo");
// saludarPersona(4);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Parámetro por defecto
function despedir(nombre = "Carles") {
    console.log(`¡Adiós, ${nombre}!`);
}
despedir();
despedir("Anselmo");
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Parámetro opcional 
/**
 * Función para despedir persona.
 * @param nombre string | undefined
 */
function despedirPersona(nombre) {
    if (nombre)
        console.log(`¡Adiós, ${nombre}!`);
    else
        console.log("Adiós amigo mio.");
}
despedirPersona("Anselmo");
despedirPersona();
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Usando varios parámetros
function variosParametros(nombre, apellidos, edad = 17) {
    if (apellidos)
        console.log(`${nombre} ${apellidos} tiene ${edad}`);
    else
        console.log(`${nombre} tiene ${edad}`);
}
variosParametros("Anselmo");
variosParametros("Anselmo", "Del Hoyo");
variosParametros("Anselmo", "Del Hoyo", 18);
variosParametros("Anselmo", undefined, 18);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Parámetro de diferentes tipos
function variosTipos(parametro) {
    if (typeof (parametro) === "string")
        console.log("Parámetro de tipo string.");
    else
        console.log("Parámetro de tipo number.");
}
variosTipos("string");
variosTipos(2022);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Retornando valores
function obtenerNombre(nombre) {
    return `Nombre: ${nombre}`;
}
let miNombre = obtenerNombre("Anselmo");
console.log(miNombre);
// Podemos definir tipos de valores a retornar
function obtenerEdad(edad) {
    return `Edad: ${edad}`;
    // return 12;
}
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
let miEdad = obtenerEdad("17");
console.log(miEdad);
// Funciones flecha
const sumar = (num1, num2) => num1 + num2;
const suma = sumar(2, 2);
console.log(`Resultado: ${suma}`);
console.log(`Resultado: ${sumar(5, 4)}`);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Operador Spread como parámetro.
function sumarNumeros(...numeros) {
    numeros.forEach((numero, index) => {
        let suma = numero + numeros[--index];
        !isNaN(suma)
            ? console.log(`Suma:`, suma)
            : console.log("--- Resultados ---");
    });
}
sumarNumeros(12, 54, 32, 2, 8);
function restarNumeros(numeros) {
    numeros.forEach((numero, index) => {
        let resta = numero - numeros[--index];
        !isNaN(resta)
            ? console.log(`Resta:`, resta)
            : console.log("--- Resultados ---");
    });
}
restarNumeros([12, 54, 32, 2, 8]);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
let empleado = {
    nombre: "Fabio",
    apellido: "Martinez",
    edad: 32,
};
const obtenerEmpleado = (empleado) => `El empleado ${empleado.nombre} tiene ${empleado.edad} años.`;
console.log(obtenerEmpleado(empleado));
const cobrarEmpleado = (empleado, cobrarMas, cobrarMenos) => {
    if (empleado.edad > 24)
        console.log(cobrarMas(empleado.edad));
    else
        console.log(cobrarMenos(empleado.edad));
};
const cobrarMas = (edad) => `Este empleado tiene ${edad}, por eso cobrará: 2000 €`;
const cobrarMenos = (edad) => `Este empleado tiene ${edad}, por eso cobrará: 500 €`;
cobrarEmpleado(empleado, cobrarMas, cobrarMenos);
// Funciones asíncronas.
function obtenerDatos() {
    return __awaiter(this, void 0, void 0, function* () {
        let result = yield "Hago una acción tardía.";
        return result;
    });
}
obtenerDatos()
    // .then((result) => console.log(result))
    .catch((error) => console.log(error));
// .finally(() => console.log("A finalizado la operación"))
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Funciones generadoras.
function* generarNumeros() {
    // Yield --> sirve para emitir errores.
    let index = 0;
    while (index < 5) {
        // Emitimos un valor
        yield index;
        index++;
    }
}
let numeroGenerado = generarNumeros();
console.log(numeroGenerado.next().value);
console.log(numeroGenerado.next().value);
console.log(numeroGenerado.next().value);
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Funciones generadoras dentro de funciones generadoras
function* watcher(numero) {
    // Emitimos el valor inicial.
    yield numero;
    // Llamamos a las emisiones del Worker para que emite más valores.
    yield* worker(numero);
    // Emitimos el valor final.
    yield numero + 4;
}
function* worker(numero) {
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
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Breve introducción a las clases y gestión de eventos
class Temporizador {
    constructor() {
        this.terminar = () => { };
    }
    empezar(time) {
        setTimeout(() => {
            if (!this.terminar)
                return;
            this.terminar();
        }, time);
    }
}
const miTemporizador = new Temporizador();
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
const anselmo = new Estudiante_1.Estudiante("Anselmo", "Del Hoyo", cusos_mock_1.listaDeCursos);
console.log(`Hola! soy ${anselmo.nombre} ${anselmo.apellidos}, y he completado estos cursos.`);
cusos_mock_1.listaDeCursos.forEach((curso) => console.log(`${curso.nombre}: ${curso.horas} horas invertidas`));
// Podemos crear más cursos.
const cursoAngular = new Curso_1.Curso("Angular", 25);
cusos_mock_1.listaDeCursos.push(cursoAngular);
// Validar la instancia de un Objeto/Variable.
// typeof / instanceof
if (cursoAngular instanceof Curso_1.Curso)
    console.log("- Es una instancia de Curso");
// Mock: hace referencia a datos inventados o falsos.
const horasTotalesAnselmo = anselmo.obtenerHorasCursos;
console.log(`- Horas Totales estudiadas: ${horasTotalesAnselmo}`);
const DNINuevo = 123456;
// Asignamos un nuevo valor a la propiedad privada DNI
anselmo.modificarDNI = DNINuevo;
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Herencia y Polimorfismo
const persona1 = new Persona_1.Persona("Frank", "Stwart", 15);
const trabajador1 = new Persona_1.Trabajador("Anselmo", "Del Hoyo", 18, 2500);
const trabajador2 = new Persona_1.Trabajador("Fernando", "García", 30, 900);
const trabajador3 = new Persona_1.Trabajador("William", "Park", 20, 1000);
const jefe1 = new Persona_1.Jefe("Mark", "Smith", 53, []);
jefe1.trabajadores.push(trabajador1, trabajador2, trabajador3);
persona1.saludar(); // Saludo de Persona
trabajador1.saludar(); // Saludo heredado de persona, especficado en trabajador
jefe1.saludar(); // Saludo heredado de persona
console.log("--- Trabajadores del jefe1 ---");
jefe1.trabajadores.forEach((trabajador) => console.log(`- ${trabajador.nombre} ${trabajador.apellido}`));
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
// Uso de Interfaces.
// Uso para la implementación en objetos
const TareaIngles = {
    titulo: "Estudiar Inglés",
    description: "Debo hacer la tarea sobre genitivo sajón.",
    completada: false,
    resumen: function () {
        return `${this.titulo} - ${this.description}`;
    }
};
console.log(TareaIngles.resumen());
// Uso para la implementación en Clases
const ProgramoTypeScript = new Programar_1.Programar("Programar en TypeScript", false, undefined, InterfaceTarea_1.Nivel.Bloqueante);
console.log(ProgramoTypeScript.resumen());
console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
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
function decoratedProperty(target, propertyKey) {
    console.log('Nombre de la propiedad', propertyKey);
    console.log('Clase', target.constructor);
    console.log("\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\");
}
function decoratedParam(target, propertyKey, parameterIndex) {
    console.log('Nombre del metodo', propertyKey);
    console.log('Posicion del parámetro', parameterIndex);
    console.log('Clase', target.constructor);
}
class ExampleClass {
    constructor() {
        this.exampleProperty = 'Hello World';
    }
    sum(a, b) {
        return a + b;
    }
}
__decorate([
    decoratedProperty,
    __metadata("design:type", String)
], ExampleClass.prototype, "exampleProperty", void 0);
__decorate([
    __param(1, decoratedParam),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], ExampleClass.prototype, "sum", null);
// Patrones de diseño 
// --- Patrones creacionales
// --- --- Singleton
const s1 = singleton_1.Singleton.getInstance();
const s2 = singleton_1.Singleton.getInstance();
if (s1 === s2) {
    console.log('Singleton funciona, ambas variables contienen la misma instancia.');
}
else {
    console.log('Singleton falló, las variables contienen diferentes instancias.');
}
// Depuración y métodos de documentación
//# sourceMappingURL=index.js.map