(function(){
  "use strict";
$(function ($) {
     var viewportHeight = $(window).height();
     $('#header, .realm-heading').css('height',viewportHeight);
     //PLEASE READ DOCUMENTATION FOR INFO ABOUT SETTING UP YOUR OWN TWITTER CREDENTIALS:
      $(function ($) {
          $('#ticker').tweet({
              modpath: './twitter/',
              count: 5,
              loading_text: 'loading twitter feed flame...',
              username:'designovastudio'
              /* etc... */
          });
        });	
    //Scrolling Trigger
    $(".scroll-link").click(function() {
        var ScrollOffset = $(this).attr('data-soffset');
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top-ScrollOffset + "px"
        }, {
            duration: 1500,
            easing: "swing"
        });
        return false;
    });
     //Nav highlight
    $('.page').mouseenter(function(){
        var sectionId = $(this).attr('id');
        $('.nav ul li > a').removeClass('active');
        $('#'+sectionId+'-linker').addClass('active');
    });
    //News Section - Click n Scroll
    $('.nav ul li a').click(function(){
				$('.nav ul li a').removeClass('active');
				$(this).addClass('active');
			});
$('a.news-scroll-link').live('click',function() {
				$('html, body').animate({
					scrollTop: $($(this).attr('href')).offset().top-20 + 'px'
				},{
					duration: 1000
				});
				return false;
			});
//News Plugin
var title = $(".news-img-section .imgs:first-child a").data('title');
		var newstitle = $(".news-img-section .imgs:first-child a").data('newstitle');
		var txt = $(".news-img-section .imgs:first-child a").data('txt');
		var txt_color = $(".news-img-section .imgs:first-child a").data('color');
		var bg_color = $(".news-img-section .imgs:first-child a").data('bgcolor');
		var img = $(".news-img-section .imgs:first-child a img").attr('src');
		var href = $(".news-img-section .imgs:first-child a").data('href');
		$(".news-main-space h1").html(title);
		$(".news-main-space h3").html(newstitle);
		$(".news-main-space p").html(txt);
		$(".news-main-space").css("color",txt_color);
		$(".news-main-space img").attr('src', img);
		$(".news-main-space .news-main-learn-more a").attr('href',href);
		$(".news-img-section .imgs a").click (function () {
			var title = $(this).data('title');
			var newstitle = $(this).data('newstitle');
			var txt = $(this).data('txt');
			var txt_color = $(this).data('color');
			var bg_color = $(this).data('bgcolor');
			var img = $(this).children('img').attr('src');
			var href = $(this).data('href');
			$(".news-main-space h1").html(title);
			$(".news-main-space h3").html(newstitle);
			$(".news-main-space p").html(txt);
			$(".news-main-space").css("color",txt_color);
			$(".news-main-space img").attr('src', img);
			$(".news-main-space .news-main-learn-more a").attr('href',href);
		});
//Bootstrap Carousel
$('.carousel').carousel({
    interval: 3000,
    pause: "none"
    });
//Lightbox for portfolio
$(".portfolio a[data-gal^='prettyPhoto']").prettyPhoto({
				theme:'light_square',
				autoplay_slideshow: false,
				overlay_gallery: false,
				show_title: true
			});
  var deviceAgent = navigator.userAgent.toLowerCase();
var isTouchDevice = Modernizr.touch ||
(deviceAgent.match(/(iphone|ipod|ipad)/) ||
  deviceAgent.match(/(android)/) ||
  deviceAgent.match(/(iemobile)/) ||
  deviceAgent.match(/iphone/i) ||
  deviceAgent.match(/ipad/i) ||
  deviceAgent.match(/ipod/i) ||
  deviceAgent.match(/blackberry/i) ||
  deviceAgent.match(/bada/i));
if (isTouchDevice) {
  $('.portfolio .element').click(function(){
    $('.portfolio-visibility').css('visibility', 'hidden');
    $('.element-image img').removeClass('element-onhover');
    $(this).find('.element-image img').addClass('element-onhover');
    $(this).children('.portfolio-visibility').css('visibility', 'visible');
  });
  //Portfolio Filter On Click
  $('.inner-link').find('a').click(function(){
    $('.inner-link').find('a').removeClass('.selected');
    $(this).addClass('.selected');
    $('.portfolio-visibility').css('visibility', 'hidden');
    $('.element-image img').removeClass('element-onhover');
  });
}
else {
  $('.portfolio .element').mouseenter(function(){
    $('.portfolio-visibility').css('visibility', 'hidden');
    $('.element-image img').removeClass('element-onhover');
    $(this).find('.element-image img').addClass('element-onhover');
    $(this).children('.portfolio-visibility').css('visibility', 'visible');
  });
  $('.portfolio .element').mouseleave(function(){
    $('.element-image img').removeClass('element-onhover');
    $(this).children('.portfolio-visibility').css('visibility', 'hidden');
  });
  //Portfolio Filter On Click
$('.inner-link').find('a').click(function(){
        $('.inner-link').find('a').removeClass('.selected');
        $(this).addClass('.selected');
      });
}
});
$('#reservation_submit').click(function(){
        var date=$("#popupDatepicker").val();
        var time=$("#time").val();
        var partysize=$("#partysize").val();
        if(!date) {
            alert('select the date');
            $("#popupDatepicker").focus();
            return false;
        }
        if(!time) {
            alert('select the time');
            $("#time").focus();
            return false;
        }
        var reserve = 'date=' + date + '&time=' + time + '&partysize='+ partysize;
        $.ajax({
            type: "POST",
            url: "ajax.php",
            data: reserve,
            success: function(data) {
                if(data) {
                    $("#reservation").attr("style", "display:block");
                    $("#success").attr("style", "display:block");
                    $("#table-heading").attr("style", "display:none");
                    $("#popupDatepicker").val('');
                    $("#time").val('');
                    $("#partysize").val('');
                } else {
                    alert('Table was booked already please choose another date and time.');
                    $("#reservation").attr("style", "display:block");
                    $("#success").attr("style", "display:none");
                    $("#failure").attr("style", "display:none");
                    $("#table-heading").attr("style", "display:block");
                    $("#popupDatepicker").val('');
                    $("#time").val('');
                    $("#partysize").val('');
                }
            }
        });
        return false;
    });
    $('.goto_form').click(function(){
        $("#reservation").attr("style", "display:block");
        $("#success").attr("style", "display:none");
        $("#failure").attr("style", "display:none");
        $("#reservation").trigger("reset");
    });
})();
