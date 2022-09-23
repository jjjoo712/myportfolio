



$(document).ready(function(){ 


  AOS.init();


  

 


var ww = $(window).width();
var mySwiper = undefined;

function initSwiper() {

  if (ww >= 1280 && mySwiper == undefined) {
    mySwiper = new Swiper("#me .mySwiper", {
      loop : true,
        speed: 300,
        
        autoplayDisableOnInteraction: true,
       pagination: {
      el: "#me .mySwiper .swiper-pagination",
      clickable: true,
      renderBullet: function (index, mystyle) {
        return '<span class="'+mystyle+'">' + $('[data-swiper-slide-index="'+index+'"]').data('name') + '</span>';
      },
      },
    });



  } else if (ww < 1280 && mySwiper != undefined) {
    mySwiper.destroy();
    mySwiper = undefined;
  }
}

initSwiper();

$(window).on('resize', function () {
  ww = $(window).width();
  initSwiper();
});



  
$('#allMenu').click(function(e){
   
  e.preventDefault();
  
  $(this).toggleClass('open');
})





$('#gnb a').click(function(e){
  var clicka = $(this);
  e.preventDefault();
  $("#allMenu").removeClass('open');
  
  $('body,html').animate({
    
    scrollTop : $(clicka.attr('href')).offset().top
    
  },400,function(){
    $('#gnb a').removeClass('act')
    clicka.addClass('act');
  })
})







  // 퀵토글 만들기
   $("#quick > a").click(function(){
        $("#quick").toggleClass('on')
        $('#quick > a').toggleClass('open')
      })
      $('.topbtn').click(function(){
        $('body, html').animate({
          scrollTop : $($(this).attr('href')).offset().top
          
        },
          400,function(){
          $("#quick").removeClass('on')
        })
      })
 
      // 메인 스크롤 안터지게 한거
      
      $('#readyBox .hobbyImg, #readyBox .clickAni').click(function(){
        $('#readyBox').removeClass('openBox');
        $('body').removeClass('ofy');
        
      })

      if($('#readyBox.openBox').length > 0 ){
       

        $('body, html').animate({scrollTop : 0}, 50)
  
        $('body').addClass('ofy');
      }

 


 
    //스크롤 시 헤더 숨기기

      var didScroll; 
            var lastScrollTop = 0; 
            var delta = 5; 
            var navbarHeight = $('#hd').outerHeight(); 

            $(window).scroll(function(event){ 
                    didScroll = true; 
            }); 
            setInterval(function() { 
                if (didScroll) { 
                    hasScrolled(); 
                    didScroll = false; 
                } }, 250); 

            function hasScrolled() { 
                var st = $(this).scrollTop(); 
                    if(Math.abs(lastScrollTop - st) <= delta) return; 

                    if (st > lastScrollTop && st > navbarHeight){ 
                        // Scroll Down 
                        $('#hd').addClass('up'); 
                        // $('#quick').addClass('show');
                    } 
                    else {  
                        // Scroll Up  
                        $('#hd').removeClass('up');
                        //$('#quick').removeClass('show');
                    } 
                lastScrollTop = st; 
                }            
})





