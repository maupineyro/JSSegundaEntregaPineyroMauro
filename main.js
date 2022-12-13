// Simulador de Gestión de datos de Alumnos.

/*  Observaciones:

 - En este caso, se utilizará para gestionar datos acerca de los alumnos que cursaron durante el 2020 de manera virtual y han quedado "en proceso" adeudando materias.

 - Para esta instancia de entrega del curso JavaScript, se estima que los alumnos ficticios adeudan solo una materia no especificada; 
 
 - Posteriormente, la idea es poder utilizarlo laboralmente, procesando más información: indicando el total de asignaturas que adeude cada alumno, indicar que materia sigue pendiente, fecha de aprobación, etc. 
*/

// Programa:

// Empiezo creando la class y el constructor.

class Alumno {
    constructor(apellido, nombre, curso, dni, calificacion) {
        this.apellido = apellido;
        this.nombre = nombre;
        this.curso = curso;
        this.dni = dni;
        this.calificacion = calificacion;
    }
}

// Luego creo un grupo de alumnos.

const alumnoUno = new Alumno("Perez", "Luis", "2do5ta", 66321765, 5);
const alumnoDos = new Alumno("Messi", "Leopoldo", "2do5ta", 65321458, 9);
const alumnoTres = new Alumno("Reyes", "Andrea", "2do5ta", 66118988, 7);
const alumnoCuatro = new Alumno("Peralta", "Martin", "2do2da", 94123456, 4);
const alumnoCinco = new Alumno("Alvarez", "Julian", "2do2da", 65999991, 8);

// Almaceno en un array

const arrayAlumnosPandemia = [alumnoUno, alumnoDos, alumnoTres, alumnoCuatro, alumnoCinco];

console.log(arrayAlumnosPandemia);

// Menú inicial

function menu() {
    alert("Bienvenido a la oficina virtual de gestión de alumnos en proceso 2020");
    let opcion = parseInt(prompt("Ingrese una de las siguientes opciones: \n \n 1) Alta Alumnos \n 2) Baja Alumnos \n 3) Modificar datos Alumnos \n 4) Consultar datos \n 5) Verificar Aprobación \n 6) Salir \n"))
    return opcion;
}

// Opción 1: Dar alta a un alumno que adeuda materias del 2020

function altaAlumnoPandemia() {
    let apellido = prompt("ingrese el apellido del alumno: ");
    let nombre = prompt("ingrese el nombre del alumno: ");
    let curso = prompt("ingrese el curso y división del alumno con el formato (1ro 1ra): ");
    let dni = parseInt(prompt("ingrese el dni del alumno: "));
    let calificacion = parseInt(prompt("ingrese la calificación del alumno: "));
    let alumno = new Alumno(apellido, nombre, curso, dni, calificacion);
    arrayAlumnosPandemia.push(alumno); //push va agregar el nuevo alumno al array que almacena
    console.log(arrayAlumnosPandemia);
}

// Opción 2: Dar baja a un alumno que adeuda materias del 2020

function bajaAlumnoPandemia() {
    let dni = parseInt(prompt("Ingrese el dni del alumno: "));
    let alumno = arrayAlumnosPandemia.find(alumno => alumno.dni === dni);
    let indice = arrayAlumnosPandemia.indexOf(alumno); // con el index se va a "posicionar" en el alumno que coincida el dni
    arrayAlumnosPandemia.splice(indice, 1);
    console.log(arrayAlumnosPandemia);
}

// Opción 3: Modificar datos de un alumno cargado

function modificarAlumnoPandemia() {
    let dni = parseInt(prompt("Ingrese el dni del alumno: "));
    let alumno = arrayAlumnosPandemia.find(alumno => alumno.dni === dni);
    let indice = arrayAlumnosPandemia.indexOf(alumno);
    let apellido = prompt("ingrese el apellido del alumno: ");
    let nombre = prompt("ingrese el nombre del alumno: ");
    let curso = prompt("ingrese el curso y división del alumno con el formato (1ro 1ra): ");
    let calificacion = parseInt(prompt("ingrese la calificación del alumno: "));
    let alumnoModificado = new Alumno(apellido, nombre, curso, dni, calificacion);
    arrayAlumnosPandemia.splice(indice, 1, alumnoModificado);
    console.log(arrayAlumnosPandemia);
}

// Opción 4: Consultar datos de alumno 

function consultaAlumno() {
    let dni = parseInt(prompt("Ingrese el dni del alumno: "));
    let alumno = arrayAlumnosPandemia.find(alumno => alumno.dni === dni);
    console.log(alumno);
}



// Opción 5: Verificar aprobación

function aprobacion() {
    alert("se verificará la aprobación");

    let dni = parseInt(prompt("Ingrese el dni del alumno: "));
    let alumno = arrayAlumnosPandemia.find(alumno => alumno.dni === dni);
    let indice = arrayAlumnosPandemia.indexOf(alumno);
    if (alumno.calificacion >= 6) {
        alert("el alumno " + alumno.apellido + ", " + alumno.nombre + " ha aprobado");
    } else {
        alert("el alumno " + alumno.apellido + ", " + alumno.nombre + " aún no ha aprobado");
    }

}


// Opción 6: Salir del programa

function salir() {
    alert("Gracias por utilizar el programa");
}


// Ejecutar programa

let opcion = menu();
switch (opcion) {
    case 1:
        altaAlumnoPandemia();
        break;

    case 2:
        bajaAlumnoPandemia();
        break;

    case 3:
        modificarAlumnoPandemia();
        break;

    case 4:
        consultaAlumno();
        break;

    case 5:
        aprobacion();
        break;
    case 6:
        salir();
        break;
    default:
        alert("Opción Incorrecta");
        break;
}