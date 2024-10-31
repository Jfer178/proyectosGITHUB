let nombre = "Juan";
let edad = 25;
let esEstudiante = true;

// Mostrar valores en la consola
console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Es estudiante:", esEstudiante);

// Cambiar valores
nombre = "María";
edad = 30;
esEstudiante = false;

// Mostrar nuevos valores
console.log("Nuevo Nombre:", nombre);
console.log("Nueva Edad:", edad);
console.log("Es estudiante:", esEstudiante);

//.............

// Declarar variables numéricas
let a = 10;
let b = 5;

// Operaciones matemáticas
console.log("Suma:", a + b);
console.log("Resta:", a - b);
console.log("Multiplicación:", a * b);
console.log("División:", a / b);

// Comparaciones
console.log("¿a es mayor que b?", a > b);
console.log("¿a es menor que b?", a < b);
console.log("¿a es igual a b?", a === b);
console.log("¿a es menor o igual a b?", a <= b);

// Declarar variables booleanas
let esMayorDeEdad = true;
let tieneLicencia = false;
// Uso de operadores lógicos
let puedeConducir = esMayorDeEdad && tieneLicencia;
console.log("Puede conducir:", puedeConducir);

// Mensaje de bienvenida
let mensaje = `¡Hola, ${nombre}! Tienes ${edad} años.`;
console.log(mensaje);
