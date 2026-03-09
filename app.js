const who    = ['El perro', 'Mi abuela', 'El cartero', 'Mi loro', 'Mi gato', 'Mi vecino', 'El WiFi'];
const action = ['se comió', 'destruyó', 'pisó', 'mordió', 'tiró al inodoro', 'escondió', 'borroneó'];
const what   = ['mi tarea', 'mi teléfono', 'el cargador', 'mis apuntes', 'el despertador', 'mi motivación'];
const when   = ['antes de clase', 'mientras dormía', 'durante mi siesta', 'justo cuando iba a empezar', 'mientras rezaba', 'en el peor momento posible'];

function rand(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateExcuse() {
  return `${rand(who)} ${rand(action)} ${rand(what)} ${rand(when)}.`;
}

function newExcuse() {
  const el = document.getElementById('excuse');
  el.classList.remove('flash');
  void el.offsetWidth; // forzar reflow para reiniciar animación
  el.classList.add('flash');
  setTimeout(() => { el.textContent = generateExcuse(); }, 150);
}

function copyExcuse() {
  const text = document.getElementById('excuse').textContent;
  navigator.clipboard.writeText(text).then(() => {
    const msg = document.getElementById('copy-msg');
    msg.textContent = '✅ ¡Excusa copiada! Úsala con confianza.';
    setTimeout(() => { msg.textContent = ''; }, 2500);
  });
}

window.onload = newExcuse;