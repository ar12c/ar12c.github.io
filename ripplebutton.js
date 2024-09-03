const elementsWithRipple = document.querySelectorAll('[ripple]');

elementsWithRipple.forEach(elementWithRipple => {
  elementWithRipple.addEventListener('pointerdown', (mouseEvent) => {
    // Create a ripple element <div class="ripple">
    const rippleEl = document.createElement('div');
    rippleEl.classList.add('ripple');
    
    // Position the ripple
    const x = mouseEvent.offsetX;
    const y = mouseEvent.offsetY;
    
    rippleEl.style.left = `${x}px`;
    rippleEl.style.top = `${y}px`;
    
    elementWithRipple.appendChild(rippleEl);
    
    requestAnimationFrame(() => {
      rippleEl.classList.add('run');
    });
    
    // Remove ripple element when the transition is done
    rippleEl.addEventListener('transitionend', () => {
      rippleEl.remove();
    });
  });
})