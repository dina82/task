$(document).ready(function(){
   
    $(window).on('scroll',function(){
        if($(this).scrollTop() > 200 ){
            $('#header .navbar-default').css('position','fixed')
        }
    })
    $('#header #top_navbar ul li a').click(function(){
        $('html,body').animate({
            scrollTop: $( $(this).attr('href') ).offset().top
        }, 2000);
    })
    
    var nav = $('#header #top_navbar ul li a');
    nav.on('click',function(){
        nav.removeClass('active');
        $(this).addClass('active')    
    })
    $('#work #work_list ul li').on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        if( $(this).data('class')==='.all'){
            $('#work .col-sm-3').css('opacity',1)
        }
        else{
            $('#work .col-sm-3').css('opacity','.4');
            $( $(this).data('class') ).parent().css('opacity',1)
        }

       
    })
  
    
    $('.counter').counterUp({
        delay: 5,
        time: 2000
        
    });
})
