/* totop */
$(document).ready(function(){
    $().UItoTop({ easingType:'easeOutQuart'});
});

/* panel */
$(document).ready(function(){
    var w = $('.panel').width();
    $('.panel').css('left', -w);
    $('.blackBg').fadeOut(0);
    $('.panel nav .pgnb .psubnav').fadeOut(0);
    
    $('.htop .tmenu img').click(function(){
        $('.blackBg').fadeIn(0);
        $('.panel').animate({
            left: 0
        },'fast',function(){
            $('html, body').css({
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'fixed'
            })
        });
    });
    
    function close(speed){
        var w = $('.panel').width();
        
        $('.panel').stop().animate({
            left: -w
        }, speed, function(){
            $('html, body').css({
                width: '100%',
                height: 'auto',
                overflow: 'auto',
                position: 'static'
            });
        });
        $('.blackBg').fadeOut(0);
        $('.panel .pgnb .pgnb01 h2').trigger('click');
    }
    
    $('.panel > a > img').click(function(){
        close('fast');
    });
    
    $('.panel .pgnb h2').click(function(){
        
        var is = $(this).next().is(':hidden');
        
        if(is){
            $('.panel .pgnb h2').removeClass('on');
            $(this).addClass('on');
            $(this).children().addClass('on');
            $('.panel .psubnav').fadeOut(0);
            $(this).next().fadeIn(0);
        }
        
    });
    
    $('.panel .pgnb .pgnb01 h2').trigger('click');
    
    $(window).resize(function(){
        var w = $(window).innerWidth(); 
        
        close(0);
        
        if(w >= 1024){ 
            $('.panel').css('left', -w);
            $('.blackBg').fadeOut(0);
            $('.panel .pgnb .pgnb01 h2').trigger('click');
        }
    });
    
    $(window).trigger('resize');
});

/* header */
$(document).ready(function(){
    $('.subnav').slideUp(0); 
    $('.subbg').slideUp(0); 
    
    $('.gnb > ul > li > a').mouseenter(function(){
        $('.subnav').slideUp(0); 
        $(this).next().stop().slideDown('fast');
        $('.subbg').stop().slideDown('fast');
        $('.gnb > ul > li > a').removeClass('on');
        $(this).addClass('on');
        
        $('.gnb').mouseleave(function(){
            $('.subnav').slideUp('fast'); 
            $('.subbg').slideUp('fast');
            $('.gnb > ul > li > a').removeClass('on');
        });
        
    });

    $('.gnb > ul > li > a').focus(function(){
        $('.subnav').slideUp(0); 
        $('.subbg').slideUp(0);
        $(this).next().stop().slideDown('fast');
        $('.subbg').stop().slideDown('fast');
    });
    
    $('.gnb .close').keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){ 
                $('.subnav, .subbg').stop().slideUp('fast');
            }
        }
    });
    
    $('.subbg .alllast').keydown(function(e){
        if(e.keyCode == 9){ 
            if(!e.shiftKey){ 
                $('.subnav, .subbg').stop().slideUp('fast');
            }
        }
    });
    
    $('.gnb > ul > li > a').keydown(function(e){
        if(e.keyCode == 9){ 
            if(e.shiftKey){ 
                $('.subnav, .subbg').stop().slideUp('fast');
            }
        }
    });
});

