$(function(){             
    $('#fullPage').fullpage({
        slideSelector: '.FPslide',  
        anchors: ['page1', 'page2', 'page3', 'page4'],      
        navigation: true,
        navigationTooltips: ['Home', 'Product', 'RnD', 'NewsNJR'],
        showActiveTooltip: true,  
        scrollingSpeed: 600,              
        afterLoad: function(anchorLink, index){            
            if(index == 1){
                $('#fp-nav').addClass('white');    
                $('.reson_nav div:first-child').addClass('active'); 
                $('.header_wrap').removeClass('fixed');  
                $('.header_wrap').mouseout(function(){         
                    $(this).removeClass('fixed');         
                });                        
            }else{
                $('#fp-nav').removeClass('white');  
                $('.reson_nav div:first-child').removeClass('active');    
                $('.header_wrap').mouseout(function(){         
                    $(this).addClass('fixed');         
                });                                                                                                                
            };         
            if(index == 2){                
                $('.Product .container').addClass('Up');   
                $('.reson_nav div:nth-child(2)').addClass('active');
                $('.header_wrap').addClass('fixed');     
            }else{
                $('.Product .container').removeClass('Up');
                $('.reson_nav div:nth-child(2)').removeClass('active');                
            };
            if(index == 3){                
                $('.RnD .container').addClass('Up');   
                $('.reson_nav div:nth-child(3)').addClass('active');  
                $('.header_wrap').addClass('fixed');                
            }else{
                $('.RnD .container').removeClass('Up');     
                $('.reson_nav div:nth-child(3)').removeClass('active');              
            };
            if(index == 4){
                $('.reson_nav div:last-child').addClass('active');                 
            }else{
                $('.reson_nav div:last-child').removeClass('active');
            };
            if(index == 4 || index ==5){                
                $('.NewsNJR .second_floor').animate({opacity:1,paddingBottom:0},600);
                $('.NewsNJR .first_floor').animate({opacity:1},600);
                $('.header_wrap').addClass('fixed');     
            }else{
                $('.NewsNJR .second_floor').animate({opacity:0,paddingBottom:'5rem'},600);
                $('.NewsNJR .first_floor').animate({opacity:0},600);     
            };
            if(index ==5){
                $('.reson_nav').hide();  
            }else{
                $('.reson_nav').show();  
            }
        },    
    });   

    var headerWrap = $('.header_wrap'),        
        subBg = $('.sub_bg'),
        nav = headerWrap.find('nav');            
    
    headerWrap.mouseover(function(){       
        $(this).addClass('fixed');                    
    });       
    
    nav.mouseover(function(){
        subBg.css({display:'block'});
    });
    nav.mouseout(function(){
        subBg.css({display:'none'});
    });   

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
        $('.reson_nav > div').hide();   
    }
    if($(window).width() < 769){        
        $('.box_Wrap .product_box .serch_box').css({display:'none'});
        $('.serch.HL_bg .serch_res').show();        
    }else{
        $('.box_Wrap .product_box .serch_box').css({display:'block'});
        $('.serch.HL_bg .serch_res').hide();       
    }             

    $('#fp-nav').find('li:last-child').remove();
    $('.gotop').click(function(e){        
        e.preventDefault();
        $.fn.fullpage.moveTo(1);        
    });    
      
    $('.reson_nav div').each(function(idx){
        $(this).click(function(){
            $.fn.fullpage.moveTo(idx+1);
        })
    })    
    
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

    var sildeWrapper = $('.slidewrapper'),
    slideContainer = sildeWrapper.find('.slidecontainer'),
    slides = slideContainer.find('.slide'),
    slideCount = slides.length,    
    currentIdx = 0,
    timer,
    duration = 500,    
    intervalTimer = 4500; 
    
    slideContainer.prepend(slides.clone().addClass('clone'));
    slideContainer.append(slides.eq(0).clone().addClass('clone'));
    slideContainer.find('.slide').each(function(idx){
        $(this).css({left:idx*100+'%'})
    });
    slideContainer.css({transform:'translateX(' + slideCount*-100 + '%)'});
    function moveSlide(num){
        slideContainer.stop().animate({left:-100*num+'%'},duration,function(){
            currentIdx = num;
            if(currentIdx==slideCount || currentIdx==-slideCount){
                slideContainer.css({left:'0%'});
                currentIdx=0;
            }
        });
    }
    sildeWrapper.mouseover(function(){
        clearInterval(timer);
    })
    .mouseout(function(){
        autoSlide();
    });
    autoSlide();
    function autoSlide(){
        timer = setInterval(function(){
            moveSlide(currentIdx+1);
        },intervalTimer);
    }

    $('.IR > div > div').mouseover(function(){
        $(this).css({filter:'brightness(120%)'})        
    }).mouseout(function(){
        $(this).css({filter:'brightness(100%)'})        
    });
    $('.notice').find('div').mouseover(function(){
        $(this).css({backgroundColor:'#f3f3f3'})
    }).mouseout(function(){
        $(this).css({backgroundColor:'#fff'})        
    });
    $('.news').find('div').mouseover(function(){
        $(this).css({backgroundColor:'#f3f3f3'})
    }).mouseout(function(){
        $(this).css({backgroundColor:'#fff'})        
    });

    $('.first_floor > div').mouseover(function(){
        $(this).find('.Shortcuts').stop().animate({width:'134px'},200)
    }).mouseout(function(){
        $(this).find('.Shortcuts').stop().animate({width:'114px'},200)
    });
   
    var sideMM = $('.sideMenu > li > a');    
    
    sideMM.click(function(e){        
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).siblings('ul').slideToggle();        
        $(this).parent().siblings().find('ul').slideUp();        
    });          
   
    $('.family_box').click(function(){        
        var hasAct = $(this).hasClass('active');
        if(hasAct==false){          
            $(this).addClass('active');
        }else{
            $(this).removeClass('active');
        }
    });
    $('.serch_box input').click(function(){
        $(this).parent().addClass('active');
    })
   
    $(document).click(function(e) {
		if(!$('.box_Wrap .product_box .serch_box form').has(e.target).length && $('.box_Wrap .product_box .serch_box form').hasClass('active')==true ){
			$('.box_Wrap .product_box .serch_box form').removeClass('active');
		}
        if(!$('.family_box').has(e.target).length && $('.family_box').hasClass('active')==true){
            $('.family_box').removeClass('active');
        }          
        if(!$('.lnag_kor').has(e.target).length && $('.lnag_kor').hasClass('active')==true){
            $('.lnag_kor').removeClass('active');
            $('.lnag_kor').find('span').css({transform:'rotate(0deg)'})
        }               
    
    });
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
    })
    $('.toggle .close').mouseover(function(){
        $(this).css({backgroundColor:'#e3e3e3'});
        $(this).find('span').css({color:'#fff'});
    }).mouseout(function(){
        $(this).css({backgroundColor:'#fff'});
        $(this).find('span').css({color:'#222'});
    })//toggle menu

    var navMain = $('.header_wrap nav .mainMenu li');        
    navMain.mouseover(function(){
        $(this).addClass('active');
    }).mouseout(function(){
        $(this).removeClass('active');
    });

    var norSlide = $('.nor_slidecontainer');
    var proSlide = $('.pro_slidecontainer');
    var fmSlide = $('.fm_slidecontainer');

    norSlide.slick({
        arrows: false         
    });
    proSlide.slick({
        arrows: false        
    });
    fmSlide.slick({
        arrows: false        
    });    
    $('.nor_slidewrapper .next').click(function(){
		norSlide.slick('slickNext')
	});
	$('.nor_slidewrapper .prev').click(function(){
		norSlide.slick('slickPrev')
	});
    $('.pro_slidewrapper .next').click(function(){
		proSlide.slick('slickNext')
	});
	$('.pro_slidewrapper .prev').click(function(){
		proSlide.slick('slickPrev')
	});
    $('.fm_slidewrapper .next').click(function(){
		fmSlide.slick('slickNext')
	});
	$('.fm_slidewrapper .prev').click(function(){
		fmSlide.slick('slickPrev')
	});    

    let myPopup = document.querySelector('.popup'),
    closeBtn = myPopup.querySelector('button'),
    oneDayCheck = document.querySelector('#nomore');

    function checkcookie(name){
        var cookies = document.cookie.split(';');
        var visited = false;

        for(ck of cookies){
            if(ck.indexOf(name) > -1){
                visited = true;
            }                
        }
        if(visited == true){
            myPopup.style.display = 'none';            
        }else{
            myPopup.style.display = 'block';        
        }
    }
    checkcookie('YUHAN');

    function setCookie(name,value,day){           
        var date = new Date();
        date.setDate(date.getDate()+day);

        var myCookie = '';
        myCookie = `${name}=${value};Expires=${date.toUTCString()}`;            
        document.cookie = myCookie;
    }//setcookie

    function deleteCookie(name,value){                
        var date = new Date();            
        date.setDate(date.getDate()-1);

        var myCookie = '';
        myCookie = `${name}=${value};Expires=${date.toUTCString()}`;   
        document.cookie = myCookie;
    }

    closeBtn.addEventListener('click',()=>{
        if(!oneDayCheck.checked){ 
            deleteCookie('YUHAN','home');
        }else{
            setCookie('YUHAN','home',1);
        }
    myPopup.style.display = 'none';
    });
});