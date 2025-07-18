(function () {
  function crearCuadroInspeccion() {
    if (document.getElementById("cuadro-inspeccion")) return;

    const contenedor = document.createElement("div");
    contenedor.id = "cuadro-inspeccion";
    contenedor.style.position = "fixed";
    contenedor.style.top = "50%";
    contenedor.style.left = "50%";
    contenedor.style.transform = "translate(-50%, -50%) scale(1)";
    contenedor.style.opacity = "1";
    contenedor.style.background = "white";
    contenedor.style.borderRadius = "16px";
    contenedor.style.padding = "1.5rem";
    contenedor.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.2)";
    contenedor.style.backdropFilter = "blur(4px)";
    contenedor.style.maxWidth = "520px";
    contenedor.style.width = "90%";
    contenedor.style.textAlign = "left";
    contenedor.style.zIndex = "9999";
    contenedor.style.display = "none"; // OCULTO AL INICIO

    contenedor.innerHTML = `
      <button id="cerrar-cuadro" style="
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 24px;
        color: #888;
        cursor: pointer;
      ">&times;</button>

      <img src="./info.png" alt="Motor" style="width: 100%; max-height: 180px; object-fit: contain; border-radius: 12px 12px 0 0; margin-bottom: 1rem;">

      <h2 style="margin-top:0; color: #e53935;">Inspección del motor</h2>
      <p>Algunos factores que deben considerarse en la inspección del motor de la máquina:</p>
      <ul style="padding-left: 1.2em; margin: 0;">
        <li>Fugas.</li>
        <li>Estado.</li>
        <li>Limpieza.</li>
        <li>Soportes.</li>
      </ul>
    `;

    document.body.appendChild(contenedor);

    // Estilos globales
    const estiloGlobal = document.createElement("style");
    estiloGlobal.innerHTML = `
      #cuadro-inspeccion h2, #cuadro-inspeccion p, #cuadro-inspeccion ul {
        font-family: 'Segoe UI', sans-serif;
      }

      #cuadro-inspeccion ul li {
        margin-bottom: 0.5em;
      }
    `;
    document.head.appendChild(estiloGlobal);

    // Botón cerrar
    document.getElementById("cerrar-cuadro").addEventListener("click", () => {
      contenedor.style.display = "none";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", crearCuadroInspeccion);
  } else {
    crearCuadroInspeccion();
  }
})();
