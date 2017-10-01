$(function(){
    
    var $burger = $('.burg');
    
    var $menu = $('ul');

    var $link = $('a[data-target^="anchor"]') 
    
    $burger.click(function(){

        if($menu.hasClass('active')){
        
            $menu.slideUp('normal').removeClass('active');
        }
        else{
            
            $menu.slideDown('normal').addClass('active');
        }
    });

    $link.click(function(){

        if($menu.hasClass('active')){
        
            $menu.slideUp('normal').removeClass('active');
        }
    });

/*-----Скролл--------*/

        $('a[data-target^="anchor"]').bind('click.smoothscroll', function(){
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top- 58;
        $('body, html').animate({scrollTop: bl_top}, 1500);
        return false;
    });


});