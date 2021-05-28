var $card=$('.card');
var $cardTitle=$('.card-title');
var $cardSubtitle=$('.card-subtitle');
var currentMousePos={x:0,y:0};
var mouseFromCenter={x:0,y:0};

$(document).mousemove(function(event){

	var wHeight = $(window).height();
	var wWidth = $(window).width();

	currentMousePos.x=event.pageX;
	currentMousePos.y=event.pageY;
	mouseFromCenter.x=currentMousePos.x - (wWidth/2);
	mouseFromCenter.y = currentMousePos.y - (wHeight/2);
	var around1= -1 * (currentMousePos.y * 100 / wHeight * 0.2 - 10) + 'deg';
	var around2 = 1 * (currentMousePos.x * 100 /wWidth*0.2 - 10) + 'deg';
	var trans1 = (currentMousePos.x * 100 / wHeight * 0.3) + 'px';
	var trans2 = (currentMousePos.y * 100 / wHeight * 0.3) + 'px';
	var dy = event.pageY - wHeight/2;
	var dx = event.pageX - wWidth/2;
	var theta = Math.atan2(dy,dx);
	var angle = theta * 180 / Math.PI - 90;
	var mousePositionX = (currentMousePos.x / wWidth) * 100;
	var mousePositionY = 50 + (currentMousePos.y / wHeight) * 10;

	$card.css({
		"-webkit-transform":"translate3d(" + trans1 + ", " + trans2 +", 0) scale(1) rotatex(" + around1 + ") rotatey(" + around2 + ")",
		"background-position" : mousePositionX + '%' + (currentMousePos.y / wHeight)* 50 + '%'  
	});
	$cardTitle.css({
		"transform":"translateX(" + ((mouseFromCenter.x /25) * 0.7) + "px) translateY(" + ((mouseFromCenter.y /25) * 1.65) + "px)"

	});
	$cardSubtitle.css({
		"transform":"translateX(" + ((mouseFromCenter.x /25) * 0.5) + "px) translateY(" + ((mouseFromCenter.y /25) * 1.15) + "px)"

	});

})