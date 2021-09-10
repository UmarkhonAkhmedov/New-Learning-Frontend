document.querySelectorAll('.accordion__question').forEach((item) => {
  item.addEventListener('click', (event) => {
    let accCollapse = item.nextElementSibling
    // Open accordion item
    if(!item.classList.contains('open')){
      accCollapse.style.display = 'block';
      let accHeight = accCollapse.clientHeight;
      accCollapse.style.height = accHeight;
      accCollapse.style.display = 'none'
      // Remove "collapse", add "collapsing class to .accordion__collapse (sibling)"
      accCollapse.classList = 'accordion__collapse collapsing';
      
      accCollapse.style.display = 'block'
      // After X amount of time, remove collapsing class and add "collapse open" class
      setTimeout(() => {
        accCollapse.classList = 'accordion__collapse open';
      }, 300);
    }
   
    // Close accordion item
    else {
      // Remove "collapse open" from /accordion__collapse, add "collapsing"
      accCollapse.classList = 'accordion__collapse collapsing';

      // After X amount of time, remove "collapsing class and add "collapse" class
      setTimeout(() => {
        accCollapse.classList = 'accordion__collapse collapse';
      }, 300);
    }

    
    item.classList.toggle('open');
    
  });
});