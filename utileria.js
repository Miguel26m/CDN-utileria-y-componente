function validarCorreo(correo) {
    const validar = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validar.test(correo);
}


function soloLetras(texto) {
    const validar = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/;
    return validar.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    return String(numero).trim().length === maxLongitud;
}


function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const cumpleanios = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - cumpleanios.getFullYear();
    const mes = hoy.getMonth() - cumpleanios.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < cumpleanios.getDate())) {
        edad--;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    return calcularEdad(fechaNacimiento) >= 18;
}

function validarPassword(password) {
    const validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
    return validar.test(password);
}

function validarFechaLogica(fechaNacimiento) {
    const hoy = new Date();
    const fecha = new Date(fechaNacimiento);
    
    const edadAproximada = hoy.getFullYear() - fecha.getFullYear();
    
    if (fecha > hoy || edadAproximada > 120) {
        return false;
    }
    return true;
}


function capitalizarNombres(nombreCompleto) {
    return nombreCompleto.trim().toLowerCase().split(' ').map(palabra => palabra.charAt(0).toUpperCase() + palabra.slice(1)).join(' ');
}
