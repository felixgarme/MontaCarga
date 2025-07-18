(function () {
  function crearBotonesLaterales() {
    if (document.getElementById("botones-laterales")) return;

    // Contenedor
    const container = document.createElement("div");
    container.id = "botones-laterales";
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.width = "100%";
    container.style.height = "100%";
    container.style.pointerEvents = "none";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    // Estilos globales
    const style = document.createElement("style");
    style.innerHTML = `
      .btn-v3d {
        position: absolute;
        top: 50%;
        transform: translateY(-50%) scale(0.8);
        opacity: 0;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: none;
        background: #fff;
        color: #e53935;
        font-size: 24px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 8px 8px 16px rgba(0,0,0,0.15), -8px -8px 16px rgba(255,255,255,0.8);
        pointer-events: auto;
        transition: all 0.4s ease;
        outline: none;
        z-index: 10000;
        overflow: hidden;
        backdrop-filter: blur(3px);
      }

      .btn-v3d.mostrar {
        opacity: 1;
        transform: translateY(-50%) scale(1);
      }

      .btn-v3d:hover {
        box-shadow: inset 4px 4px 12px rgba(0,0,0,0.1), inset -4px -4px 12px rgba(255,255,255,0.6);
        transform: translateY(-50%) scale(1.05);
      }

      .btn-v3d:active {
        transform: translateY(-50%) scale(0.95);
      }

      .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(229, 57, 53, 0.3);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
        transform: scale(0);
      }

      @keyframes ripple-animation {
        to {
          transform: scale(4);
          opacity: 0;
        }
      }

      /* 🎯 ANIMACIÓN PULSANTE */
      .pulsante {
        animation: pulse-glow 1.2s infinite ease-in-out;
        box-shadow: 0 0 0 0 rgba(229, 56, 53, 0.84);
      }

      @keyframes pulse-glow {
        0% {
          box-shadow: 0 0 0 0 rgba(229, 56, 53, 0.78);
        }
        70% {
          box-shadow: 0 0 0 32px rgba(229, 57, 53, 0);
        }
        100% {
          box-shadow: 0 0 0 0 rgba(229, 57, 53, 0);
        }
      }
    `;
    document.head.appendChild(style);

    // Función para crear botón
    function crearBoton(id, lado, icono, accionPuzzles) {
      const btn = document.createElement("button");
      btn.id = id;
      btn.className = "btn-v3d";
      btn.innerHTML = icono;
      btn.style[lado] = "20px";

      container.appendChild(btn);

      btn.addEventListener("click", (e) => {
        // Ripple
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        const rect = btn.getBoundingClientRect();
        ripple.style.left = `${e.clientX - rect.left - 10}px`;
        ripple.style.top = `${e.clientY - rect.top - 10}px`;
        ripple.style.width = ripple.style.height = "20px";
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);

        // Ejecutar procedimiento Verge3D
        try {
          v3d.puzzles.procedures[accionPuzzles]();
        } catch (err) {
          console.error(`❌ No se pudo ejecutar ${accionPuzzles}`, err);
        }

        // Si es el botón derecho
        if (id === "btn-derecha") {
          // Quitar animación pulsante
          btn.classList.remove("pulsante");

          // Mostrar el botón izquierdo
          const btnIzq = document.getElementById("btn-izquierda");
          if (btnIzq && !btnIzq.classList.contains("mostrar")) {
            setTimeout(() => btnIzq.classList.add("mostrar"), 100);
          }
        }
      });

      return btn;
    }

    const btnIzquierda = crearBoton("btn-izquierda", "left", "◀", "izquierda");
    const btnDerecha = crearBoton("btn-derecha", "right", "▶", "derecha");

    // Mostrar solo botón derecho al inicio, con animación
    setTimeout(() => {
      btnDerecha.classList.add("mostrar", "pulsante");
    }, 100);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", crearBotonesLaterales);
  } else {
    crearBotonesLaterales();
  }
})();
