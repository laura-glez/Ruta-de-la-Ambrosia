const tabla = document.getElementById("tabla").querySelector("tbody");

let eventos = [
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

        const celdaVer = fila.insertCell();
        const img = document.createElement("img");
        img.src = "https://img.icons8.com/?size=100&id=gEem2MeykyL5&format=png&color=000000";
        img.alt = "Ver";
        img.width = 24;
        img.height = 24;
        img.id="ver";
        celdaVer.appendChild(img);
        img.addEventListener("click", function(){
            alert ("Ver detalles del evento")
        });

        const celdaModificar = fila.insertCell();
        const img2 = document.createElement("img");
        img2.src = "https://img.icons8.com/?size=100&id=8192&format=png&color=000000";
        img2.alt = "Modificar";
        img2.width = 24;
        img2.height = 24;
        img2.id="modificar";
        celdaModificar.appendChild(img2);
        img2.addEventListener("click", function(){
            alert ("Modificar detalles del evento")
        });
        

        const celdaEliminar = fila.insertCell();
        const img3 = document.createElement("img");
        img3.src = "https://img.icons8.com/?size=100&id=47259&format=png&color=000000";
        img3.alt = "Eliminar";
        img3.width = 24;
        img3.height = 24;
        img3.id="eliminar";
        celdaEliminar.appendChild(img3);
        imgEliminar.addEventListener("click", function(event) {
            const fila = event.target.closest("tr"); // Encuentra la fila
            const indice = fila.dataset.index; // Obtén el índice de la fila desde el atributo 'data-index'
      
            // Eliminar el evento del array 'eventos'
            eventos.splice(indice, 1); // Eliminar el evento del array de memoria
      
            renderTabla(); // Vuelve a renderizar la tabla después de eliminar
          });
        });
      }


renderTabla(eventos);
