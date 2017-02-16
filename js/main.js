function modalin(){
  $('.modal').fadeIn(['slow']);
};

function modalout(){
  $('.modal').fadeOut(['slow']);
};

function classy(){
  $('input').addClass('error')
};



$(document).ready(function(){
  $('.signin').on('click', modalin);
  $('.close').on('click', modalout);
  $('.submit').on('click', classy);
  $('input').hover(function() {
      $(this).removeClass('error');
    }, function() {
      $(this).addClass('error');
  });
  $('.modal').on('click', modalout);
})
