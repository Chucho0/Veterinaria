let citas = [];


function agregar() {
    let nombredelamascota = document.getElementById('nombredelamascota').value;
    let propietario = document.getElementById('propietario').value;
    let numerodetelefono = document.getElementById('numerodetelefono').value;
    let tipodemascota = document.getElementById('tipodemascota').value;
    let fecha = document.getElementById('fecha').value;
    let tiempo = document.getElementById('tiempo').value;
    let sintomas = document.getElementById('sintomas').value;


    let cita = {
        nombredelamascota,
        propietario,
        numerodetelefono,
        tipodemascota,
        fecha,
        tiempo,
        sintomas,
        estado: 'abierta'
    };


    citas.push(cita);


    mostrarCitas();
}

function mostrarCitas() {

    document.getElementById('cartasactivas').innerHTML = '';
    document.getElementById('cartasterminada').innerHTML = '';
    document.getElementById('cartasanuladas').innerHTML = '';


    for (let i = 0; i < citas.length; i++) {
        let carta = document.createElement('div');
        carta.className = 'carta';

        let botonAnular = document.createElement('button');
        botonAnular.className = 'boton-anular';
        botonAnular.textContent = 'Anular cita';
        botonAnular.setAttribute('onclick', 'anular(' + i + ')');

        let botonTerminar = document.createElement('button');
        botonTerminar.className = 'boton-terminar';
        botonTerminar.textContent = 'Terminar cita';
        botonTerminar.setAttribute('onclick', 'terminar(' + i + ')');

        carta.innerHTML = `
            <h2>${citas[i].nombredelamascota}</h2>
            <p>Propietario: ${citas[i].propietario}</p>
            <p>Teléfono: ${citas[i].numerodetelefono}</p>
            <p>Tipo de mascota: ${citas[i].tipodemascota}</p>
            <p>Fecha: ${citas[i].fecha}</p>
            <p>Hora: ${citas[i].tiempo}</p>
            <p>Síntomas: ${citas[i].sintomas}</p>
            <p>Estado: ${citas[i].estado}</p>
        `;

        if (citas[i].estado === 'abierta') {
            carta.appendChild(botonAnular);
            carta.appendChild(botonTerminar);

            document.getElementById('cartasactivas').appendChild(carta);
        } else if (citas[i].estado === 'terminada') {

            document.getElementById('cartasterminada').appendChild(carta);
        } else if (citas[i].estado === 'anulada') {
            document.getElementById('cartasanuladas').appendChild(carta);