const tabla = document.getElementById("tabla").querySelector("tbody");
const divDetalles = document.getElementById("evento-detalle"); // Div para mostrar detalles
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


document.getElementById("formAltaEvento").addEventListener("submit", async function (event) {
  event.preventDefault();

  const nombre = document.getElementById("Nombre").value;
  const descripcion = document.getElementById("Descripcion").value;
  const fechaInicio = document.getElementById("FechaInicio").value;  
  const unidadDuracion = document.getElementById("UnidadDuracion").value;
  const duracion = document.getElementById("Duracion").value;
  const direccion = document.getElementById("Direccion").value;
  const aforo = document.getElementById("Aforo").value;
  const estado = document.getElementById("Estado").value;
  const precio = document.getElementById("Precio").value;
  const idTipo = document.getElementById("idTipo").value;
  

  const fechaAlta = new Date().toISOString();  


  let nuevoEvento = {
    nombre: document.getElementById("Nombre").value,
    descripcion: document.getElementById("Descripcion").value,
    fechaInicio: document.getElementById("FechaInicio").value,
    unidadDuracion: document.getElementById("UnidadDuracion").value,  // "HORAS"
    duracion: parseInt(document.getElementById("Duracion").value),
    direccion: document.getElementById("Direccion").value,
    aforoMaximo: parseInt(document.getElementById("Aforo").value),
    estado: document.getElementById("Estado").value, // "ACTIVO"
    destacado: document.getElementById("Destacado").value, // "S"
    precio: parseFloat(document.getElementById("Precio").value),
    tipo: {
      id: parseInt(document.getElementById("idTipo").value)
    },
    fechaAlta: new Date().toISOString().slice(0, 10)  // "YYYY-MM-DD"
  };
  try {
    const response = await fetch('http://localhost:9003/evento/alta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoEvento)
    });

    if (!response.ok) {
      throw new Error('No se pudo dar de alta el evento');
    }

    const eventoCreado = await response.json();

    eventos.push(eventoCreado);

    renderTabla();

    document.getElementById("formAltaEvento").reset();

    alert("Evento dado de alta con éxito");

  } catch (error) {
    alert("Error al dar de alta el evento: " + error.message);
  }
});

// Función para mostrar los detalles del evento
function mostrarDatosEvento(evento) {
  divDetalles.style.display = "block"; // Hacer visible el div de detalles
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