$(function(){                       
    $('.sp_nav_MM').click(function(){
        var hasAct = $(this).hasClass('active');
        if(hasAct==false){
            $(this).addClass('active');            
        }else{
            $(this).removeClass('active');            
        }
    });
    $('.sp_nav_SM').click(function(){
        var hasAct = $(this).hasClass('active');
        if(hasAct==false){
            $(this).addClass('active');           
        }else{
            $(this).removeClass('active');            
        }
    });//중간 네비게이션                     

    $(window).scroll(function(){
        var scrollAmt = $(window).scrollTop();
        if(scrollAmt > 0){
            $('.header_wrap').addClass('fixed');
        }else{
            $('.header_wrap').removeClass('fixed');
        }                    
    });     
    var headerWrap = $('.header_wrap'),        
        subBg = $('.sub_bg'),
        nav = headerWrap.find('nav')       
        
        headerWrap.mouseover(function(){       
            $(this).addClass('fixed');                    
        });       
        headerWrap.mouseout(function(){  
            if(!$(window).scrollTop() > 0){
                headerWrap.removeClass('fixed');                                            
            }            
        });
        nav.mouseover(function(){
            subBg.css({display:'block'});
        });
        nav.mouseout(function(){
            subBg.css({display:'none'});
        }); //header fix       

    if($(window).width() < 1480){                
        $('.reson_nav > div').show();   
        $('.toggle_pc').removeClass('active');
        $('.toggle_pc').click(function(e){
            e.preventDefault();
            $('.side_box').css({right:0})
            $('.side_nav').fadeIn(100);
        });
        $('.side_box .close').click(function(){            
            $('.side_box').css({right:'-100vw'})    
            $('.side_nav').fadeOut(100);       
        })
        $('.side_nav').click(function(){
            $('.side_box').css({right:'-100vw'}) 
            $(this).fadeOut(100);
        });
    }else{
        $('.box_Wrap .product_box .serch_box').css({display:'block'});
        $('.serch.HL_bg .serch_res').hide();
        $('.reson_nav > div').hide();   
    }; //responsive navigation    
    
          
    $('.gotop').click(function(e){
        e.preventDefault();
        $('html, body').animate({scrollTop : 0},800);              
    }); //go top

    $('.family_box').click(function(){        
        var hasAct = $(this).hasClass('active');
        if(hasAct==false){          
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }    
    }); //family button

    var sideMM = $('.sideMenu > li > a');    
    sideMM.click(function(e){
        e.preventDefault();        
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).siblings('ul').slideToggle();        
        $(this).parent().siblings().find('ul').slideUp();        
    }); //responsive navigation menu toggle

    $('.recruit_lang .lnag_kor').click(function(e){
        e.preventDefault();
        var hasAct = $(this).hasClass('active');
        if(hasAct==false){          
            $(this).addClass('active');
            $(this).find('span').css({transform:'rotate(180deg)'})
        }else{
            $(this).removeClass('active');
            $(this).find('span').css({transform:'rotate(0deg)'})
        }
    }) // ----------- RECRUIT_LANG ----------- //

    $(document).click(function(e) {		
        if(!$('.family_box').has(e.target).length && $('.family_box').hasClass('active')==true){
            $('.family_box').removeClass('active');
        }
        if(!$(e.target).is('.sp_nav_MM') && $('.sp_nav_MM').hasClass('active')==true){
            $('.sp_nav_MM').removeClass('active');            
        }
        if(!$(e.target).is('.sp_nav_SM') && $('.sp_nav_SM').hasClass('active')==true){
            $('.sp_nav_SM').removeClass('active');            
        }      
        if(!$('.lnag_kor').has(e.target).length && $('.lnag_kor').hasClass('active')==true){
            $('.lnag_kor').removeClass('active');
            $('.lnag_kor').find('span').css({transform:'rotate(0deg)'})
        }      
      
    }); //except for

    $('.toggle_pc.active').click(function(e){
        e.preventDefault();
        $('.toggle').stop().slideDown(500);
    });
    $('.toggle .close').click(function(){        
        $('.toggle').stop().slideUp(500);
    });
     
    var toggleMenu = $('.toggle .flex_box > div:not(:first-child)');
    toggleMenu.each(function(idx){
        $(this).mouseover(function(){
            $(this).find('h2').css({color:'#009639'});
        }).mouseout(function(){
            $(this).find('h2').css({color:'#222'});
        })
    });
    $('.toggle .close').mouseover(function(){
        $(this).css({backgroundColor:'#e3e3e3'});
        $(this).find('span').css({color:'#fff'});
    }).mouseout(function(){
        $(this).css({backgroundColor:'#fff'});
        $(this).find('span').css({color:'#222'});
    });//toggle menus

    var navMain = $('.header_wrap nav .mainMenu li');        
    navMain.mouseover(function(){
        $(this).addClass('active');
    }).mouseout(function(){
        $(this).removeClass('active');
    });//header hover event

});