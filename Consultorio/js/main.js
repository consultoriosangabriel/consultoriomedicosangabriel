function enviarTurno() {
  const nombre = document.getElementById('nombre').value;
  const fecha = document.getElementById('fecha').value;
  const hora = document.getElementById('hora').value;
  const motivo = document.getElementById('motivo').value;

  const mensaje = `Hola, soy ${nombre}. Quiero solicitar un turno el ${fecha} a las ${hora} para ${motivo}.`;
  const url = `https://wa.me/549XXXXXXXXX?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}
