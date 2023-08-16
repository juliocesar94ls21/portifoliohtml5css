$(window).load(function(){
	 $(".box-load").animate(
	 {
		height: "+=100vh"
	}, 
	{
		duration: 1200,
		complete: function() {
			$(this).animate(
			{
				width: "+=100vw"
			}, 
			{
				duration: 400,
				complete: function() {
					$('.preloader').fadeOut();
					$(".whapper-left, .whapper-center, .tab-home").fadeIn();
					$(".content-iconics").sleep({childrens: "div"});
					setTimeout(function(){ $(".about-home-desc").sleep({childrens: ".entry-desc"}) }, 100);
					$(".img-center-boot").fadeIn(1000);
				}
			});
		}
	});
});

$(document).ready(function(){
	var bloqued = 0;
	
	resizedWindow();
	$(window).resize(resizedWindow);
	var closedItem = false;
	$(".icons-close-whapper").on("click", function(){
		var htmlIMenu = '<i class="fa-solid fa-bars"></i>',
		    htmlIClose = '<i class="fa-solid fa-circle-xmark"></i>';
		if(closedItem == false){
			closedItem = true;
			$(this).html(htmlIMenu);
		}
		else{
			closedItem = false;
			$(this).html(htmlIClose);
		}
		$( ".whapper-left" ).toggle( "slide" );
	});
	
	$(".nav-tab ul li").each(function(){
		var elem = $(this).children(".title-nav-tab");
		elem.css("left", elem.outerWidth() * -1);
	});

	if(!isMobile()){
		$(".nav-tab ul li").hover(function() {
			if(!$(this).hasClass("active")){
				$(this).children(".title-nav-tab").toggle( "slide" );
			}
		  });
	}
	
	$(".content-icon-pagine-test .fa-circle-chevron-right").on("click", function(){
		if(isMobile()){
			paginateNextMobile("next");
		}
		else{
			paginteTest("next");
		}
	});
	$(".content-icon-pagine-test .fa-circle-chevron-left").on("click", function(){
		if(isMobile()){
			paginatePrevMobile("prev");
		}
		else{
			paginteTest("prev");
		}
	});
	
	var windowHeight = $(window).outerHeight();
	
	if(windowHeight < 600){
		$(".whapper-left .content-list-social-icons").css("display","none");
	}
	
	$(".content-icon-pagine-clients .fa-circle-chevron-right").on("click", function(){
		paginteClients("next");
	});
	$(".content-icon-pagine-clients .fa-circle-chevron-left").on("click", function(){
		paginteClients("prev");
	});
	
	$(".icons-close-portiflio-popup").on("click", function(){
		$(".popup-fullscreen").fadeOut();
	});
	
	$(".content-projects .row .col-md-4").on("click", function(){
		$(".popup-fullscreen").fadeIn();
	});
	
	$(".btn-action-home .button-primarys").eq(0).on("click", function(){
		$(".tab-active").removeClass("tab-active").hide("fold" );
		$(".tab-about").addClass("tab-active").show( "fold" );
		$(".nav-tab ul li.active").removeClass("active");
		$(".nav-tab ul li").eq(1).addClass("active");
	});
	
	$(".btn-action-home .button-primarys").eq(1).on("click", function(){
		$(".tab-active").removeClass("tab-active").hide("fold" );
		$(".tab-contact").addClass("tab-active").show( "fold" );
		$(".nav-tab ul li.active").removeClass("active");
		$(".nav-tab ul li").eq(5).addClass("active");
	});

	$("#tb-home, #tb-about, #tb-about, #tb-expr, #tb-portifolio, #tb-blog, #tb-contact").on("click", function(){
		var linkElem = $(this).attr("href").replace("#", "");	
		$(".tab-active").removeClass("tab-active").hide("fold" );
		$("." + linkElem).addClass("tab-active").show( "fold" );
		$(".nav-tab ul li.active").removeClass("active");
		$(this).parent("li").addClass("active");
		$(this).siblings(".title-nav-tab").css("display", "none");
		$('html, body').animate({ scrollTop: 0 }, 1);
	});
	
	$(".nav-portifolio-tab ul li").on("click", function(){
		var index = $(this).index();
		$(".nav-portifolio-tab ul li.active").removeClass("active");
		$(this).addClass("active");
		$(".content-project-active").removeClass("content-project-active").hide("fold" );
		$(".content-projects").eq(index).addClass("content-project-active").show( "fold" );
	});
	
	var elemImpar = false,
	elemLengh = $(".whapper-testimonial-itens .tst-content").length - 1;
	
	function paginateTestMobile(direction){
		var elem = $(".whapper-testimonial-itens .tst-active .item-tst-active"),
		lenghAtual = $(".whapper-testimonial-itens .tst-active").index();
		
		if(!isLast()){
			if(direction == "next" && elemImpar == false){
				paginateNextCol6();
				elemImpar = true;
			}
			else{
				paginateNextCol10();
				elemImpar = false; 
			}
		}
		function isLast(){
			if(lenghAtual >= elemLengh && elemImpar == true){
				return true;
			}
			else{
				return false;
			}
		}
		
		function paginateNextCol6(){
			elem.removeClass("item-tst-active").fadeOut("fast", function(){
				$(this).next().addClass("item-tst-active").fadeIn();
			})
		}
		function paginateNextCol10(){
			elem.fadeOut("fast", function(){
				$(this).removeClass("item-tst-active").parent(".tst-active").removeClass("tst-active").addClass("tst-disable").next().addClass("tst-active").removeClass("tst-disable").children(".tst-content-item").eq(0).addClass("item-tst-active").fadeIn();
			});
		}
		function paginatePrevCol6(){
			elem.removeClass("item-tst-active").fadeOut("fast", function(){
				$(this).prev().addClass("item-tst-active").fadeIn();
			})
		}
		function paginatePrevCol10(){
			elem.fadeOut().removeClass("item-tst-active").parent(".tst-active").removeClass("tst-active").addClass("tst-disable").prev().addClass("tst-active").removeClass("tst-disable").children(".tst-content-item").eq(1).addClass("item-tst-active").fadeIn();
		}

	}
	
	function paginatePrevMobile(direction){
		var elem = $(".whapper-testimonial-itens .tst-active .item-tst-active"),
		lenghAtual = $(".whapper-testimonial-itens .tst-active").index(),
		index = elem.index();
		
		if(!isFirst()){
			if(index == 1){
				paginatePrevCol6();
			}
			else{
				paginatePrevCol10();
			}
		}
		function isFirst(){
			if(lenghAtual == 0 && index == 0){
				return true;
			}
			else{
				return false;
			}
		}
		
		function paginatePrevCol6(){
			elem.removeClass("item-tst-active").fadeOut("fast", function(){
				$(this).prev().addClass("item-tst-active").fadeIn();
			})
		}
		function paginatePrevCol10(){
			elem.fadeOut().removeClass("item-tst-active").parent(".tst-active").removeClass("tst-active").addClass("tst-disable").prev().addClass("tst-active").removeClass("tst-disable").children(".tst-content-item").eq(1).addClass("item-tst-active").fadeIn();
		}
	}
	
	function paginateNextMobile(direction){
		var elem = $(".whapper-testimonial-itens .tst-active .item-tst-active"),
		lenghAtual = $(".whapper-testimonial-itens .tst-active").index();
		
		if(!isLast()){
			if(direction == "next" && elemImpar == false){
				paginateNextCol6();
				elemImpar = true;
			}
			else{
				paginateNextCol10();
				elemImpar = false; 
			}
		}
		function isLast(){
			if(lenghAtual >= elemLengh && elemImpar == true){
				return true;
			}
			else{
				return false;
			}
		}
		
		function paginateNextCol6(){
			elem.removeClass("item-tst-active").fadeOut("fast", function(){
				$(this).next().addClass("item-tst-active").fadeIn();
			})
		}
		function paginateNextCol10(){
			elem.fadeOut("fast", function(){
				$(this).removeClass("item-tst-active").parent(".tst-active").removeClass("tst-active").addClass("tst-disable").next().addClass("tst-active").removeClass("tst-disable").children(".tst-content-item").eq(0).addClass("item-tst-active").fadeIn();
			});
		}
	}
	
	function paginteClients(direction){
		var elem = $(".content-clients-logo .client-logo");
		elemSize = elem.outerWidth(),
		direct = direction == "next" ? "+" : "-",
		elemOffsetTop = elem.eq(0).offset().left,
		elensLenght = elem.length,
		bloqued = direction == "prev" ? bloqued + 1 : bloqued - 1;
		if(direction == "next" && bloqued < 0){
			bloqued = 0;
		}
		if(isMobile()){
			if(direction == "prev" && bloqued > elensLenght){
				bloqued-= 1;
			}
		}
		else{
			if(direction == "prev" && bloqued > (elensLenght - 2)){
				bloqued-= 1;
			}
		}
		if(isMobile()){
			if(bloqued > 0 && bloqued < elensLenght){
				elem.animate({
					left: direct + "=" + elemSize + "px",
				 }, 500);
			}
		}
		else{
			if(bloqued > 0 && bloqued < (elensLenght - 2)){
				elem.animate({
					left: direct + "=" + elemSize + "px",
				 }, 500);
			}
		}
	}
});

function paginteTest(direction){
	$(".whapper-testimonial-itens .tst-active").fadeOut("fast", function(){
		var index = $(this).index(),
		leng = $(".whapper-testimonial-itens .tst-content").length;
		$(this).removeClass("tst-active").addClass("tst-disable");
		if(direction == "next"){
			if(leng == index + 1){
				$(".whapper-testimonial-itens .tst-content").first().removeClass("tst-disable").addClass("tst-active").fadeIn();
			}
			else{
				paginateNext($(this));
			}
		}
		if(direction == "prev"){
			if(index == 0){
				$(".whapper-testimonial-itens .tst-content").first().removeClass("tst-disable").addClass("tst-active").fadeIn();
			}
			paginatePrev($(this));
		}
	});
	
	function paginateNext(elem){
		elem.next().removeClass("tst-disable").addClass("tst-active").fadeIn();
	}
	function paginatePrev(elem){
		elem.prev().removeClass("tst-disable").addClass("tst-active").fadeIn();
	}
}

function resizedWindow(){
	var SomeDivMargin = $(".whapper-left").css("width"),
	widthWindow = $(window).outerWidth(),
	widthNavRight = $(".whapper-right").width(),
	widthWhaperLeft = $(".whapper-left").outerWidth();
	if(!isMobile()){
		$(".whapper-center").css("margin-left", SomeDivMargin).width(widthWindow - widthWhaperLeft - widthNavRight); 
	}
	else{
		$(".whapper-center").css("padding-left", "60px").width(widthWindow - widthNavRight);
	}
} 
function isMobile(){
	return $(window).outerWidth() < 768;
}