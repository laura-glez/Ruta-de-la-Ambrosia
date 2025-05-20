const tabla = document.getElementById("tabla").querySelector("tbody");

let eventos = [];

// Función para obtener todos los eventos
async function getEventos() {
  try {
    const res = await fetch('http://localhost:9003/evento/todos');
    const listResult = await res.json();

    console.log("Datos obtenidos: ", listResult);

    if (!listResult || listResult.length === 0) {
      document.getElementById('tabla').innerHTML = `<p>No se encontraron eventos</p>`;
      return;
    }

    eventos = listResult;
    renderTabla();
  } catch (error) {
    console.error(error);
    document.getElementById('tabla').innerHTML = `<p style="color:red">${error.message}</p>`;
  }
}

// Llamar a la función para obtener los eventos cuando se cargue la página
getEventos();

// Función para renderizar la tabla
function renderTabla() {
  tabla.innerHTML = ""; // Limpiar la tabla antes de mostrar los nuevos resultados

  eventos.forEach((e, index) => {
    const fila = tabla.insertRow();
    fila.dataset.index = index;

    // Celda de ID
    const celdaId = fila.insertCell();
    celdaId.textContent = e.idEvento;

    // Celda de Nombre
    const celdaNombre = fila.insertCell();
    celdaNombre.textContent = e.nombre;

    // Celda de Estado
    const celdaEstado = fila.insertCell();
    const spanEstado = document.createElement("span");
    spanEstado.classList.add("estado-circulo", `estado-${e.estado}`);
    celdaEstado.appendChild(spanEstado);
    celdaEstado.append(` ${e.estado}`);

    // Celda de Aforo máximo
    const celdaAforo = fila.insertCell();
    celdaAforo.textContent = e.aforoMaximo;

    // Celda de ver
    const celdaVer = fila.insertCell();
    const img = document.createElement("img");
    img.src = "https://img.icons8.com/?size=100&id=gEem2MeykyL5&format=png&color=555758";
    img.alt = "Ver";
    img.width = 24;
    img.height = 24;
    img.id = "ver";
    celdaVer.appendChild(img);

    // Agregar el evento al hacer clic en la imagen de "Ver"
    img.addEventListener("click", function () {
      mostrarDatosEvento(e); 
    });
 
    const celdaModificar = fila.insertCell();
    const img2 = document.createElement("img");
    img2.src = "https://img.icons8.com/?size=100&id=8192&format=png&color=555758";
    img2.alt = "Modificar";
    img2.width = 24;
    img2.height = 24;
    img2.id = "modificar";
    celdaModificar.appendChild(img2);
    img2.addEventListener("click", function () {
      const eventoAmodificar = eventos[index];

      document.getElementById("formModificarEvento").style.display = "block";
      document.getElementById("modNombre").value = eventoAmodificar.nombre;
      document.getElementById("modEstado").value = eventoAmodificar.estado;
      document.getElementById("modAforo").value = eventoAmodificar.aforoMaximo;
      document.getElementById("formModificarEvento").dataset.index = index;
    });

    const celdaEliminar = fila.insertCell();
    const img3 = document.createElement("img");
    img3.src = "https://img.icons8.com/?size=100&id=47259&format=png&color=800020";
    img3.alt = "Eliminar";
    img3.width = 24;
    img3.height = 24;
    img3.id = "eliminar";
    celdaEliminar.appendChild(img3);

    // Añadir evento de eliminación con confirmación
    img3.addEventListener("click", async function () {
      const confirmDelete = confirm(`¿Estás seguro de eliminar el evento: ${e.nombre}?`);
      if (confirmDelete) {
        try {
          // Enviar solicitud DELETE al servidor
          const response = await fetch(`http://localhost:9003/evento/eliminar/${e.idEvento}`, {
            method: 'DELETE',
          });

          if (!response.ok) {
            throw new Error('No se pudo eliminar el evento');
          }

          // Si la eliminación fue exitosa, actualizar la lista de eventos
          eventos.splice(index, 1); // Eliminar el evento del array
          renderTabla();  // Volver a renderizar la tabla sin el evento eliminado
        } catch (error) {
          alert('Error al eliminar el evento: ' + error.message);
        }}});
    
    });
}

document.getElementById("altaEvento").addEventListener("click", function () {
  document.getElementById("formAltaEvento").style.display="block";
});

document.getElementById("formAltaEvento").addEventListener("submit", function (event) {
  event.preventDefault();

  const nombre = document.getElementById("Nombre").value;
  const estado = document.getElementById("Estado").value.toLowerCase();
  const aforo = document.getElementById("Aforo").value;

  let nuevoEvento = {
    id: (eventos.length + 1).toString().padStart(2, '0'),
    nombre: nombre,
    estado: estado,
    aforo: aforo
  };

  eventos.push(nuevoEvento);

  document.getElementById("Nombre").value = '';
  document.getElementById("Estado").value = '';
  document.getElementById("Aforo").value = '';

  renderTabla();
});
document.getElementById("formModificarEvento").addEventListener("submit", function (event) {
  event.preventDefault();

  const index = this.dataset.index;
  const nuevoNombre = document.getElementById("modNombre").value;
  const nuevoEstado = document.getElementById("modEstado").value.toLowerCase();
  const nuevoAforo = document.getElementById("modAforo").value;

  eventos[index] = {
    ...eventos[index],
    nombre: nuevoNombre,
    estado: nuevoEstado,
    aforo: nuevoAforo
  };

  this.style.display = "none";
  renderTabla();
});

// Función para mostrar los detalles del evento
function mostrarDatosEvento(evento) {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('popup-overlay');
  const divDetalles = document.getElementById('popup-content');

  popup.classList.add('show');
  popup.style.display = 'block';
  overlay.style.display = 'block';


document.getElementById('cerrarPopup').addEventListener('click', async () => {

  popup.classList.remove('show');

  setTimeout(() => {
    popup.style.display = 'none';
    overlay.style.display = 'none';
  }, 200); // coincide con la duración de la animación
});


  //divDetalles.style.display = "block"; // Hacer visible el div de detalles
  divDetalles.innerHTML = `
    <h2>Detalles del Evento: ${evento.nombre}</h2>
    <p><strong>ID:</strong> ${evento.idEvento}</p>
    <p><strong>Estado:</strong> ${evento.estado}</p>
    <p><strong>Aforo Máximo:</strong> ${evento.aforoMaximo}</p>
    <p><strong>Descripción:</strong> ${evento.descripcion || "Sin descripción disponible"}</p>
    <p><strong>Fecha Inicio:</strong> ${evento.fechaInicio || "Sin fecha de inicio disponible"}</p>
    <p><strong>Duracion Evento:</strong> ${evento.duracion} ${evento.unidadDuracion || "Sin duración"}</p>
    <p><strong>Direccion:</strong> ${evento.direccion || "Sin direccion"}</p>
    <p><strong>Destacado:</strong> ${evento.destacado }</p>
    <p><strong>Precio:</strong> ${evento.precio || "Sin precio definido"}</p>
    <p><strong>Tipo:</strong> ${evento.tipo?.nombre || "Sin tipo definido"}</p>
    <p><strong>Fecha Alta:</strong> ${evento.fechaAlta|| "Sin fecha de alta definida"}</p>
    `;
}