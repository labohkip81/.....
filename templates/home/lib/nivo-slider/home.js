(function ($) {
 "use strict";
    
    //---------------------------------------------
    //Nivo slider
    //---------------------------------------------
    $('#nivoslider').nivoSlider({
        effect: 'fade',
        slices: 15,
        boxCols: 10,
        boxRows: 10,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
		prevText:'<i class="arr-left"></i>',
		nextText:'<i class="arr-right"></i>',
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
		afterChange: function(){
			$(document).ready(function(){
				$("#txtshow1").hide();
				$("#txtshow2").hide();
				$("#txtshow3").hide();
				$("#txtshow4").hide();
				$("#txtshow5").hide();

			});
		},
		afterLoad: function(){
			$(document).ready(function(){
				$("#txtshow1").hide();
				$("#txtshow2").hide();
				$("#txtshow3").hide();
				$("#txtshow4").hide();
				$("#txtshow5").hide();

			});
		}
    });
	 $('#nivoslider2').nivoSlider({
        effect: 'fade',
        slices: 15,
        boxCols: 10,
        boxRows: 10,
        animSpeed: 500,
        pauseTime: 5000,
        startSlide: 0,
        directionNav: true,
		prevText:'<i class="arr-left"></i>',
		nextText:'<i class="arr-right"></i>',
        controlNavThumbs: false,
        pauseOnHover: true,
        manualAdvance: false,
		afterChange: function(){
			$(document).ready(function(){
				$("#txtshow1").hide();
				$("#txtshow2").hide();
				$("#txtshow3").hide();
				$("#txtshow4").hide();
				$("#txtshow5").hide();

			});
		}
    });
})(jQuery); 