const tabla = document.getElementById("tabla").querySelector("tbody");
async function getEventos() {
  const nombre= document.getElementById('Nombre').value;
  const estado= document.getElementById('Estado').value;
  const aforo = document.getElementById('Aforo').value;
}
/*let eventos = [
  { id: "01", nombre: "CaVinos01", estado: "activo", aforo: "25" },
  { id: "02", nombre: "CaVinos02", estado: "activo", aforo: "30" },
  { id: "03", nombre: "CaCerveza01", estado: "pendiente", aforo: "25" },
  { id: "04", nombre: "CaCerveza02", estado: "activo", aforo: "30" },
  { id: "05", nombre: "CaCocktails01", estado: "activo", aforo: "25" },
  { id: "06", nombre: "CaCocktails02", estado: "finalizado", aforo: "30" }
];*/






function renderTabla() {
  tabla.innerHTML = "";

  eventos.forEach((e, index) => {
    const fila = tabla.insertRow();
    fila.dataset.index = index;

    const celdaId = fila.insertCell();
    celdaId.textContent = e.id;

    const celdaNombre = fila.insertCell();
    celdaNombre.textContent = e.nombre;

    const celdaEstado = fila.insertCell();
    const spanEstado = document.createElement("span");
    spanEstado.classList.add("estado-circulo", `estado-${e.estado}`);
    celdaEstado.appendChild(spanEstado);
    celdaEstado.append(` ${e.estado}`);

    const celdaAforo = fila.insertCell();
    celdaAforo.textContent = e.aforo;

    const celdaVer = fila.insertCell();
    const img = document.createElement("img");
    img.src = "https://img.icons8.com/?size=100&id=gEem2MeykyL5&format=png&color=555758";
    img.alt = "Ver";
    img.width = 24;
    img.height = 24;
    img.id = "ver";
    celdaVer.appendChild(img);
    img.addEventListener("click", function () {
      alert("Ver detalles del evento");
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
      document.getElementById("modAforo").value = eventoAmodificar.aforo;
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
    img3.addEventListener("click", function () {
      eventos.splice(index, 1);
      renderTabla();
    });
  });
}

document.getElementById("altaEvento").addEventListener("click", function () {
  document.getElementById("formAltaEvento").style.display = "block";
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

  window.addEventListener('scroll', function() {
        const scrolled = window.scrollY;
        const background = document.getElementById('Principal');
        background.style.transform = 'translateY(' + scrolled * 0.5 + 'px)';
      });

      function openLoginPopup(event) {
        event.preventDefault();
        document.getElementById('loginPopup').style.display = 'flex';
      }

      function closeLoginPopup() {
        document.getElementById('loginPopup').style.display = 'none';
      }


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

renderTabla();
