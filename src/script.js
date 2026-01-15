const campo = document.getElementById('campo');
const final = document.getElementById('final');
const tulipaFinal = document.getElementById('tulipaFinal');

const cores = ['#F2B5C4', '#C8A2C8', '#E88A8A', '#F5E6C8', '#E75480'];

let totalTulipas = 0;
const LIMITE = 15;

// Criar tulipa ao toque
campo.addEventListener('click', (e) => {
  if (totalTulipas >= LIMITE) return;

  const tulipa = document.createElement('div');
  tulipa.classList.add('tulipa');

  tulipa.style.color =
    cores[Math.floor(Math.random() * cores.length)];

  tulipa.style.left = e.clientX - 20 + 'px';
  tulipa.style.top = e.clientY - 40 + 'px';

  campo.appendChild(tulipa);
  totalTulipas++;

  if (totalTulipas === LIMITE) {
    setTimeout(() => {
      final.style.display = 'block';
    }, 800);
  }
});

// Clique na tulipa gigante → YouTube
tulipaFinal.addEventListener('click', () => {
  window.open(
    'https://www.youtube.com/watch?v=UveMYzBgjL4',
    '_blank'
  );
});
