(function () {
  function crearCuadrosInspeccion() {
    // Evitar duplicados
    if (document.getElementById("cuadro-fluidos") || document.getElementById("cuadro-imagenes")) return;

    // ---------- CUADRO 1: FLUIDOS/BATERÍA ----------
    const cuadroFluidos = document.createElement("div");
    cuadroFluidos.id = "cuadro-fluidos";
    cuadroFluidos.style = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
      max-width: 520px;
      width: 90%;
      text-align: left;
      z-index: 9999;
      display: none;
    `;

    cuadroFluidos.innerHTML = `
      <button onclick="this.parentElement.style.display='none'" style="
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 24px;
        color: #888;
        cursor: pointer;
      ">&times;</button>

      <h2 style="color: #e53935;">Inspección de los niveles de fluidos/batería</h2>
      <p>Para obtener la información adecuada de los niveles de fluidos:</p>
      <ul style="padding-left: 1.2em; margin: 0;">
        <li>Aceite de motor.</li>
        <li>Aceite de la transmisión.</li>
        <li>Combustible.</li>
        <li>Aceite hidráulico.</li>
        <li>Líquido de frenos.</li>
        <li>Refrigerante.</li>
        <li>Estado de las baterías.</li>
      </ul>
    `;
    document.body.appendChild(cuadroFluidos);

    // ---------- CUADRO 2: IMÁGENES Y DESCRIPCIÓN ----------
    const cuadroImagenes = document.createElement("div");
    cuadroImagenes.id = "cuadro-imagenes";
    cuadroImagenes.style = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: white;
      border-radius: 16px;
      padding: 1.5rem;
      box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
      max-width: 700px;
      width: 95%;
      text-align: center;
      z-index: 9999;
      display: none;
    `;

    cuadroImagenes.innerHTML = `
      <button onclick="this.parentElement.style.display='none'" style="
        position: absolute;
        top: 10px;
        right: 10px;
        background: transparent;
        border: none;
        font-size: 24px;
        color: #888;
        cursor: pointer;
      ">&times;</button>

      <h2 style="color: #e53935; margin-top: 0;">Niveles Críticos</h2>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; justify-content: center;">
        <div style="flex: 1 1 150px; max-width: 200px;">
          <img src="./info2.png" alt="Aceite Motor" style="width: 100%; max-height: 120px; object-fit: contain; margin-bottom: 0.5rem;">
          <p style="margin: 0;">Aceite Motor</p>
        </div>
        <div style="flex: 1 1 150px; max-width: 200px;">
          <img src="./info3.png" alt="Aceite Transmisión" style="width: 100%; max-height: 120px; object-fit: contain; margin-bottom: 0.5rem;">
          <p style="margin: 0;">Aceite Transmisión</p>
        </div>
        <div style="flex: 1 1 150px; max-width: 200px;">
          <img src="./info4.png" alt="Refrigerante" style="width: 100%; max-height: 120px; object-fit: contain; margin-bottom: 0.5rem;">
          <p style="margin: 0;">Refrigerante</p>
        </div>
      </div>
    `;
    document.body.appendChild(cuadroImagenes);

    // Estilos globales si es necesario
    const estiloGlobal = document.createElement("style");
    estiloGlobal.innerHTML = `
      #cuadro-fluidos, #cuadro-imagenes {
        font-family: 'Segoe UI', sans-serif;
      }

      #cuadro-fluidos ul li {
        margin-bottom: 0.4em;
      }
    `;
    document.head.appendChild(estiloGlobal);
  }

  // Ejecutar cuando cargue
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", crearCuadrosInspeccion);
  } else {
    crearCuadrosInspeccion();
  }
})();
