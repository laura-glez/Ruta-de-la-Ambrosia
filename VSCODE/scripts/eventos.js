const tabla = document.getElementById("tabla").querySelector("tbody");

const eventos = [
    { id: "01", nombre: "CaVinos01", estado: "activo", aforo: "25" },
    { id: "02", nombre: "CaVinos02", estado: "activo", aforo: "30" },
    { id: "03", nombre: "CaCerveza01", estado: "activo", aforo: "25" },
    { id: "04", nombre: "CaCerveza02", estado: "activo", aforo: "30" },
    { id: "05", nombre: "CaCocktails01", estado: "activo", aforo: "25" },
    { id: "06", nombre: "CaCocktails02", estado: "activo", aforo: "30" }
];

function renderTabla(events) {
    events.forEach(e => {
        const fila = tabla.insertRow(); 

        const celdaId = fila.insertCell();
        celdaId.textContent = e.id;

        const celdaNombre = fila.insertCell();
        celdaNombre.textContent = e.nombre;

        const celdaEstado = fila.insertCell();
        celdaEstado.textContent = e.estado;

        const celdaAforo = fila.insertCell();
        celdaAforo.textContent = e.aforo;
    });
}

renderTabla(eventos);
