var divs = $('#home,#input'),
    limit = 600;  /* scrolltop value when opacity should be 0 */
var hivs = $('#data,#content'),
    himit = 200;  /* scrolltop value when opacity should be 0 */
$(window).on('scroll', function() {
   var st = $(this).scrollTop();

   /* avoid unnecessary call to jQuery function */
   if (st <= limit) {
      divs.css({ 'opacity' : (1 - st/limit) });
   }
   if(himit <= st){
	  hivs.css({ 'opacity' : (1- (1 - st/limit)) });
   }
});