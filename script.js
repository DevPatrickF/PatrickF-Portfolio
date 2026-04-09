

//animação com particulas

// Criar o canvas
const canvas = document.createElement("canvas");
canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:-1;";
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

// Resize
function resize() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

// Criar partículas
const particles = [];
const count = Math.max(100, Math.floor((window.innerWidth * window.innerHeight) / 15000));

for (let i = 0; i < count; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    vx: (Math.random() - 0.5) * 0.4,
    vy: (Math.random() - 0.5) * 0.4,
    radius: Math.random() * 4 + 4,
  });
}

// Mouse
const mouse = { x: -1000, y: -1000 };
window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

// Animação
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const p of particles) {
    p.x += p.vx;
    p.y += p.vy;
    if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
    if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

    // Desenha ponto
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fillStyle = "rgba(74, 222, 128, 0.5)";
    ctx.fill();
  }

  // Conecta pontos próximos
  for (let i = 0; i < particles.length; i++) {
    for (let j = i + 1; j < particles.length; j++) {
      const dx = particles[i].x - particles[j].x;
      const dy = particles[i].y - particles[j].y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 150) {
        ctx.beginPath();
        ctx.moveTo(particles[i].x, particles[i].y);
        ctx.lineTo(particles[j].x, particles[j].y);
        ctx.strokeStyle = `rgba(74, 222, 128, ${0.4 * (1 - dist / 150)})`;
        ctx.lineWidth = 3;
        ctx.stroke();
      }
    }

    // Conecta com o mouse
    const mdx = particles[i].x - mouse.x;
    const mdy = particles[i].y - mouse.y;
    const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
    if (mdist < 200) {
      ctx.beginPath();
      ctx.moveTo(particles[i].x, particles[i].y);
      ctx.lineTo(mouse.x, mouse.y);
      ctx.strokeStyle = `rgba(74, 222, 128, ${0,5 * (1 - mdist / 200)})`;
      ctx.lineWidth = 1;
      ctx.stroke();
    }
  }

  requestAnimationFrame(animate);
}
animate();










//form de contato

document.getElementById('formContato').addEventListener('submit', (e) => {
  e.preventDefault();

  const meuContato = '21965606229';

  nome = document.getElementById('nome').value 
  email = document.getElementById('email').value
  telefone = document.getElementById('telefone').value
  mensagem1 = document.getElementById('mensagem1').value



  let mensagem = `Nova mensagem \n\n`

  mensagem += `Nome: ${nome}\n`
  mensagem += `Email: ${email}\n`
  mensagem += `Telefone: ${telefone}\n`
  mensagem += `Mensagem: ${mensagem1}\n`
  

  const url = `https://wa.me/${meuContato}?text=${encodeURIComponent(mensagem)}`;
  window.open(url, '_blank')

})