$(document).ready(function() {

var ctx = $("#myChart").get(0).getContext("2d");

var gradientred = ctx.createLinearGradient(0, 0, 0, 400);
gradientred.addColorStop(0, 'rgba(242, 68, 114, 0.4)');
gradientred.addColorStop(1, 'rgba(245, 105, 142, 0.2)');

var gradientpurple = ctx.createLinearGradient(0, 0, 0, 400);
gradientpurple.addColorStop(0, 'rgba(82, 55, 140, 0.4)');
gradientpurple.addColorStop(1, 'rgba(117, 95, 163, 0.2)');

var gradientgreen = ctx.createLinearGradient(0, 0, 0, 400);
gradientgreen.addColorStop(0, 'rgba(21, 191, 191, 0.4)');
gradientgreen.addColorStop(1, 'rgba(68, 204, 204, 0.2)');

var gradientyellow = ctx.createLinearGradient(0, 0, 0, 400);
gradientyellow.addColorStop(0, 'rgba(242, 230, 53, 0.4)');
gradientyellow.addColorStop(1, 'rgba(245, 235, 93, 0.2)');

var gradientorange = ctx.createLinearGradient(0, 0, 0, 400);
gradientorange.addColorStop(0, 'rgba(242, 129, 29, 0.4)');
gradientorange.addColorStop(1, 'rgba(245, 154, 74, 0.2)');

var data = {
	labels : ["02:00","04:00","06:00","08:00","10:00","12:00","14:00","16:00","18:00","20:00","22:00","00:00"],
	datasets: [
	{
	fillColor : gradientred,
	strokeColor : "rgba(242, 68, 114, 0.8)",
	pointColor : "rgba(242, 68, 114, 1)",
	pointStrokeColor : "rgba(245, 105, 142, 1)",
	data : [15.0,22.4,22.2,22.4,44.2,32.0,13.2,14.1,30.0,8.4,9.1,7.4]
	},
	{
	fillColor : gradientpurple,
	strokeColor : "rgba(82, 55, 140, 0.8)",
	pointColor : "rgba(82, 55, 140, 1)",
	pointStrokeColor : "rgba(117, 95, 163, 1)",
	data : [25.0,32.4,22.2,89.4,34.2,22.0,23.2,24.1,20.0,18.4,19.1,17.4]
	},
	{
	fillColor : gradientgreen,
	strokeColor : "rgba(21, 191, 191, 0.8)",
	pointColor : "rgba(21, 191, 191, 1)",
	pointStrokeColor : "rgba(68, 204, 204, 1)",
	data : [5.0,2.4,2.2,2.4,4.2,2.0,3.2,4.1,3.0,8.4,9.1,7.4]
	},
	{
	fillColor : gradientyellow,
	strokeColor : "rgba(242, 230, 53, 0.8)",
	pointColor : "rgba(242, 230, 53, 1)",
	pointStrokeColor : "rgba(245, 235, 93, 1)",
	data : [20.0,30.4,20.2,20.4,30.2,20.0,20.2,20.1,10.0,10.4,10.1,10.4]
	},
	{
	fillColor : gradientorange,
	strokeColor : "rgba(242, 129, 29, 0.8)",
	pointColor : "rgba(242, 129, 29, 1)",
	pointStrokeColor : "rgba(245, 154, 74, 0.8)",
	data : [45.0,52.4,42.2,39.4,54.2,42.0,63.2,24.1,30.0,28.4,9.1,37.4]
	}
	]
	};

	var options = {
		responsive: false,
		scaleShowGridLines : false,
		datasetStrokeWidth : 1,
		pointDotStrokeWidth : 1,
		tooltipFontColor: "rgba(52,54,70,0.8)",
		tooltipFillColor: "rgba(255,255,255,1)",
		scaleFontColor : "rgba(224,224,224,0.6)",
	};
	new Chart(ctx).Line(data,options);
});


/*var options={				

	responsive: true,

	//Boolean - If we show the scale above the chart data			
	scaleOverlay : false,
	
	//Boolean - If we want to override with a hard coded scale
	scaleOverride : true,
	
	//** Required if scaleOverride is true **
	//Number - The number of steps in a hard coded scale
	scaleSteps : 14,
	//Number - The value jump in the hard coded scale
	scaleStepWidth : 5,
	//Number - The scale starting value
	scaleStartValue : 55,
	//String - Colour of the scale line	
	scaleLineColor : "rgba(0,0,0,0)",
	
	//Number - Pixel width of the scale line	
	scaleLineWidth : 1,

	//Boolean - Whether to show labels on the scale	
	scaleShowLabels : true,
	
	//Interpolated JS string - can access value
	scaleLabel : "<%=value%>",
	
	//String - Scale label font declaration for the scale label
	scaleFontFamily : "'Arial'",
	
	//Number - Scale label font size in pixels	
	scaleFontSize : 12,
	
	//String - Scale label font weight style	
	scaleFontStyle : "normal",
	
	//String - Scale label font colour	
	scaleFontColor : "#666",	
	
	///Boolean - Whether grid lines are shown across the chart
	scaleShowGridLines : false,
	
	//String - Colour of the grid lines
	scaleGridLineColor : "rgba(0,0,0,.3)",
	
	//Number - Width of the grid lines
	scaleGridLineWidth : 1,	
	
	//Boolean - Whether the line is curved between points
	bezierCurve : true,
	
	//Boolean - Whether to show a dot for each point
	pointDot : true,
	
	//Number - Radius of each point dot in pixels
	pointDotRadius : 5,
	
	//Number - Pixel width of point dot stroke
	pointDotStrokeWidth : 1,
	
	//Boolean - Whether to show a stroke for datasets
	datasetStroke : true,
	
	//Number - Pixel width of dataset stroke
	datasetStrokeWidth : 1,
	
	//Boolean - Whether to fill the dataset with a colour
	datasetFill : true,
	
	//Boolean - Whether to animate the chart
	animation : true,

	//Number - Number of animation steps
	animationSteps : 60,
	
	//String - Animation easing effect
	animationEasing : "easeOutQuart",

	//Function - Fires when the animation is complete
	onAnimationComplete : null
};*/