let comet = document.querySelector('.comet');

document.addEventListener('mousemove', function(e){
    comet.style.cssText  = `left: ${e.clientX}px; top: ${e.clientY}px`
})