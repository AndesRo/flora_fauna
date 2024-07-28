document.getElementById('faunaForm').addEventListener('submit', addOrUpdateFauna);

let faunaList = [];
let updateIndex = -1;

function addOrUpdateFauna(event) {
    event.preventDefault();

    const id = document.getElementById('id').value;
    const nombreCientifico = document.getElementById('nombre_cientifico').value;
    const habitat = document.getElementById('habitat').value;
    const estadoConservacion = document.getElementById('estado_conservacion').value;
    const regionGeografica = document.getElementById('region_geografica').value;

    const fauna = {
        id,
        nombreCientifico,
        habitat,
        estadoConservacion,
        regionGeografica
    };

    if (updateIndex === -1) {
        faunaList.push(fauna);
    } else {
        faunaList[updateIndex] = fauna;
        updateIndex = -1;
        document.getElementById('submitBtn').textContent = 'Agregar';
    }

    displayFauna();
    document.getElementById('faunaForm').reset();
}

function displayFauna() {
    const faunaTableBody = document.getElementById('faunaTableBody');
    faunaTableBody.innerHTML = '';

    faunaList.forEach((fauna, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${fauna.id}</td>
            <td>${fauna.nombreCientifico}</td>
            <td>${fauna.habitat}</td>
            <td>${fauna.estadoConservacion}</td>
            <td>${fauna.regionGeografica}</td>
            <td>
                <button onclick="loadFauna(${index})">Cargar</button>
                <button onclick="deleteFauna(${index})">Eliminar</button>
            </td>
        `;

        faunaTableBody.appendChild(row);
    });
}

function loadFauna(index) {
    const fauna = faunaList[index];
    document.getElementById('id').value = fauna.id;
    document.getElementById('nombre_cientifico').value = fauna.nombreCientifico;
    document.getElementById('habitat').value = fauna.habitat;
    document.getElementById('estado_conservacion').value = fauna.estadoConservacion;
    document.getElementById('region_geografica').value = fauna.regionGeografica;
    updateIndex = index;
    document.getElementById('submitBtn').textContent = 'Actualizar';
}

function deleteFauna(index) {
    faunaList.splice(index, 1);
    displayFauna();
}
