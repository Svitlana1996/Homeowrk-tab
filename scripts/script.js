
$('.header__item').on('click', tabClickHandler);

function tabClickHandler(event){
    
    $('.header__item').removeClass('active');
    $(this).addClass('active');
    
    var id = $(this).attr('data-tab-id');
  
    $('.content__item').removeClass('active');
    $('#' + id).addClass('active');
    
  }

