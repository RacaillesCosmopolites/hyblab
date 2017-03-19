var mapdayi = 1;
var mapdayj = 1;

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

	$('nav').find('.candidat').click(function() {
		var candidatClass = this.id;
		var toclean = false;
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
			((toclean) ? CleanMap(toclean) : NaN);
		}

		if(candidatClass === 'macron') {
			// $('footer').find('.tete').css('background-image', 'url(PNG/macronphoto.png)');
			$.find('#bigphoto')[0].setAttribute('src', 'img/macron.png')
			updateOpacityToday('MAC', mapdayi);
			updateOpacity('MAC', mapdayj);
			((toclean) ? CleanMap(toclean) : NaN);
		}

		if(candidatClass === 'fillon') {
			// $('footer').find('.tete').css('background-image', 'url(PNG/fillonphoto.png)');
			$.find('#bigphoto')[0].setAttribute('src', 'img/fillon.png')
			updateOpacityToday('FIL', mapdayi);
			updateOpacity('FIL', mapdayj);
			((toclean) ? CleanMap(toclean) : NaN);
		}

		if(candidatClass === 'hamon') {
			// $('footer').find('.tete').css('background-image', 'url(PNG/hamonphoto.png)');
			$.find('#bigphoto')[0].setAttribute('src', 'img/hamon.png')	
			updateOpacityToday('BHM', mapdayi);
			updateOpacity('BHM', mapdayj);
			((toclean) ? CleanMap(toclean) : NaN);
		}

		if(candidatClass === 'melenchon') {
			// $('footer').find('.tete').css('background-image', 'url(PNG/melanchonphoto.png)');
			$.find('#bigphoto')[0].setAttribute('src', 'img/melanchon.png')
			updateOpacityToday('JLM', mapdayi);
			updateOpacity('JLM', mapdayj);
			((toclean) ? CleanMap(toclean) : NaN);
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

	updateMap();
	changeDataGraph(data2[0]['tweet']['JLM'], 0)
});