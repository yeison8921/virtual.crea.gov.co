jQuery(document).ready(function($){

	function infoIntroduccion(title, text) {
		$(".titulo-info-basica-musica").html("").html(title);
		$(".contenido-info-basica-musica").html("").html(text);
	}

	function infoModulo(title, text, data){
		$(".titulo-info-basica-musica").html("").html(title);
		$(".contenido-info-basica-musica").html("").html(text);
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
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-h-mus' id='btn-guabina' data-sala=''>Guabina</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-pasillo' data-sala=''>Pasillo</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-bambuco' data-sala=''>Bambuco</button>");
	 		}
	 		if(sala == "teorica"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-n-mus' id='btn-instrumentos' data-sala=''>Instrumentos</button>");
	 		}
	 		if(sala == "interactiva"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-n-mus' id='btn-referentes' data-sala=''>Referentes</button>");
	 		}
	 		if(sala == "general"){
	 			$("#div-botones-sala").append("<button class='btn btn-block btn-h-mus' id='btn-escala' data-sala=''>Escala</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-ritmometrica' data-sala=''>Ritmo y métrica</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-acordes' data-sala=''>Acordes</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-funciones-armonicas' data-sala=''>Funciones Armónicas</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-armaduras' data-sala=''>Armaduras</button>");
	 		}
	 		if(sala == "laboratorio"){

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
	 	$(".titulo-info-basica-musica").html("").html(title);
	 	switch(grid){
	 		case 1:
	 		$(".contenido-info-basica-musica").html("").html("<div class='col-lg-offset-2 col-lg-8 col-md-12'>"+mainText+"</div>");
	 		break;
	 		case 2:
	 		$(".contenido-info-basica-musica").html("").html("<div class='col-lg-6 col-md-12'>"+mainText+"</div>"+
	 			"<div class='col-lg-6 col-md-12'>"+secText+"</div>");
	 		break;
	 		case 3:
	 		$(".contenido-info-basica-musica").html("").html("<div class='col-lg-8 col-md-12'>"+mainText+"</div>"+
	 			"<div class='col-lg-4 col-md-12'>"+secText+"</div>");
	 		break;
	 		case "texto":
	 		$(".contenido-info-basica-musica").html("").html("<div class='col-lg-12 col-md-12'>"+mainText+"</div>");
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
	 		case 3:
	 		$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-2 col-lg-2 col-md-offset-2 col-md-2'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-ritmo' data-sala-genero=''>Ritmo</button>"+
	 			"</div>"+
	 			"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-melodia' data-sala-genero=''>Melodía</button>"+
	 			"</div>"+
	 			"<div class='col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-armonia' data-sala-genero=''>Armonía</button>"+
	 			"</div>");
	 		break;
	 		case 4:
	 		$("#div-subbotones-sala").html("").html("<div class='col-lg-3 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-guitarra' data-sala-genero=''>Play Along Guitarra</button>"+
	 			"</div>"+
	 			"<div class='col-lg-3 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-tiple' data-sala-genero=''>Play Along Tiple</button>"+
	 			"</div>"+
	 			"<div class='col-lg-3 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-along-bandola' data-sala-genero=''>Play Along Bandola</button>"+
	 			"</div>"+
	 			"<div class='col-lg-3 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-karaoke' data-sala-genero=''>Karaoke</button>"+
	 			"</div>");
	 		break;
	 		case "escala":
	 		$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4'>"+
	 			"<button class='btn btn-block btn-n-mus sub-boton' id='btn-estructura-escala' data-sala-genero=''>Estructura de la escala mayor</button>"+
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
	 	infoIntroduccion("Introducción", "¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
	 }else{
	 	infoModulo("Andina", "<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
	 		"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>", "andina");
	 }
	 $(".contenedor").on("click", "button", function(){
	 	$(this).removeClass("btn-n-mus").addClass("btn-h-mus");
	 	$(".contenedor button").not(this).removeClass().addClass("btn btn-block btn-n-mus");
	 	if($(this).attr('id') == "btn-llanera" || $(this).attr('id') == "btn-pacifico" || $(this).attr('id') == "btn-atlantico" || $(this).attr('id') == "btn-carranga"){
	 		$("#div-botones-salas-musica").hide();
	 	}
	 	if($(this).attr('id') == "btn-teorica" || $(this).attr('id') == "btn-interactiva" || $(this).attr('id') == "btn-general"){
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
	 		infoModulo("Llanera", "", "llanera");
	 		break;
	 		case "btn-pacifico":
	 		infoModulo("Pacifico", "", "pacifico");
	 		break;
	 		case "btn-atlantico":
	 		infoModulo("Atlántico", "", "atlantico");
	 		break;
	 		case "btn-carranga":
	 		infoModulo("Carranga", "", "carranga");
	 		break;
	 		case "btn-guabina":
	 		if($(this).attr("data-sala") == "teorica"){
	 			infoSalaTeorica("La Guabina", "<p>Aire andino de origen campesino, al parecer nacido en Antioquia desde los albores del siglo XIX, con ascendencia europea y con adaptaciones regionales muy sugerentes. Sobre su nombre no existe definición; se habla de la existencia de un pez guabina en los Llanos, y muy apreciado en Cuba por su carne.</p>"+
	 				"<p>Es otra de las danzas y cantos típicos del folklore musical andino, muy extendida en los departamentos de Santander, Boyacá, Tolima, Huila y antiguamente en Antioquia. Aún cuando el ritmo es común, en cada departamento la guabina adquiere una melodía especial. Su formato instrumental típico está conformado por el tiple, requinto, la bandola el chucho o guache.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/guabina/cuchara.png' width='200'></p>"+
	 				"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Cucharas_2_01.mp3' type='audio/mpeg'></audio></p>"+
	 				"<h3>Cucharas</h3><p>Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.</p>", 2, 3, "", "teorica-guabina");
	 		}
	 		if($(this).attr("data-sala") == "interactiva"){
	 			infoSalaTeorica("La Guabina", "<p>Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultivaba en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.</p>"+
	 				"<p>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.</p>",
	 				"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/qv_quuy50Jo'></iframe>"+
	 				"</div></p>", 2, 4, "", "interactiva-guabina");
	 		}
	 		break;
	 		case "btn-pasillo":
	 		if($(this).attr("data-sala") == "teorica"){
	 			infoSalaTeorica("El Pasillo", "<p>Este es otro de los bailes folclóricos andinos que se hicieron populares en el siglo XIX. Es una de las variantes del vals europeo, convertido en aire de pasillo, por su ritmo más rápido.</p>"+
	 				"<p>Con algunas variaciones rítmicas en el bajo y en el acompañamiento armónico, su tempo puede ser lento a moderado, generalmente vocal, con letras de amor y desilusión. y en algunas regiones con tiempos más rápidos  que da como resultado el Pasillo fiestero.</p>"+
	 				"CRUZ GONZÁLEZ, Miguel A.: Folclore, Música y Nación. El papel del bambuco en la construcción de lo colombiano. NOMADAS (COL.) núm. 17,2002, pp.222. Universidad Central. Bogotá, Colombia.</p>", "", 3, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-sala") == "interactiva"){
	 			infoSalaTeorica("El Pasillo", "<p>El texto del pasillo</p>",
	 				"<p>Video</p>", 2, 4, "", "interactiva-pasillo");
	 		}
	 		break;
	 		case "btn-bambuco":
	 		if($(this).attr("data-sala") == "teorica"){
	 			infoSalaTeorica("El bambuco", "<p>Es el aire folclórico típico de la zona andina colombiana, y por esencia la danza nacional más representativa. Su instrumento representativo es el tiple.</p>"+
	 				"<p>Se caracteriza por tener la síncopa en la melodía, en su acompañamiento y un bajo que suena a contratiempo; su métrica puede ser en 6/8, que es más fácil para su lectura y ejecución. Su tempo puede ser de moderado a rápido; por lo tanto el resultado es festivo, dinámico y define con facilidad la síncopa que es la característica de este género.</p>"+
	 				"<p>CRUZ GONZÁLEZ, Miguel A.: Folclore, Música y Nación. El papel del bambuco en la construcción de lo colombiano. NOMADAS (COL.) núm. 17,2002, pp.222. Universidad Central. Bogotá, Colombia.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/bambuco/esterilla.jpg' width='200'></p>"+
	 				"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Esterilla_01.mp3' type='audio/mpeg'></audio></p>"+
	 				"<h3>Esterilla</h3><p>Es un instrumento tradicional colombiano, construido con cañutos o trozos de bambú (entre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.</p>", 2, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		if($(this).attr("data-sala") == "interactiva"){
	 			infoSalaTeorica("El Bambuco", "<p>El texto del bambuco</p>",
	 				"<p>Video</p>", 2, 4, "", "interactiva-bambuco");
	 		}
	 		break;
	 		case "btn-teorica":
	 		if($(this).attr("data-curso") == "andina"){
	 			botonesLaterales("andina", "teorica");
	 			$("#div-botones-sala button").attr("data-sala", "teorica");
	 			infoSalaTeorica("La Guabina", "<p>Aire andino de origen campesino, al parecer nacido en Antioquia desde los albores del siglo XIX, con ascendencia europea y con adaptaciones regionales muy sugerentes. Sobre su nombre no existe definición; se habla de la existencia de un pez guabina en los Llanos, y muy apreciado en Cuba por su carne.</p>"+
	 				"<p>Es otra de las danzas y cantos típicos del folklore musical andino, muy extendida en los departamentos de Santander, Boyacá, Tolima, Huila y antiguamente en Antioquia. Aún cuando el ritmo es común, en cada departamento la guabina adquiere una melodía especial. Su formato instrumental típico está conformado por el tiple, requinto, la bandola el chucho o guache.</p>",
	 				"<p><img src='"+$("#bloginfo").val() +"/musica/images/guabina/cuchara.png' width='200'></p>"+
	 				"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Cucharas_2_01.mp3' type='audio/mpeg'></audio></p>"+
	 				"<h3>Cucharas</h3><p>Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.</p>", 2, 3, "", "teorica-guabina");
	 		}
	 		break;
	 		case "btn-interactiva":
	 		if($(this).attr("data-curso") == "andina"){
	 			botonesLaterales("andina", "interactiva");
	 			$("#div-botones-sala button").attr("data-sala", "interactiva");
	 			infoSalaTeorica("La Guabina", "<p>Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultivaba en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.</p>"+
	 				"<p>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.</p>",
	 				"<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/qv_quuy50Jo'></iframe>"+
	 				"</div></p>", 2, 4, "", "interactiva-guabina");
	 		}
	 		break;
	 		case "btn-general":
	 		botonesLaterales("andina", "general");
	 		$("#div-botones-sala button").attr("data-sala", "general");
	 		if($(this).attr("data-curso") == "andina"){
	 			infoSalaTeorica("Escala", "<p>Una escala es una secuencia de notas musicales (sonidos), con un determinado orden de tonos y semitonos entre ellas, desde su tónica (primera nota de la escala), hasta su octava (repetición de la tónica a una octava de distancia ascendente). Estos sonidos son conocidos comúnmente como “grados de la escala”.</p>"+
	 				"<p>La distancia que hay entre dos sonidos por grado conjunto (sonidos adyacentes o consecutivos) de la escala se mide por tonos (T) y semitonos (S).</p>",
	 				"<button class='btn btn-block btn-n-mus' id='btn-do-mayor' data-genero-sonido='escala'>Escala Do Mayor</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-sol-mayor' data-genero-sonido='escala'>Escala Sol Mayor</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-re-mayor' data-genero-sonido='escala'>Escala Re Mayor</button>", 3, "escala", "", "general-escala");
	 		}
	 		break;
	 		case "btn-ritmo":
	 		if($(this).attr("data-sala-genero") == "teorica-guabina"){
	 			infoSalaTeorica("Ritmo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/IrbROBwoqBQ'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='guabina-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='guabina-ritmo'>Guitarra</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-pasillo"){
	 			infoSalaTeorica("Ritmo Pasillo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/MhYvTpzFnNk'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='pasillo-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='pasillo-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-bambuco"){
	 			infoSalaTeorica("Ritmo Bambuco Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/mKIsvh6MNG0'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='bambuco-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='bambuco-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		break;
	 		case "btn-melodia":
	 		if($(this).attr("data-sala-genero") == "teorica-guabina"){
	 			infoSalaTeorica("Melodía - Voz", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/amWGWqkfNjc'></iframe>"+
	 				"</div><p>"+
	 				"<p>link</p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-voz' data-genero-sonido='guabina-melodia'>Voz</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-bandola' data-genero-sonido='guabina-melodia'>Bandola</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-pasillo"){
	 			infoSalaTeorica("Melodía Pasillo", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/O0gs6KvKY_c'></iframe>"+
	 				"</div></p>", "", 1, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-sala-genero") == "teorica-bambuco"){
	 			infoSalaTeorica("Melodía Bambuco", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/gymuFsEyOfI'></iframe>"+
	 				"</div></p>", "", 1, 2, $(this).attr("id"), "teorica-bambuco");	
	 		}
	 		break;
	 		case "btn-armonia":
	 		if($(this).attr("data-sala-genero") == "teorica-guabina"){
	 			infoSalaTeorica("Armonía - Guitarra", "<p>video</p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='guabina-armonia'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='guabina-armonia'>Guitarra</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		}
	 		break;
	 		case "btn-tiple":
	 		if($(this).attr("data-genero-sonido") == "guabina-ritmo"){
	 			infoSalaTeorica("Ritmo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/IrbROBwoqBQ'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='guabina-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='guabina-ritmo'>Guitarra</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "guabina-armonia"){
	 			infoSalaTeorica("Armonía - Guitarra", "<p>video</p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='guabina-armonia'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='guabina-armonia'>Guitarra</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "pasillo-ritmo"){
	 			infoSalaTeorica("Ritmo Pasillo Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/MhYvTpzFnNk'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='pasillo-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='pasillo-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-genero-sonido") == "bambuco-ritmo"){
	 			infoSalaTeorica("Ritmo Bambuco Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/mKIsvh6MNG0'></iframe>"+
	 				"</div></p>",
	 				"<button class='btn btn-block btn-h-mus' id='btn-tiple' data-genero-sonido='bambuco-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-n-mus' id='btn-guitarra' data-genero-sonido='bambuco-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		break;
	 		case "btn-guitarra":
	 		if($(this).attr("data-genero-sonido") == "guabina-ritmo"){
	 			infoSalaTeorica("Ritmo guitarra", "<p>video</p>",
	 				"<button class='btn btn-block btn-n-mus' id='btn-tiple' data-genero-sonido='guabina-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus' id='btn-guitarra' data-genero-sonido='guabina-ritmo'>Guitarra</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "guabina-armonia"){
	 			infoSalaTeorica("Armonía - Guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/c1yuvkCoCZA'></iframe>"+
	 				"</div></p>"+
	 				"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/guabina/la_ruana_armonia.pdf' alt='Armonía_La_Ruana' download>Armonía La Ruana</a></p>",
	 				"<button class='btn btn-block btn-n-mus' id='btn-tiple' data-genero-sonido='guabina-armonia'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus' id='btn-guitarra' data-genero-sonido='guabina-armonia'>Guitarra</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		}
	 		if($(this).attr("data-genero-sonido") == "pasillo-ritmo"){
	 			infoSalaTeorica("Ritmo Pasillo Guitarra", "<p>video</p>",
	 				"<button class='btn btn-block btn-n-mus' id='btn-tiple' data-genero-sonido='pasillo-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus' id='btn-guitarra' data-genero-sonido='pasillo-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-pasillo");
	 		}
	 		if($(this).attr("data-genero-sonido") == "bambuco-ritmo"){
	 			infoSalaTeorica("Ritmo Bambuco Tiple", "<p>video</p>",
	 				"<button class='btn btn-block btn-n-mus' id='btn-tiple' data-genero-sonido='bambuco-ritmo'>Tiple</button>"+
	 				"<button class='btn btn-block btn-h-mus' id='btn-guitarra' data-genero-sonido='bambuco-ritmo'>Guitarra</button>", 3, 2, $(this).attr("id"), "teorica-bambuco");
	 		}
	 		break;
	 		case "btn-voz":
	 		infoSalaTeorica("Melodía - Voz", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/amWGWqkfNjc'></iframe>"+
	 			"</div><p>"+
	 			"<p>link</p>",
	 			"<button class='btn btn-block btn-h-mus' id='btn-voz' data-genero-sonido='guabina-melodia'>Voz</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-bandola' data-genero-sonido='guabina-melodia'>Bandola</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		break;
	 		case "btn-bandola":
	 		infoSalaTeorica("Bandola - Voz", "<p>video</p>"+
	 			"<p><a href='"+$("#bloginfo").val() +"/musica/pdf/guabina/la_ruana_bandola.pdf' alt='Melodía_La_Ruana_Bandola'download>Melodía - La Bandola</a></p>",
	 			"<button class='btn btn-block btn-n-mus' id='btn-voz' data-genero-sonido='guabina-melodia'>Voz</button>"+
	 			"<button class='btn btn-block btn-h-mus' id='btn-bandola' data-genero-sonido='guabina-melodia'>Bandola</button>", 3, 3, $(this).attr("id"), "teorica-guabina");
	 		break;

	 		case "btn-along-guitarra":
	 		if($(this).attr("data-sala-genero") == "interactiva-guabina"){
	 			infoSalaTeorica("Play Along Guitarra", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/ivCvTEMq5bs'></iframe>"+
	 				"</div><p>", "", 1, 4, $(this).attr("id"), "interactiva-guabina");
	 		}
	 		break;
	 		case "btn-along-tiple":
	 		if($(this).attr("data-sala-genero") == "interactiva-guabina"){
	 			infoSalaTeorica("Play Along Tiple", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/8sFJkixKn8c'></iframe>"+
	 				"</div><p>", "", 1, 4, $(this).attr("id"), "interactiva-guabina");
	 		}
	 		break;
	 		case "btn-along-bandola":
	 		if($(this).attr("data-sala-genero") == "interactiva-guabina"){
	 			infoSalaTeorica("Play Along Bandola", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 				"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/xlq2c6EVhaw'></iframe>"+
	 				"</div><p>", "", 1, 4, $(this).attr("id"), "interactiva-guabina");
	 		}
	 		break;
	 		case "btn-escala":
	 		infoSalaTeorica("Escala", "<p>Una escala es una secuencia de notas musicales (sonidos), con un determinado orden de tonos y semitonos entre ellas, desde su tónica (primera nota de la escala), hasta su octava (repetición de la tónica a una octava de distancia ascendente). Estos sonidos son conocidos comúnmente como “grados de la escala”.</p>"+
	 			"<p>La distancia que hay entre dos sonidos por grado conjunto (sonidos adyacentes o consecutivos) de la escala se mide por tonos (T) y semitonos (S).</p>",
	 			"<button class='btn btn-block btn-n-mus' id='btn-do-mayor' data-genero-sonido='escala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-sol-mayor' data-genero-sonido='escala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-re-mayor' data-genero-sonido='escala'>Escala Re Mayor</button>", 3, "escala", "", "general-escala");
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
	 		case "btn-funciones-armonicas":
	 		infoSalaTeorica("Funciones Armónicas", "<p>Las funciones armónicas son regiones de la tonalidad que nos permiten entender la relación existente entre los acordes que la componen.</p>"+
	 			"<p>Existen tres funciones armónicas tanto en tonalidad Mayor como en tonalidad menor.</p>", "", "texto", "funciones-armonicas", $(this).attr("id"), "general-funciones-armonicas");
	 		break;
	 		case "btn-estructura-escala":
	 		infoSalaTeorica("Estructura de la escala mayor", "<p>Está conformada por cinco intervalos (Distancias) de tono y dos de semitono, comprendidos entre ocho notas, y distribuidos de la siguiente manera entre los grados de la escala.</p>",
	 			"<button class='btn btn-block btn-n-mus' id='btn-do-mayor' data-genero-sonido='escala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-sol-mayor' data-genero-sonido='escala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-re-mayor' data-genero-sonido='escala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
	 		break; 
	 		case "btn-armaduras":
	 		infoSalaTeorica("Armaduras", "<p>La armadura, es el conjunto de alteraciones (sostenidos o bemoles), situadas a la derecha de la clave, en el pentagramay, es la encargada de indicarnos la tonalidad del tema o canción que estemos trabajando.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/armaduras/becuadro1.png'></p>"+
	 			"<p>La armadura, permite a los músicos ahorrar la escritura de alteraciones durante toda la partitura. El orden de los sostenidos siempre es el mismo de todas las armaduras: FA, DO, SOL, RE, LA, MI, SI.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/armaduras/becuadro1,1.png'></p>", "", "texto", "", $(this).attr("id"), "general-funciones-armonicas");
	 		break;
	 		case "btn-do-mayor":
	 		infoSalaTeorica("Escala de DO mayor", "<p>Diferenciación de tonos (T) y semitonos (S) entre cada uno de los grados.</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/escala/Nota_Do_Mayor.jpg' class='img-responsive'></p>",
	 			"<button class='btn btn-block btn-h-mus' id='btn-do-mayor' data-genero-sonido='escala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-sol-mayor' data-genero-sonido='escala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-re-mayor' data-genero-sonido='escala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
	 		break;
	 		case "btn-sol-mayor":
	 		infoSalaTeorica("Escala de SOL mayor", "<p>Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota fa# (Primer sostenido).</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/escala/Nota_Sol_Mayor.jpg' class='img-responsive'></p>",
	 			"<button class='btn btn-block btn-n-mus' id='btn-do-mayor' data-genero-sonido='escala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-h-mus' id='btn-sol-mayor' data-genero-sonido='escala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-re-mayor' data-genero-sonido='escala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
	 		break;
	 		case "btn-re-mayor":
	 		infoSalaTeorica("Escala de RE mayor", "<p>Para mantener la estructura de la Escala Mayor, se altera el séptimo grado de la escala, aparece la nota do# (Segundo sostenido).</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/escala/Nota_Re_Mayor.jpg' class='img-responsive'></p>",
	 			"<button class='btn btn-block btn-n-mus' id='btn-do-mayor' data-genero-sonido='escala'>Escala Do Mayor</button>"+
	 			"<button class='btn btn-block btn-n-mus' id='btn-sol-mayor' data-genero-sonido='escala'>Escala Sol Mayor</button>"+
	 			"<button class='btn btn-block btn-h-mus' id='btn-re-mayor' data-genero-sonido='escala'>Escala Re Mayor</button>", 3, "escala", $(this).attr("id"), "general-escala");
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
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/ritmo/redonda.png' class='img-responsive'>Redonda</p>"+
	 			"<p><img src='"+$("#bloginfo").val() +"/musica/images/ritmo/redonda.png' class='img-responsive'>Redonda</p>"+
	 			"",
	 			"<button class='btn btn-block btn-n-mus'>Métricas más utilizadas</button>", "texto", "ritmometrica", $(this).attr("id"), "general-ritmometrica");
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
	 	if ($(this).attr("id") == "btn-tiple" || $(this).attr("id") == "btn-guitarra" || $(this).attr("id") == "btn-voz" || $(this).attr("id") == "btn-bandola" || $(this).attr("id") == "btn-do-mayor" || $(this).attr("id") == "btn-sol-mayor" || $(this).attr("id") == "btn-re-mayor"){
	 		$("#btn-"+$(this).attr("data-genero-sonido").split("-")[0]).removeClass("btn-n-mus").addClass("btn-h-mus");
	 		$("#btn-"+$(this).attr("data-genero-sonido").split("-")[1]).removeClass("btn-n-mus").addClass("btn-h-mus");
	 	}
	 });
});