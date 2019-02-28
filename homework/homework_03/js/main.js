//(function($){
//    $('.menu-btn').on('click', function(e){
//        e.preventDefault;
//        $(this).toggleClass('menu_btn_activ');
//    });
//});
(function($){

    $('.menu_btn').on('click', function() {
      $(this).closest('.menu').toggleClass('menu_btn_activ');
    });

});