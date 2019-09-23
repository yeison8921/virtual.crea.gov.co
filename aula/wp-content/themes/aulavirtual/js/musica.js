jQuery(document).ready(function($){

	function infoIntroduccion(title, text) {
		$(".titulo-info-basica").html("").html(title);
		$(".contenido-info-basica").html("").html(text);
	}

	function infoModulo(title, text, data){
		$(".titulo-info-basica").html("").html(title);
		$(".contenido-info-basica").html("").html(text);
		$("#div-botones-salas-musica button").attr("data-curso", data);
	}

	/**
	 * [Función para pintar los botones laterales de cada sala]
	 * @param  {[text]} modulo [Texto con el nombre del módulo seleccionado]
	 * @param  {[text]} sala [Texto con el nombre de la sala a la que se va a ingresar]
	 * @return {[type]}          [description]
	 */

	 function botonesLaterales(modulo, sala){
	 	$("#div-botones-sala").html("");
	 	if(modulo == "andina"){
	 		if(sala == "teorica" || sala == "interactiva"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-n-mus' id='btn-guabina' data-sala=''>Guabina</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-pasillo' data-sala=''>Pasillo</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-bambuco' data-sala=''>Bambuco</button>");
	 		}
	 		if(sala == "teorica"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-n-mus' id='btn-instrumentos' data-sala=''>Instrumentos</button>");
	 		}
	 		/*if(sala == "interactiva"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-n-mus' id='btn-referentes' data-sala=''>Referentes</button>");
	 		}*/
	 		if(sala == "general"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-h-mus' id='btn-escala' data-sala=''>Escala</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-ritmometrica' data-sala=''>Ritmo y métrica</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-acordes' data-sala=''>Acordes</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-funcionesarmonicas' data-sala=''>Funciones Armónicas</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-armaduras' data-sala=''>Armaduras</button>");
	 		}
	 		if(sala == "laboratorio"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-n-mus' id='btn-guabina' data-sala=''>Guabina</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-pasillo' data-sala=''>Pasillo</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-bambuco' data-sala=''>Bambuco</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-creacion' data-sala=''>Sube tu creación al foro</button>");
	 		}
	 	}
	 }

	/**
	 * [Función para pintar la información de la sala teórica]
	 * @param  {[text]} mainText [Título del contenido]
	 * @param  {[text]} mainText [Texto principal del contenido]
	 * @param  {[text]} secText  [Texto secundario del contenido]
	 * @param  {[number]} grid  [Número para determinar como dividir el grid del contenido]
	 * @param  {[number]} botonesHorizontales  [Número para pintar la cantidad de botones de en la sala teórica]
	 * @param  {[text]} botonHover  [Id para saber a que botón se le dió clic y asi ponerle la clase de seleccionado]
	 * @param  {[text]} data  [Data para saber que información debe mostrar cada botón dependiendo la sala y el género]
	 * @return {[type]}          [description]
	 */

	 function infoSalaTeorica(title, mainText, secText, grid, botonesHorizontales, botonHover, data){
	 	$(".titulo-info-basica").html("").html(title);
	 	switch(grid){
	 		case 1:
	 		$(".contenido-info-basica").html("").html("<div class='col-lg-offset-2 col-lg-8 col-md-12'>"+mainText+"</div>");
	 		break;
	 		case 2:
	 		$(".contenido-info-basica").html("").html("<div class='col-lg-6 col-md-12'>"+mainText+"</div>"+
	 			"<div class='col-lg-6 col-md-12'>"+secText+"</div>");
	 		break;
	 		case 3:
	 		$(".contenido-info-basica").html("").html("<div class='col-lg-8 col-md-12'>"+mainText+"</div>"+
	 			"<div class='col-lg-4 col-md-12'>"+secText+"</div>");
	 		break;
	 		case "texto":
	 		$(".contenido-info-basica").html("").html("<div class='col-lg-12 col-md-12'>"+mainText+"</div>");
	 		break;
	 		case "instrumentos":
	 		$(".contenido-info-basica").html("").html("<div class='col-lg-3 col-md-12'>"+mainText+"</div>"+
	 			"<div class='col-lg-4 col-md-12'>"+secText.split("/////")[0]+"</div>"+
	 			"<div class='col-lg-5 col-md-12'>"+secText.split("/////")[1]+"</div>");
	 		break;
	 	}
	 	switch(botonesHorizontales){
	 		case 2:
	 		$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-2 col-lg-3 col-md-offset-2 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ritmo' data-sala-genero=''>Ritmo</button>"+
	 			"</div>"+
	 			"<div class='col-lg-offset-2 col-lg-3 col-md-offset-2 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-melodia' data-sala-genero=''>Melodía y Armonía</button>"+
	 			"</div>");
	 		break;
	 		/*case 3:
	 		$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-2 col-lg-2 col-md-offset-2 col-md-2'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ritmo' data-sala-genero=''>Ritmo</button>"+
	 			"</div>"+
	 			"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-melodia' data-sala-genero=''>Melodía</button>"+
	 			"</div>"+
	 			"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-armonia' data-sala-genero=''>Armonía</button>"+
	 			"</div>");
	 			break;*/
	 			case 4:
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-guitarra' data-sala-genero=''>Toca con la pista - Guitarra</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-tiple' data-sala-genero=''>Toca con la pista - Tiple</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-bandola' data-sala-genero=''>Toca con la pista - Bandola</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-karaoke' data-sala-genero=''>Karaoke</button>"+
	 				"</div>");
	 			break;
	 			case "guabina":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ritmo' data-sala-genero=''>Ritmo</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-melodia' data-sala-genero=''>Melodía</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-armonia' data-sala-genero=''>Armonía</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-explicaciones' data-sala-genero=''>Explicaciones</button>"+
	 				"</div>");
	 			break;
	 			case "tocar":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-1 col-lg-3 col-md-4'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-guitarra' data-sala-genero=''>Toca con la pista - Guitarra</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-4'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-tiple' data-sala-genero=''>Toca con la pista - Tiple</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-4'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-bandola' data-sala-genero=''>Toca con la pista - Bandola</button>"+
	 				"</div>");
	 			break;
	 			case "escala":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-estructuraescala' data-sala-genero='escala'>Estructura de la escala mayor</button>"+
	 				"</div>");
	 			break;
	 			case "ritmometrica":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-4 col-lg-3 col-md-offset-4 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-metricas-compas' data-sala-genero=''>Métricas de compas simple</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-figuras' data-sala-genero=''>Figuras musicales</button>"+
	 				"</div>");
	 			break;
	 			case "acordes":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-4 col-lg-3 col-md-offset-4 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-triadas' data-sala-genero=''>Triadas</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-cuatriadas' data-sala-genero=''>Cuatriadas</button>"+
	 				"</div>");
	 			break;
	 			case "funciones-armonicas":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-2 col-lg-2 col-md-offset-2 col-md-2'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-tonica' data-sala-genero=''>Tónica</button>"+
	 				"</div>"+
	 				"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-subdominante' data-sala-genero=''>Subdominante</button>"+
	 				"</div>"+
	 				"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-dominante' data-sala-genero=''>Dominante</button>"+
	 				"</div>");
	 			break;
	 			case "instrumentos":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ins-guitarra' data-sala-genero=''>Guitarra</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ins-tiple' data-sala-genero=''>Tiple</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ins-bandola' data-sala-genero=''>Bandola</button>"+
	 				"</div>"+
	 				"<div class='col-lg-3 col-md-3'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ins-otros' data-sala-genero=''>Otros</button>"+
	 				"</div>");
	 			break;
	 			case "laboratorio":
	 			$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-2 col-lg-2 col-md-offset-2 col-md-2'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-guitarra' data-sala-genero=''>Guitarra</button>"+
	 				"</div>"+
	 				"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-bajo' data-sala-genero=''>Bajo</button>"+
	 				"</div>"+
	 				"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton' id='btn-bateria' data-sala-genero=''>Bateria</button>"+
	 				"</div>");
	 			break;
	 			default:
	 			$("#div-subbotones-sala").html("");

	 		}
	 		if(botonHover != ""){
	 			$("#"+botonHover).removeClass("btn-n-mus").addClass("btn-h-mus");
	 		}
	 	/*if(botonHover != ""){
	 		$("#div-subbotones-sala #"+botonHover).removeClass("btn-n-mus").addClass("btn-h-mus");
	 	}*/
	 	$("#div-subbotones-sala button").attr("data-sala-genero", data);
	 }

	 var pagina = window.location.href;
	 if(pagina.indexOf("introduccion") != -1){
	 	infoIntroduccion("Introducción", "<p>¡Hola a todos!</p>"+
	 		"<p>Bienvenidos a esta experiencia virtual en donde la música colombiana se apoderará de tus sentidos y tu mente, y donde encontrarás diferentes salas con herramientas prácticas que te ayudarán a conocer algunos ritmos de nuestra música, escuchando, tocando e interactuando con los contenidos desarrollados para ti.</p>"+
	 		"<p>Te invitamos a recorrer nuestras diferentes salas y a conocer y apropiarte de nuestros bellos ritmos colombianos.</p>");
	 }else{
	 	infoModulo("Andina", "<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
	 		"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>", "andina");
	 }
	 $(".contenido-info-basica").on({
	 	mouseover: function(){
	 		$(".contenido-info-basica #img-guitarra").attr("src", $("#bloginfo").val() +"/musica/images/instrumentos/guitarra/"+$(this).attr("id")+".png");
	 		$(".contenido-info-basica #img-tiple").attr("src", $("#bloginfo").val() +"/musica/images/instrumentos/tiple/"+$(this).attr("id")+".png");
	 		$(".contenido-info-basica #img-bandola").attr("src", $("#bloginfo").val() +"/musica/images/instrumentos/bandola/"+$(this).attr("id")+".png");
	 		$(this).css({
	 			"color": "black"
	 		});
	 	},
	 	mouseout: function(){
	 		$(".contenido-info-basica #img-guitarra").attr("src", $("#bloginfo").val() +"/musica/images/instrumentos/guitarra/guitarra.png");
	 		$(".contenido-info-basica #img-tiple").attr("src", $("#bloginfo").val() +"/musica/images/instrumentos/tiple/tiple.png");
	 		$(".contenido-info-basica #img-bandola").attr("src", $("#bloginfo").val() +"/musica/images/instrumentos/bandola/bandola.png");
	 		$(this).css({
	 			"color": "white"
	 		});
	 	},
	 }, "span");
	 $(".contenedor").on("click", "button", function(){
	 	$(this).removeClass("btn-n-mus").addClass("btn-h-mus");
	 	$(".contenedor button").not(this).removeClass().addClass("btn btn-block btn-n-mus");
	 	if($(this).attr('id') == "btn-llanera" || $(this).attr('id') == "btn-pacifico" || $(this).attr('id') == "btn-atlantico" || $(this).attr('id') == "btn-carranga"){
	 		$("#div-botones-salas-musica").html("").html("<button class='btn btn-block btn-n-mus' id='btn-proximamente' data-curso='andina' disabled>Próximamente</button>");
	 	}else{
	 		$("#div-botones-salas-musica").html("").html("<button class='btn btn-block btn-n-mus' id='btn-teorica' data-curso='andina'>Sala teórica</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-interactiva' data-curso='andina'>Sala interactiva</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-general' data-curso='andina'>Sala general</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-laboratorio' data-curso='andina'>Laboratorio</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-foros' data-curso='andina'>Foros</button>");
	 	}
	 	if($(this).attr('id') == "btn-teorica" || $(this).attr('id') == "btn-interactiva" || $(this).attr('id') == "btn-general" || $(this).attr('id') == "btn-laboratorio"){
	 		$("#btn-regresar").attr("data-atras", "modulo");
	 		if($(this).attr("data-curso") == "andina"){
	 			$("#div-seleccion-curso-musica").hide();
	 			$("#div-contenido-sala-musica").show();
	 			$("#div-botones-sala #btn-guabina").removeClass("btn-n-mus").addClass("btn-h-mus");
	 		}
	 	}
	 	switch($(this).attr('id')){
	 		case "btn-introduccion":
	 		infoIntroduccion("Introducción", "<p>¡Hola a todos!</p>"+
	 			"<p>Bienvenidos a esta experiencia virtual en donde la música colombiana se apoderará de tus sentidos y tu mente, y donde encontrarás diferentes salas con herramientas prácticas que te ayudarán a conocer algunos ritmos de nuestra música, escuchando, tocando e interactuando con los contenidos desarrollados para ti.</p>"+
	 			"<p>Te invitamos a recorrer nuestras diferentes salas y a conocer y apropiarte de nuestros bellos ritmos colombianos.</p>");
	 		break;
	 		case "btn-objetivos":
	 		infoIntroduccion("Objetivos","<p>Podrás aprender conceptos generales de gramática musical.</p>"+
	 			"<p>Conocerás música de las regiones de Colombia: sus características, instrumentos musicales típicos y algunos ritmos de cada región.</p>"+
	 			"<p>Bienvenidos a esta guía interactiva para la interpretación instrumental/vocal de ritmos de música colombiana.</p>");
	 		break;
	 		case "btn-metodologia":
	 		infoIntroduccion("Metodología", "<p>En estos salones interactivos, se abordará la música en dos aspectos:</p>"+
	 			"<ul>"+
	 			"<li>Teórico</li>"+
	 			"<li>Práctico</li>"+
	 			"</ul>"+
	 			"<p>En el aspecto teórico, tendrás a tu disposición definiciones, guías y métodos, capaces de brindarte recursos técnicos y expresivos para tu desarrollo artístico.</p>"+
	 			"<p>En lo práctico, podrás afianzar y consolidar los conocimientos que adquieras en la teoría. El curso, desarrollará algunas estrategias, tales como LAS SALAS INTERACTIVAS, para enriquecer y fortalecer, tanto tu proceso de formación artística, y tus aptitudes y destrezas musicales; de manera integral.</p>");
	 		break;
	 		case "btn-publico":
	 		infoIntroduccion("Nuestro público", "<p>Los contenidos del aula virtual están dirigidos a:</p>"+
	 			"<ul>"+
	 			"<li>Beneficiarios que asisten a los diferentes talleres del programa Crea en el área de música, bien sea de la línea Emprende Crea o Arte en la Escuela.</li>"+
	 			"<li>Artistas formadores que deseen acceder al contenido del aula virtual como herramienta para complementar sus prácticas pedagógicas en el aula.</li>"+
	 			"<li>Jóvenes y adultos en proceso de formación musical que estén interesados en profundizar los conceptos y prácticas de algunos ritmos de la música colombiana.</li>"+
	 			"<li>Público en general que desee indagar y ampliar sus conocimientos musicales a través de los contenidos que se presentan en el aula virtual.</li>"+
	 			"</ul>")
	 		break;
	 		case "btn-creditos":
	 		infoIntroduccion("Créditos", "");
	 		break;
	 		case "btn-andina":
	 		$("#div-botones-salas-musica").show();
	 		infoModulo("Andina", "<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
	 			"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>", "andina");
	 		break;
	 		case "btn-llanera":
	 		infoModulo("Llanera", "<p>La música llanera, viene de la mezcla de influencias españolas e indígenas. La estructura rítmica es una combinación de ritmos ternario y compuesto, pero como es un descendiente del Vals se escribe en un tiempo de 3/4. El conjunto típico de música llanera está compuesto de tres instrumentos: el Cuatro que es una guitarra pequeña de cuatro cuerdas y da soporte rítmico y armónico a la música llanera; las Maracas o Capachos que están también a cargo del soporte rítmico y son el único instrumento de percusión en el Joropo, y el Arpa que está a cargo de la melodía y contra melodía; normalmente a estos tres instrumentos se les suma el bajo eléctrico.</p>", "llanera");
	 		break;
	 		case "btn-pacifico":
	 		infoModulo("Pacifico", "<p>Aunque la música afrocolombiana de la costa Pacífica presenta en mayor medida herencias de tradiciones africanas, también exhibe pervivencias de raigambres indígenas y españolas que fueron adaptadas por los afros descendientes de la región.</p>", "pacifico");
	 		break;
	 		case "btn-atlantico":
	 		infoModulo("Atlántico", "<p>La música del Caribe es la agrupación de músicas, cantos y danzas de América Central y del Caribe, esta región también abarca las partes costeras de Venezuela y Colombia. Surgieron de la unión de ritmos europeos, africanos y nativos en distintas zonas, como parte del mestizaje americano.</p>", "atlantico");
	 		break;
	 		case "btn-carranga":
	 		infoModulo("Carranga", "<p>La carranga, música carranguera o música campesina, es un género de música folclórica surgida en la región andina colombiana, más exactamente en el departamento de Boyacá en los años 70, de mano del compositor Jorge Velosa​ y los Carrangueros de Ráquira.</p>", "carranga");
	 		break;
	 		case "btn-guabina":
	 		if($(this).attr("data-sala") == "teorica"){
	 			infoSalaTeorica("La Guabina", "<p>Aire andino de origen campesino, al parecer nacido en Antioquia desde los albores del siglo XIX, con ascendencia europea y con adaptaciones regionales muy sugerentes. Sobre su nombre no existe definición; se habla de la existencia de un pez guabina en los Llanos, y muy apreciado en Cuba por su carne.</p>"+
	 				"<p>Es otra de las danzas y cantos típicos del folklore musical andino, muy extendida en los departamentos de Santander, Boyacá, Tolima, Huila y antiguamente en Antioquia. Aún cuando el ritmo es común, en cada departamento la guabina adquiere una melodía especial. Su formato instrumental típico está conformado por el tiple, requinto, la bandola el chucho o guache.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/guabina/cuchara.png' height='200'></p>"+
	 				"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Cucharas_2_01.mp3' type='audio/mpeg'></audio></p>"+
	 				"<h3>Cucharas</h3><p>Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.</p>", 2, "guabina", "", "teorica-guabina");
	 		}
	 		if($(this).attr("data-sala") == "interactiva"){
	 			infoSalaTeorica("La Guabina", "<p>Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultivaba en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.</p>"+
	 				"<p>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.</p>",
	 				"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/qv_quuy50Jo'></iframe>"+
	 				"</div></p>", 2, 4, "", "interactiva-guabina");
	 		}
	 		if($(this).attr("data-sala") == "laboratorio"){
	 			infoSalaTeorica("La Guabina", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>", "", "texto", "laboratorio", "", "laboratorio-guabina");
	 		}
	 		break;
	 		case "btn-pasillo":
	 		if($(this).attr("data-sala") == "teorica"){
	 			infoSalaTeorica("El Pasillo", "<p>Este es otro de los bailes folclóricos andinos que se hicieron populares en el siglo XIX. Es una de las variantes del vals europeo, convertido en aire de pasillo, por su ritmo más rápido.</p>"+
	 				"<p>Con algunas variaciones rítmicas en el bajo y en el acompañamiento armónico, su tempo puede ser lento a moderado, generalmente vocal, con letras de amor y desilusión. y en algunas regiones con tiempos más rápidos  que da como resultado el Pasillo fiestero.</p>"+
	 				"<p>CRUZ GONZÁLEZ, Miguel A.: Folclore, Música y Nación. El papel del bambuco en la construcción de lo colombiano. NOMADAS (COL.) núm. 17,2002, pp.222. Universidad Central. Bogotá, Colombia.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/pasillo/guaracha.png' height='200'></p>"+
	 				"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/guacharaca.mp3' type='audio/mpeg'></audio></p>"+
	 				"<p>La guaracha es un instrumento musical idiófono de raspado utilizado mayormente en el vallenato. Se fabrica, entre otros, de caña o de lata.</p>", 2, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-sala") == "interactiva"){
	 			infoSalaTeorica("El Pasillo", "<p>Pasillos del estilo de “Rondinella”, “La gata golosa” y “Patasdilo”, eran los más solicitados por las personas y los más escuchados en las tertulias santafereñas.</p>"+
	 				"<p>Hay dos tipos de pasillo: el fiestero instrumental, que es el más característico de las fiestas populares bailes de casorio y de garrote y el pasillo lento, generalmente vocal, que trata en sus letras temas de amor, desilusión, luto y nostalgia.</p>"+
	 				"<p>Según el historiador Javier Ocampo, el pasillo colombiano presenta semejanzas con el vals de Venezuela, el sanjuanito de ecuador y el valsecito de costa rica.</p>"+
	 				"<p>CIFUENTES, LUIS JAIRO. (2009). Colombia: Identidades y tradiciones, de: <a href='http://identidadyfolclorcolombiano.blogspot.com/' target='_blank'>http://identidadyfolclorcolombiano.blogspot.com/</a></p>",
	 				"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/PUe8kuK6WAU'></iframe>"+
	 				"</div></p>", 2, "tocar", "", "interactiva-pasillo");
	 		}
	 		if($(this).attr("data-sala") == "laboratorio"){
	 			infoSalaTeorica("El pasillo", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>", "", "texto", "laboratorio", "", "laboratorio-pasillo");
	 		}
	 		break;
	 		case "btn-bambuco":
	 		if($(this).attr("data-sala") == "teorica"){
	 			infoSalaTeorica("El bambuco", "<p>Es el aire folclórico típico de la zona andina colombiana, y por esencia la danza nacional más representativa. Su instrumento representativo es el tiple.</p>"+
	 				"<p>Se caracteriza por tener la síncopa en la melodía, en su acompañamiento y un bajo que suena a contratiempo; su métrica puede ser en 6/8, que es más fácil para su lectura y ejecución. Su tempo puede ser de moderado a rápido; por lo tanto el resultado es festivo, dinámico y define con facilidad la síncopa que es la característica de este género.</p>"+
	 				"<p>CRUZ GONZÁLEZ, Miguel A.: Folclore, Música y Nación. El papel del bambuco en la construcción de lo colombiano. NOMADAS (COL.) núm. 17,2002, pp.222. Universidad Central. Bogotá, Colombia.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/bambuco/esterilla.png' height='200'></p>"+
	 				"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Esterilla_01.mp3' type='audio/mpeg'></audio></p>"+
	 				"<h3>Esterilla</h3><p>Es un instrumento tradicional colombiano, construido con cañutos o trozos de bambú (entre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.</p>", 2, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		if($(this).attr("data-sala") == "interactiva"){
	 			infoSalaTeorica("El Bambuco", "<p>El bambuco es el aire folklórico mestizo más típico de la zona andina colombiana, y es por esencia la danza nacional más representativa. Su instrumento fundamental es el tiple.</p>"+
	 				"<p>OCAMPO LÓPEZ, Javier. El folclor y los bailes típicos colombianos. Manizales, Colombia. Biblioteca de Escritores Caldenses. </p>",
	 				"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/eWoIeRze4W0'></iframe>"+
	 				"</div></p>", 2, "tocar", "", "interactiva-bambuco");
	 		}
	 		if($(this).attr("data-sala") == "laboratorio"){
	 			infoSalaTeorica("El bambuco", "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>", "", "texto", "laboratorio", "", "laboratorio-bambuco");
	 		}
	 		break;
	 		case "btn-instrumentos":
	 		infoSalaTeorica("Instrumentos música andina", "", "", "texto", "instrumentos", "", "teorica-instrumentos");
	 		break;
	 		case "btn-referentes":
	 		infoSalaTeorica("Referentes", "<p>Les presentamos algunos referentes de música colombiana aplicada a otros ritmos.</p>"+
	 			"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/vjr2OwojRUQ'></iframe>"+
	 			"</div></p>"+
	 			"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/KJ95IZxmffE'></iframe>"+
	 			"</div></p>",
	 			"<p>&nbsp<br>&nbsp</p>"+
	 			"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/z7lXhmFwMKs'></iframe>"+
	 			"</div></p>"+
	 			"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/GVkRXz6qSr0'></iframe>"+
	 			"</div></p>", 2, "", $(this).attr("id"), "interactiva-referentes");
	 		break;
	 		case "btn-teorica":
	 		if($(this).attr("data-curso") == "andina"){
	 			$("#div-ccm").css({
	 				"background-image": 'url("'+ $("#bloginfo").val() + '/musica/images/fondos/fondo_sala_teorica.jpg")',
	 			});
	 			botonesLaterales("andina", "teorica");
	 			$("#div-botones-sala button").attr("data-sala", "teorica");
	 			infoSalaTeorica("Sala teórica", "<p>Bienvenid@ a la sala teórica, aquí te explicaremos los aspectos teóricos y técnicos necesarios para la comprensión y posterior interpretación de instrumentos andinos y sus particularidades, no te asustes si nunca habías visto una partitura ¿eh? Si das clic en el vídeo podrás entender como funciona la escritura musical.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/guitarra/guitarra.png' height='400'></p>", 2, "guabina", "", "");
	 		}
	 		break;
	 		case "btn-interactiva":
	 		if($(this).attr("data-curso") == "andina"){
	 			$("#div-ccm").css({
	 				"background-image": 'url("'+ $("#bloginfo").val() + '/musica/images/fondos/fondo_sala_interactiva.jpg")',
	 			});
	 			botonesLaterales("andina", "interactiva");
	 			$("#div-botones-sala button").attr("data-sala", "interactiva");
	 			infoSalaTeorica("Sala interactiva", "<p>Bienvenid@ a la sala interactiva, aquí encontrarás vídeos que te mostrarán la forma de interpretación de cada instrumento explicado por un Artista Formador, además tendrás acceso a pistas sobre las cuales podrás tocar para practicar.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/tiple/tiple.png' height='400'></p>",2, 4, "", "");
	 		}
	 		break;
	 		case "btn-general":
	 		if($(this).attr("data-curso") == "andina"){
	 			$("#div-ccm").css({
	 				"background-image": 'url("'+ $("#bloginfo").val() + '/musica/images/fondos/fondo_sala_general.jpg")',
	 			});
	 			botonesLaterales("andina", "general");
	 			$("#div-botones-sala button").attr("data-sala", "general");
	 			infoSalaTeorica("Sala interactiva", "Bienvenid@ a la sala general, aquí encontrarás información básica sobre teoría musical que te ayudará a entender mejor los conceptos que has aprendido.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/bandola/bandola.png' height='400'></p>",2, 4, "", "");
	 		}
	 		break;
	 		case "btn-laboratorio":
	 		if($(this).attr("data-curso") == "andina"){
	 			botonesLaterales("andina", "laboratorio");
	 			$("#div-botones-sala button").attr("data-sala", "laboratorio");
	 			infoSalaTeorica("Escala", "<p>Bienvenid@ al laboratorio, aquí podrás ver un ejemplo de las obras anteriormente estudiadas, adaptadas al género rock, deberás hacer y enviar tu propia propuesta de adaptación.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/otros/carraca.png' height='400'></p>", 2, "laboratorio", "", "");
	 		}
	 		break;
	 		case "btn-ritmo":
	 		if($(this).attr("data-sala-genero") == "teorica-guabina"){
	 			infoSalaTeorica("Ritmo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/IrbROBwoqBQ'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='guabina-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='guabina-ritmo'>Guitarra</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-pasillo"){
	 			infoSalaTeorica("Ritmo Pasillo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/MhYvTpzFnNk'></iframe>"+
	 				"</div></p>"+
	 				"<a href='"+$("#bloginfo").val() +"/musica/pdf/pasillo/ritmo_cachipay.pdf' alt='Ritmo Cachipay' download>Ritmo Cachipay <i class='fas fa-download'></i></a>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='pasillo-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='pasillo-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-bambuco"){
	 			infoSalaTeorica("Ritmo Bambuco Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/mKIsvh6MNG0'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='bambuco-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='bambuco-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		break;
	 		case "btn-melodia":
	 		if($(this).attr("data-sala-genero") == "teorica-guabina"){
	 			infoSalaTeorica("Melodía - Voz", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/amWGWqkfNjc'></iframe>"+
	 				"</div></p>"+
	 				"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/guabina/la_ruana_voz.pdf' alt='La ruana voz' download>La Ruana - voz <i class='fas fa-download'></i></a></p>"+
	 				"",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-voz' data-genero-sonido='guabina-melodia'>Voz</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-bandola' data-genero-sonido='guabina-melodia'>Bandola</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-pasillo"){
	 			infoSalaTeorica("Melodía Pasillo", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/O0gs6KvKY_c'></iframe>"+
	 				"</div></p>"+
	 				"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/pasillo/melodia_cachipay.pdf' alt='Melodía Cachipay' download>Melodía Cachipay <i class='fas fa-download'></i></a></p>"+
	 				"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/pasillo/armonia_cachipay.pdf' alt='Armonía Cachipay' download>Armonía Cachipay <i class='fas fa-download'></i></a></p>",
	 				"", 1, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-bambuco"){
	 			infoSalaTeorica("Melodía Bambuco", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/gymuFsEyOfI'></iframe>"+
	 				"</div></p>"+
	 				"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/bambuco/armonia_bochica.pdf' alt='Armonía Bochica' download>Armonía Bochica <i class='fas fa-download'></i></a></p>", "", 1, 2, $(this).attr("id"), "teorica-bambuco");	
	 		}
	 		break;
	 		case "btn-armonia":
	 		if($(this).attr("data-sala-genero") == "teorica-guabina"){
	 			infoSalaTeorica("Armonía - Guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/c1yuvkCoCZA'></iframe>"+
	 				"</div></p>"+
	 				"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/guabina/la_ruana_armonia.pdf' alt='Armonía_La_Ruana' download>Armonía La Ruana <i class='fas fa-download'></i></a></p>",
	 				"", 1, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		break;
	 		case "btn-explicaciones":
	 		if($(this).attr("data-sala-genero") == "teorica-guabina"){
	 			infoSalaTeorica("Explicaciones", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/HMqDztHdJo0'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='guabina-explicaciones'>Guitarra</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='guabina-explicaciones'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-bandola' data-genero-sonido='guabina-explicaciones'>Bandola</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		break;
	 		case "btn-tiple":
	 		if($(this).attr("data-genero-sonido") == "guabina-ritmo"){
	 			infoSalaTeorica("Ritmo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/IrbROBwoqBQ'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='guabina-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='guabina-ritmo'>Guitarra</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "pasillo-ritmo"){
	 			infoSalaTeorica("Ritmo Pasillo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/MhYvTpzFnNk'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='pasillo-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='pasillo-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-genero-sonido") == "bambuco-ritmo"){
	 			infoSalaTeorica("Ritmo Bambuco Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/mKIsvh6MNG0'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='bambuco-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='bambuco-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		if($(this).attr("data-genero-sonido") == "guabina-explicaciones"){
	 			infoSalaTeorica("Explicaciones", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/wdKrryrpArg'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='guabina-explicaciones'>Guitarra</button>"+
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='guabina-explicaciones'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-bandola' data-genero-sonido='guabina-explicaciones'>Bandola</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		break;
	 		case "btn-guitarra":
	 		if($(this).attr("data-genero-sonido") == "guabina-ritmo"){
	 			infoSalaTeorica("Ritmo guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/-N9U-O7Hfkg'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='guabina-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='guabina-ritmo'>Guitarra</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "guabina-explicaciones"){
	 			infoSalaTeorica("Explicaciones", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/HMqDztHdJo0'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='guabina-explicaciones'>Guitarra</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='guabina-explicaciones'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-bandola' data-genero-sonido='guabina-explicaciones'>Bandola</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "pasillo-ritmo"){
	 			infoSalaTeorica("Ritmo Pasillo Guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/PpMsiRbdn9A'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='pasillo-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='pasillo-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-genero-sonido") == "bambuco-ritmo"){
	 			infoSalaTeorica("Ritmo Bambuco Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/QB9q9hbzuQo'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='bambuco-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='bambuco-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		if($(this).attr("data-sala-genero") == "laboratorio-guabina"){
	 			infoSalaTeorica("Guabina - Guitarra", "<p><video width='700' controls><source src='mov_bbb.mp4' type='video/mp4'></video></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "laboratorio-pasillo"){
	 			infoSalaTeorica("Pasillo - Guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/MlDhNETSgwk'></iframe>"+
	 				"</div></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "laboratorio-bambuco"){
	 			infoSalaTeorica("Bambuco - Guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/lRaULOPrEYk'></iframe>"+
	 				"</div></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-bambuco");
	 		}
	 		break;
	 		case "btn-bajo":
	 		if($(this).attr("data-sala-genero") == "laboratorio-guabina"){
	 			infoSalaTeorica("Guabina - Bajo", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/vnwnszJ-IAo'></iframe>"+
	 				"</div></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "laboratorio-pasillo"){
	 			infoSalaTeorica("Pasillo - Bajo", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/1e7b-i5N2zg'></iframe>"+
	 				"</div></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "laboratorio-bambuco"){
	 			infoSalaTeorica("Bambuco - Guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/hpku2ytO_WI'></iframe>"+
	 				"</div></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-bambuco");
	 		}
	 		break;
	 		case "btn-bateria":
	 		if($(this).attr("data-sala-genero") == "laboratorio-guabina"){
	 			infoSalaTeorica("Guabina - Bateria", "<p><video width='700' controls><source src='mov_bbb.mp4' type='video/mp4'></video></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "laboratorio-pasillo"){
	 			infoSalaTeorica("Pasillo - Bateria", "<p><video width='700' controls><source src='mov_bbb.mp4' type='video/mp4'></video></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "laboratorio-bambuco"){
	 			infoSalaTeorica("Bambuco - Bateria", "<p><video width='700' controls><source src='mov_bbb.mp4' type='video/mp4'></video></p>", "", 1, "laboratorio", $(this).attr("id"), "laboratorio-bambuco");
	 		}
	 		break;
	 		case "btn-voz":
	 		infoSalaTeorica("Melodía - Voz", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/amWGWqkfNjc'></iframe>"+
	 			"</div><p>"+
	 			"<p>link</p>",
	 			"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-voz' data-genero-sonido='guabina-melodia'>Voz</button>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-bandola' data-genero-sonido='guabina-melodia'>Bandola</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		break;
	 		case "btn-bandola":
	 		if($(this).attr("data-genero-sonido") == "guabina-melodia"){
	 			infoSalaTeorica("Bandola - Voz", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/_2zTWzYUgtI'></iframe>"+
	 				"</div></p>"+
	 				"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/guabina/la_ruana_bandola.pdf' alt='Melodía_La_Ruana_Bandola' download>Melodía - La Bandola <i class='fas fa-download'></i></a></p>",
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-voz' data-genero-sonido='guabina-melodia'>Voz</button>"+
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-bandola' data-genero-sonido='guabina-melodia'>Bandola</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "guabina-explicaciones"){
	 			infoSalaTeorica("Explicaciones", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/TVgPBIibUPk'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-guitarra' data-genero-sonido='guabina-explicaciones'>Guitarra</button>"+
	 				"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-tiple' data-genero-sonido='guabina-explicaciones'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-bandola' data-genero-sonido='guabina-explicaciones'>Bandola</button>", 3, "guabina", $(this).attr("id"), "teorica-guabina");
	 		}
	 		break;
	 		case "btn-along-guitarra":
	 		if($(this).attr("data-sala-genero") == "interactiva-guabina"){
	 			infoSalaTeorica("Toca con la pista - de la Guitarra - La Ruana", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/BRyJnicgeKg'></iframe>"+
	 				"</div></p>", "", 1, 4, $(this).attr("id"), "interactiva-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-pasillo"){
	 			infoSalaTeorica("Toca con la pista - de la Guitarra - Cachipay", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/NH7EjRotTYI'></iframe>"+
	 				"</div></p>", "", 1, "tocar", $(this).attr("id"), "interactiva-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-bambuco"){
	 			infoSalaTeorica("Toca con la pista - de la Guitarra - Bochica", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/_oLDw5oUYPY'></iframe>"+
	 				"</div></p>", "", 1, "tocar", $(this).attr("id"), "interactiva-bambuco");
	 		}
	 		break;
	 		case "btn-along-tiple":
	 		if($(this).attr("data-sala-genero") == "interactiva-guabina"){
	 			infoSalaTeorica("Toca con la pista - del Tiple - La Ruana", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/8sFJkixKn8c'></iframe>"+
	 				"</div></p>", "", 1, 4, $(this).attr("id"), "interactiva-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-pasillo"){
	 			infoSalaTeorica("Toca con la pista - del Tiple - Cachipay", "<p>video</p>", "", 1, "tocar", $(this).attr("id"), "interactiva-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-bambuco"){
	 			infoSalaTeorica("Toca con la pista - del Tiple - Bochica", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/xgIW9wqcrbY'></iframe>"+
	 				"</div></p>", "", 1, "tocar", $(this).attr("id"), "interactiva-bambuco");
	 		}
	 		break;
	 		case "btn-along-bandola":
	 		if($(this).attr("data-sala-genero") == "interactiva-guabina"){
	 			infoSalaTeorica("Toca con la pista - de la Bandola - La Ruana", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/KEm4i4lDUvM'></iframe>"+
	 				"</div></p>", "", 1, 4, $(this).attr("id"), "interactiva-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-pasillo"){
	 			infoSalaTeorica("Toca con la pista - de la Bandola - Cachipay", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/bvgrIf4ps-Q'></iframe>"+
	 				"</div></p>", "", 1, "tocar", $(this).attr("id"), "interactiva-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-bambuco"){
	 			infoSalaTeorica("Toca con la pista - de la bandola - Bochica", " ", "", 1, "tocar", $(this).attr("id"), "interactiva-bambuco");
	 		}
	 		break;
	 		case "btn-karaoke":
	 		if($(this).attr("data-sala-genero") == "interactiva-guabina"){
	 			infoSalaTeorica("Karaoke - La Ruana", "<div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/Xw1YF92Guwg'></iframe>"+
	 				"</div>", "", 1, 4, $(this).attr("id"), "interactiva-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-pasillo"){
	 			infoSalaTeorica("Karaoke - Cachipay", "<p>video</p>", "", 1, 4, $(this).attr("id"), "interactiva-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "interactiva-bambuco"){
	 			infoSalaTeorica("Karaoke - La Ruana", "<p>video</p>", "", 1, 4, $(this).attr("id"), "interactiva-bambuco");
	 		}
	 		break;
	 		case "btn-escala":
	 		infoSalaTeorica("Escala", "<p>Una escala es una secuencia de notas musicales (sonidos), con un determinado orden de tonos y semitonos entre ellas, desde su tónica (primera nota de la escala), hasta su octava (repetición de la tónica a una octava de distancia ascendente). Estos sonidos son conocidos comúnmente como “grados de la escala”.</p>"+
	 			"<p>La distancia que hay entre dos sonidos por grado conjunto (sonidos adyacentes o consecutivos) de la escala se mide por tonos (T) y semitonos (S).</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/escala/grados_escala.png' class='img-responsive'></p>",
	 			"", "texto", "escala", "", "general-escala");
	 		break;
	 		case "btn-ritmometrica":
	 		infoSalaTeorica("Ritmo", "<p>Duración de los sonidos musicales ordenados de acuerdo a la métrica de cada compás.</p>"+
	 			"<p>MÉTRICA</p>"+
	 			"<p>Es la que define la estructura de cada compás en una pieza musical. Existen las métricas de compás simple, cuya división de pulso es binaria. Y las métricas de compás compuesto, cuya división de pulso es ternaria. En esta ocasión nos encargaremos de las métricas de compás simple.</p>",
	 			"", "texto", "ritmometrica", $(this).attr("id"), "general-ritmometrica");
	 		break;
	 		case "btn-acordes":
	 		infoSalaTeorica("¿Qué es un acorde?", "<p>Un acorde está conformado por tres o más notas que suenan simultáneamente.</p>"+
	 			"<p>Dentro de cada escala mayor encontramos una sucesión de acordes mayores.menores y disminuidos, que se forman a partir de cada uno de los grados de la escala, dichos grados están representados con números romanos: I grado, Il grado, IlI grado y así sucesivamente.</p>"+
	 			"<p>Escala de Do Mayor con numeración por grados</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/acordes/Escala_Do_mayor.png'></p>"+
	 			"<p>En esta ocasión veremos acordes de 3 sonidos llamados TRIADAS y de 4 sonidos llamados comúnmente CUATRIADAS, ambos para la tonalidad Mayor.</p>",
	 			"", "texto", "acordes", $(this).attr("id"), "general-acordes");
	 		break;
	 		case "btn-funcionesarmonicas":
	 		infoSalaTeorica("", "<p><img src='"+$("#bloginfo").val() +"/musica/images/funciones/funciones_armonicas.png'></p>"+
	 			"<p>Las funciones armónicas son regiones de la tonalidad que nos permiten entender la relación existente entre los acordes que la componen.</p>"+
	 			"<p>Existen tres funciones armónicas tanto en tonalidad Mayor como en tonalidad menor.</p>", "", "texto", "funciones-armonicas", $(this).attr("id"), "general-funcionesarmonicas");
	 		break;
	 		case "btn-estructuraescala":
	 		infoSalaTeorica("Estructura de la escala mayor", "<p>Está conformada por cinco intervalos (Distancias) de tono y dos de semitono, comprendidos entre ocho notas, y distribuidos de la siguiente manera entre los grados de la escala.</p>",
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-do-mayor' data-genero-sonido='escala-estructuraescala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-sol-mayor' data-genero-sonido='escala-estructuraescala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-re-mayor' data-genero-sonido='escala-estructuraescala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
	 		break; 
	 		case "btn-armaduras":
	 		infoSalaTeorica("Armaduras", "<p>La armadura, es el conjunto de alteraciones (sostenidos o bemoles), situadas a la derecha de la clave, en el pentagramay, es la encargada de indicarnos la tonalidad del tema o canción que estemos trabajando.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/armaduras/becuadro1.png'></p>"+
	 			"<p>La armadura, permite a los músicos ahorrar la escritura de alteraciones durante toda la partitura. El orden de los sostenidos siempre es el mismo de todas las armaduras: FA, DO, SOL, RE, LA, MI, SI.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/armaduras/becuadro1,1.png'></p>", "", "texto", "", $(this).attr("id"), "general-funciones-armonicas");
	 		break;
	 		case "btn-do-mayor":
	 		infoSalaTeorica("Escala de DO mayor", "<p>Diferenciación de tonos (T) y semitonos (S) entre cada uno de los grados.</p>"+
	 			"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/lGzbLp_rdRU'></iframe>"+
	 			"</div></p>",
	 			"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-do-mayor' data-genero-sonido='escala-estructuraescala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-sol-mayor' data-genero-sonido='escala-estructuraescala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-re-mayor' data-genero-sonido='escala-estructuraescala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
	 		break;
	 		case "btn-sol-mayor":
	 		infoSalaTeorica("Escala de SOL mayor", "<p>Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota fa# (Primer sostenido).</p>"+
	 			"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/LFKh0d_amGc'></iframe>"+
	 			"</div></p>",
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-do-mayor' data-genero-sonido='escala-estructuraescala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-sol-mayor' data-genero-sonido='escala-estructuraescala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-re-mayor' data-genero-sonido='escala-estructuraescala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
	 		break;
	 		case "btn-re-mayor":
	 		infoSalaTeorica("Escala de RE mayor", "<p>Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota do# (Segundo sostenido).</p>"+
	 			"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/DC88WSDTTh0'></iframe>"+
	 			"</div></p>",
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-do-mayor' data-genero-sonido='escala-estructuraescala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-sol-mayor' data-genero-sonido='escala-estructuraescala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-re-mayor' data-genero-sonido='escala-estructuraescala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
	 		break;
	 		case "btn-metricas-compas":
	 		infoSalaTeorica("&nbsp", "<p>La métrica está representada por un fraccionario que aparece al inicio de la pieza musical.</p>"+
	 			"<p>El número que está en la parte superior del fraccionario indica el número de pulsos por compás.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/ritmo/fraccion.png' class='img-responsive'></p>"+
	 			"<p>El número que está en la parte inferior del fraccionario indica la figura que ocupa cada uno de esos pulsos en compás simple.<p>",
	 			"<button class='btn btn-block btn-n-mus'>Métricas más utilizadas</button>", 3, "ritmometrica", $(this).attr("id"), "general-ritmometrica");
	 		break;
	 		case "btn-figuras":
	 		infoSalaTeorica("&nbsp", "<p>Todas las figuras musicales tienen un número que las representa así:</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/ritmo/notas_musicales.png'></p>",
	 			"<button class='btn btn-block btn-n-mus'>Métricas más utilizadas</button>", "texto", "ritmometrica", $(this).attr("id"), "general-ritmometrica");
	 		break;
	 		case "btn-triadas":
	 		infoSalaTeorica("Triadas", "<p>Acordes TRIADAS: Entre lossonidos de cada acorde existe un intervalo de 3 quedando conformado por una nota base, un intervalo de tercera y un intervalo de quinta.</p>"+
	 			"<div class='col-lg-8'><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/ZaO9YNXM1gY'></iframe>"+
	 			"</div></div>"+
	 			"<p>En el video anterior tenemos la escala de Do mayor, los números ubicados debajo de cada nota, simbolizan los grados de la escala, que como habiamos dicho ante riormente también son representados con números romanos.</p>"+
	 			"<p>Encontramos asi mismo en esta imagen, que el primer, tercer y quinto grado de la escala conforman el primer acorde de triada de la escala mayor.</p>",
	 			"", "texto", "acordes", $(this).attr("id"), "general-acordes");
	 		break;
	 		case "btn-cuatriadas":
	 		infoSalaTeorica("Cuatriadas", "<p>Estos acordes se construyen sobre la misma base de los acordes TRIADA vistos en los ejemplos anteriores. Adicionalmente se agrega un intervalo más de tercera, para quedar así con cuatro sonidos. Así, entre los sonidos de cada acorde existe un intervalo de 3ª, quedando conformado por una nota base, un intervalo de tercera, un intervalo de quinta y un intervalo de séptima.</p>"+
	 			"<p>A continuación encontraremos en el primer gráfico la construcción de acordes de cuatro sonidos y en el siguiente gráfico sus respectivos nombres.</p>"+
	 			"<p>Acordes de cuatro sonidos de la escala de Do Mayor con numeración y carácter.</p>"+
	 			"<div class='col-lg-offset-2 col-lg-8'><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/0M3yF8Vba3Y'></iframe>"+
	 			"</div></div>",
	 			"", "texto", "acordes", $(this).attr("id"), "general-acordes");
	 		break;
	 		case "btn-tonica":
	 		infoSalaTeorica("Tónica", "<p>Representada por el número romano I, debido a que su nota fundamental es el primer grado de la escala. Se denomina “Tónica” porque es el acorde del primer grado el que nos indica cuál es la tonalidad.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/funciones/tonica.png' class='img-responsive'></p>",
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-subacordes' data-genero-sonido='funcionesarmonicas-tonica'>Acordes</button>", 3, "funciones-armonicas", $(this).attr("id"), "general-funcionesarmonicas");
	 		break;
	 		case "btn-subdominante":
	 		infoSalaTeorica("Sub dominante", "<p>Representada por el número romano IV, debido a que su nota fundamental es el cuarto grado de la escala..</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/funciones/subdominante.png' class='img-responsive'></p>",
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-subacordes' data-genero-sonido='funcionesarmonicas-subdominante'>Acordes</button>", 3, "funciones-armonicas", $(this).attr("id"), "general-funcionesarmonicas");
	 		break;
	 		case "btn-dominante":
	 		infoSalaTeorica("Dominante", "<p>Representada por el número romano V, debido a que su nota fundamental es el quinto grado de la escala.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/funciones/dominante.png' class='img-responsive'></p>",
	 			"<button class='btn btn-block btn-n-mus sub-boton-dos' id='btn-subacordes' data-genero-sonido='funcionesarmonicas-dominante'>Acordes</button>", 3, "funciones-armonicas", $(this).attr("id"), "general-funcionesarmonicas");
	 		break;
	 		case "btn-subacordes":
	 		if($(this).attr("data-genero-sonido") == "funcionesarmonicas-tonica"){
	 			infoSalaTeorica("Tónica", "<p>En esta región se ubicarán los acordes de I, iii y vi grado por contener dentro de su estructura la nota “mi”, que es la que le da el carácter de Mayor al acorde de Tónica. Auditivamente estos acordes se sienten como el punto de reposo, descanso o final.</p>"+
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/funciones/acordes_tonica.png' class='img-responsive'></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-subacordes' data-genero-sonido='funcionesarmonicas-tonica'>Acordes</button>", 3, "funciones-armonicas", $(this).attr("id"), "general-funcionesarmonicas");
	 		}
	 		if($(this).attr("data-genero-sonido") == "funcionesarmonicas-subdominante"){
	 			infoSalaTeorica("Sub dominante", "<p>Además del IV grado incluirá el acorde del ii grado. Auditivamente son acordes que pueden conducir tanto a los de tónica como a los de dominante.</p>"+
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/funciones/acordes_subdominante.png' class='img-responsive'></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-subacordes' data-genero-sonido='funcionesarmonicas-subdominante'>Acordes</button>", 3, "funciones-armonicas", $(this).attr("id"), "general-funcionesarmonicas");
	 		}
	 		if($(this).attr("data-genero-sonido") == "funcionesarmonicas-dominante"){
	 			infoSalaTeorica("Dominante", "<p>Estará conformada también por los acordes del V y vii grado disminuido. Auditivamente estos acordes ayudan a definir la tonalidad ya que crean una tensión que resuelve generalmente a la tónica.</p>"+
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/funciones/acordes_dominante.png' class='img-responsive'></p>",
	 				"<button class='btn btn-block btn-h-mus sub-boton-dos' id='btn-subacordes' data-genero-sonido='funcionesarmonicas-dominante'>Acordes</button>", 3, "funciones-armonicas", $(this).attr("id"), "general-funcionesarmonicas");
	 		}
	 		break;
	 		case "btn-ins-guitarra":
	 		infoSalaTeorica("Instrumentos música andina", "<p class='instrumentos'>"+
	 			"<span id='clavijas'>Clavijas</span><br>"+
	 			"<span id='cabeza'>Cabeza o clavijero</span><br>"+
	 			"<span id='cejuela'>Hueso o cejuela</span><br>"+
	 			"<span id='cuerpo'>Cuerpo o tapa armónica</span><br>"+
	 			"<span id='costados'>Costados o aros</span><br>"+
	 			"<span id='hueso'>Hueso del puente</span><br>"+
	 			"<span id='diapason'>Diapasón</span><br>"+
	 			"<span id='trastes'>Trastes</span><br>"+
	 			"<span id='filetes'>Filetes</span><br>"+
	 			"<span id='cuerdas'>Cuerdas</span><br>"+
	 			"<span id='roseta'>Roseta</span><br>"+
	 			"<span id='boca'>Boca</span><br>"+
	 			"<span id='puente'>Puente</span>"+
	 			"</p>",
	 			"<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/guitarra/guitarra.png' style='height: 400px; margin-left: -70px;' id='img-guitarra'>/////"+
	 			"<div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/twg8bqj6kFE'></iframe>"+
	 			"</div>", "instrumentos", "instrumentos", $(this).attr("id"), "teorica-instrumentos");
	 		break;
	 		case "btn-ins-tiple":
	 		infoSalaTeorica("Instrumentos música andina", "<p class='instrumentos'>"+
	 			"<span id='clavijas'>Clavijas</span><br>"+
	 			"<span id='clavijero'>Clavijero</span><br>"+
	 			"<span id='cejuela'>Hueso o cejuela</span><br>"+
	 			"<span id='diapason'>Diapasón</span><br>"+
	 			"<span id='trastes'>Trastes</span><br>"+
	 			"<span id='mastil'>Mástil</span><br>"+
	 			"<span id='cuerdas'>Cuerdas</span><br>"+
	 			"<span id='boca'>Boca</span><br>"+
	 			"<span id='cuerpo'>Cuerpo o tapa armónica</span><br>"+
	 			"<span id='costados'>Costados o aros</span><br>"+
	 			"<span id='puente'>Puente</span>"+
	 			"</p>", "<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/tiple/tiple.png' style='height: 400px; margin-left: -70px;' id='img-tiple'>/////"+
	 			"<div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/yMGcuuFcwQQ'></iframe>"+
	 			"</div>", "instrumentos", "instrumentos", $(this).attr("id"), "teorica-instrumentos");
	 		break;
	 		case "btn-ins-bandola":
	 		infoSalaTeorica("Instrumentos música andina", "<p class='instrumentos'>"+
	 			"<span id='clavijas'>Clavijas</span><br>"+
	 			"<span id='clavijero'>Clavijero</span><br>"+
	 			"<span id='contraste'>Contraste</span><br>"+
	 			"<span id='diapason'>Diapasón</span><br>"+
	 			"<span id='trastes'>Trastes</span><br>"+
	 			"<span id='boquilla'>Boquilla</span><br>"+
	 			"<span id='aro'>Aro</span><br>"+
	 			"<span id='hueso'>Hueso</span><br>"+
	 			"<span id='pontezuela'>Pontezuela</span><br>"+
	 			"<span id='boca'>Boca</span><br>"+
	 			"<span id='rabiza'>Rabiza (Tira cuerdas)</span><br>"+
	 			"<span id='taco'>Taco</span><br>"+
	 			"<span id='puente'>Puente</span><br>"+
	 			"<span id='tapa'>Tapa</span>"+
	 			"</p>", "<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/bandola/bandola.png' style='height: 400px; margin-left: -70px;' id='img-bandola'>/////"+
	 			"<div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/cYS8ccLwQOM'></iframe>"+
	 			"</div>", "instrumentos", "instrumentos", $(this).attr("id"), "teorica-instrumentos");
	 		break;
	 		case "btn-ins-otros":
	 		infoSalaTeorica("Instrumentos música andina", "<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/otros/carraca.png' width='400'>"+
	 			"<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/otros/cucharas.png' width='400'>"+
	 			"<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/otros/esterilla.png' width='400'>"+
	 			"<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/otros/guacharaca.png' width='400'>"+
	 			"<img src='"+$("#bloginfo").val() +"/musica/images/instrumentos/otros/marrana.png' width='400'>", "", "texto", "instrumentos", $(this).attr("id"), "teorica-instrumentos");
	 		break;
	 		case "btn-foros":
	 		if($(this).attr("data-curso") == "andina"){
	 			window.open($("#blog-info").val()+"/foros-musica");
	 		}
	 		break;
	 		case "btn-regresar":
	 		if($(this).attr("data-atras") == "index"){
	 			window.location.href=$("#blog-info").val();
	 		}
	 		if($(this).attr("data-atras") == "introduccion"){
	 			window.location.href=$("#blog-info").val()+"/introduccion-aula-musica";
	 		}
	 		if($(this).attr("data-atras") == "modulo"){
	 			window.location.href=$("#blog-info").val()+"/musica";
	 			$(this).attr("data-atras", "introduccion");
	 		}
	 		break;
	 		case "btn-iniciar":
	 		window.location.href=$("#blog-info").val()+"/musica";
	 		break;
	 	}
	 	if($(this).hasClass('sub-boton')){
	 		$("#btn-"+$(this).attr('data-sala-genero').split("-")[1]).removeClass().addClass("btn btn-block btn-h-mus");
	 	}
	 	if ($(this).hasClass('sub-boton-dos')){
	 		$("#btn-"+$(this).attr("data-genero-sonido").split("-")[0]).removeClass("btn-n-mus").addClass("btn-h-mus");
	 		$("#btn-"+$(this).attr("data-genero-sonido").split("-")[1]).removeClass("btn-n-mus").addClass("btn-h-mus");
	 	}
	 });
});