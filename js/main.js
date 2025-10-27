// ======= main.js =======
// Función para enviar los datos del turno por WhatsApp
function enviarTurno() {
  // Tomamos los valores del formulario
  const nombre = document.getElementById('nombre').value.trim();
  const motivo = document.getElementById('motivo').value.trim();
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;

  // Validación rápida
  if (!nombre || !motivo || !fecha || !hora) {
    alert('Por favor completá todos los campos antes de continuar.');
    return;
  }

  // Armamos el mensaje
  const mensaje = `👨‍⚕️ *Solicitud de turno*\n\n` +
    `Nombre: ${nombre}\n` +
    `Motivo: ${motivo}\n` +
    `Fecha: ${fecha}\n` +
    `Hora: ${hora}\n\n` +
    `Enviado desde la web del Dr. Gabriel Pérez.`;

  // Número de WhatsApp del doctor (ajustado con prefijo internacional)
  const numero = "5491154815519";

  // Generamos el enlace y lo abrimos
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}

// ======= UI extra: scroll suave y menú móvil =======
document.addEventListener("DOMContentLoaded", () => {
  // Scroll suave al hacer clic en enlaces internos
  const enlaces = document.querySelectorAll('a[href^="#"]');
  enlaces.forEach(enlace => {
    enlace.addEventListener("click", function (e) {
      e.preventDefault();
      const destino = document.querySelector(this.getAttribute("href"));
      if (destino) {
        destino.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Pequeño toque mobile-friendly: cerrar menú al tocar un link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.querySelector('.nav-links');
      nav.classList.remove('active');
    });
  });
});
