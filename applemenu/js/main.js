$(function(){



	$(".search-ios7 input").focus(function(){
		$(".nav-ios7").css("width", "830px");
			$(".search-ios7").addClass("ios7-focus");
				$(".search-ios7 input").css("color", "#000");
	});
		$(".search-ios7 input").blur(function(){
			$(".nav-ios7").css("width", "900px");
				$(".search-ios7").removeClass("ios7-focus")
					$(".search-ios7 input").css("color", "#4e6dfe");
			
		});
			$(".search-ios7 input").on("keypress", function(){
				if ($(this).val().length > 0){
					$(".suggest-ios7").css("display", "block");
				}
				else{
					$(".suggest-ios7").css("display", "none");
				}
			});
			$(".search-ios7 input").on("focus", function(){
				if ($(this).val().length > 0){
					$(".suggest-ios7").css("display", "block");
				}
				else{
					$(".suggest-ios7").css("display", "none");
				}
			});
				$(".search-ios7 input").on("blur", function(){
					$(".suggest-ios7").css("display", "none");
				});

	$(".block a").click(function(e){
		e.preventDefault();
	});


});
