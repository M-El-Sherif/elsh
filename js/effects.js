var zj = jQuery.noConflict();
zj(document).ready(function() {
	
	zj(document).pngFix();
	
	zj("#iphone").animate({ 
        left: "0px"
      }, 600 );
      var zi = jQuery.noConflict();
zj(document).ready(function() {
	
	zi(document).pngFix();
	
	zi("#iphone").animate({ 
        left: "0px"
      }, 600 );
      
    zi("li.switch1").hover(function(){
    	zi("#switcher #pill").stop(true, true);
		zi("#switcher #pill").animate( { left: "2px" }, 250);
		zi(".scroll").animate( { left: "0px" }, 350);
		zi("#steps li.step1").fadeIn("slow");
		zi("#steps li.step2").fadeOut("fast");
		zi("#steps li.step3").fadeOut("fast");
		zi("#steps li.step4").fadeOut("fast");
	},
		function(){zi(this).addClass("done");
	});

	zi("li.switch2").hover(function(){
		zi("#switcher #pill").stop(true, true);
		zi("#switcher #pill").animate( { left: "92px" }, 250);
		zi(".scroll").animate( { left: "-225px" }, 350);
		zi("#steps li.step1").fadeOut("fast");
		zi("#steps li.step2").fadeIn("slow");
		zi("#steps li.step3").fadeOut("fast");
		zi("#steps li.step4").fadeOut("fast");
	},
		function(){zi(this).addClass("done");
	});
	
	zi("li.switch3").hover(function(){
		zi("#switcher #pill").stop(true, true);
		zi("#switcher #pill").animate( { left: "184px" }, 250);
		zi(".scroll").animate( { left: "-450px" }, 350);
		zi("#steps li.step1").fadeOut("fast");
		zi("#steps li.step2").fadeOut("fast");
		zi("#steps li.step3").fadeIn("slow");
		zi("#steps li.step4").fadeOut("fast");
	},
		function(){zi(this).addClass("done");
	});
	
	zi("li.switch4").hover(function(){
		zi("#switcher #pill").stop(true, true);
		zi("#switcher #pill").animate( { left: "274px" }, 250);
		zi(".scroll").animate( { left: "-675px" }, 350);
		zi("#steps li.step1").fadeOut("fast");
		zi("#steps li.step2").fadeOut("fast");
		zi("#steps li.step3").fadeOut("fast");
		zi("#steps li.step4").fadeIn("slow");
	},
		function(){zi(this).addClass("done");
	});
	
	zi('#screenshots a#one').fancyZoom({directory: '/images/'});
	zi('#screenshots a#two').fancyZoom({directory: '/images/'});
	zi('#screenshots a#three').fancyZoom({directory: '/images/'});
	zi('#screenshots a#four').fancyZoom({directory: '/images/'});
	
	zi("input.sign-name").focus(function(){
		if ( zi(this).val() == "Enter your name")
        zi(this).val('');
	});
	zi("input.sign-name").blur(function(){
		if ( zi(this).val() == "")
		zi(this).val('Enter your name');
	});
	
	zi("input.sign-email").focus(function(){
		if ( zi(this).val() == "Enter your email address")
        zi(this).val('');
	});
	zi("input.sign-email").blur(function(){
		if ( zi(this).val() == "")
		zi(this).val('Enter your email address');
	});
	
	zi("#head span a").hover(function(){
		zi(this).children().stop(true, true);
    	zi(this).children().fadeIn("fast");
	},
		function(){zi(this).children().fadeOut("fast");
	});
	
	zi("#head strong").hover(function(){
		zi(this).stop(true, true);
    	zi(this).fadeTo("fast", 0.8);
	},
		function(){zi(this).fadeTo("fast", 1.0);
	});
	
	zi("#head h1 a").hover(function(){
		zi(this).children().stop(true, true);
    	zi(this).children().fadeIn("fast");
	},
		function(){zi(this).children().fadeOut("fast");
	});
	
	/*zi('#screenshots a#one').hover(function(){
			zi("#screenshots img").stop(true, true);
			zi('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			zi('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	zi('#screenshots a#two').hover(function(){
			zi("#screenshots img").stop(true, true);
			zi('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			zi('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	zi('#screenshots a#three').hover(function(){
			zi("#screenshots img").stop(true, true);		
			zi('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			zi('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	zi('#screenshots a#four').hover(function(){
			zi("#screenshots img").stop(true, true);
			zi('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("fast", 0.4);
		},
		function(){
			zi('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("slow", 1.0);
		}
	);*/
	
});


    zj("li.switch1").hover(function(){
    	$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "2px" }, 250);
		$(".scroll").animate( { left: "0px" }, 350);
		$("#steps li.step1").fadeIn("slow");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});

	$("li.switch2").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "92px" }, 250);
		$(".scroll").animate( { left: "-225px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeIn("slow");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});
	
	$("li.switch3").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "184px" }, 250);
		$(".scroll").animate( { left: "-450px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeIn("slow");
		$("#steps li.step4").fadeOut("fast");
	},
		function(){$(this).addClass("done");
	});
	
	$("li.switch4").hover(function(){
		$("#switcher #pill").stop(true, true);
		$("#switcher #pill").animate( { left: "274px" }, 250);
		$(".scroll").animate( { left: "-675px" }, 350);
		$("#steps li.step1").fadeOut("fast");
		$("#steps li.step2").fadeOut("fast");
		$("#steps li.step3").fadeOut("fast");
		$("#steps li.step4").fadeIn("slow");
	},
		function(){$(this).addClass("done");
	});
	
	$('#screenshots a#one').fancyZoom({directory: '/images/'});
	$('#screenshots a#two').fancyZoom({directory: '/images/'});
	$('#screenshots a#three').fancyZoom({directory: '/images/'});
	$('#screenshots a#four').fancyZoom({directory: '/images/'});
	
	$("input.sign-name").focus(function(){
		if ( $(this).val() == "Enter your name")
        $(this).val('');
	});
	$("input.sign-name").blur(function(){
		if ( $(this).val() == "")
		$(this).val('Enter your name');
	});
	
	$("input.sign-email").focus(function(){
		if ( $(this).val() == "Enter your email address")
        $(this).val('');
	});
	$("input.sign-email").blur(function(){
		if ( $(this).val() == "")
		$(this).val('Enter your email address');
	});
	
	$("#head span a").hover(function(){
		$(this).children().stop(true, true);
    	$(this).children().fadeIn("fast");
	},
		function(){$(this).children().fadeOut("fast");
	});
	
	$("#head strong").hover(function(){
		$(this).stop(true, true);
    	$(this).fadeTo("fast", 0.8);
	},
		function(){$(this).fadeTo("fast", 1.0);
	});
	
	$("#head h1 a").hover(function(){
		$(this).children().stop(true, true);
    	$(this).children().fadeIn("fast");
	},
		function(){$(this).children().fadeOut("fast");
	});
	
	/*$('#screenshots a#one').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#two img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#two').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#three img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#three').hover(function(){
			$("#screenshots img").stop(true, true);		
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#four img').fadeTo("slow", 1.0);
		}
	);
	
	$('#screenshots a#four').hover(function(){
			$("#screenshots img").stop(true, true);
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("fast", 0.4);
		},
		function(){
			$('#screenshots a#one img, #screenshots a#two img, #screenshots a#three img').fadeTo("slow", 1.0);
		}
	);*/
	
});

