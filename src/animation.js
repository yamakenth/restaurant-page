function addNavAnimation() {
  const navButtons = document.querySelectorAll('button');
  navButtons.forEach((button) => {
    button.addEventListener('mouseenter', () => {
      button.classList.add('nav-active');
    });

    button.addEventListener('mouseleave', () => {
      button.classList.remove('nav-active');
    });
  });
  


}

export { addNavAnimation };