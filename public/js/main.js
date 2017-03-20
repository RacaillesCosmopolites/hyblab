var mapdayi = 1;
var mapdayj = 1;
var listSelected = [0,0,0,0,0];
var dataview = 'RT';

function CleanMap(toclean) {
	toclean = false;
	setTimeout(() => {

		function a(carte) {
			$(carte).find('#Alsace').css('opacity', 1);
			$(carte).find('#Loraine').css('opacity', 1);
			$(carte).find('#Nord').css('opacity', 1);
			$(carte).find('#Champagne').css('opacity', 1);
			$(carte).find('#Picardie').css('opacity', 1);
			$(carte).find('#Bourgogne').css('opacity', 1);
			$(carte).find('#Franche').css('opacity', 1);
			$(carte).find('#RhoneAlpes').css('opacity', 1);
			$(carte).find('#Auvergne').css('opacity', 1);
			$(carte).find('#Languedoc').css('opacity', 1);
			$(carte).find('#PACA').css('opacity', 1);
			$(carte).find('#Haute_Normandie').css('opacity', 1);
			$(carte).find('#Basse_Normandie').css('opacity', 1);
			$(carte).find('#Centre').css('opacity', 1);
			$(carte).find('#PDL').css('opacity', 1);
			$(carte).find('#IDF').css('opacity', 1);
			$(carte).find('#Bretagne').css('opacity', 1);
			$(carte).find('#Limousin').css('opacity', 1);
			$(carte).find('#Corse').css('opacity', 1);
			$(carte).find('#Poitou').css('opacity', 1);
			$(carte).find('#Aquitaine').css('opacity', 1);
			$(carte).find('#Midi').css('opacity', 1);
		};
		['#carteToday', '#carteWeek'].map(e => a(e));	
	}, 10);
};

$(document).ready(function() {

	var pos = 0;

	var slider = document.getElementById('timeline');
	var time = slider.value+'%';

	$('#timeline').change(function() {
		$('#velo').css('left', time);
		time = slider.value+'%';
		console.log(time);
	});

	$('#timeline').click(function() {
		$('#velo').css('left', time);
		time = slider.value+'%';
		console.log(time);
	});

	getRandom();
	getRandomOpacity();
	regOpacityChange();

	function getRandom() {
  		return Math.random();
	}

	var opAlsace = getRandom();
	var opLoraine = getRandom();
	var opNord = getRandom();
	var opChampagne = getRandom();
	var opPicardie = getRandom();
	var opBourgogne = getRandom();
	var opFranche = getRandom();
	var opRhoneAlpes = getRandom();
	var opAuvergne = getRandom();
	var opLanguedoc = getRandom();
	var opPACA = getRandom();
	var opHaute_Normandie = getRandom();
	var opBasse_Normandie = getRandom();
	var opCentre = getRandom();
	var opPDL = getRandom();
	var opIDF = getRandom();
	var opBretagne = getRandom();
	var opLimousin = getRandom();
	var opCorse = getRandom();

	function getRandomOpacity()  {
		opAlsace = getRandom();
		opLoraine = getRandom();
		opNord = getRandom();
		opChampagne = getRandom();
		opPicardie = getRandom();
		opBourgogne = getRandom();
		opFranche = getRandom();
		opRhoneAlpes = getRandom();
		opAuvergne = getRandom();
		opLanguedoc = getRandom();
		opPACA = getRandom();
		opHaute_Normandie = getRandom();
		opBasse_Normandie = getRandom();
		opCentre = getRandom();
		opPDL = getRandom();
		opIDF = getRandom();
		opBretagne = getRandom();
		opLimousin = getRandom();
		opCorse = getRandom();
	}

	function regOpacityChange(toclean) {
		toclean = false;
		$('#carteWeek').find('#Alsace').css('opacity', opAlsace);
		$('#carteWeek').find('#Loraine').css('opacity', opLoraine);
		$('#carteWeek').find('#Nord').css('opacity', opNord);
		$('#carteWeek').find('#Champagne').css('opacity', opChampagne);
		$('#carteWeek').find('#Picardie').css('opacity', opPicardie);
		$('#carteWeek').find('#Bourgogne').css('opacity', opBourgogne);
		$('#carteWeek').find('#Franche').css('opacity', opFranche);
		$('#carteWeek').find('#RhoneAlpes').css('opacity', opRhoneAlpes);
		$('#carteWeek').find('#Auvergne').css('opacity', opAuvergne);
		$('#carteWeek').find('#Languedoc').css('opacity', opLanguedoc);
		$('#carteWeek').find('#PACA').css('opacity', opPACA);
		$('#carteWeek').find('#Haute_Normandie').css('opacity', opHaute_Normandie);
		$('#carteWeek').find('#Basse_Normandie').css('opacity', opBasse_Normandie);
		$('#carteWeek').find('#Centre').css('opacity', opCentre);
		$('#carteWeek').find('#PDL').css('opacity', opPDL);
		$('#carteWeek').find('#IDF').css('opacity', opIDF);
		$('#carteWeek').find('#Bretagne').css('opacity', opBretagne);
		$('#carteWeek').find('#Limousin').css('opacity', opLimousin);
		$('#carteWeek').find('#Corse').css('opacity', opCorse);
		$('#carteToday').find('#AlsaceToday').css('opacity', opAlsace);
		$('#carteToday').find('#LoraineToday').css('opacity', opLoraine);
		$('#carteToday').find('#NordToday').css('opacity', opNord);
		$('#carteToday').find('#ChampagneToday').css('opacity', opChampagne);
		$('#carteToday').find('#PicardieToday').css('opacity', opPicardie);
		$('#carteToday').find('#BourgogneToday').css('opacity', opBourgogne);
		$('#carteToday').find('#FrancheToday').css('opacity', opFranche);
		$('#carteToday').find('#RhoneAlpesToday').css('opacity', opRhoneAlpes);
		$('#carteToday').find('#AuvergneToday').css('opacity', opAuvergne);
		$('#carteToday').find('#LanguedocToday').css('opacity', opLanguedoc);
		$('#carteToday').find('#PACAToday').css('opacity', opPACA);
		$('#carteToday').find('#Haute_NormandieToday').css('opacity', opHaute_Normandie);
		$('#carteToday').find('#Basse_NormandieToday').css('opacity', opBasse_Normandie);
		$('#carteToday').find('#CentreToday').css('opacity', opCentre);
		$('#carteToday').find('#PDLToday').css('opacity', opPDL);
		$('#carteToday').find('#IDFToday').css('opacity', opIDF);
		$('#carteToday').find('#BretagneToday').css('opacity', opBretagne);
		$('#carteToday').find('#LimousinToday').css('opacity', opLimousin);
		$('#carteToday').find('#CorseToday').css('opacity', opCorse);
	}

	$('#carteToday').find('.region').addClass('melenchon');
	$('#carteWeek').find('.region').addClass('melenchon');
	$('.color').addClass('melenchon');

	function updateMap() {
		var toclean = false;
		var candidat = $('nav').find('.selected')[0];
		if (candidat == undefined) {
			CleanMap(toclean);
		}
		else {
			candidat = candidat.id;
			if (candidat == 'lepen') {
				updateOpacityToday('MLP', mapdayi);
				updateOpacity('MLP', mapdayj);
			}
			if (candidat == 'macron') {
				updateOpacityToday('MAC', mapdayi);
				updateOpacity('MAC', mapdayj);
			}
			if (candidat == 'melenchon') {
				updateOpacityToday('JLM', mapdayi);
				updateOpacity('JLM', mapdayj);
			}
			if (candidat == 'fillon') {
				updateOpacityToday('FIL', mapdayi);
				updateOpacity('FIL', mapdayj);
			}
			if (candidat == 'hamon') {
				updateOpacityToday('BHM', mapdayi);
				updateOpacity('BHM', mapdayj);
			}
		}	
	};

	var listCandidat = {
		melenchon: [
			'Jean-Luc Mélenchon',
			'France Insoumise',
			"Sous les couleurs de la coalition du Front de gauche, dont le PG fait partie, il est élu député européen dans la circonscription Sud-Ouest en 2009 et réélu en 2014. Il est candidat de cette coalition à l'élection présidentielle de 2012, où il arrive en quatrième position au premier tour, avec 11,1 % des voix. Il est candidat à l'élection présidentielle de 2017, « hors cadre de partis » et sans le Front de gauche, mais au nom du mouvement La France Insoumise (FI), qu'il fonde en février 2016."
		],
		lepen: [
			'Marine Le Pen',
			'Front National',
			"Elle est élue présidente du Front national au congrès de Tours de janvier 2011, succédant ainsi à son père, Jean-Marie Le Pen, qui dirigeait le parti depuis sa fondation. Candidate à l'élection présidentielle de 2012, elle arrive en troisième position au premier tour en obtenant 17,90 % des suffrages exprimés, soit un meilleur résultat que tous ceux obtenus par son père au premier tour d'une élection présidentielle française."
		],
		macron: [
			'Manu Macron',
			'En marche !',
			"Membre du Parti socialiste entre 2006 et 2009, il est nommé secrétaire général adjoint de la présidence de la République auprès de François Hollande en 2012 puis ministre de l'Économie, de l'Industrie et du Numérique en 2014 dans le gouvernement Manuel Valls II. \nEn avril 2016, il fonde le mouvement politique « En marche ! » puis démissionne de ses fonctions de ministre en août de la même année. Trois mois plus tard, le 16 novembre, il annonce sa candidature à l'élection présidentielle de 2017."
		],
		fillon: [
			'François Fillon',
			'Les républicains',
			"Le 17 mai 2007, à la suite de la victoire de Nicolas Sarkozy à l'élection présidentielle, il est nommé Premier ministre, conduisant trois gouvernements et étant l'unique chef de gouvernement de la législature. Il quitte ses fonctions le 10 mai 2012, après la défaite de Nicolas Sarkozy à l'élection présidentielle.\n Candidat à la primaire de la droite et du centre de 2016, il défend un programme libéral-conservateur. Il l’emporte au second tour face à Alain Juppé et devient le candidat de son camp pour l'élection présidentielle de 2017."
		],
		hamon: [
			'Benoit Hamon',
			'Parti Socialiste',
			"Élu député de la onzième circonscription des Yvelines en 2012, il est membre du gouvernement du 16 mai 2012 au 25 août 2014, en tant que ministre délégué à l'Économie sociale et solidaire et à la consommation puis ministre de l'Éducation nationale, de l'Enseignement supérieur et de la Recherche.\n Benoît Hamon remporte la primaire citoyenne de 2017 devant Manuel Valls, et devient ainsi le candidat du Parti socialiste à l'élection présidentielle de 2017."
		]
	}

	function setCandidate(candidate) {
		$('body').find('.identity').find('h2')[0].innerHTML = listCandidat[candidate][0];
		$('body').find('.identity').find('h3')[0].innerHTML = listCandidat[candidate][1];
		$('body').find('.identity').find('p')[0].innerHTML = listCandidat[candidate][2];
	}

	$('nav').find('.candidat').click(function() {
		var candidatClass = this.id;
		var toclean = false;
		if(pos == 0) {
			// Si on est à l'état des cartes
			$('#carteToday').find('.region').removeClass('macron');
			$('#carteToday').find('.region').removeClass('lepen');
			$('#carteToday').find('.region').removeClass('fillon');
			$('#carteToday').find('.region').removeClass('hamon');
			$('#carteToday').find('.region').removeClass('melenchon');
			$('#carteWeek').find('.region').removeClass('macron');
			$('#carteWeek').find('.region').removeClass('lepen');
			$('#carteWeek').find('.region').removeClass('fillon');
			$('#carteWeek').find('.region').removeClass('hamon');
			$('#carteWeek').find('.region').removeClass('melenchon');		
			$('.color').removeClass('macron');
			$('.color').removeClass('lepen');
			$('.color').removeClass('fillon');
			$('.color').removeClass('hamon');
			$('.color').removeClass('melenchon');
			cleanDataGraph(0);
			cleanDataGraph(1);
			cleanDataGraph(2);
			cleanDataGraph(3);
			cleanDataGraph(4);
			listSelected = [0,0,0,0,0];
			if($(this).hasClass('selected')) {	
				$(this).removeClass('selected');
				toclean = true;
			} else {
				$(this).addClass('selected');
				$(".candidat").not($(this)).removeClass('selected');
				$('#carteToday').find('.region').addClass(candidatClass);
				$('#carteWeek').find('.region').addClass(candidatClass);
				$('.color').addClass(candidatClass);
				getRandom();
				getRandomOpacity();
				regOpacityChange();				
			}
			if(candidatClass === 'lepen') {
				// $('footer').find('.tete').css('background-image', 'url(PNG/lepenphoto.png)');
				$.find('#bigphoto')[0].setAttribute('src', 'img/lepen.png')
				updateOpacityToday('MLP', mapdayi);
				updateOpacity('MLP', mapdayj);
				setCandidate('lepen');
				((toclean) ? CleanMap(toclean) : NaN);
				changeDataGraph(data2[0][dataview]['MLP'], 4);
				((toclean) ? cleanDataGraph(4) : NaN);

			}

			if(candidatClass === 'macron') {
				// $('footer').find('.tete').css('background-image', 'url(PNG/macronphoto.png)');
				$.find('#bigphoto')[0].setAttribute('src', 'img/macron.png')
				updateOpacityToday('MAC', mapdayi);
				updateOpacity('MAC', mapdayj);
				setCandidate('macron');
				((toclean) ? CleanMap(toclean) : NaN);
				changeDataGraph(data2[0][dataview]['MAC'], 1);
				((toclean) ? cleanDataGraph(1) : NaN);
			}

			if(candidatClass === 'fillon') {
				// $('footer').find('.tete').css('background-image', 'url(PNG/fillonphoto.png)');
				$.find('#bigphoto')[0].setAttribute('src', 'img/fillon.png')
				updateOpacityToday('FIL', mapdayi);
				updateOpacity('FIL', mapdayj);
				setCandidate('fillon');
				((toclean) ? CleanMap(toclean) : NaN);
				changeDataGraph(data2[0][dataview]['FIL'], 3);
				((toclean) ? cleanDataGraph(3) : NaN);
			}

			if(candidatClass === 'hamon') {
				// $('footer').find('.tete').css('background-image', 'url(PNG/hamonphoto.png)');
				$.find('#bigphoto')[0].setAttribute('src', 'img/hamon.png')	
				updateOpacityToday('BHM', mapdayi);
				updateOpacity('BHM', mapdayj);
				setCandidate('hamon');
				((toclean) ? CleanMap(toclean) : NaN);
				changeDataGraph(data2[0][dataview]['BNH'], 2);
				((toclean) ? cleanDataGraph(2) : NaN);
			}

			if(candidatClass === 'melenchon') {
				// $('footer').find('.tete').css('background-image', 'url(PNG/melanchonphoto.png)');
				$.find('#bigphoto')[0].setAttribute('src', 'img/melanchon.png')
				updateOpacityToday('JLM', mapdayi);
				updateOpacity('JLM', mapdayj);
				setCandidate('melenchon');
				((toclean) ? CleanMap(toclean) : NaN);
				changeDataGraph(data2[0][dataview]['JLM'], 0);
				((toclean) ? cleanDataGraph(0) : NaN);
			}
		}
		if (pos == 1) {
			if($(this).hasClass('selected')) {	
				NaN;
			} else {
				if ($(this).hasClass('selecttwo')) {
					$(this).removeClass('selecttwo');
					if(candidatClass === 'lepen') {
						listSelected[4] = 0;
						cleanDataGraph(4);
					}
					if(candidatClass === 'macron') {
						listSelected[1] = 0;
						cleanDataGraph(1);
					}

					if(candidatClass === 'fillon') {
						listSelected[3] = 0;
						cleanDataGraph(3);
					}

					if(candidatClass === 'hamon') {
						listSelected[2] = 0;
						cleanDataGraph(2);
					}

					if(candidatClass === 'melenchon') {
						listSelected[0] = 0;
						cleanDataGraph(0);
					}
				}
				else {
					$(this).addClass('selecttwo');
					if(candidatClass === 'lepen') {
						listSelected[4] = 1;
						changeDataGraph(data2[0][dataview]['MLP'], 4)
					}
					if(candidatClass === 'macron') {
						listSelected[1] = 1;
						changeDataGraph(data2[0][dataview]['MAC'], 1)
					}

					if(candidatClass === 'fillon') {
						listSelected[3] = 1;
						changeDataGraph(data2[0][dataview]['FIL'], 3)
					}

					if(candidatClass === 'hamon') {
						listSelected[2] = 1;
						changeDataGraph(data2[0][dataview]['BNH'], 2)
					}

					if(candidatClass === 'melenchon') {
						listSelected[0] = 1;
						changeDataGraph(data2[0][dataview]['JLM'], 0)
					}
				}
			};
		}
	});

	$('body').find('#mapday1')[0].innerHTML = getDate(mapdayi);
	$('body').find('#mapday2')[0].innerHTML = getDate(mapdayj);

	function getDate(jour) {
		var listJour = ['Mer.', 'Jeu.', 'Ven.', 'Sam.', 'Dim.', 'Lun.', 'Mar.'];
		// 1er jour = 1 février: mercredi
		// console.log(jour)
		return (listJour[(jour-1) % 7]).toString() + ' ' + (((jour-1)%28)+1).toString() + ' ' + ((jour < 29) ? 'février.' : 'mars').toString();

	}

	$('body').find('#mapday1+').click(() => {
		/*
		 *
		 */
		((mapdayi <= 48) ? mapdayi++ : NaN);
		$('body').find('#mapday1')[0].innerHTML = getDate(mapdayi);
		updateMap();

	});

	$('body').find('#mapday1-').click(() => {
		/*
		 *
		 */
		((mapdayi > 1) ? mapdayi-- : NaN);
		$('body').find('#mapday1')[0].innerHTML = getDate(mapdayi);
		updateMap();

	});

	$('body').find('#mapday2+').click(() => {
		/*
		 *
		 */
		((mapdayj <= 48) ? mapdayj++ : NaN);
		$('body').find('#mapday2')[0].innerHTML = getDate(mapdayj);
		updateMap();

	});

	$('body').find('#mapday2-').click(() => {
		/*
		 *
		 */
		((mapdayj > 1) ? mapdayj-- : NaN);
		$('body').find('#mapday2')[0].innerHTML = getDate(mapdayj);
		updateMap();

	});
	document.addEventListener('scroll', function (event) {
		/*
		 *
		 */
		if ($('body').scrollTop() >= 1240) {
		 	pos = 1;
		 	$('#conseil').show()
		 	if (listSelected[4] === 1) {
				$('#lepen').addClass('selecttwo');
			}
			if (listSelected[1] === 1) {
				$('#macron').addClass('selecttwo');
			}
			if (listSelected[3] === 1) {
				$('#fillon').addClass('selecttwo');
			}
			if (listSelected[2] === 1) {
				$('#hamon').addClass('selecttwo');
			}
			if (listSelected[0] === 1) {
				$('#melenchon').addClass('selecttwo');
			}

		}
		else {
			pos = 0;
			$('#conseil').hide()
			$('.selecttwo').removeClass('selecttwo');
		}
	}, true /*Capture event*/);

	updateMap();
	setCandidate('melenchon');
	changeDataGraph(data2[0][dataview]['JLM'], 0)



	// border: 3px #fff solid;
});


var tooltip = d3.selectAll(".tooltip:not(.css)");
// var HTMLabsoluteTip = d3.select("div.tooltip.absolute");
// var HTMLfixedTip = d3.select("div.tooltip.fixed");
// var HTMLmouseTip = d3.select("div.tooltip.mouse");
// var SVGexactTip = d3.select("g.tooltip.exact");
// var SVGmouseTip = d3.select("g.tooltip.mouse");
/* If this seems like a lot of different variables,
   remember that normally you'd only implement one 
   type of tooltip! */

/* I'm using d3 to add the event handlers to the circles
   and set positioning attributes on the tooltips, but
   you could use JQuery or plain Javascript. */
d3.select("svg").selectAll('.city')

    /***** Easy but ugly tooltip *****/ 
    .attr("title", "Automatic Title Tooltip") 

    .on("mouseover", function () {
        tooltip.style("opacity", "1");
      
        /* You'd normally set the tooltip text
           here, based on data from the  element
           being moused-over; I'm just setting colour. */
        tooltip.style("color", this.getAttribute("fill") );
      /* Note: SVG text is set in CSS to link fill colour to 
         the "color" attribute. */
      
      
        /***** Positioning a tooltip precisely
               over an SVG element *****/ 
        
        /***** For an SVG tooltip *****/ 
        
        //"this" in the context of this function
        //is the element that triggered this event handler
        //which will be one of the circle elements.
        // var tooltipParent = SVGexactTip.node().parentElement;
        // var matrix = 
        //         this.getTransformToElement(tooltipParent)
        //             .translate(+this.getAttribute("cx"),
        //                  +this.getAttribute("cy"));
        
        //getTransformToElement returns a matrix
        //representing all translations, rotations, etc.
        //to convert between two coordinate systems.
        //The .translate(x,y) function adds an additional 
        //translation to the centre of the circle.
        
        //the matrix has values a, b, c, d, e, and f
        //we're only interested in e and f
        //which represent the final horizontal and vertical
        //translation between the top left of the svg and 
        //the centre of the circle.
        
        //we get the position of the svg on the page
        //using this.viewportElement to get the SVG
        //and using offsetTop and offsetLeft to get the SVG's
        //position relative to the page.
        // SVGexactTip
        //     .attr("transform", "translate(" + (matrix.e)
        //               + "," + (matrix.f-20) + ")");
        
        /***** For an HTML tooltip *****/ 
        
        //for the HTML tooltip, we're not interested in a
        //transformation relative to an internal SVG coordinate
        //system, but relative to the page body
        
        //We can't get that matrix directly,
        //but we can get the conversion to the
        //screen coordinates.
        
        var matrix = this.getScreenCTM()
                .translate(+this.getAttribute("cx"),
                         +this.getAttribute("cy"));
        
        //You can use screen coordinates directly to position
        //a fixed-position tooltip        
        // HTMLfixedTip 
        //     .style("left", 
        //            (matrix.e) + "px")
        //     .style("top",
        //            (matrix.f + 3) + "px");
        // //The limitation of fixed position is that it won't
        // //change when scrolled.
        
        // //A better solution is to calculate the position 
        // //of the page on the screen to position an 
        // //absolute-positioned tooltip:
        // HTMLabsoluteTip
        //     .style("left", 
        //            (window.pageXOffset + matrix.e) + "px")
        //     .style("top",
        //            (window.pageYOffset + matrix.f + 30) + "px");
        
    })
    .on("mousemove", function () {
        
        /***** Positioning a tooltip using mouse coordinates *****/ 
      
        /* The code is shorter, but it runs every time
           the mouse moves, so it could slow down other
           processes or animation. */
        
        /***** For an SVG tooltip *****/ 
       
        // var mouseCoords = d3.mouse(
        //     SVGmouseTip.node().parentElement);
        // //the d3.mouse() function calculates the mouse
        // //position relative to an SVG Element, in that 
        // //element's coordinate system 
        // //(after transform or viewBox attributes).
        
        // //Because we're using the coordinates to position
        // //the SVG tooltip, we want the coordinates to be
        // //with respect to that element's parent.
        // //SVGmouseTip.node() accesses the (first and only)
        // //selected element from the saved d3 selection object.
        
        // SVGmouseTip
        //     .attr("transform", "translate("
        //           + (mouseCoords[0]-10) + "," 
        //           + (mouseCoords[1] - 10) + ")");
        
        // /***** For an HTML tooltip *****/ 
      
        // //mouse coordinates relative to the page as a whole
        // //can be accessed directly from the click event object
        // //(which d3 stores as d3.event)
        // HTMLmouseTip
        //     .style("left", Math.max(0, d3.event.pageX - 150) + "px")
        //     .style("top", (d3.event.pageY + 20) + "px");
    })
    .on("mouseout", function () {
        return tooltip.style("opacity", "0");
    });

var circleGroup = d3.select("g#circle-group");
d3.select("button#wiggle").on("click", function() {
    circleGroup.transition().duration(1000)
        .attr("transform",
              "rotate("+ (20*(Math.random()-0.5)) + ")"
              +"translate(" + (20*(Math.random()-0.5)) +","
              + (20*(Math.random()-0.5)) + ")"
              );
});