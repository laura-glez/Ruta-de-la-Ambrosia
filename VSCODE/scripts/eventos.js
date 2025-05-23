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
    img.classList.add("img-hover");
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
    img2.classList.add("img2-hover");
    celdaModificar.appendChild(img2);
    

     
   
    // Añadir evento para modificar
    img2.addEventListener("click", function () {
      mostrarModificarEvento();
      const eventoAmodificar = eventos[index]; // Obtenemos el evento a modificar
      document.getElementById("formModificarEvento").style.display = "block"; // Mostrar el formulario
      document.getElementById("formModificarEvento").dataset.index = index; // Guardamos el índice del evento
    
      // Rellenar el formulario con los datos actuales del evento
      document.getElementById("MODnombre").value = eventoAmodificar.nombre;
      document.getElementById("MODdescripcion").value = eventoAmodificar.descripcion;
      document.getElementById("MODfechaInicio").value = eventoAmodificar.fechaInicio;
      document.getElementById("MODunidadDuracion").value = eventoAmodificar.unidadDuracion;
      document.getElementById("MODduracion").value = eventoAmodificar.duracion;
      document.getElementById("MODdireccion").value = eventoAmodificar.direccion;
      document.getElementById("MODaforo").value = eventoAmodificar.aforoMaximo;
      document.getElementById("MODprecio").value = eventoAmodificar.precio;
      document.getElementById("MODidTipo").value = eventoAmodificar.tipo.idTipo;
      document.getElementById("MODestado").value = eventoAmodificar.estado;
    });
    
    // Formulario de modificación (submit)
    document.getElementById("formModificarEvento").addEventListener("submit", function (e) {
      e.preventDefault();
      
      const idEvento = this.dataset.index; // Usamos el índice del evento en el array
      const eventoModificado = {
        idEvento: eventos[idEvento].idEvento,  // Asegúrate de usar 'idEvento' como nombre del campo
        nombre: document.getElementById("MODnombre").value,
        descripcion: document.getElementById("MODdescripcion").value,
        fechaInicio: document.getElementById("MODfechaInicio").value,
        unidadDuracion: document.getElementById("MODunidadDuracion").value,
        duracion: parseInt(document.getElementById("MODduracion").value),
        estado: document.getElementById("MODestado").value,
        direccion: document.getElementById("MODdireccion").value,
        aforoMaximo: parseInt(document.getElementById("MODaforo").value),
        precio: parseInt(document.getElementById("MODprecio").value),
        tipo: { idTipo: parseInt(document.getElementById("MODidTipo").value) },
      };
    
      // Enviar el evento modificado al servidor
      fetch(`http://localhost:9003/evento/modificar`, {
        method: "PUT", 
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(eventoModificado)
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Error al modificar el evento");
          }
          return response.json(); // El backend devuelve el evento actualizado
        })
        .then(eventoActualizado => {
          //console.log("Evento actualizado:", eventoActualizado);
          console.log("Evento se ha actualizado con exito");
          document.getElementById("formModificarEvento").style.display = "none"; // Ocultar formulario
          eventos[idEvento] = eventoActualizado; // Actualizar el evento en el array
          getEventos();
          renderTabla(); // Volver a renderizar la tabla
        })
        .catch(error => {
          console.error("Error al modificar el evento:", error);
          alert("Hubo un problema al modificar el evento.");
        });
        
    });

    const celdaEliminar = fila.insertCell();
    const img3 = document.createElement("img");
    img3.src = "https://img.icons8.com/?size=100&id=47259&format=png&color=800020";
    img3.alt = "Eliminar";
    img3.width = 24;
    img3.height = 24;
    img3.id = "eliminar";
    img3.classList.add("img3-hover");
    celdaEliminar.appendChild(img3);

    
   

const celdaReservas = fila.insertCell();
    const img4 = document.createElement("img");
    img4.src = "https://img.icons8.com/?size=100&id=37979&format=png&color=000000";
    img4.alt = "reservas";
    img4.width = 30;
    img4.height = 30;
    img4.id = "reservas";
    celdaReservas.appendChild(img4);
    img4.classList.add("img4-hover");
    img4.addEventListener("click", function () {
      mostrarDatosReserva(reserva); 
    });

    img4.addEventListener("click", async () => {
      try {
        const res = await fetch(`http://localhost:9003/reserva/uno/${e.idEvento}`);
        const reservaEvento = await res.json();
        mostrarDatosReserva(reservaEvento);
      } catch (error) {
        alert("Error al obtener la reserva: " + error.message);
      }
    });
    
 function mostrarDatosReserva(reserva) {
      const popup = document.getElementById('popup');
      const overlay = document.getElementById('popup-overlay');
      const divDetallesReserva = document.getElementById('popup-content');
    
      popup.classList.add('show');
      popup.style.display = 'block';
      overlay.style.display = 'block';
    
      document.getElementById('cerrarPopup').addEventListener('click', () => {
        popup.classList.remove('show');
        setTimeout(() => {
          popup.style.display = 'none';
          overlay.style.display = 'none';
        }, 200);
      });
    
      divDetallesReserva.style.display = "block";
      divDetallesReserva.innerHTML = `
      <h2>Detalles de la Reserva</h2>
      <p><strong>ID Reserva:</strong> ${reserva.idReserva || "N/A"}</p>
      <p><strong>Evento:</strong> ${reserva.evento?.idEvento || "Sin evento"}</p>
      <p><strong>Usuario:</strong> ${reserva.usuario?.idUsuario || "Sin usuario"}</p>
      <p><strong>Email:</strong> ${reserva.usuario?.email || "Sin usuario"}</p>
      <p><strong>Nombre:</strong> ${reserva.usuario?.nombre || "Sin usuario"}</p>
      <p><strong>Apellidos:</strong> ${reserva.usuario?.apellidos || "Sin usuario"}</p>
      <p><strong>Precio Venta:</strong> ${reserva.precioVenta ?? "No especificado"}</p>
      <p><strong>Aforo máximo</strong> ${reserva.evento.aforoMaximo ?? "No especificado"}</p>
      <p><strong>Precio Evento:</strong> ${reserva.evento.precio?? "No especificado"}</p>
      <p><strong>Observaciones:</strong> ${reserva.observaciones || "Ninguna"}</p>
      <p><strong>Cantidad:</strong> ${reserva.cantidad ?? "No especificada"}</p>
    `;
  
    }
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
  mostarAlta();
  //document.getElementById("formAltaEvento").style.display="block";
});



document.getElementById("formAltaEvento").addEventListener("submit", async function (event) {
  event.preventDefault();

  //const fechaAlta = new Date().toISOString();  

  let nuevoEvento = {
    nombre: document.getElementById("nombre").value,
    descripcion: document.getElementById("descripcion").value,
    fechaInicio: document.getElementById("fechaInicio").value,
    unidadDuracion: document.getElementById("unidadDuracion").value,  // "HORAS"
    duracion: parseInt(document.getElementById("duracion").value),
    direccion: document.getElementById("direccion").value,
    aforoMaximo: parseInt(document.getElementById("aforo").value),
    precio: parseInt(document.getElementById("precio").value),
    tipo: 
      {idTipo:parseInt(document.getElementById("idTipo").value)},
    fechaAlta: Date.now,
    estado: 'ACTIVO',
    destacado: 'N'

  };

  try {
    const response = await fetch('localhost:9003/evento/alta', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevoEvento)
    });
  
    if (!response.ok) {
      const errorDetails = await response.json();
      throw new Error('Error al crear el evento: ' + JSON.stringify(errorDetails));
    }
  
    const eventoCreado = await response.json();
    eventos.push(eventoCreado);
    renderTabla();
    document.getElementById("formAltaEvento").reset();
    alert("Evento dado de alta con éxito");
  
  } catch (error) {
    console.error("Error al dar de alta el evento:", error.message);
    alert("Error al dar de alta el evento: " + error.message);
  }
});

// Función para mostrar los detalles del evento
function mostrarDatosEvento(evento) {
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('popup-overlay');
  const divDetalles = document.getElementById('popup-content');

  popup.classList.add('show');
  popup.style.display = 'block';
  overlay.style.display = 'block';



document.getElementById('cerrarPopupDetalles').addEventListener('click', async () => {

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
    <p><strong>Destacado:</strong> ${evento.destacado}</p>
    <p><strong>Precio:</strong> ${evento.precio || "Sin precio definido"}</p>
    <p><strong>Tipo:</strong> ${evento.tipo?.nombre || "Sin tipo definido"}</p>
    <p><strong>Fecha Alta:</strong> ${evento.fechaAlta|| "Sin fecha de alta definida"}</p>
    `;

    document.getElementById('cerrarPopup').addEventListener('click', () => {
      const popup = document.getElementById('popup');
      const overlay = document.getElementById('popup-overlay');

      popup.classList.remove('show');
      setTimeout(() => {
        popup.style.display = 'none';
        overlay.style.display = 'none';
        divDetalles.style.display = 'none';

      }, 200);
      
    });

}

function mostarAlta(){
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popup-overlay');
        const form = document.getElementById('popup-Altacontent');

        popup.classList.add('show');
        popup.style.display = 'block';
        overlay.style.display = 'block';
        form.style.display ='block';
    
      // Event listener para cerrar el modal
      document.getElementById('cerrarPopup').addEventListener('click', () => {
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popup-overlay');

        popup.classList.remove('show');
        setTimeout(() => {
          popup.style.display = 'none';
          overlay.style.display = 'none';
          

        }, 200)
    });}

function mostrarModificarEvento(){
  //Asignar event listener para abrir el modal con el formulario
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popup-overlay');
        const form = document.getElementById('popup-Modificarcontent');

        popup.classList.add('show');
        popup.style.display = 'block';
        overlay.style.display = 'block';
        form.style.display = 'block';
    
      // Event listener para cerrar el modal
      document.getElementById('cerrarPopup').addEventListener('click', () => {
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popup-overlay');

        popup.classList.remove('show');
        setTimeout(() => {
          popup.style.display = 'none';
          overlay.style.display = 'none';
          

        }, 200)
});}

    function cerrarPopUp(){
      document.getElementById('cerrarPopup').addEventListener('click', () => {
        const popup = document.getElementById('popup');
        const overlay = document.getElementById('popup-overlay');

        popup.classList.remove('show');
        setTimeout(() => {
          popup.style.display = 'none';
          overlay.style.display = 'none';
          

        }, 200);
        
      });
    } 

