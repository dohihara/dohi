$(function(){


// $(window).scroll(function(){
//   // $('#pos').text($(this).scrollTop());
//   if($(this).scrollTop()>500){
//     $('#fade-left').css(left,'1000px').animate({left:"1000px"},1000);
//   }
// });
$('.opening-left').addClass('active');
$('.opening-right').addClass('active');


// 左からフェードイン
$(window).scroll(function (){
  $('.fade-left').each(function(){
    var targetTop = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll >= targetTop - windowHeight +100 ){
      // $(this).show('slow');
      $(this).addClass('active');
        }else{
          $(this).removeClass('active');
        }
    });
});

// 右からフェードイン
$(window).scroll(function (){
  $('.fade-right').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 100){
      // $(this).show('slow');
      $(this).addClass('active');
        }else{
          $(this).removeClass('active');
        }
    });
});

// 下からフェードイン
$(window).scroll(function (){
  $('.fade-bottom').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight ){
      // $(this).show('slow');
      // $(this).fadeIn();
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
      // $(this).fadeOut();
        }
    });
});


// 透明度
$(window).scroll(function(){
  $('.vision').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 100){
      $(this).addClass('visible');
    }else{
      $(this).removeClass('visible');
    }
  });
});
// 拡大
$(window).scroll(function(){
  $('.scale').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 100){
      $(this).addClass('effect');
    }else{
      $(this).removeClass('effect');
    }
  });
});

// 拡大しながら下からフェードイン
$(window).scroll(function (){
  $('.fade-bottom-s').each(function(){
    var targetElement = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > targetElement - windowHeight + 100 && scroll < targetElement - windowHeight){
      // $(this).show('slow');
      $(this).addClass('active');
    }else{
      $(this).removeClass('active');
    }
  });
});


});
