document.querySelectorAll('.accordion__question').forEach((item) => {
  item.addEventListener('click', (event) => {
    
    // Open accordion item
    if(item.classList.contains('open')){
      // Remove "collapse", add "collapsing class to .accordion__collapse (sibling)"
      item.nextElementSibling.classList = 'accordion__collapse collapsing';

      // After X amount of time, remove collapsing class and add "collapse open" class
      setTimeout(() => {
        item.nextElementSibling.classList = 'accordion__collapse open';
      }, 300);
    }
   
    // Close accordion item
    else {
      // Remove "collapse open" from /accordion__collapse, add "collapsing"
      item.nextElementSibling.classList = 'accordion__collapse collapsing';

      // After X amount of time, remove "collapsing class and add "collapse" class
      setTimeout(() => {
        item.nextElementSibling.classList = 'accordion__collapse collapse';
      }, 300);
    }

    
    item.classList.toggle('open');
    
  });
});