$('.b-text').hide();

$('.btn-p').on('click', function() {
    $('.btn-p').hide();
    $('.b-text').fadeIn()
})

$('.b-text').on('click', function() {
    $('.b-text').fadeOut()
})
  

let cursor_1 = document.querySelector('.f-cursor');
let cursor_2 = document.querySelector('.s-cursor');
let banner = document.querySelector('.banner');

document.addEventListener('mousemove', function(e){
    // cursor_1.style.cssText = 
    cursor_2.style.cssText = `left: ${e.clientX}px; top: ${e.clientY}px`
})