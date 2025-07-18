
(function () {
  function crearCuadroHidraulico() {
    if (document.getElementById("cuadro-hidraulico")) return;

    const contenedor = document.createElement("div");
    contenedor.id = "cuadro-hidraulico";
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
    contenedor.style.maxWidth = "620px";
    contenedor.style.width = "95%";
    contenedor.style.textAlign = "left";
    contenedor.style.zIndex = "9999";
    contenedor.style.display = "none";

    contenedor.innerHTML = `
      <button id="cerrar-hidraulico" style="
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 24px;
        color: #888;
        cursor: pointer;
      ">&times;</button>

      <h1 style="color:#e53935; font-size: 1.8rem; margin-top: 0;">Inspección Pre Operativa</h1>
      <h2 style="font-size: 1.3rem; color: #444; margin-bottom: 1rem;">Nivel de aceite hidráulico</h2>

      <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center; margin-bottom: 1rem;">
        <img src="./aceite7.png" alt="Indicador hidráulico" style="width: 45%; max-height: 160px; object-fit: cover; border-radius: 8px;">
        <img src="./aceite8.png" alt="Tapón hidráulico" style="width: 45%; max-height: 160px; object-fit: cover; border-radius: 8px;">
      </div>

      <ul style="padding-left: 1.2em; margin: 0;">
        <li>Apagado.</li>
        <li>Mantener <span class="resaltado">FULL</span> y <span class="resaltado">ADD</span>.</li>
        <li><span class="resaltado">Indicador de nivel</span>.</li>
        <li><span class="resaltado">Tapón de llenado</span>.</li>
      </ul>
    `;

    document.body.appendChild(contenedor);

    const estiloGlobal = document.createElement("style");
    estiloGlobal.innerHTML = `
      #cuadro-hidraulico h1, #cuadro-hidraulico h2, #cuadro-hidraulico ul {
        font-family: 'Segoe UI', sans-serif;
      }

      #cuadro-hidraulico ul li {
        margin-bottom: 0.4em;
      }

      .resaltado {
        color: #1565c0;
        font-weight: 500;
      }
    `;
    document.head.appendChild(estiloGlobal);

    document.getElementById("cerrar-hidraulico").addEventListener("click", () => {
      contenedor.style.display = "none";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", crearCuadroHidraulico);
  } else {
    crearCuadroHidraulico();
  }
})();

