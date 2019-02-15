jQuery(document).ready(function($){

	$("#div-botones-inicio").on('click', 'button', function() {
		switch($(this).attr('id')){
			case "btn-salones":
			$(this).hide();
			$("#btn-iniciar").show();
			$("#div-info-aula-musica").show();
			break;
			case "btn-iniciar":
			$(this).hide();
			$("#div-info-aula-musica").hide();
			$("#div-sel-modulo-musica").show();
			break;
		}
	});

	$("#div-info-detallada-musica button").click(function() {
		$("#contenedor-index-musica").css('background-image', 'url("'+ $("#bloginfo").val() + '/musica/images/fondo_introduccion_musica.jpg")');
		$("#div-mod-enc-mus").hide();
		$("#div-info-detallada-musica").hide();
		$("#div-botones-inicio").show();
		$("#div-info-aula-musica").show();
	});

	$(".dropdown-menu").on('click', 'button', function() {
		blog_info = $("#blog-info").val();
		window.location.href = blog_info+"/musica";
	});

	$("#div-info-aula-musica").on('click', 'button', function() {
		$("#div-botones-inicio").hide();
		$("#div-info-aula-musica").hide();
		$("#contenedor-index-musica").css('background-image', 'url("'+ $("#bloginfo").val() + '/musica/images/fondo_modulos_musica.jpg")');
		$("#div-mod-enc-mus").show();
		$("#div-info-detallada-musica").show();
		$("#con-idm h2").empty();
		$("#con-idm p").empty();
		switch($(this).attr('id')){
			case "btn-introduccion":
			$("#con-idm h2").text("Introducción");
			$("#con-idm p").html("¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
			break;
			case "btn-objetivos":
			$("#con-idm h2").text("Objetivos");
			$("#con-idm p").html("<ol>"+
				"<li>Presentar conceptos básicos y generales sobre la gramática musical.</li>"+
				"<li>Dar a conocer la música de las regiones de Colombia: sus características, instrumentos musicales típicos y algunos ritmos de cada región.</li>"+
				"<li>Brindar herramientas conceptuales, prácticas e interactivas para la interpretación instrumental/vocal de ritmos de la música colombiana.</li></ol>");
			break;
			case "btn-metodologia":
			$("#con-idm h2").text("Metodología");
			$("#con-idm p").html("En este curso, se abordará la música en dos aspectos:<br><ol>"+
				"<li>Teórico</li>"+
				"<li>Práctico</li></ol>En el aspecto teórico, se incluirán elementos tales como definiciones, guías, métodos, entre otros, capaces de brindar herramientas para el desarrollo artístico de los beneficiarios; y en el aspecto práctico, se buscará, afianzar y consolidar dichas herramientas. El curso, desarrollará algunas estrategias, tales como LAS SALAS INTERACTIVAS, con el fin de aportar, enriquecer y fortalecer, tanto los procesos de formación artística de los usuarios, como sus aptitudes y destrezas musicales; de manera integral.");
			break;
			case "btn-publico":
			$("#con-idm h2").text("Público Objetivo");
			$("#con-idm p").html("Los contenidos del aula virtual están dirigidos a:<br><ul>"+
				"<li>Beneficiarios que asisten a los diferentes talleres del programa de música del IDARTES, bien sea de la línea Emprende CREA o Arte en la Escuela.</li>"+
				"<li>Artistas Formadores que deseen acceder al contenido del aula virtual como herramienta para complementar sus prácticas pedagógicas en el aula.</li>"+
				"<li>Jóvenes y/o adultos en proceso de formación musical (profesional o empírica) que desean profundizar en los conceptos y prácticas de algunos ritmos de la música colombiana.</li>"+
				"<li>Público en general que desee indagar y/o ampliar sus conocimientos musicales a través de los contenidos que se presentan en el aula virtual.</li></ul>");
			break;
			case "btn-creditos":
			$("#con-idm h2").text("Créditos");
			$("#con-idm p").html("");
			break;
		}

	});

	$("#contenedor-aula-musica").on('click', 'a', function() {
		if($(this).attr("id") == "btn-sala-teorica" || $(this).attr("id") == "btn-sala-interactiva" || $(this).attr("id") == "btn-sala-general"){
			$("#contenedor-aula-musica").css({'background-image':'url("")'});
			$(".contenido").hide();
			$("#div-info-andina").hide();
			$("#div-btn-mod-mus").show();
			$("#flecha-guabina").show();
		}
		switch($(this).attr('id')) {
			case "regresar":
			$(".contenido").hide();
			$("#contenedor-aula-musica").css('background-image', 'url("'+ $("#bloginfo").val() + '/musica/images/fondo_modulos_musica.jpg")');
			$("#div-info-andina").show();
			$("#div-btn-mod-mus").hide();
			$("#div-btn-mod-mus #btn-guabina").removeClass('btn-musica-s').addClass('btn-musica-t');
			$("#div-btn-mod-mus .flecha-musica").not("#div-btn-mod-mus #btn-guabina").hide();
			$("#div-btn-mod-mus button").not("#btn-guabina").removeClass().addClass('btn btn-block btn-musica-s');
			break;
			case "btn-sala-teorica":
			botonesLateralesSala("teorica");
			$("#div-btn-mod-mus button").data("data-sala", "teorica");
			$("#div-sala-teorica button").data("data-modulo", "guabina");
			$("#div-sala-teorica #div-btnd-teorica").hide();
			$("#div-btn-mod-mus #btn-instrumentos").hide();
			$("#div-sala-teorica").show();
			limpiarInfoTeorica();
			infoBasicaTeoricaGuabina();
			break;
			case "btn-sala-interactiva":
			botonesLateralesSala("interactiva");
			$("#div-btn-mod-mus button").data("data-sala", "interactiva");
			$("#div-btn-interactiva button").data("data-modulo", "guabina");
			$("#div-btn-mod-mus #btn-instrumentos").show();
			$("#div-sala-interactiva").show()
			limpiarInfoInteractiva();
			infoBasicaInteractivaGuabina();
			break;
			case "btn-sala-general":
			botonesLateralesSala("general");
			$("#div-btn-mod-mus button").data("data-sala", "general");
			$("#div-sala-general").show();
			limpiarInfoEscala();
			infoBasicaEscala();
			creacionBotonesSalaGeneral("escala");
			break;
		}
	});

	function botonesLateralesSala(sala){
		$("#div-btn-mod-mus").empty();
		$("#div-btn-mod-mus").append('<br>'+
			'<div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">'+
			'<a href="#" id="regresar" style="color: #333; text-decoration: none;">'+
			'<i class="fa fa-arrow-left fa-2x"><p style="font-size: 12px;">Regresar</p></i>'+
			'</a>'+
			'</div>'
			);

		if(sala == "teorica" || sala == "interactiva"){
			$("#div-btn-mod-mus").append(
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 40%;">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-guabina"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-t" id="btn-guabina">Guabina</button>'+
				'</div>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-pasillo"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-s" id="btn-pasillo">Pasillo</button>'+
				'</div>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-bambuco"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-s" id="btn-bambuco">Bambuco</button>'+
				'</div>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-instrumentos"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-s" id="btn-instrumentos">Instrumentos tradicionales</button>'+
				'</div>'+
				'</div>'
				);
		}

		if(sala == "general"){
			$("#div-btn-mod-mus").append(
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" style="margin-top: 40%;">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-escala"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-t" id="btn-escala">Escala</button>'+
				'</div>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-ritmo"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-s" id="btn-ritmo">Ritmo y Métrica</button>'+
				'</div>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-acordes"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-s" id="btn-acordes">Acordes</button>'+
				'</div>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-funciones"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-s" id="btn-funciones">Funciones Armónicas</button>'+
				'</div>'+
				'</div>'+
				'<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">'+
				'<div class="col-lg-1 col-md-1 col-sm-1 col-xs-1">'+
				'<i class="fas fa-2x fa-caret-right flecha-musica" id="flecha-armaduras"></i>'+
				'</div>'+
				'<div class="col-lg-10 col-md-10 col-sm-10 col-xs-10 text-right">'+
				'<button class="btn btn-block btn-musica-s" id="btn-armaduras">Armaduras</button>'+
				'</div>'+
				'</div>'
				);
		}
	}

	$("#div-btn-mod-mus").on('click', 'button', function() {
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btn-mod-mus .flecha-musica").not(this).hide();
		$($(this).parent().parent().children()[0]).children(".flecha-musica").show();
		$("#div-btn-mod-mus button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		$(".contenido").hide();
		if($(this).data('data-sala') == "teorica"){
			limpiarInfoTeorica();
			$("#div-btns-teorica button").removeClass().addClass('btn btn-block btn-musica-s');
			$("#div-sala-teorica").show();
			switch($(this).attr('id')) {
				case "btn-guabina":
				$("#div-btns-teorica button").data("data-modulo", "guabina");
				$("#div-btnu-teorica").show();
				$("#div-btnd-teorica").hide();
				infoBasicaTeoricaGuabina();
				break;
				case "btn-pasillo":
				$("#div-btns-teorica button").data("data-modulo", "pasillo");
				$("#div-btnu-teorica").hide();
				$("#div-btnd-teorica").show();
				infoBasicaTeoricaPasillo();
				break;
				case "btn-bambuco":
				$("#div-btns-teorica button").data("data-modulo", "bambuco");
				$("#div-btnu-teorica").hide();
				$("#div-btnd-teorica").show();
				infoBasicaTeoricaBambuco();
				break;
			}
		}
		if($(this).data('data-sala') == "interactiva"){
			if($(this).attr('id') == "btn-guabina" || $(this).attr('id') == "btn-pasillo" || $(this).attr('id') == "btn-bambuco"){
				limpiarInfoInteractiva();
				$("#div-btn-interactiva button").removeClass().addClass('btn btn-block btn-musica-s');
				$("#div-conu-interactiva").removeClass().addClass("col-lg-6 col-md-6");
				$("#div-cond-interactiva").removeClass().addClass("col-lg-6 col-md-6");
				$("#div-sala-interactiva").show();
			}
			if($(this).attr('id') == "btn-instrumentos"){
				$("#div-instrumentos").show();
				$("#div-img-instrumentos").show();
				$("#div-des-instrumentos").hide();
			}

			switch($(this).attr('id')) {
				case "btn-guabina":
				$("#div-btn-interactiva button").data("data-modulo", "guabina");
				infoBasicaInteractivaGuabina();
				break;
				case "btn-pasillo":
				infoBasicaInteractivaPasillo();
				$("#div-btn-interactiva button").data("data-modulo", "pasillo");
				break;
				case "btn-bambuco":
				$("#div-btn-interactiva button").data("data-modulo", "bambuco");
				infoBasicaInteractivaBambuco();
				break;
				case "btn-instrumentos":
				infoBasicaInstrumentos();
				$("#div-des-instrumentos").hide();
				break;
			}
		}
		if($(this).data('data-sala') == "general"){
			limpiarInfoEscala();
			$("#div-sala-general button").remove(".btn");
			$("#div-sala-general").show();
			switch($(this).attr('id')) {
				case "btn-escala":
				infoBasicaEscala();
				creacionBotonesSalaGeneral("escala");
				break;
				case "btn-ritmo":
				infoBasicaRitmo();
				break;
				case "btn-acordes":
				infoBasicaAcordes();
				break
			}
		}
	});

	$("#div-btns-teorica").on('click', 'button', function() {
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btns-teorica button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		limpiarInfoTeorica();
		if($(this).data('data-modulo') == "guabina"){
			switch($(this).attr("id")){
				case "btn-ritmo-teorica":
				$("#div-tit-teorica h2").text("RITMO");
				$("#div-conu-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/imagen_notas.jpg");
				break;
				case "btn-melodia-teorica":
				$("#div-tit-teorica h2").text("LA RUANA");
				$("#div-conu-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/melodia_la_ruana.png");
				$("#div-cond-teorica p").html("ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.<br><br>"+
					"ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.<br><br>"+
					"CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.<br><br>"+
					"GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.");
				break;
				case "btn-armonia-teorica":
				$("#div-tit-teorica h2").text("LA RUANA");
				$("#div-conu-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/armonia_la_ruana.jpg");
				$("#div-cond-teorica p").html("ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.<br><br>"+
					"ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.<br><br>"+
					"CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.<br><br>"+
					"GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.");
				break;
			}
		}
		if($(this).data('data-modulo') == "pasillo"){
			switch($(this).attr("id")){
				case "btn-ritmo-teorica":
				$("#div-tit-teorica h2").text("RITMO");
				$("#div-conu-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/ritmo.jpg");
				$("#div-cond-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/golpe_de_bajo.jpg");
				break;
				case "btn-melodia-teorica":
				$("#div-tit-teorica h2").text("MELODÍA Y ARMONÍA");
				$("#div-conu-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/cachipay_1.jpg");
				$("#div-cond-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/cachipay_2.jpg");
				break;
			}
		}
		if($(this).data('data-modulo') == "bambuco"){
			switch($(this).attr("id")){
				case "btn-ritmo-teorica":
				$("#div-tit-teorica h2").text("RITMO");
				$("#div-conu-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/golpes.png");
				break;
				case "btn-melodia-teorica":
				$("#div-tit-teorica h2").text("MELODÍA Y ARMONÍA");
				$("#div-conu-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/bochica_melodia_y_cifra_1.jpg");
				$("#div-cond-teorica img").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/bochica_melodia_y_cifra_2.jpg");
				break;
			}
		}
	});

	$("#div-btn-interactiva").on('click', 'button', function() {
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btn-interactiva button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		limpiarInfoInteractiva();
		$("#div-conu-interactiva").removeClass().addClass("col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8");
		$("#div-cond-interactiva").removeClass();
		if($(this).data('data-modulo') == "guabina"){
			switch($(this).attr("id")){
				case "btn-play-interactiva":
				$("#div-tit-interactiva h2").text("PLAY ALONG LA RUANA");
				$("#div-conu-interactiva p").html('<div class="embed-responsive embed-responsive-16by9">'
					+'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/10mzYSZ2zKc" allowfullscreen></iframe>'
					+'</div>');
				break;
				case "btn-referentes-interactiva":
				$("#div-tit-interactiva h2").text("REFERENTES GUABINA");
				$("#div-conu-interactiva p").html("Los Guaduales - Jorge Villamil<br>Guabinita Santandereana - Pedro Morales Pino<br>A bordo de tu voz - Luz marina Posada");
				break;
			}
		}
		if($(this).data('data-modulo') == "pasillo"){
			switch($(this).attr("id")){
				case "btn-play-interactiva":
				$("#div-tit-interactiva h2").text("PLAY ALONG CACHIPAY");
				$("#div-conu-interactiva p").html('Video');
				break;
				case "btn-referentes-interactiva":
				$("#div-tit-interactiva h2").text("REFERENTES PASILLO");
				$("#div-conu-interactiva p").html("Aires de mi Tierra - Gustavo Gómez Ardila<br>La Gata Golosa - Fulgencio García<br>Amalia ... Joaquín Arias<br>Atardecer ... Carlos Viecco<br>Cachipay ... D.R.A.<br>Chispazo ... Pedro Morales Pino<br>Desde Lejos ... Bonifacio Bautista<br>El Pereirano ... Camilo Bedoya");
				break;
			}
		}
		if($(this).data('data-modulo') == "bambuco"){
			switch($(this).attr("id")){
				case "btn-play-interactiva":
				$("#div-tit-interactiva h2").text("PLAY ALONG BOCHICA");
				$("#div-conu-interactiva p").html('Video');
				break;
				case "btn-referentes-interactiva":
				$("#div-tit-interactiva h2").text("REFERENTES BAMBUCO");
				$("#div-conu-interactiva p").html("Bambuquisimo ... León Cardona<br>Bachue ... Francisco Cristancho<br>Bohica ... Francisco Cristancho<br>Como P ́desenguayabar ... Jorge Olaya<br>El Sotareño ... Federico Diago");
				break;
			}
		}
	});

	function limpiarInfoTeorica(){
		$("#div-tit-teorica h2").empty();
		$("#div-conu-teorica p").empty();
		$("#div-conu-teorica img").attr("src","");
		$("#div-cond-teorica img").attr("src","");
		$("#div-cond-teorica p").empty();
	}

	function infoBasicaTeoricaGuabina(){
		$("#div-tit-teorica h2").text("GUABINA");
		$("#div-conu-teorica p").html("En el caso de la guabina, el sincretismo musical vocal - instrumental-coreografía está asociado al torbellino, el canto es el elemento diferenciador por su relativa independencia de la ejecución instrumental. A juicio de los críticos - generalmente literatos del pasillo, del fandanguillo, del valse y del bambuco - basados en las distintas piezas particulares que se han “escrito” en Tolima, Huila, Boyacá, Santander y Cundinamarca, mucho se puede decir de la guabina como derivación de distintos aires. Las numerosas confusiones que se presentan de las denominaciones de la guabina, todas corresponden a músicos del Tolima, Huila, Boyacá, Santander y Cundinamarca, unas y otras presentan similitudes estructurales, rítmicas y coreográficas con otros aires nacionales");
		$("#div-cond-teorica img").attr('src', $("#bloginfo").val() + "/musica/images/guabina/cuchara.png");
		$("#div-cond-teorica p").html("Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.");
	}

	function infoBasicaTeoricaPasillo(){
		$("#div-tit-teorica h2").text("PASILLO");
		$("#div-conu-teorica p").html('Este es otro de los bailes folclóricos andinos que se hicieron populares desde el siglo XIX. Es una de las variantes del vals europeo, convertido en aire de moda, con ritmo más rápido, o sea pasillo.<br>'+
			'Pasillos del estilo de “Rondinella”, “La gata golosa” y “Patasdilo”, eran los más solicitados por las personas y los más escuchados en las tertulias santafereñas.<br>'+
			'Hay dos tipos de pasillo: el fiestero instrumental, que es el más característico de las fiestas populares bailes de casorio y de garrote y el pasillo lento, generalmente vocal, que trata en sus letras temas de amor, desilusión, luto y nostalgia.'+
			'Según el historiador Javier Ocampo, el pasillo colombiano presenta semejanzas con el vals de Venezuela, el sanjuanito de Ecuador y el valsecito de Costa Rica.');
		$("#div-cond-teorica img").attr('src', $("#bloginfo").val() + "/musica/images/guabina/instrumento.jpg");
		$("#div-cond-teorica p").html("La guaracha es un instrumento musical idiófono de raspado utilizado mayormente en el vallenato. Se fabrica, entre otros, de caña o de lata.");
	}

	function infoBasicaTeoricaBambuco(){
		$("#div-tit-teorica h2").text("BAMBUCO");
		$("#div-conu-teorica p").html('El bambuco es el aire folklórico mestizo más típico de la zona andina colombiana, y es por esencia la danza nacional más representativa. Su instrumento fundamental es el tiple.<br><br>'+
			'Carácter Poli rítmico Hay acuerdo entre los folclóricos sobre el carácter poli rítmico del bambuco. Actualmente se habla de las fórmulas ¾ y 6/8, muy conocidas por nuestros trovadores, tipleros y guitarristas, que presentan grandes dificultades cuando se quiere orquestar debido a la síncopa.<br>'+
			'Otro tipo de bambuco es el instrumental, que se toca en estudiantina (agrupación musical de cuerdas que emplea el tiple, la bandola y la guitarra).');
		$("#div-cond-teorica img").attr('src', $("#bloginfo").val() + "/musica/images/bambuco/esterilla.jpg");
		$("#div-cond-teorica p").html("La esterilla es un instrumento tradicional colombiano, construido con cañutos o trozos de bambú (entre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.");
	}

	function limpiarInfoInteractiva(){
		$("#div-tit-interactiva h2").empty();
		$("#div-conu-interactiva p").empty();
		$("#div-cond-interactiva p").empty();
	}

	function infoBasicaInteractivaGuabina(){
		$("#div-tit-interactiva h2").text("GUABINA");
		$("#div-conu-interactiva p").html("Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultivaba en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.<br><br>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.");
		$("#div-cond-interactiva p").html('<div class="embed-responsive embed-responsive-16by9">'
			+'<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/qv_quuy50Jo" allowfullscreen></iframe>'
			+'</div>');
	}

	function infoBasicaInteractivaPasillo(){
		$("#div-tit-interactiva h2").text("PASILLO");
		$("#div-conu-interactiva p").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend placerat quam, at vestibulum dolor laoreet a. Curabitur a dictum erat, eget efficitur eros. Sed tincidunt volutpat ornare. Curabitur dignissim erat in ligula faucibus porta. Donec orci lectus, sollicitudin non turpis quis, ullamcorper consectetur erat. Nulla ac lectus ut eros convallis consectetur at a quam. Donec vitae maximus felis. Nunc tincidunt nisi id augue consectetur, id luctus arcu dapibus. In ut facilisis nulla. Aliquam viverra a risus vitae commodo. Sed sit amet nibh interdum, porttitor purus quis, tempus orci. Suspendisse non velit molestie, faucibus risus at, ultrices enim. Morbi libero diam, bibendum eget tempor quis, dapibus et lacus. Etiam eu dui at arcu fermentum iaculis bibendum id velit. Vivamus porta vulputate lorem ac mattis.");
		$("#div-cond-interactiva p").html('Video');
	}

	function infoBasicaInteractivaBambuco(){
		$("#div-tit-interactiva h2").text("BAMBUCO");
		$("#div-conu-interactiva p").html("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend placerat quam, at vestibulum dolor laoreet a. Curabitur a dictum erat, eget efficitur eros. Sed tincidunt volutpat ornare. Curabitur dignissim erat in ligula faucibus porta. Donec orci lectus, sollicitudin non turpis quis, ullamcorper consectetur erat. Nulla ac lectus ut eros convallis consectetur at a quam. Donec vitae maximus felis. Nunc tincidunt nisi id augue consectetur, id luctus arcu dapibus. In ut facilisis nulla. Aliquam viverra a risus vitae commodo. Sed sit amet nibh interdum, porttitor purus quis, tempus orci. Suspendisse non velit molestie, faucibus risus at, ultrices enim. Morbi libero diam, bibendum eget tempor quis, dapibus et lacus. Etiam eu dui at arcu fermentum iaculis bibendum id velit. Vivamus porta vulputate lorem ac mattis.");
		$("#div-cond-interactiva p").html('Video');
	}

	function infoBasicaInstrumentos(){
		$("#div-tit-instrumentos h2").text("INSTRUMENTOS MUSICALES");
		$("#img-1").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-2").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-3").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-4").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-5").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-bandola").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-marrana").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-cuchara").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-guaracha").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#img-esterilla").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
	}

	function limpiarInfoInstrumentos(){
		$("#div-tit-instrumentos h2").empty();
		$("#div-des-instrumentos p").empty();
		$("#div-des-instrumentos img").attr("src", "");
	}

	function infoBasicaEscala(){
		$("#div-conu-general h2").text("ESCALA");
		$("#div-conu-general p").html("Una escala es una secuencia de notas musicales (sonidos), con un determinado orden de tonos y semitonos entre ellas, desde su tónica (primera nota de la escala), hasta su octava (repetición de la tónica a una octava de distancia ascendente). Estos sonidos son conocidos comúnmente como “grados de la escala”. <br><br> La distancia que hay entre dos sonidos por grado conjunto (sonidos adyacentes o consecutivos) de la escala se mide por tonos (T) y semitonos (S). ");
	}

	function limpiarInfoEscala(){
		$("#div-conu-general h2").empty();
		$("#div-conu-general p").html();
		$("#div-cond-general h2").empty();
		$("#div-cond-general p").html();
		$("#div-conu-general img").attr("src", "");
	}

	function creacionBotonesSalaGeneral(seccion){
		if(seccion == "escala"){
			$("#btn-cont-general-dos").append("<button class='btn btn-block btn-musica-s' id='btn-estructura' style='height: 100%;'>Estructura de la <br>Escala Mayor</button>");
			$("#btn-barra-uno").append("<button class='btn btn-block btn-musica-s' id='btn-escala-do'>Escala Do Mayor</button>");
			$("#btn-barra-dos").append("<button class='btn btn-block btn-musica-s' id='btn-escala-sol'>Escala Sol Mayor</button>");
			$("#btn-barra-tres").append("<button class='btn btn-block btn-musica-s' id='btn-escala-re'>Escala Re Mayor</button>");
		}
	}

	function infoEstructura(){
		$("#div-tit-general h2").text("ESTRUCTURA DE LA ESCALA MAYOR");
		$("#div-conu-general p").html("Está conformada por cinco intervalos (Distancias) de tono y dos de semitono, comprendidos entre ocho notas, y distribuidos de la siguiente manera entre los grados de la escala");
	}

	function infoDoMayor(){
		$("#div-tit-general h2").text("ESCALA DE DO MAYOR");
		$("#div-conu-general p").html("Diferenciación de tonos (T) y semitonos (S) entre cada uno de los grados.");
		$("#div-conu-general img").attr("src", $("#bloginfo").val() + "/musica/images/escala/Nota_Do_Mayor.jpg");
	}

	function infoSolMayor(){
		$("#div-tit-general h2").text("ESCALA DE SOL MAYOR");
		$("#div-conu-general p").html("Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota  fa# (Primer sostenido).");
		$("#div-conu-general img").attr("src", $("#bloginfo").val() + "/musica/images/escala/Nota_Sol_Mayor.jpg");
	}

	function infoReMayor(){
		$("#div-tit-general h2").text("ESCALA DE RE MAYOR");
		$("#div-conu-general p").html("Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota  do# (Segundo sostenido).");
		$("#div-conu-general img").attr("src", $("#bloginfo").val() + "/musica/images/escala/Nota_Re_Mayor.jpg");
	}

	function infoBasicaRitmo(){
		$("#div-tit-general h2").text("RITMO");
		$("#div-conu-general p").html("Duración de los sonidos musicales ordenados de acuerdo a la métrica de cada compás.");
		$("#div-cond-general h2").text("MÉTRICA");
		$("#div-cond-general p").html("Es la que define la estructura de cada compás en una pieza musical. Existen las métricas de compás simple, cuya división de pulso es binaria. Y las métricas de compás compuesto, cuya división de pulso es ternaria. En esta ocasión nos encargaremos de las métricas de compás simple.");
	}

	function infoBasicaAcordes(){
		$("#div-tit-general h2").text("¿QUÉ ES UN ACORDE?");
		$("#div-conu-general p").html("Un acorde está conformado por tres o más notas que suenan simultáneamente.<br><br>"+
			"Dentro de cada escala mayor encontramos una sucesión de acordes mayores.menores y disminuidos, que se forman a partir de cada uno de los grados de la escala, dichos grados están representados con números romanos: I grado, Il grado, IlI grado y así sucesivamente.<br><br>"+
			"Escala de Do Mayor con numeración por grados");
		$("#div-conu-general img").attr("src","delfkhekfh");
		$("#div-cond-general p").html("En esta ocasión veremos acordes de 3 sonidos llamados TRIADAS y de 4 sonidos llamados comúnmente CUATRIADAS, ambos para la tonalidad Mayor.");

	}


	$("#div-sala-general").on('click', 'button', function() {
		limpiarInfoEscala();
		switch($(this).attr("id")){
			case "btn-estructura":
			infoEstructura();
			break;
			case "btn-escala-do":
			infoDoMayor();
			break;
			case "btn-escala-sol":
			infoSolMayor();
			break;
			case "btn-escala-re":
			infoReMayor();
			break;
		}
	});

	$("#div-instrumentos").on('click', 'img', function() {
		$("#div-img-instrumentos").hide();
		$("#div-des-instrumentos").show();
		limpiarInfoInstrumentos();
		switch($(this).attr('id')) {
			case "img-marrana":
			$("#div-tit-instrumentos h2").text("MARRANA");
			$("#div-des-instrumentos p").html('Conocida también como zambumbía, puerca, farruco y puerca, es un tambor de fricción con varilla fija, el cual se fabrica con un calabazo o fruto seco de totumo,al que se le corta un sector para formarle boca en la parte superior; sobre esta boca, se coloca un aro de bejuco al que va atado un parche o cuero (puede ser de cerdo de monte, conejo, cordero o chivo) y éste, es atravesado por una varilla de madera, asegurada por dentro y por fuera. Este instrumento es empleado para tocar ritmos como rajaleñas y sanjuaneros, es muy popular en el departamento de Santander, en los conjuntos guabineros para la música del torbellino.  El nombre de este instrumento, se debe a la semejanza con el gruñido de un cerdo o marrano.<br>Ver: <a href="https://www.fundacionbat.com.co/instrumentos.php?IDDepartamento=52">Marrana 1</a> y <a href="http://www.ewakulak.com/index.php?option=com_content&task=view&id=437">Marrana 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=Ei2c9zp4tNU">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/marrana.png")
			break;
			case "img-cuchara":
			$("#div-tit-instrumentos h2").text("CUCHARAS");
			$("#div-des-instrumentos p").html('Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión (entrechocandolas por su parte convexa) por acción de las dos manos: la una, sujetándolas (con el dedo índice de separador) y la otra, entrechocándolas con los dedos, palma, dorso, antebrazo o codo. Este instrumento fue muy usado para amenizar fiestas y reuniones, la cual, era una práctica muy frecuente en las clases populares. El sonido de las cucharas es muy similar al de las castañuelas (aunque no suenan exactamente igual). Existen varias técnicas y maneras de ejecución de éste instrumento, una de ellas, es golpearlas como si fueran palillos, otra, es coger ambas con una mano, y golpearlas contra la rodilla y la otra mano.<br>Ver: <a href="ahttp://www.tamborileros.com/tradiberia/idifono1.htm">Cucharas 1</a> y <a href="http://canteradesonidos.blogspot.com/2014/07/las-cucharas-como-instrumento-musical.html">Cucharas 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=95Jhfy38QKk">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/cuchara.png")
			break;
			case "img-guaracha":
			$("#div-tit-instrumentos h2").text("GUARACHA");
			$("#div-des-instrumentos p").html('Su nombre proviene de un ave, la cual canta en coro entre hembras y machos. La guacharaca es un instrumento musical de rascado que se compone de dos partes: la guacharaca misma (cuya superficie es corrugada) y un trinche o peine (construido con alambre duro y mango de madera, el cual se usa para frotar o “rascar” la superficie corrugada de la guacharaca.<br>Ver: <a href="https://portalvallenato.net/2013/07/29/la-historia-de-la-guacharaca/">Historia de la guaracha</a> y <a href="http://blogs.eltiempo.com/vallenateando/2005/09/06/la-guacharaca/">Guaracha - El Tiempo</a><br>Imagen: <a href="https://www.google.com.co/search?q=guacharacas+instrumento+musical&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiti4em3KreAhWLvFMKHbyYBGwQ_AUIDigB&biw=1517&bih=695#imgrc=HHWh9SKhvbAjkM:">Imagen guaracha</a> <br>Audio y video: <a href="https://www.youtube.com/watch?v=tGrsesfTto8">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/guaracha.png")
			break;
			case "img-esterilla":
			$("#div-tit-instrumentos h2").text("ESTERILLA");
			$("#div-des-instrumentos p").html('Instrumento tradicional colombiano, construido con cañutos o trozos de bambú (en tre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.<br>Ver: <a href="https://culturatolimense.wordpress.com/category/instrumentos-folcloricos/">Esterilla 1</a> y <a href="https://www.google.com.co/search?q=esterillas+instrumento+musical&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiC_qTb2KreAhUxvFkKHYCJDwoQ_AUIDigB&biw=1517&bih=695#imgrc=f6HFNsIO75OWCM">Esterilla 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=jDsUWn4cnoQ">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/esterilla.png")
			break;
		}
	});
});