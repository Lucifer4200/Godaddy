(function($){
	'use strict';

    //menu side bar
    $('.mobile-bar').on('click', function(){
        $('.mobile-bar,.overlay,.left-menu').toggleClass('open');
    });

    // close bar
    $('.close').on('click', function(){
        $('.mobile-bar,.overlay,.left-menu').removeClass('open');
    });

    // overlay
    $('.overlay').on('click', function(){
        $('.left-menu,.overlay').toggleClass('open');
    });


    // menu icon-related
    $(".list-item>li>.sub-menu").parent("li").children("a").addClass("icon-down");

    //mobile drodown menu display
	$('ul.menu-list li a').on('click', function(e) {
        var element = $(this).parent('li');
        if (element.hasClass('open')) {
            element.removeClass('open');
            element.find('li').removeClass('open');
            element.find('ul').slideUp(500,"swing");
        }
        else {
            element.addClass('open');
            element.children('ul').slideDown(500,"swing");
            element.siblings('li').children('ul').slideUp(500,"swing");
            element.siblings('li').removeClass('open');
            element.siblings('li').find('li').removeClass('open');
            element.siblings('li').find('ul').slideUp(500,"swing");
        }
	}); 


    // drop down menu width overflow problem fix
    $('ul').parent().on('hover', function() {
        var menu = $(this).find("ul");
        var menupos = $(menu).offset();
        if (menupos.left + menu.width() > $(window).width()) {
            var newpos = -$(menu).width();
            menu.css({ left: newpos });    
        }
    });
    // Theme switcher
    $(document).ready(function(){
        $(".theme-switcher").click(function(){
        $(this).text(function(i, v){
        return v === 'light' ? 'dark' : 'light'
        });
        });
    });

    (function() {
    $('.theme-switcher').click(function() {
        $('#theme').toggleClass('dark');
    });
    })();

     // Scroll To Top 
    var scrollTop = $(".scrollToTop");
    $(window).on('scroll', function () {
        if ($(this).scrollTop() < 500) {
        scrollTop.removeClass("active");
        } else {
        scrollTop.addClass("active");
        }
    });
    
    //Click event to scroll to top
    $('.scrollToTop').on('click', function () {
        $('html, body').animate({
        scrollTop: 0
        }, 500);
        return false;
    });

    // lightcase activation//
	$('a[data-rel^=lightcase]').lightcase();
	$(window).on('load', function(){
		$('.preloader').fadeOut(1000);
	})

    //creating a style object for the ripple effect
    function RippleStyle(width, height, posX, posY){
        this.width = ( width <= height ) ? height : width;
        this.height = ( width <= height ) ? height : width;
        this.top = posY - (this.height * 0.5);
        this.left = posX - (this.width * 0.5);
    }
    $('.btn').on('mousedown', function(e){
        //appending an element with a class name "btn-ripple"
        var rippleEl = $('<span class="btn-ripple"></span>').appendTo(this);

        //getting the button's offset position
        var pos = $(this).offset();

        //get the button's width and height
        var width = $(this).outerWidth();
        var height = $(this).outerHeight();

        //get the cursor's x and y position within the button
        var posX = e.pageX - pos.left;
        var posY = e.pageY - pos.top;

        //adding a css style to the ripple effect
        var rippleStyle = new RippleStyle(width, height, posX, posY);
        rippleEl.css(rippleStyle);
    });

    //this event listener will be triggered once the ripple animation is done
    $('.btn').on('animationend webkitAnimationEnd oanimationend MSAnimationEnd', '.btn-ripple', function(){
        $(this).remove();
    });

    /* Menu click event */
    $(document).ready(function() {
        $(".menu-link").click(function(e) {
        if($(this).hasClass("open")) {
            // if it's open then just close it
            $(this).removeClass("open");
        } else {
            // if it's closed, then close everything else and open it
            $(".menu-link").removeClass("open");
            $(this).addClass("open");
        }
        /* TODO: now do something similar with icon-arrow */
        });
    });

    // wow animation
    new WOW().init();
    // if ($(window).width() <= 991){ 
    //     $(".wow").removeClass("wow");
    // }


})(jQuery);
