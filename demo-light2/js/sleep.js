$.fn.sleep = function(options) {
  var settings = $.extend({
    childrens : "div"
  }, options);

  return this.each(function() {
		var elem = $(this).children(settings.childrens),
		lengh = elem.length,
		vh = 70,
		argsVh = [vh];
		elem.css("position", "relative");
		elem.css("display", "none");
		for(i = 0; i < lengh; i++){
			elem.eq(i).css("top", vh + "px");
			vh+= 20;
			argsVh.push(vh)
		}
		if(elem.hasClass("col-md-6")){
			elem.parent().css("display", "flex");
		}
		elem.fadeIn({queue: false, duration: 1000});
		for(i = 0; i < lengh; i++){
			elem.eq(i).animate(
			{
				top: "-="+ argsVh[i] +"px"
			}, 
			{
				duration: 800,
				queue: false,
				complete: function() {
					
				}
			});
		}
  });
}