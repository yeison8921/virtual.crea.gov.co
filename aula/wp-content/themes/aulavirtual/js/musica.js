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
			$("#div-btn-mod-mus #btn-instrumentos").hide();
			$("#div-sala-teorica").show();
			limpiarInfoTeorica();
			infoSalaTeorica("GUABINA", "En el caso de la guabina, el sincretismo musical vocal - instrumental-coreografía está asociado al torbellino, el canto es el elemento diferenciador por su relativa independencia de la ejecución instrumental. A juicio de los críticos - generalmente literatos del pasillo, del fandanguillo, del valse y del bambuco - basados en las distintas piezas particulares que se han “escrito” en Tolima, Huila, Boyacá, Santander y Cundinamarca, mucho se puede decir de la guabina como derivación de distintos aires. Las numerosas confusiones que se presentan de las denominaciones de la guabina, todas corresponden a músicos del Tolima, Huila, Boyacá, Santander y Cundinamarca, unas y otras presentan similitudes estructurales, rítmicas y coreográficas con otros aires nacionales", "", "Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.", "guabina/cuchara.png");
			creacionBotonesSala("guabina-teorica");
			$("#div-btn-mod-mus button").data("data-sala", "teorica");
			$("#div-cua-sec-teo button").data("data-modulo", "guabina");
			break;
			case "btn-sala-interactiva":
			botonesLateralesSala("interactiva");
			limpiarInfoInteractiva();
			infoSalaInteractiva("GUABINA", "Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultivaba en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.<br><br>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.", "<div class='embed-responsive embed-responsive-16by9'>"+
				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/qv_quuy50Jo' allowfullscreen></iframe>"+
				"</div>", 1);
			creacionBotonesSala("interactiva");
			$("#div-btn-mod-mus button").data("data-sala", "interactiva");
			$("#div-cua-sec-int button").data("data-modulo", "guabina");
			//$("#div-btn-mod-mus #btn-instrumentos").show();
			$("#div-sala-interactiva").show();
			break;
			case "btn-sala-general":
			botonesLateralesSala("general");
			$("#div-btn-mod-mus button").data("data-sala", "general");
			$("#div-sala-general").show();
			limpiarInfoGeneral();
			infoEscalas("ESCALA", "Una escala es una secuencia de notas musicales (sonidos), con un determinado orden de tonos y semitonos entre ellas, desde su tónica (primera nota de la escala), hasta su octava (repetición de la tónica a una octava de distancia ascendente). Estos sonidos son conocidos comúnmente como “grados de la escala”. <br><br> La distancia que hay entre dos sonidos por grado conjunto (sonidos adyacentes o consecutivos) de la escala se mide por tonos (T) y semitonos (S).");
			creacionBotonesSala("escala");
			break;
		}
	});

	$("#div-cua-sec-teo").on('click', 'button', function() {
		$(this).removeClass("btn-musica-s").addClass("btn-musica-t");
		$("#div-cua-sec-teo button").not(this).removeClass().addClass("btn btn-block btn-musica-s");
		limpiarInfoTeorica();
		if($(this).data("data-modulo") == "guabina"){
			switch($(this).attr("id")){
				case "btn-ritmo-teorica":
				infoSalaTeorica("RITMO", "", "guabina/imagen_notas.jpg", "", "");
				break;
				case "btn-melodia-teorica":
				infoSalaTeorica("LA RUANA", "", "guabina/melodia_la_ruana.png", "ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.<br><br>"+
					"ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.<br><br>"+
					"CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.<br><br>"+
					"GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.", "");
				break;
				case "btn-armonia-teorica":
				infoSalaTeorica("LA RUANA", "", "guabina/armonia_la_ruana.jpg", "ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.<br><br>"+
					"ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.<br><br>"+
					"CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.<br><br>"+
					"GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.", "");
				break;
			}
		}
		if($(this).data("data-modulo") == "pasillo"){
			switch($(this).attr("id")){
				case "btn-ritmo-teorica":
				infoSalaTeorica("RITMO", "", "pasillo/ritmo.jpg", "", "pasillo/golpe_de_bajo.jpg");
				break;
				case "btn-melodia-teorica":
				infoSalaTeorica("MELODÍA Y ARMONÍA", "", "pasillo/cachipay_1.jpg", "", "pasillo/cachipay_2.jpg");
				break;
			}
		}
		if($(this).data("data-modulo") == "bambuco"){
			switch($(this).attr("id")){
				case "btn-ritmo-teorica":
				infoSalaTeorica("RITMO", "", "bambuco/golpes.png", "", "");
				break;
				case "btn-melodia-teorica":
				infoSalaTeorica("MELODÍA Y ARMONÍA", "", "bambuco/bochica_melodia_y_cifra_1.jpg", "", "bambuco/bochica_melodia_y_cifra_2.jpg");
				break;
			}
		}
	});

	$("#div-cua-sec-int").on('click', 'button', function() {
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-cua-sec-int button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		limpiarInfoInteractiva();
		if($(this).data('data-modulo') == "guabina"){
			switch($(this).attr("id")){
				case "btn-play-interactiva":
				infoSalaInteractiva("PLAY ALONG LA RUANA", "<div class='embed-responsive embed-responsive-16by9'>"+
					"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/10mzYSZ2zKc' allowfullscreen></iframe>"+
					"</div>", "", 2);
				break;
				case "btn-referentes-interactiva":
				infoSalaInteractiva("REFERENTES GUABINA", "Los Guaduales - Jorge Villamil<br>Guabinita Santandereana - Pedro Morales Pino<br>A bordo de tu voz - Luz marina Posada", "", 2)
				break;
			}
		}
		if($(this).data('data-modulo') == "pasillo"){
			switch($(this).attr("id")){
				case "btn-play-interactiva":
				infoSalaInteractiva("PLAY ALONG CACHIPAY", "video", "", 2);
				break;
				case "btn-referentes-interactiva":
				infoSalaInteractiva("REFERENTES PASILLO", "Aires de mi Tierra - Gustavo Gómez Ardila<br>La Gata Golosa - Fulgencio García<br>Amalia ... Joaquín Arias<br>Atardecer ... Carlos Viecco<br>Cachipay ... D.R.A.<br>Chispazo ... Pedro Morales Pino<br>Desde Lejos ... Bonifacio Bautista<br>El Pereirano ... Camilo Bedoya", "", 2)
				break;
			}
		}
		if($(this).data('data-modulo') == "bambuco"){
			switch($(this).attr("id")){
				case "btn-play-interactiva":
				infoSalaInteractiva("PLAY ALONG BOCHICA", "video", "", 2);
				break;
				case "btn-referentes-interactiva":
				infoSalaInteractiva("REFERENTES BAMBUCO", "Bambuquisimo ... León Cardona<br>Bachue ... Francisco Cristancho<br>Bohica ... Francisco Cristancho<br>Como P ́desenguayabar ... Jorge Olaya<br>El Sotareño ... Federico Diago", "", 2)
				break;
			}
		}
	});

	function botonesLateralesSala(sala){
		$("#div-btn-mod-mus").html();
		$("#div-btn-mod-mus").html('<br>'+
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

	/*Inicio Sala teorica*/
	function infoSalaTeorica(title, mainText, mainImg, secText, secImg){
		$("#div-pri-sec-teo h2").html(title);
		$("#div-seg-sec-teo p").html(mainText);
		if(mainImg != ""){
			$("#div-seg-sec-teo img").attr("src", $("#bloginfo").val() + "/musica/images/"+mainImg);
		}
		if(secImg != ""){
			$("#div-ter-sec-teo img").attr("src", $("#bloginfo").val() + "/musica/images/"+secImg);
		}
		$("#div-ter-sec-teo p").html(secText);
	}
	function limpiarInfoTeorica(){
		$("#div-pri-sec-teo h2").html("");
		$("#div-seg-sec-teo p").html("");
		$("#div-ter-sec-teo p").html("");
		$("#div-seg-sec-teo img").attr("src", "");
		$("#div-ter-sec-teo img").attr("src", "");
	}

	/*Fin Sala teorica*/

	/*Inicio Sala interactiva*/
	function infoSalaInteractiva(title, text, video, grid){
		$("#div-pri-sec-int h2").html(title);
		if(grid == 1){
			$("#div-seg-sec-int").removeClass().addClass("col-lg-6 col-md-6");
			$("#div-seg-sec-int").css("height", "55%");
			$("#div-seg-sec-int p").html(text);
			$("#div-ter-sec-int").removeClass().addClass("col-lg-6 col-md-6");
			$("#div-ter-sec-int").css("height", "55%");
			$("#div-ter-sec-int p").html(video);
		}else{
			$("#div-seg-sec-int").removeClass();
			$("#div-seg-sec-int").css("height", "");
			$("#div-ter-sec-int").removeClass().addClass("col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8");
			$("#div-ter-sec-int").css("height", "55%");
			$("#div-ter-sec-int p").html(text);
		}
	}

	function limpiarInfoInteractiva(){
		$("#div-pri-sec-int h2").html("");
		$("#div-seg-sec-int p").html("");
		$("#div-ter-sec-int p").html("");
	}

	/*Fin Sala interactiva*/

	/*Inicio Sala general*/
	function infoEscalas(title, text, img=""){
		$("#div-pri-sec-gen h2").text(title);
		$("#div-pri-sec-gen p").html(text);
		if(img != "")
			$("#div-pri-sec-gen img").attr("src", $("#bloginfo").val() + "/musica/images/escala/"+img);
	}

	function infoRitmo(mainTitle, mainText, mainImg, secTitle, secText, secImg, barText, buttonBar=0, buttons=0){
		$("#div-pri-sec-gen h2").text(mainTitle);
		$("#div-pri-sec-gen p").html(mainText);
		$("#div-seg-sec-gen h2").text(secTitle);
		$("#div-seg-sec-gen p").html(secText);
		if(barText == ""){
			$("#div-bar-gen p").html("");
		}else{
			$("#div-bar-gen").append(barText);
		}
		if(mainImg != ""){
			$("#div-pri-sec-gen img").attr("src", $("#bloginfo").val() + "/musica/images/ritmo/"+mainImg);
		}
		if(secImg != ""){
			$("#div-seg-sec-gen img").attr("src", $("#bloginfo").val() + "/musica/images/ritmo/"+secImg);
		}
		if(buttonBar == 0){
			$("#div-bar-gen button").hide();

		}else{
			$("#div-bar-gen button").show();
		}
		if(buttons == 0){
			$("#div-pri-btn-sec-gen button").hide();
			$("#div-seg-btn-sec-gen button").hide();
			$("#div-ter-btn-sec-gen button").hide();
		}else{
			$("#div-pri-btn-sec-gen button").show();
			$("#div-seg-btn-sec-gen button").show();
			$("#div-ter-btn-sec-gen button").show();
		}
	}

	function infoAcordes(title, mainText, mainImg, secText, secImg){
		$("#div-pri-sec-gen h2").text(title);
		$("#div-pri-sec-gen p").html(mainText);
		$("#div-seg-sec-gen p").html(secText);
		if(mainImg != ""){
			$("#div-pri-sec-gen img").attr("src", $("#bloginfo").val() + "/musica/images/acordes/"+mainImg);
		}
		if(secImg != ""){
			$("#div-seg-sec-gen img").attr("src", $("#bloginfo").val() + "/musica/images/acordes/"+secImg);
		}
	}

	function infoArmonicas(title, text, img, button){
		$("#div-pri-sec-gen h2").text(title);
		$("#div-pri-sec-gen p").html(text);
		if(img != ""){
			$("#div-pri-sec-gen img").attr("src", $("#bloginfo").val() + "/musica/images/funciones/"+img);
		}
		if(button == ""){
			$("#div-bar-gen button").hide();
		}else{
			$("#div-bar-gen button").attr("id", button)
			$("#div-bar-gen button").show();
		}
	}

	function infoFiguras(){
		$("#div-pri-sec-gen p").html("Todas las figuras musicales tienen un número que las representa así:");
		$("#div-pri-sec-gen p").html("<br><br><br><div class='col-lg-6 col-md-6' style='font-size: 25px;'>1 = <img src='"+ $("#bloginfo").val() + "/musica/images/ritmo/redonda.png' height='45'>   Redonda</div>"+
			"<div class='col-lg-6 col-md-6' style='font-size: 25px;'>8 = <img src='"+ $("#bloginfo").val() + "/musica/images/ritmo/corchea.png' height='90'>   Corchea</div>"+
			"<div class='col-lg-6 col-md-6' style='font-size: 25px;'>2 = <img src='"+ $("#bloginfo").val() + "/musica/images/ritmo/blanca.png' height='90'>   Blanca</div>"+
			"<div class='col-lg-6 col-md-6' style='font-size: 25px;'>16 = <img src='"+ $("#bloginfo").val() + "/musica/images/ritmo/semicorchea.png' height='90'>   Semicorchea</div>"+
			"<div class='col-lg-6 col-md-6' style='font-size: 25px;'>4 = <img src='"+ $("#bloginfo").val() + "/musica/images/ritmo/negra.png' height='90'>   Negra</div>");
	}

	function limpiarInfoGeneral(){
		$("#div-pri-sec-gen h2").html("");
		$("#div-pri-sec-gen p").html("");
		$("#div-pri-sec-gen img").attr("src", "");
		$("#div-seg-sec-gen h2").html("");
		$("#div-seg-sec-gen p").html("");
		$("#div-seg-sec-gen img").attr("src", "");
		$("#div-seg-btn-sec-gen a div").remove();
	}
	/*Fin Sala general*/


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

	function creacionBotonesSala(seccion){
		if(seccion == "guabina-teorica"){
			$("#div-cua-sec-teo").html("<div class='col-lg-3'><button class='btn btn-block btn-musica-s' id='btn-ritmo-teorica'>Ritmo</button></div>"+
				"<div class='col-lg-offset-1 col-lg-3'><button class='btn btn-block btn-musica-s' id='btn-melodia-teorica'>Melodía</button></div>"+
				"<div class='col-lg-offset-1 col-lg-3'><button class='btn btn-block btn-musica-s' id='btn-armonia-teorica'>Armonía</button></div>");
		}
		if(seccion == "pasillo-teorica" || seccion == "bambuco-teorica"){
			$("#div-cua-sec-teo").html("<div class='col-lg-offset-2 col-lg-4'><button class='btn btn-block btn-musica-s' id='btn-ritmo-teorica'>Ritmo</button></div>"+
				"<div class='col-lg-4'><button class='btn btn-block btn-musica-s' id='btn-melodia-teorica'>Melodía</button></div>");
		}
		if(seccion == "interactiva"){
			$("#div-cua-sec-int").html("<div class='col-lg-offset-2 col-lg-4 col-md-offset-2 col-md-4'><button class='btn btn-block btn-musica-s' id='btn-play-interactiva'>Play along</button></div>"+
				"<div class='col-lg-4 col-md-4'><button class='btn btn-block btn-musica-s' id='btn-referentes-interactiva'>Referentes</button></div>");
		}
		if(seccion == "escala"){
			$("#div-bar-gen").html("<button class='btn btn-block btn-musica-s' id='btn-escala-do' style='height: 12%;'>Escala Do Mayor</button>"+
				"<button class='btn btn-block btn-musica-s' id='btn-escala-sol' style='height: 12%;'>Escala Sol Mayor</button>"+
				"<button class='btn btn-block btn-musica-s' id='btn-escala-re' style='height: 12%;'>Escala Re Mayor</button>");
			$("#div-qui-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-estructura' style='height: 100%;'>Estructura de la <br>Escala Mayor</button>");
		}
		if(seccion == "ritmo"){
			$("#div-cua-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-metricas' style='height: 100%;'>Métricas de<br>compas simple</button>");
			$("#div-sex-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-figuras' style='height: 100%;'>Figuras musicales</button>");
			$("#div-bar-gen").html("<button class='btn btn-block btn-musica-s' id='btn-metricas-utilizadas' style='height: 12%; display: none;'>Métricas<br>más utiilizadas</button>");
			$("#div-pri-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-dos-cuartos' style='height: 80%; display: none;'>2/4</button>");
			$("#div-seg-btn-sec-gen").append("<button class='btn btn-block btn-musica-s' id='btn-tres-cuartos' style='height: 80%; display: none;'>3/4</button>");
			$("#div-ter-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-cuatro-cuartos' style='height: 80%; display: none;'>4/4</button>");
		}
		if(seccion == "acordes"){
			$("#div-cua-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-triadas' style='height: 100%;'>Triadas</button>");
			$("#div-sex-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-cuatriadas' style='height: 100%;'>Cuatriadas</button>");
		}
		if(seccion == "funciones"){
			$("#div-cua-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-tonica' style='height: 100%;'>Tónica</button>");
			$("#div-qui-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-subdominante' style='height: 100%;'>Subdominante</button>");
			$("#div-sex-btn-sec-gen").html("<button class='btn btn-block btn-musica-s' id='btn-dominante' style='height: 100%;'>Dominante</button>");
			$("#div-bar-gen").html("<button class='btn btn-block btn-musica-s' style='height: 12%; display: none;'>Acordes</button>");
		}
	}

	$("#div-sala-general").on('click', 'button', function() {
		limpiarInfoGeneral();
		$(this).removeClass("btn-musica-s").addClass("btn-musica-t");
		$("#div-ter-sec-gen button").not(this).removeClass().addClass("btn btn-block btn-musica-s");
		$("#div-cua-sec-gen button").not(this).removeClass().addClass("btn btn-block btn-musica-s");
		$("#div-bar-gen button").not(this).removeClass().addClass("btn btn-block btn-musica-s");
		switch($(this).attr("id")){
			case "btn-estructura":
			infoEscalas("ESTRUCTURA DE LA ESCALA MAYOR", "Está conformada por cinco intervalos (Distancias) de tono y dos de semitono, comprendidos entre ocho notas, y distribuidos de la siguiente manera entre los grados de la escala");
			break;
			case "btn-escala-do":
			infoEscalas("ESCALA DE DO MAYOR", "Diferenciación de tonos (T) y semitonos (S) entre cada uno de los grados.", "Nota_Do_Mayor.jpg" );
			break;
			case "btn-escala-sol":
			infoEscalas("ESCALA DE SOL MAYOR", "Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota  fa# (Primer sostenido).", "Nota_Sol_Mayor.jpg");
			break;
			case "btn-escala-re":
			infoEscalas("ESCALA DE RE MAYOR", "Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota  do# (Segundo sostenido).", "Nota_Re_Mayor.jpg");
			break;
			case "btn-metricas":
			infoRitmo("", "<br><br>La métrica está representada por un fraccionario que aparece al inicio de la pieza musical."+
				"<br><br>El número que está en la parte superior del fraccionario indica el número de pulsos por compás", "fraccion.png", "", "<br><br>El número que está en la parte inferior del fraccionario indica la figura que ocupa cada uno de esos pulsos en compás simple.", "", "", 1, "");
			break;
			case "btn-metricas-utilizadas":
			infoRitmo("", "En cada una de las métricas existen unidades de compás, pulso, primera y segunda división.<br><br>"+
				"A continuación, veremos las métricas más utilizadas en compás simple.", "", "", "", "", "", 1, 1);
			break;
			case "btn-dos-cuartos":
			infoRitmo("", "En cada una de las métricas existen unidades de compás, pulso, primera y segunda división.<br><br>"+
				"A continuación, veremos las métricas más utilizadas en compás simple.", "", "", "Métrica en la que se encuentran dos pulsos de negra por compás.<br>"+
				"Unidad de compás: blanca.<br>"+
				"Unidad de pulso: negra.<br>"+
				"Unidad de primera división: corchea.<br>"+
				"Unidad de segunda división: semicorchea.", "", "", 1, 1);

			break;
			case "btn-tres-cuartos":
			infoRitmo("", "En cada una de las métricas existen unidades de compás, pulso, primera y segunda división.<br><br>"+
				"A continuación, veremos las métricas más utilizadas en compás simple.", "", "", "Métrica en la que se encuentran tres pulsos de negra por compás.<br>"+
				"Unidad de compás: blanca con puntillo.<br>"+
				"Unidad de pulso: negra.<br>"+
				"Unidad de primera división: corchea.<br>"+
				"Unidad de segunda división: semicorchea.", "", "", 1, 1);
			break;
			case "btn-cuatro-cuartos":
			infoRitmo("", "En cada una de las métricas existen unidades de compás, pulso, primera y segunda división.<br><br>"+
				"A continuación, veremos las métricas más utilizadas en compás simple.", "", "", "Métrica en la que se encuentran cuatro pulsos de negra por compás.<br>"+
				"Unidad de compás: redonda.<br>"+
				"Unidad de pulso: negra.<br>"+
				"Unidad de primera división: corchea.<br>"+
				"Unidad de segunda división: semicorchea.<br>", "", "<p><br>También encontramos las métricas:<br>"+
				"2/16, 3/16, 4/16<br>"+
				"2/8, 3/8, 4/8<br>"+
				"2/2, 3/2, 4/2</p>", 1, 1);
			break;
			case "btn-figuras":
			infoFiguras();
			break;
			case "btn-triadas":
			$("#div-seg-btn-sec-gen").data("data-tema", "triadas");
			$("#ref-ade-pag").html("<div class='fd'></div>");
			$("#ref-ade-pag").data("data-pagina", "dos");
			infoAcordes("TRIADAS", "Acordes TRIADAS: Entre los sonidos de cada acorde existe un intervalo de 3 quedando conformado por una nota base, un intervalo de tercera y un intervalo de quinta.", "triadas.png", "<br><br>En la imagen anterior tenemos la escala de Do mayor, los números ubicados debajo de cada nota, simbolizan los grados de la escala, que como habiamos dicho ante riormente también son representados con números romanos.<br><br>"+
				"Encontramos asi mismo en esta imagen, que el primer, tercer y quinto grado de la escala conforman el primer acorde de triada de la escala mayor.", "");
			break;
			case "btn-cuatriadas":
			$("#div-seg-btn-sec-gen").data("data-tema", "cuatriadas");
			$("#ref-ade-pag").html("<div class='fd'></div>");
			$("#ref-ade-pag").data("data-pagina", "dos");
			infoAcordes("", "Estos acordes se construyen sobre la misma base de los acordes TRIADA vistos en los ejemplos anteriores. Adicionalmente se agrega un intervalo más de tercera, para quedar así con cuatro sonidos. Así, entre los sonidos de cada acorde existe un intervalo de 3ª, quedando conformado por una nota base, un intervalo de tercera, un intervalo de quinta y un intervalo de séptima.<br><br>"+
				"A continuación encontraremos en el primer gráfico la construcción de acordes de cuatro sonidos  y en el siguiente gráfico  sus respectivos nombres.<br><br>"+
				"Acordes de cuatro sonidos de la escala de Do Mayor con numeración y carácter.", "cuatriadas.png", "", "");
			break;
			case "btn-tonica":
			infoArmonicas("TÓNICA", "Representada por el número romano I, debido a que su nota fundamental es el primer grado de la escala. Se denomina “Tónica” porque es el acorde del primer grado el que nos indica cuál es la tonalidad.", "tonica.png", "btn-acordes-tonica");
			break;
			case "btn-subdominante":
			infoArmonicas("SUB DOMINANTE", "Representada por el número romano IV, debido a que su nota fundamental es el cuarto grado de la escala.", "subdominante.png", "btn-acordes-subdominante");
			break;
			case "btn-dominante":
			infoArmonicas("DOMINANTE", "Representada por el número romano V, debido a que su nota fundamental es el quinto grado de la escala.", "dominante.png", "btn-acordes-dominante");
			break;
			case "btn-acordes-tonica":
			infoArmonicas("TÓNICA", "En esta región se ubicarán los acordes de I, iii y vi grado por contener dentro de su estructura la nota “mi”, que es la que le da el carácter de Mayor al acorde de Tónica. Auditivamente  estos acordes se sienten como el punto de reposo, descanso o final.", "acordes_tonica.png", "acordes-tonica");
			break;
			case "btn-acordes-subdominante":
			infoArmonicas("SUB DOMINANTE", "Además del IV grado incluirá el acorde del ii grado. Auditivamente son acordes que pueden conducir tanto a los de tónica como a los de dominante.", "acordes_subdominante.png", "acordes-subdominante");
			break;
			case "btn-acordes-dominante":
			infoArmonicas("DOMINANTE", "Estará conformada también por los acordes del V y vii grado disminuido. Auditivamente estos acordes ayudan a definir la tonalidad ya que crean una tensión que resuelve generalmente a la tónica.", "acordes_dominante.png", "acordes-dominante");
			break;
		}
	});
	//
	$("#div-btn-mod-mus").on('click', 'button', function() {
		$(this).removeClass("btn-musica-s").addClass("btn-musica-t");
		$("#div-btn-mod-mus .flecha-musica").not(this).hide();
		$($(this).parent().parent().children()[0]).children(".flecha-musica").show();
		$("#div-btn-mod-mus button").not(this).removeClass().addClass("btn btn-block btn-musica-s");
		$(".contenido").hide();
		if($(this).data('data-sala') == "teorica"){
			limpiarInfoTeorica();
			$("#div-cua-sec-teo button").removeClass().addClass("btn btn-block btn-musica-s");
			$("#div-sala-teorica").show();
			switch($(this).attr('id')){
				case "btn-guabina":
				creacionBotonesSala("guabina-teorica");
				$("#div-cua-sec-teo button").data("data-modulo", "guabina");
				infoSalaTeorica("GUABINA", "En el caso de la guabina, el sincretismo musical vocal - instrumental-coreografía está asociado al torbellino, el canto es el elemento diferenciador por su relativa independencia de la ejecución instrumental. A juicio de los críticos - generalmente literatos del pasillo, del fandanguillo, del valse y del bambuco - basados en las distintas piezas particulares que se han “escrito” en Tolima, Huila, Boyacá, Santander y Cundinamarca, mucho se puede decir de la guabina como derivación de distintos aires. Las numerosas confusiones que se presentan de las denominaciones de la guabina, todas corresponden a músicos del Tolima, Huila, Boyacá, Santander y Cundinamarca, unas y otras presentan similitudes estructurales, rítmicas y coreográficas con otros aires nacionales", "", "Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.", "guabina/cuchara.png");
				break;
				case "btn-pasillo":
				creacionBotonesSala("pasillo-teorica");
				$("#div-cua-sec-teo button").data("data-modulo", "pasillo");
				infoSalaTeorica("PASILLO", "Este es otro de los bailes folclóricos andinos que se hicieron populares desde el siglo XIX. Es una de las variantes del vals europeo, convertido en aire de moda, con ritmo más rápido, o sea pasillo.<br>"+
					"Pasillos del estilo de “Rondinella”, “La gata golosa” y “Patasdilo”, eran los más solicitados por las personas y los más escuchados en las tertulias santafereñas.<br>"+
					"Hay dos tipos de pasillo: el fiestero instrumental, que es el más característico de las fiestas populares bailes de casorio y de garrote y el pasillo lento, generalmente vocal, que trata en sus letras temas de amor, desilusión, luto y nostalgia."+
					"Según el historiador Javier Ocampo, el pasillo colombiano presenta semejanzas con el vals de Venezuela, el sanjuanito de Ecuador y el valsecito de Costa Rica.", "", "La guaracha es un instrumento musical idiófono de raspado utilizado mayormente en el vallenato. Se fabrica, entre otros, de caña o de lata.", "guabina/instrumento.jpg");
				break;
				case "btn-bambuco":
				creacionBotonesSala("bambuco-teorica");
				$("#div-cua-sec-teo button").data("data-modulo", "bambuco");
				infoSalaTeorica("BAMBUCO", "El bambuco es el aire folklórico mestizo más típico de la zona andina colombiana, y es por esencia la danza nacional más representativa. Su instrumento fundamental es el tiple.<br><br>"+
					"Carácter Poli rítmico Hay acuerdo entre los folclóricos sobre el carácter poli rítmico del bambuco. Actualmente se habla de las fórmulas ¾ y 6/8, muy conocidas por nuestros trovadores, tipleros y guitarristas, que presentan grandes dificultades cuando se quiere orquestar debido a la síncopa.<br>"+
					"Otro tipo de bambuco es el instrumental, que se toca en estudiantina (agrupación musical de cuerdas que emplea el tiple, la bandola y la guitarra).", "", "La esterilla es un instrumento tradicional colombiano, construido con cañutos o trozos de bambú (entre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.", "bambuco/esterilla.jpg")
				break;
			}
		}
		if($(this).data('data-sala') == "interactiva"){
			limpiarInfoInteractiva();
			$("#div-cua-sec-int button").removeClass().addClass("btn btn-block btn-musica-s");
			//creacionBotonesSala("interactiva");
			$("#div-sala-interactiva").show();
			/*if($(this).attr('id') == "btn-instrumentos"){
				$("#div-instrumentos").show();
				$("#div-img-instrumentos").show();
				$("#div-des-instrumentos").hide();
			}*/
			switch($(this).attr('id')) {
				case "btn-guabina":
				$("#div-cua-sec-int button").data("data-modulo", "guabina");
				infoSalaInteractiva("GUABINA", "Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultivaba en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.<br><br>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.", "<div class='embed-responsive embed-responsive-16by9'>"+
					"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/qv_quuy50Jo' allowfullscreen></iframe>"+
					"</div>", 1);
				break;
				case "btn-pasillo":
				$("#div-cua-sec-int button").data("data-modulo", "pasillo");
				infoSalaInteractiva("PASILLO", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend placerat quam, at vestibulum dolor laoreet a. Curabitur a dictum erat, eget efficitur eros. Sed tincidunt volutpat ornare. Curabitur dignissim erat in ligula faucibus porta. Donec orci lectus, sollicitudin non turpis quis, ullamcorper consectetur erat. Nulla ac lectus ut eros convallis consectetur at a quam. Donec vitae maximus felis. Nunc tincidunt nisi id augue consectetur, id luctus arcu dapibus. In ut facilisis nulla. Aliquam viverra a risus vitae commodo. Sed sit amet nibh interdum, porttitor purus quis, tempus orci. Suspendisse non velit molestie, faucibus risus at, ultrices enim. Morbi libero diam, bibendum eget tempor quis, dapibus et lacus. Etiam eu dui at arcu fermentum iaculis bibendum id velit. Vivamus porta vulputate lorem ac mattis.", "video", 1);
				break;
				case "btn-bambuco":
				$("#div-cua-sec-int button").data("data-modulo", "bambuco");
				infoSalaInteractiva("BAMBUCO", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eleifend placerat quam, at vestibulum dolor laoreet a. Curabitur a dictum erat, eget efficitur eros. Sed tincidunt volutpat ornare. Curabitur dignissim erat in ligula faucibus porta. Donec orci lectus, sollicitudin non turpis quis, ullamcorper consectetur erat. Nulla ac lectus ut eros convallis consectetur at a quam. Donec vitae maximus felis. Nunc tincidunt nisi id augue consectetur, id luctus arcu dapibus. In ut facilisis nulla. Aliquam viverra a risus vitae commodo. Sed sit amet nibh interdum, porttitor purus quis, tempus orci. Suspendisse non velit molestie, faucibus risus at, ultrices enim. Morbi libero diam, bibendum eget tempor quis, dapibus et lacus. Etiam eu dui at arcu fermentum iaculis bibendum id velit. Vivamus porta vulputate lorem ac mattis.", "video", 1);
				break;
				case "btn-instrumentos":
				infoBasicaInstrumentos();
				$("#div-des-instrumentos").hide();
				break;
			}
		}
		if($(this).data('data-sala') == "general"){
			limpiarInfoGeneral();
			$("#div-sala-general button").remove(".btn");
			$("#div-cua-sec-gen button").removeClass().addClass("btn btn-block btn-musica-s");
			$("#div-sala-general").show();
			switch($(this).attr('id')){
				case "btn-escala":
				infoEscalas("ESCALA", "Una escala es una secuencia de notas musicales (sonidos), con un determinado orden de tonos y semitonos entre ellas, desde su tónica (primera nota de la escala), hasta su octava (repetición de la tónica a una octava de distancia ascendente). Estos sonidos son conocidos comúnmente como “grados de la escala”. <br><br> La distancia que hay entre dos sonidos por grado conjunto (sonidos adyacentes o consecutivos) de la escala se mide por tonos (T) y semitonos (S).");
				creacionBotonesSala("escala");
				break;
				case "btn-ritmo":
				infoRitmo("RITMO", "Duración de los sonidos musicales ordenados de acuerdo a la métrica de cada compás.", "", "MÉTRICA", "Es la que define la estructura de cada compás en una pieza musical. Existen las métricas de compás simple, cuya división de pulso es binaria. Y las métricas de compás compuesto, cuya división de pulso es ternaria. En esta ocasión nos encargaremos de las métricas de compás simple.", "", "");
				creacionBotonesSala("ritmo");
				break;
				case "btn-acordes":
				infoAcordes("¿QUÉ ES UN ACORDE?", "Un acorde está conformado por tres o más notas que suenan simultáneamente.<br><br>"+
					"Dentro de cada escala mayor encontramos una sucesión de acordes mayores.menores y disminuidos, que se forman a partir de cada uno de los grados de la escala, dichos grados están representados con números romanos: I grado, Il grado, IlI grado y así sucesivamente.<br><br>"+
					"Escala de Do Mayor con numeración por grados", "Escala_Do_mayor.png", "<br><br><br><br>En esta ocasión veremos acordes de 3 sonidos llamados TRIADAS y de 4 sonidos llamados comúnmente CUATRIADAS, ambos para la tonalidad Mayor.", "");
				creacionBotonesSala("acordes");
				break;
				case "btn-funciones":
				infoArmonicas("FUNCIONES ARMÓNICAS", "Las funciones armónicas son regiones de la tonalidad que nos permiten entender la relación existente entre los acordes que la componen.<br><br>"+
					"Existen tres funciones armónicas tanto en tonalidad Mayor como en tonalidad menor.", "", "");
				creacionBotonesSala("funciones");
				break;
			}
		}
	});
	//
	$("#div-instrumentos").on('click', 'img', function() {
		$("#div-img-instrumentos").hide();
		$("#div-des-instrumentos").show();
		limpiarInfoInstrumentos();
		switch($(this).attr('id')) {
			case "img-marrana":
			$("#div-tit-instrumentos h2").text("MARRANA");
			$("#div-des-instrumentos p").html('Conocida también como zambumbía, puerca, farruco y puerca, es un tambor de fricción con varilla fija, el cual se fabrica con un calabazo o fruto seco de totumo,al que se le corta un sector para formarle boca en la parte superior; sobre esta boca, se coloca un aro de bejuco al que va atado un parche o cuero (puede ser de cerdo de monte, conejo, cordero o chivo) y éste, es atravesado por una varilla de madera, asegurada por dentro y por fuera. Este instrumento es empleado para tocar ritmos como rajaleñas y sanjuaneros, es muy popular en el departamento de Santander, en los conjuntos guabineros para la música del torbellino.  El nombre de este instrumento, se debe a la semejanza con el gruñido de un cerdo o marrano.<br>Ver: <a href="https://www.fundacionbat.com.co/instrumentos.php?IDDepartamento=52">Marrana 1</a> y <a href="http://www.ewakulak.com/index.php?option=com_content&task=view&id=437">Marrana 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=Ei2c9zp4tNU">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/marrana.png");
			break;
			case "img-cuchara":
			$("#div-tit-instrumentos h2").text("CUCHARAS");
			$("#div-des-instrumentos p").html('Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión (entrechocandolas por su parte convexa) por acción de las dos manos: la una, sujetándolas (con el dedo índice de separador) y la otra, entrechocándolas con los dedos, palma, dorso, antebrazo o codo. Este instrumento fue muy usado para amenizar fiestas y reuniones, la cual, era una práctica muy frecuente en las clases populares. El sonido de las cucharas es muy similar al de las castañuelas (aunque no suenan exactamente igual). Existen varias técnicas y maneras de ejecución de éste instrumento, una de ellas, es golpearlas como si fueran palillos, otra, es coger ambas con una mano, y golpearlas contra la rodilla y la otra mano.<br>Ver: <a href="ahttp://www.tamborileros.com/tradiberia/idifono1.htm">Cucharas 1</a> y <a href="http://canteradesonidos.blogspot.com/2014/07/las-cucharas-como-instrumento-musical.html">Cucharas 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=95Jhfy38QKk">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/cuchara.png");
			break;
			case "img-guaracha":
			$("#div-tit-instrumentos h2").text("GUARACHA");
			$("#div-des-instrumentos p").html('Su nombre proviene de un ave, la cual canta en coro entre hembras y machos. La guacharaca es un instrumento musical de rascado que se compone de dos partes: la guacharaca misma (cuya superficie es corrugada) y un trinche o peine (construido con alambre duro y mango de madera, el cual se usa para frotar o “rascar” la superficie corrugada de la guacharaca.<br>Ver: <a href="https://portalvallenato.net/2013/07/29/la-historia-de-la-guacharaca/">Historia de la guaracha</a> y <a href="http://blogs.eltiempo.com/vallenateando/2005/09/06/la-guacharaca/">Guaracha - El Tiempo</a><br>Imagen: <a href="https://www.google.com.co/search?q=guacharacas+instrumento+musical&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiti4em3KreAhWLvFMKHbyYBGwQ_AUIDigB&biw=1517&bih=695#imgrc=HHWh9SKhvbAjkM:">Imagen guaracha</a> <br>Audio y video: <a href="https://www.youtube.com/watch?v=tGrsesfTto8">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/guaracha.png");
			break;
			case "img-esterilla":
			$("#div-tit-instrumentos h2").text("ESTERILLA");
			$("#div-des-instrumentos p").html('Instrumento tradicional colombiano, construido con cañutos o trozos de bambú (en tre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.<br>Ver: <a href="https://culturatolimense.wordpress.com/category/instrumentos-folcloricos/">Esterilla 1</a> y <a href="https://www.google.com.co/search?q=esterillas+instrumento+musical&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiC_qTb2KreAhUxvFkKHYCJDwoQ_AUIDigB&biw=1517&bih=695#imgrc=f6HFNsIO75OWCM">Esterilla 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=jDsUWn4cnoQ">Youtube</a>');
			$("#div-des-instrumentos img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/esterilla.png");
			break;
		}
	});
	//

	$("#div-ter-sec-gen").on('click', 'a', function() {
		limpiarInfoGeneral();
		creacionBotonesSala("acordes");
		if($("#div-seg-btn-sec-gen").data("data-tema") == "triadas"){
			switch($(this).data("data-pagina")){
				case "uno":
				infoAcordes("TRIADAS", "Acordes TRIADAS: Entre los sonidos de cada acorde existe un intervalo de 3 quedando conformado por una nota base, un intervalo de tercera y un intervalo de quinta.", "triadas.png", "<br><br>En la imagen anterior tenemos la escala de Do mayor, los números ubicados debajo de cada nota, simbolizan los grados de la escala, que como habiamos dicho ante riormente también son representados con números romanos.<br><br>"+
					"Encontramos asi mismo en esta imagen, que el primer, tercer y quinto grado de la escala conforman el primer acorde de triada de la escala mayor.", "");
				$("#ref-ade-pag").data("data-pagina", "dos");
				$("#ref-ade-pag").html("<div class='fd'></div>");
				break;
				case "dos":
				infoAcordes("", 'De esta manera Do es la primera nota de la triada y se llamars "Tónica".<br>'+
					'La nota del medio es Mi y es el tercer grado de la escala de Do mayor, su nombre "Mediante".<br>'+
					'Y la quinta nota, Sol quien a su vez es el quinto grado de la escala de Do Mayor tiene por nombre "Dominante"'+
					'Vemos también en esta imagen que la distancia que se genera entre I y III grado y III y V grado es un intervalo de tercera, y que entre el II y el V grado hay un intervalo de quinta.<br>'+
					'La relación entre las notas en el acorde y la clase de intervalos que se crean (mayores o menores), te dicen que clase de acorde triada estás tocando, mayor, menor o disminuido.<br><br>'+
					'Intervalos que se forman en la escala de Do mayor', "triadas_2.png", "", "");
				$("#ref-ade-pag").data("data-pagina", "tres");
				$("#ref-ade-pag").html("<div class='fd'></div>");
				$("#ref-atr-pag").data("data-pagina", "uno");
				$("#ref-atr-pag").html("<div class='fi'></div>");
				break;
				case "tres":
				infoAcordes("", "Intervalos en los acordes mayores, menores y disminuidos que se forman en la escala Mayor.", "triadas_3.png", "Acordes de tres sonidos (Triadas) de la escala de Do Mayor con numeración y carácter", "triadas_4.png");
				$("#ref-ade-pag").data("data-pagina", "cuatro");
				$("#ref-ade-pag").html("<div class='fd'></div>");
				$("#ref-atr-pag").data("data-pagina", "dos");
				$("#ref-atr-pag").html("<div class='fi'></div>");
				break;
				case "cuatro":
				infoAcordes("", "Acordes de tres sonidos de la escala de Do Mayor con nombres de cada uno:", "triadas_5.png", "Según los anteriores ejemplos, podemos determinar entonces que los grados de una escala mayor conforman los siguientes acordes:<br><br>"+
					"<ul>"+
					"<li>Acordes Mayores: I, IV y V grado</li>"+
					"<li>Acordes menores: ii, iii y vi grado</li>"+
					"<li>Acordes disminuidos: vii grado</li>"+
					"</ul>", "");
				$("#ref-atr-pag").data("data-pagina", "tres");
				$("#ref-atr-pag").html("<div class='fi'></div>");
				break;
			}
		}
		if($("#div-seg-btn-sec-gen").data("data-tema") == "cuatriadas"){
			switch($(this).data("data-pagina")){
				case "uno":
				infoAcordes("", "Estos acordes se construyen sobre la misma base de los acordes TRIADA vistos en los ejemplos anteriores. Adicionalmente se agrega un intervalo más de tercera, para quedar así con cuatro sonidos. Así, entre los sonidos de cada acorde existe un intervalo de 3ª, quedando conformado por una nota base, un intervalo de tercera, un intervalo de quinta y un intervalo de séptima.<br><br>"+
					"A continuación encontraremos en el primer gráfico la construcción de acordes de cuatro sonidos  y en el siguiente gráfico  sus respectivos nombres.<br><br>"+
					"Acordes de cuatro sonidos de la escala de Do Mayor con numeración y carácter.", "cuatriadas.png", "", "");
				$("#ref-ade-pag").data("data-pagina", "dos");
				$("#ref-ade-pag").html("<div class='fd'></div>");
				break;
				case "dos":
				infoAcordes("", "Acordes de cuatro sonidos de la escala de Do Mayor con nombres de cada uno.", "cuatriadas_2.png", "Podemos determinar entonces que los grados de una escala mayor conforman los siguientes acordes:<br><br>"+
					"<ul>"+
					"<li>Acordes Mayores Delta7: I y IV</li>"+
					"<li>Acordes Mayores7: V</li>"+
					"<li>Acordes menores7: ii, iii y vi</li>"+
					"<li>Acordes semidisminuidos: vii</li>"+
					"</ul>", "");
				$("#ref-atr-pag").data("data-pagina", "uno");
				$("#ref-atr-pag").html("<div class='fi'></div>");
				break;
			}
		}
	});
});