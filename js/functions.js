// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');

// Add .osx class to html if on Os/x
if ( navigator.appVersion.indexOf("Mac")!=-1 ) 
	jQuery('html').addClass('osx');

// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";
               
/* --------------------------------------------------------	
	 External Links
   --------------------------------------------------------	*/	

	  $(window).load(function() {
			$('a[rel=external]').attr('target','_blank');	
		});

/* --------------------------------------------------------	
	 Tooltips
   --------------------------------------------------------	*/	

    $('body').tooltip({
        delay: { show: 300, hide: 0 },
        selector: '[data-toggle=tooltip]:not([disabled])'
    });
    
/* --------------------------------------------------------	
	 Inc Dec
   --------------------------------------------------------	*/	
    
    $(function() {
      $(".inc").click(function() { var $button = $(this); var old = $button.parent().find("input").val(); var newVal = parseFloat(old) + 1; $button.parent().find("input").val(newVal); }); 
      
      $(".dec").click(function() { var $button = $(this); var old = $button.parent().find("input").val(); var newVal = parseFloat(old) - 1; $button.parent().find("input").val(newVal); }); 
    }); 
    
    $('.navbar').sticky({topSpacing:0});
/* --------------------------------------------------------	
	 Back To Top Button
   --------------------------------------------------------	*/	

  // hide #back-top first
	$(".back-to-top").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 500) {
				$('.back-to-top').fadeIn(500);
			} else {
				$('.back-to-top').fadeOut(500);
			}
		});

	  // scroll body to 0px on click
		$('.back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});
	});

/* --------------------------------------------------------	
	 Magnific Popup
   --------------------------------------------------------	*/

    $('.image-link').magnificPopup({type:'image'});

  	$('.popup-gallery').magnificPopup({
  		delegate: 'a',
  		type: 'image',
  		tLoading: 'Loading image #%curr%...',
  		mainClass: 'mfp-img-mobile',
  		gallery: {
  			enabled: true,
  			navigateByImgClick: false,
  			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
  		},
  		image: {
  			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  			titleSrc: function(item) {
  				return item.el.attr('title') + '<small>Broadcom.com | Gallery </small>';
  			}
  		}
  	});


  
  
 
 
    
/* --------------------------------------------------------	
	 Refine Slider
   --------------------------------------------------------	*/	
  $(document).ready(function() {
           $('.client--quotes').css("display","block");
           $('.client--quotes').cycle({ 
              fx:     'scrollDown', 
              random:  1 
              });
           $('#fade').cycle();

        });
    
});

/* --------------------------------------------------------	
	 Dynamic Progress Bar
   --------------------------------------------------------	*/

    $(window).load(function(){    
      $('.progress-bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
    });





    