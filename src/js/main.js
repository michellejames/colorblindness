console.log("Mic check, 1,2, 1,2");

$(function (){

	var preloadables = [
		"assets/img/HomePage/HeroGlasses.png",
		"assets/img/HomePage/HeroGlassesDUE.png",
		"assets/img/HomePage/HeroGlassesPRO.png",
		"assets/img/HomePage/HeroGlassesTRI.png",
		"assets/img/HomePage/DrawnEyePicture.png",
		"assets/img/HomePage/ColorPalette.png",
		"assets/img/HomePage/ColorPaletteDUE.png",
		"assets/img/HomePage/ColorPalettePRO.png",
		"assets/img/HomePage/ColorPaletteTRI.png",
		"assets/img/HomePage/RainReflect.png",
		"assets/img/HomePage/RainReflectDUE.png",
		"assets/img/HomePage/RainReflectPRO.png",
		"assets/img/HomePage/RainReflectTRI.png",
		"assets/img/Footer/FooterImage.png",
		"assets/img/Footer/FooterImageDUE.png",
		"assets/img/Footer/FooterImagePRO.png",
		"assets/img/Footer/FooterImageTRI.png",

		"assets/img/HomePage/Hero2.png",
		"assets/img/HomePage/Hero2DUE.png",
		"assets/img/HomePage/Hero2PRO.png",
		"assets/img/HomePage/Hero2TRI.png",
		"assets/img/DesignPage/textoverimageNORMAL.png",
		"assets/img/DesignPage/textoverimageDUE.png",
		"assets/img/DesignPage/textoverimagePRO.png",
		"assets/img/DesignPage/textoverimageTRI.png",
		"assets/img/DesignPage/textwarningnewcolorDEU.png",
		"assets/img/DesignPage/textwarningnewcolorPRO.png",
		"assets/img/DesignPage/textwarningnewcolorTRI.png",
		"assets/img/DesignPage/textwarningnewcolor2DEU.png",
		"assets/img/DesignPage/textwarningnewcolor2PRO.png",
		"assets/img/DesignPage/textwarningnewcolor2TRI.png",
		"assets/img/DesignPage/Assets/Textwarning1.png",
		"assets/img/DesignPage/Assets/Textwarning2.png",
		"assets/img/DesignPage/Facebookblue.png",
		"assets/img/DesignPage/FacebookblueDUE.png",
		"assets/img/DesignPage/FacebookbluePRO.png",
		"assets/img/DesignPage/FacebookblueTRI.png",
		"assets/img/DesignPage/FacebookLoginScreen.png",
		"assets/img/DesignPage/FacebookLoginScreenDUE.png",
		"assets/img/DesignPage/FacebookLoginScreenPRO.png",
		"assets/img/DesignPage/FacebookLoginScreenTRI.png",

		"assets/img/ResourcesPage/ResourceHeaderNormal.png",
		"assets/img/ResourcesPage/ResourceHeaderDEU.png",
		"assets/img/ResourcesPage/ResourceHeaderPRO.png",
		"assets/img/ResourcesPage/ResourceHeaderTRI.png",
		"assets/img/ResourcesPage/AppsHelpfulTipsNormal.png",
		"assets/img/ResourcesPage/AppsHelpfulTipsDEU.png",
		"assets/img/ResourcesPage/AppsHelpfulTipsPRO.png",
		"assets/img/ResourcesPage/AppsHelpfulTipsTRI.png",
		"assets/img/ResourcesPage/BestPracticesNormal.png",
		"assets/img/ResourcesPage/BestPracticesDEU.png",
		"assets/img/ResourcesPage/BestPracticesPRO.png",
		"assets/img/ResourcesPage/BestPracticesTRI.png",
		"assets/img/ResourcesPage/colortestNormal.png",
		"assets/img/ResourcesPage/colortestDEU.png",
		"assets/img/ResourcesPage/colortestPRO.png",
		"assets/img/ResourcesPage/colortestTRI.png",
		"assets/img/ResourcesPage/DayInTheLifeNormal.png",
		"assets/img/ResourcesPage/DayInTheLifeDEU.png",
		"assets/img/ResourcesPage/DayInTheLifePRO.png",
		"assets/img/ResourcesPage/DayInTheLifeTRI.png",
	];

	var preloadingImage;

	var preloadHolder = document.createElement("div");
	preloadHolder.className = "preload-holder";
	document.body.appendChild(preloadHolder);

	for (var i = 0; i < preloadables.length; i++) {
		preloadingImage = new Image();
		preloadingImage.src = preloadables[i];
		preloadHolder.appendChild(preloadingImage);
	}

	$(".slider__dot, .slider__dot2, .details__circle").click(function (e) {
		e.preventDefault();
	});

	$(".slider__dotNORMAL, .details__circleNORMAL").click(function () {
		$("body").removeClass();
		$(".slider__dotDUE, .slider__dotPRO, .slider__dotTRI").removeClass("active");
		$(".details__circleDUE, .details__circlePRO, .details__circleTRI").removeClass("active");
		$(this).fadeIn("slow").addClass("normal, active");
		$(".slider__paragraph, .slider__paragraph2").text("normal vision");

    });

	$(".slider__dotDUE, .details__circleDUE").click(function () {
		$(".slider__dotNORMAL, .slider__dotPRO, .slider__dotTRI").removeClass("active");
		$(".details__circleNORMAL, .details__circlePRO, .details__circleTRI").removeClass("active");
		$("body").removeClass();
		$("body").fadeIn("slow").addClass("due");
		$(this).addClass("active");
		$(".slider__paragraph, .slider__paragraph2").text("deuteronopia vision");
    });

	$(".slider__dotPRO, .details__circlePRO").click(function () {
		$(".slider__dotNORMAL, .slider__dotDUE, .slider__dotTRI").removeClass("active");
		$(".details__circleNORMAL, .details__circleDUE, .details__circleTRI").removeClass("active");
		$("body").removeClass();
		$("body").fadeIn("slow").addClass("pro");
		$(this).addClass("active");
		$(".slider__paragraph, .slider__paragraph2").text("protanopia vision");
    });

	$(".slider__dotTRI, .details__circleTRI").click(function () {
		$(".slider__dotNORMAL, .slider__dotPRO, .slider__dotDUE").removeClass("active");
		$(".details__circleNORMAL, .details__circlePRO, .details__circleDUE").removeClass("active");
		$("body").removeClass();
		$("body").fadeIn("slow").addClass("tri");
		$(this).addClass("active");
		$(".slider__paragraph, .slider__paragraph2").text("tritanopia vision");
    });

	$(".hamburger").click(function (event) {
		event.preventDefault();
	    TweenMax.fromTo(".mobilenav", 0.5, {left: "-40%"}, {left: "0%"});
    });

	$(".hamburgerOut").click(function (event) {
		event.preventDefault();
	    TweenMax.fromTo(".mobilenav", 0.5, {left: "0%"}, {left: "-40%"});
    });

	var waypoints = $('#stickynav').waypoint(function(direction) {
	  if (direction === "up") {
		$(".stickynav").removeClass("fixed");
		$(".stickynav-replacement").removeClass("show");
	  } else {
	  	$(".stickynav").addClass("fixed");
		$(".stickynav-replacement").addClass("show");
	  }
	}, {
	  offset: '0%'
	});
});

//////// HOME ////////


$(".fourPointFive").waypoint(function () {
		TweenMax.to(".fourPointFive__text_large", 1.5,{left:"50%", opacity:"1"});

}, {
	offset: '60%'
})






