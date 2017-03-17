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

	function regOpacityChange() {
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

	$('#carteToday').find('.region').addClass('melanchon');
	$('#carteWeek').find('.region').addClass('melanchon');
	$('.color').addClass('melanchon');

	$('nav').find('.candidat').click(function() {
		var candidatClass = this.id;
		$('#carteToday').find('.region').removeClass('macron');
		$('#carteToday').find('.region').removeClass('lepen');
		$('#carteToday').find('.region').removeClass('fillon');
		$('#carteToday').find('.region').removeClass('hamon');
		$('#carteToday').find('.region').removeClass('melanchon');
		$('#carteWeek').find('.region').removeClass('macron');
		$('#carteWeek').find('.region').removeClass('lepen');
		$('#carteWeek').find('.region').removeClass('fillon');
		$('#carteWeek').find('.region').removeClass('hamon');
		$('#carteWeek').find('.region').removeClass('melanchon');		
		$('.color').removeClass('macron');
		$('.color').removeClass('lepen');
		$('.color').removeClass('fillon');
		$('.color').removeClass('hamon');
		$('.color').removeClass('melanchon');
		
		if($(this).hasClass('selected')) {	
			$(this).removeClass('selected');
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
				$('footer').find('.tete').css('background-image', 'url(PNG/lepenphoto.png)');
			}

			if(candidatClass === 'macron') {
				$('footer').find('.tete').css('background-image', 'url(PNG/macronphoto.png)');
			}

			if(candidatClass === 'fillon') {
				$('footer').find('.tete').css('background-image', 'url(PNG/fillonphoto.png)');
			}

			if(candidatClass === 'hamon') {
				$('footer').find('.tete').css('background-image', 'url(PNG/hamonphoto.png)');
			}

			if(candidatClass === 'melanchon') {
				$('footer').find('.tete').css('background-image', 'url(PNG/melanchonphoto.png)');
			}
	});
});