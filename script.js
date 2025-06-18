// Lista de códigos y descripciones
const codigos = [
    { codigo: 100, descripcion: "Continue" },
    { codigo: 101, descripcion: "Switching Protocols" },
    { codigo: 102, descripcion: "Processing" },
    { codigo: 103, descripcion: "Early Hints" },
    { codigo: 200, descripcion: "OK" },
  /*  { codigo: 201, descripcion: "Created" },
    { codigo: 202, descripcion: "Accepted" },
    { codigo: 204, descripcion: "No Content" },*/
    { codigo: 207, descripcion: "Multi-Status" },
    /*
    { codigo: 301, descripcion: "Moved Permanently" },
    { codigo: 302, descripcion: "Found" },
    { codigo: 400, descripcion: "Bad Request" },*/
    { codigo: 401, descripcion: "Unauthorized" },
    { codigo: 403, descripcion: "Forbidden" },
    { codigo: 404, descripcion: "Not Found" },
    { codigo: 409, descripcion: "Conflict" },
    { codigo: 420, descripcion: "Enhace your calm" },
    { codigo: 423, descripcion: "Locked" },
    { codigo: 444, descripcion: "No response" },
    /*
    { codigo: 500, descripcion: "Internal Server Error" },
    { codigo: 502, descripcion: "Bad Gateway" },
    { codigo: 503, descripcion: "Service Unavailable" },*/
    // podés seguir agregando...
    { codigo: 511, descripcion: "Network Authentication Required" },
    { codigo: 522, descripcion: "Connection Timed Out" },

];
document.addEventListener('DOMContentLoaded', () => {
    const contenedor = document.getElementById('gallery');

    codigos.forEach(({ codigo, descripcion }) => {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'card';

        tarjeta.innerHTML = `
      <img src="images/${codigo}.jpg" alt="HTTP ${codigo}">
      <div class="card-info">
        <h2>${codigo}</h2>
        <p>${descripcion}</p>
      </div>
    `;

        contenedor.appendChild(tarjeta);
    });

    // Header dinámico
    const header = document.getElementById('main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('shrink');
        } else {
            header.classList.remove('shrink');
        }
    });
});