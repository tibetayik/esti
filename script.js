const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('leadForm').addEventListener('submit', function(e){
  e.preventDefault();
  const data = new FormData(this);
  const text = `Merhaba, ESTİ Su Yalıtımı web sitesinden ulaşıyorum.%0A%0AAd Soyad: ${encodeURIComponent(data.get('name')||'')}%0ATelefon: ${encodeURIComponent(data.get('phone')||'')}%0Aİl / İlçe: ${encodeURIComponent(data.get('location')||'')}%0AHizmet: ${encodeURIComponent(data.get('service')||'')}%0AProblem: ${encodeURIComponent(data.get('message')||'')}`;
  window.open(`https://wa.me/905324382114?text=${text}`, '_blank');
});
