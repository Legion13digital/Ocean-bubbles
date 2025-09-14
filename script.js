document.addEventListener('DOMContentLoaded', function() {
    const bubblesContainer = document.querySelector('.bubbles');
    
    for (let i = 0; i < 5; i++) {
      const bubble = document.createElement('div');
      bubble.classList.add('bubble');
      
      const size = Math.random() * 6 + 3;
      const left = Math.random() * 200;
      const delay = Math.random() * 5;
      
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${left}px`;
      bubble.style.top = '200px';
      bubble.style.animationDelay = `${delay}s`;
      
      bubblesContainer.appendChild(bubble);
    }
  });
