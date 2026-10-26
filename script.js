// Preencha com seus contatos reais antes de compartilhar o site.
const CONFIG = { whatsapp: '1934638925', facebook: 'https://www.facebook.com/marliamanzattofurlan', natal: 'https://gmanzattodev.github.io/Natal/' };
let links = { ...CONFIG };
try { links = { ...links, ...JSON.parse(localStorage.getItem('marilia-links') || '{}') }; } catch { }
const status = document.querySelector('#status');
function whatsapp(message) {
  return 'https://wa.me/' + links.whatsapp + '?text=' + encodeURIComponent(message);
}
function safeUrl(value) {
  try { const u = new URL(value); return ['https:', 'http:'].includes(u.protocol) ? u.href : null; } catch { return null; }
}
document.querySelectorAll('[data-link]').forEach(anchor => anchor.addEventListener('click', event => {
  event.preventDefault();
  const key = anchor.dataset.link;
  if (!links[key]) { status.textContent = 'Este link estará disponível em breve.'; return; }
  const url = key === 'whatsapp' ? whatsapp('Olá! Quero agendar um ensaio.') : safeUrl(links[key]);
  if (url) window.open(url, '_blank', 'noopener,noreferrer');
}));
document.querySelector('#messageForm').addEventListener('submit', event => {
  event.preventDefault();
  const message = document.querySelector('#message').value.trim();
  if (!message) { document.querySelector('#message').focus(); status.textContent = 'Escreva sua mensagem antes de enviar.'; return; }
  if (!links.whatsapp) { status.textContent = 'O WhatsApp do estúdio ainda não foi informado.'; return; }
  window.open(whatsapp(message), '_blank', 'noopener,noreferrer');
  status.textContent = 'Continue a conversa no WhatsApp e toque em enviar.';
});
document.querySelector('#year').textContent = new Date().getFullYear();
