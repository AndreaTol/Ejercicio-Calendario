
//Variables
let dia = document.getElementById("txtDia");
let hora = document.getElementById("txtHora");
let btnCalcular = document.getElementById("btnCalcular");
let yearDay = document.getElementById("txtYearDay");
let janFirst = document.getElementById("txtJanFirst");
let btnCalcular2 = document.getElementById("btnCalcular2");
let resultado = document.getElementById("resultado");
let btnCalcular3 = document.getElementById("btnCalcular3");

//Parte 1
btnCalcular.addEventListener("click", function (event) {
    event.preventDefault();
    let day = parseInt(dia.value);
    let hour = parseInt(hora.value);
    let msg = "";


    if (businessHours(day, hour)) {
        msg = "Si es día de chamba u horario laboral";
    } else {
        msg = "No es día de chamba u horario laboral";
    }
    resultado.innerHTML = msg;
});

//Parte 2
btnCalcular2.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(btnCalcular2);
    let first = parseInt(janFirst.value);
    let day = parseInt(yearDay.value);
    let msg = "Es día de chamba";
    let num = getDayNumber(first, day);

    if (num == 0 || num == 6) {
        msg = "Es fin de semana";
    }
    let diaNombre = "";
    switch (num) {
        case 0:
            diaNombre= " Domingo";
            break;
        case 1:
            diaNombre= " Lunes";
            break;
        case 2:
            diaNombre= " Martes";
            break;
        case 3:
            diaNombre= " Miércoles";
            break;
        case 4:
            diaNombre= " Jueves";
            break;
        case 5:
            diaNombre= " Viernes";
            break;
        case 6:
            diaNombre= " Sábado";
            break;
        default:
            break;
    }

    // if (num == 0) {
    //     diaNombre = ", Domingo";
    // } else if (num == 1) {
    //     diaNombre = ", Lunes";
    // } else if (num == 2) {
    //     diaNombre = ", Martes";
    // } else if (num == 3) {
    //     diaNombre = ", Miércoles";
    // } else if (num == 4) {
    //     diaNombre = ", Jueves";
    // } else if (num == 5) {
    //     diaNombre = ", Viernes";
    // } else if (num == 6) {
    //     diaNombre = ", Sábado";
    // }
    resultado.innerHTML = msg + diaNombre;
});

// Parte 3
btnCalcular3.addEventListener("click", function (event) {
    event.preventDefault();
    let first = parseInt(janFirst.value);
    let day = parseInt(yearDay.value);
    let num = getDayNumber(first, day);
    let msg = "";
    if (businessHours(num, parseInt(hora.value))) {
        msg = "Es día de chamba u horario hábil";
    } else {
        msg = "No es día de chamba u horario hábil";
    }
    resultado.innerHTML = msg;
});


// Funciones

function getDayNumber(janFirstDayNumber, yearDayNumber) {
    return (janFirstDayNumber + yearDayNumber - 1) % 7
}


function businessHours(dayNumber, hourNumber) {
    let res;
    if ((dayNumber <= 0) || (dayNumber >= 6) || (hourNumber < 9) || (hourNumber >= 18)) {
        res = false;
    } else {
        res = true;
    }
    return res;
}
