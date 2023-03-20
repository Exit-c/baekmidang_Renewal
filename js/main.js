/* popup */
$(document).ready(function(){
    function setCookie(name, value, expiredays) {  
        var todayDate = new Date();
        todayDate.setDate( todayDate.getDate() + expiredays );
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';'
    };
    
    $('.linebox .today').click(function(){
        setCookie('maindiv','done',1);
        
        $('.popup').fadeOut('fast');
    });
    
    $('.linebox .popupclose').click(function(){
        $('.popup').fadeOut('fast');
    });
    
    cookiedata = document.cookie; 
    if(cookiedata. indexOf('maindiv=done') < 0 ){
        $('.popup').css('display','block');
    }else{
        $('.popup').css('display','none');
    }
});

/* mslider */
$(document).ready(function(){
    $('.mslider .slider').bxSlider({
        auto: true,
        speed: 500,
        pause: 7000,
        mode: 'horizontal',
        onSliderLoad: function(){
            $('.mslider .slider li > span').addClass('on');
            $('.mslider .slider li > p').addClass('on');
        },
        onSlideBefore: function(){
            $('.mslider .slider li > span').removeClass('on');
            $('.mslider .slider li > p').removeClass('on');
        },
        onSlideAfter: function(){
            $('.mslider .slider li > span').addClass('on');
            $('.mslider .slider li > p').addClass('on');
        }
    });
});

/* video */
$(document).ready(function(){
    var swiper = new Swiper('.video .swiper-container', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        on: {
            slideChange: function(){
                $('.player01').attr('src', 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBaekmidang%2Fvideos%2F629913557359220%2F&show_text=0');
                $('.player02').attr('src', 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBaekmidang%2Fvideos%2F641318549552054%2F&show_text=0&');
                $('.player03').attr('src', 'https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FBaekmidang%2Fvideos%2F470838656600045%2F&show_text=0&');
            },
        },
        breakpoints: {
            // when window width is >= 1024px
            1024: {
                slidesPerView: 1
            },
            // when window width is >= 768px
            768: {
                slidesPerView: 1
            },
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
                spaceBetween: 10
            }
        },
        loop: true
    });
});

$(window).load(function(){
    $(window).resize(function(){
        //창의 가로폭을 담는 변수
        var w = $(window).width();
        var h = $('.video .swiper-slide img').height(); //높이를 숫자로만 반환
        
        if(w <= 1023){
            $('.video .swiper-slide iframe').css('height',h);
        }else{
            $('.video .swiper-slide iframe').css('height','405px');
        }
    });
    
    //초기실행 - 리사이즈이벤트 강제 발생
    $(window).trigger('resize');
});

