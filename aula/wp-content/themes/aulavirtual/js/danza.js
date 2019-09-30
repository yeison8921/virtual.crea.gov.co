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
	 * @return {[type]}          [description]
	 */

	 function botonesLaterales(modulo){
	 	$("#div-botones-sala").html("");
	 	if(modulo == "conexion"){
	 		$("#div-botones-sala").html("<button class='btn btn-block btn-n-dan' id='btn-bienestar' data-sala=''>Bienestar</button>"+
	 			"<button class='btn btn-block btn-n-dan' id='btn-propiocepcion' data-sala=''>Propiocepción</button>"+
	 			"<button class='btn btn-block btn-n-dan' id='btn-respiracion' data-sala=''>Respiración</button>");
	 	}
	 }

	 /**
	 * [Función para pintar la información de la sala]
	 * @param  {[text]} mainText [Título del contenido]
	 * @param  {[text]} mainText [Texto principal del contenido]
	 * @param  {[text]} secText  [Texto secundario del contenido]
	 * @param  {[number]} grid  [Número para determinar como dividir el grid del contenido]
	 * @param  {[number]} botonesHorizontales  [Número para pintar la cantidad de botones de en la sala teórica]
	 * @param  {[text]} botonHover  [Id para saber a que botón se le dió clic y asi ponerle la clase de seleccionado]
	 * @param  {[text]} data  [Data para saber que información debe mostrar cada botón dependiendo la sala y el género]
	 * @return {[type]}          [description]
	 */

	 function infoSala(title, mainText, secText, grid, botonesHorizontales, botonHover, data){
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
	 	}
	 	switch(botonesHorizontales){
	 		case "conexion":
	 		$("#div-subbotones-sala").html("").html("<div class='col-lg-offset-2 col-lg-3 col-md-offset-2 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton' id='btn-lunes' data-sala-genero=''>#LunesDeMovimiento</button>"+
	 			"</div>"+
	 			"<div class='col-lg-offset-2 col-lg-3 col-md-offset-2 col-md-3'>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton' id='btn-flash' data-sala-genero=''>Flashmob todo se mueve</button>"+
	 			"</div>");
	 		break;
	 		default:
	 		$("#div-subbotones-sala").html("");
	 	}
	 	if(botonHover != ""){
	 		$("#"+botonHover).removeClass("btn-n-dan").addClass("btn-h-dan");
	 	}
	 	$("#div-subbotones-sala button").attr("data-sala-genero", data);
	 }

	 var pagina = window.location.href;
	 if(pagina.indexOf("introduccion") != -1){
	 	infoIntroduccion("Introducción", "<p>El Aula Virtual de danza es un espacio que invita a relacionarse con el cuerpo de manera consciente. Nuestro punto de partida es el impulso cotidiano de movimiento como herramienta para reconocer el cuerpo, ese territorio que habitamos, el lugar desde el que nos comunicamos e interactuamos con el mundo. Posteriormente, nos acercamos a la danza como el lenguaje que nos conecta con nosotros mismos y los otros, el ritual de conexión con lo primitivo, con las costumbres y tradiciones de pueblos, comunidades y territorios.</p>"+
	 		"<p>Las herramientas, ejercicios y retos propuestos son un llamado a la interacción y   exploración de las potencialidades del movimiento, dialogando con diversos géneros de la danza y técnicas corporales. Les invitamos a crear un mundo en el que todos nos relacionamos de una manera más cercana y amigable con nuestros cuerpos.</p>"+
	 		"<p>¿Se imaginan cómo sería el mundo si todos estuviéramos más conectados con nuestro cuerpo?</p>"+
	 		"<p>¡Bienvenidos!</p>");
	 }else{
	 	infoModulo("Conexión corporal", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 		"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/Ngf-gMzOvsM'></iframe>"+
	 		"</div></p>", "conexion");
	 }

	 $(".contenedor").on("click", "button", function(){
	 	$(this).removeClass("btn-n-dan").addClass("btn-h-dan");
	 	$(".contenedor button").not(this).removeClass().addClass("btn btn-block btn-n-dan")

	 	if($(this).attr("id") == "btn-conexion"){
	 		$("#btn-regresar").attr("data-atras", "modulo");
	 	}

	 	switch($(this).attr('id')){
	 		case "btn-introduccion":
	 		infoIntroduccion("Introducción", "<p>El Aula Virtual de danza es un espacio que invita a relacionarse con el cuerpo de manera consciente. Nuestro punto de partida es el impulso cotidiano de movimiento como herramienta para reconocer el cuerpo, ese territorio que habitamos, el lugar desde el que nos comunicamos e interactuamos con el mundo. Posteriormente, nos acercamos a la danza como el lenguaje que nos conecta con nosotros mismos y los otros, el ritual de conexión con lo primitivo, con las costumbres y tradiciones de pueblos, comunidades y territorios.</p>"+
	 			"<p>Las herramientas, ejercicios y retos propuestos son un llamado a la interacción y exploración de las potencialidades del movimiento, dialogando con diversos géneros de la danza y técnicas corporales. Les invitamos a crear un mundo en el que todos nos relacionamos de una manera más cercana y amigable con nuestros cuerpos.</p>"+
	 			"<p>¿Se imaginan cómo sería el mundo si todos estuviéramos más conectados con nuestro cuerpo?</p>"+
	 			"<p>¡Bienvenidos!</p>");
	 		break;
	 		case "btn-objetivos":
	 		infoIntroduccion("Objetivos","<p>GENERAL:</p>"+
	 			"<ul><li>Conectarse con el movimiento a través del cuerpo desde un espacio interactivo que propone experiencias virtuales y presenciales, enfocadas al descubrimiento y exploración de la danza como lenguaje.</li></ul>"+
	 			"<p>ESPECÍFICOS:</p>"+
	 			"<ul>"+
	 			"<li>Descubrir las potencialidades del cuerpo en movimiento por medio de diferentes retos y ejercicios."+
	 			"<li>Ampliar los conocimientos sobre la Danza y las técnicas relacionadas con el movimiento, así como su desarrollo a través de la historia.</li>"+
	 			"<li>Interactuar con otros participantes a través de la plataforma, proponiendo un diálogo que permita la reflexión y retroalimentación en relación con las experiencias.</li>"+
	 			"</ul>");
	 		break;
	 		case "btn-metodologia":
	 		infoIntroduccion("Metodología", "<p>El curso está compuesto por cinco secciones a través de las que se desarrollan diversos conceptos y actividades, estos son:</p>"+
	 			"<p><div class='row'><div class='col-lg-3'>"+
	 			"<img src='"+$("#bloginfo").val() +"/danza/images/metodologia/conexion.png' height='100'>"+
	 			"</div>"+
	 			"<div class='col-lg-9'>"+
	 			"Conexión Corporal: enfocada en el reconocimiento corporal, los beneficios del movimiento y la actividad física."+
	 			"</div></div></p>"+
	 			"<p><div class='row'><div class='col-lg-3'>"+
	 			"<img src='"+$("#bloginfo").val() +"/danza/images/metodologia/ritmo.png' height='100'>"+
	 			"</div>"+
	 			"<div class='col-lg-9'>"+
	 			"Ritmo: busca desarrollar habilidades de coordinación, disociación y concentración en relación con conceptos musicales como tiempo y tempo, claves para el ejercicio de la danza."+
	 			"</div></div></p>"+
	 			"<p><div class='row'><div class='col-lg-3'>"+
	 			"<img src='"+$("#bloginfo").val() +"/danza/images/metodologia/expresion.png' height='100'>"+
	 			"</div>"+
	 			"<div class='col-lg-9'>"+
	 			"Expresión: exploración dirigida a la comunicación de ideas, emociones y sensaciones a través del lenguaje corporal, vinculando imágenes, acciones y movimientos."+
	 			"</div></div></p>"+
	 			"<p><div class='row'><div class='col-lg-3'>"+
	 			"<img src='"+$("#bloginfo").val() +"/danza/images/metodologia/espacio.png' height='100'>"+
	 			"</div>"+
	 			"<div class='col-lg-9'>"+
	 			"Espacio: propone acercarse al cuerpo en relación con el espacio, desde lugares convencionales y no convencionales."+
	 			"</div></div></p>"+
	 			"<p><div class='row'><div class='col-lg-3'>"+
	 			"<img src='"+$("#bloginfo").val() +"/danza/images/metodologia/memoria.png' height='100'>"+
	 			"</div>"+
	 			"<div class='col-lg-9'>"+
	 			"Memoria: recorrido a través de las diversas técnicas, géneros y formas de expresión desarrolladas a lo largo de la historia."+
	 			"</div></div></p>"+
	 			"<p>En cada una de las secciones se proponen retos para motivarlos a romper sus límites, probar nuevas sensaciones y experiencias corporales.</p>");
	 		break;
	 		case "btn-publico":
	 		infoIntroduccion("Nuestro público", "<p>El Aula Virtual “Cuerpo en Movimiento” está abierta para todos los que deseen explorar y ampliar conocimientos en relación con las prácticas corporales; niños, jóvenes y adultos pueden participar gracias a la variedad de actividades dirigidas al entrenamiento y exploración de habilidades/capacidades físicas y expresivas.</p>"+
	 			"<p>No es necesario que quienes van a tomar el curso tengan conocimientos previos en las temáticas que se abordan en las secciones dirigidas a la conexión corporal, al ritmo, a la expresión, al espacio y la memoria, sin embargo, todos deben contar con el manejo básico de computadores o dispositivos móviles con acceso a internet.</p>")
	 		break;
	 		case "btn-creditos":
	 		infoIntroduccion("Créditos", "");
	 		break;
	 		case "btn-conexion":
	 		$("#div-seleccion-curso-danza").hide();
	 		$("#div-contenido-sala-danza").show();
	 		$("#div-ccd").css({
	 			"background-image": 'url("'+ $("#bloginfo").val() + '/danza/images/fondos/fondo_conexion.jpg")',
	 		});
	 		botonesLaterales("conexion");
	 		infoSala("", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 		"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/Ngf-gMzOvsM'></iframe>"+
	 		"</div></p>", "", 1, "conexion", "", "conexion-bienestar");
	 		break;
	 		case "btn-ritmo":
	 		break;
	 		case "btn-expresion":
	 		break;
	 		case "btn-espacio":
	 		break;
	 		case "btn-memoria":
	 		break;
	 		case "btn-bienestar":
	 		// infoSala("Flashmob todo se mueve", "video", "<button class='btn btn-block btn-n-dan'>Reto 1</button>"+
	 		// 	"<button class='btn btn-block btn-n-dan'>Reto 2</button>"+
	 		// 	"<button class='btn btn-block btn-n-dan'>Reto 3</button>"+
	 		// 	"<button class='btn btn-block btn-n-dan'>Reto 4</button>", 3, "conexion", "", "conexion-bienestar");
	 		infoSala("Bienestar","<p>Los movimientos cotidianos como caminar, ir en bicicleta o subir las escaleras, hacen parte de la actividad física que nuestro cuerpo realiza diariamente, sin embargo, el cuerpo necesita de ayuda para fortalecerse y evitar que se debilite; el ejercicio que se realiza en el gimnasio o los deportes son las formas más conocidas de entrenar el cuerpo y siempre escuchamos sobre los beneficios para la salud que trae ejercitarse.</p>"+
	 			"<p>¿Me creerías si te digo que existe otra forma posible de ejercitar el cuerpo generando bienestar emocional y espiritual en nuestra vida?</p>"+
	 			"<p>La danza es una forma para mantener el estado óptimo de nuestro cuerpo, dado que la actividad física que se realiza mientras bailamos permite fortalecer los músculos, las articulaciones y los huesos, y mejora la actividad cardiovascular permitiendo que podamos realizar las actividades cotidianas como si siempre tuviéramos la batería al 100 %, pero también la danza es una forma posible para comunicar nuestras emociones, sensaciones y pensamientos, generando así no solo una salud física sino también emocional.</p>"+
	 			"<p>Te invitamos a moverte con nosotros en los retos de esta sección, ¡te sentirás muy bien!</p>",
	 			"<img src='"+$("#bloginfo").val() +"/danza/images/conexion/bienestar.png'>", 2, "conexion", "", "conexion-bienestar");
	 		break;
	 		case "btn-propiocepcion":
	 		infoSala("Propiocepción","<p>Seguramente habrás escuchado sobre los cinco sentidos de los que se habla habitualmente: vista, tacto, olfato, oído y gusto, así como su función para los seres humanos; pero, ¿sabías que además existen sentidos adicionales? Estos nos permiten percibir sensaciones relacionadas con la temperatura, el espacio, el equilibrio e incluso el dolor.</p>"+
	 			"<p>Uno de estos sentidos adicionales se llama PROPIOCEPCIÓN y es la capacidad de sentir el propio cuerpo. Además de darnos información sobre dónde y cómo están ubicadas las partes específicas sin necesidad de utilizar la vista, la propiocepción nos ayuda a crear una imagen del cuerpo en relación al espacio que habitamos; ser conscientes de la postura corporal, la dirección y rango de movimientos que hacemos a diario como girar, saltar, agacharnos, esquivar objetos o personas de manera eficiente y sin provocar lesiones.</p>"+
	 			"<p>A continuación te invitamos a participar en unos retos para explorar y mejorar tu propiocepción.</p>", "", "texto", "conexion", "", "conexion-propiocepcion");
	 		break;
	 		case "btn-respiracion":
	 		infoSala("Respiración","<p>Inhala... Exhala... Inhala… Exhala…</p>"+
	 			"<p>Respirar es brindarle a nuestro cuerpo una recarga de energía, como si la respiración fuera ese cargador que pone nuestra batería al 100% para poder hacer todas las actividades que hacemos día a día.</p> "+
	 			"<p>Respirar es un proceso que solo llevan a cabo los seres vivos y se convierte en la primera fuente de energía de nuestro cuerpo, también son fuentes de energía los alimentos, el descanso y el ejercicio. Hagamos un prueba ¿Cuánto tiempo puedes aguantar la respiración? Vamos pruébalo ¿Cuánto duraste?</p>"+
	 			"<p>Si dejamos de respirar, después de cuatro minutos nuestro cerebro empieza a fallar, no podemos durar tanto tiempo sin brindar oxígeno al cuerpo dado que la respiración permite el correcto funcionamiento de nuestro organismo, por eso respirar es una función vital. Podemos pasar días sin comer o dormir, sin embargo, no podemos dejar de respirar, la respiración es vida y todo lo que está vivo respira.</p>"+
	 			"<p>¡Estamos vivos! ¡Somos vida!</p>"+
	 			"<p>¿Quieres conocer cómo podemos entrenar nuestra respiración y llenar de beneficios a nuestro cuerpo? Ven acompáñanos a bailar con la respiración.</p>", "", "texto", "conexion", "", "conexion-respiracion");
	 		break;
	 		case "btn-lunes":
	 		// infoSala("Lunes de movimiento","<p>Sabemos que para todos es difícil comenzar la semana pues cuesta retomar la rutina después del descanso, sobre todo cuando estamos acostumbrados a escuchar frases como: “Otra vez es lunes”, “todo va bien hasta que te acuerdas que es lunes”, etc.</p>"+
	 		// 	"<p>Como todo es cuestión de actitud, queremos invitarles a unirse a nuestro reto <strong>#LunesDeMovimiento</strong> y así comenzar la semana activando el cuerpo para llenarlo de energía.</p>"+
	 		// 	"<p>Nuestro primer reto <strong>#LunesdeMovimiento</strong> te invita a comenzar la semana bailando. Bailar es una manera divertida de ejercitarse, activar el cuerpo y despejar la mente.</p>"+
	 		// 	"<p>¡Muévete con nosotros y te sentirás muy bien! Sólo vas a necesitar unos minutos y lo puedes hacer donde quieras.</p>"+
	 		// 	"<p>PASO A PASO:</p>"+
	 		// 	"<ol>"+
	 		// 	"<li>Repite y aprende los movimientos del video.</li>"+
	 		// 	"<li>Combina los movimientos como quieras y arma tu propia secuencia.</li>"+
	 		// 	"<li>Graba un video haciendo la secuencia con tu canción favorita para comenzar la semana.</li>"+
	 		// 	"<li>Publica tu video incluyendo las etiquetas:</li>"+
	 		// 	"<strong>#LunesdeMovimiento #AulaVirtualDanza #CuerpoenMovimiento</strong>"+
	 		// 	"<li>Comparte este reto para que otras personas lo hagan y puedan también empezar la semana con un cuerpo activo.</li>"+
	 		// 	"</ol>", "<p><img src='"+$("#bloginfo").val() +"/danza/images/conexion/lunes_movimiento.png'></p>", 2, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		infoSala("Lunes de movimiento","<p>Sabemos que para todos es difícil comenzar la semana pues cuesta retomar la rutina después del descanso, sobre todo cuando estamos acostumbrados a escuchar frases como: “Otra vez es lunes”, “todo va bien hasta que te acuerdas que es lunes”, etc.</p>"+
	 			"<p>Como todo es cuestión de actitud, queremos invitarles a unirse a nuestro reto <strong>#LunesDeMovimiento</strong> y así comenzar la semana activando el cuerpo para llenarlo de energía.</p>"+
	 			"<p>Nuestro primer reto <strong>#LunesdeMovimiento</strong> te invita a comenzar la semana bailando. Bailar es una manera divertida de ejercitarse, activar el cuerpo y despejar la mente.</p>"+
	 			"<p>¡Muévete con nosotros y te sentirás muy bien! Sólo vas a necesitar unos minutos y lo puedes hacer donde quieras.</p>"+
	 			"<p>PASO A PASO:</p>"+
	 			"<ol>"+
	 			"<li>Repite y aprende los movimientos del video.</li>"+
	 			"<li>Combina los movimientos como quieras y arma tu propia secuencia.</li>"+
	 			"<li>Graba un video haciendo la secuencia con tu canción favorita para comenzar la semana.</li>"+
	 			"<li>Publica tu video incluyendo las etiquetas:</li>"+
	 			"<strong>#LunesdeMovimiento #AulaVirtualDanza #CuerpoenMovimiento</strong>"+
	 			"<li>Comparte este reto para que otras personas lo hagan y puedan también empezar la semana con un cuerpo activo.</li>"+
	 			"</ol>", "<button class='btn btn-block btn-n-dan'>Reto 1</button>"+
	 		 	"<button class='btn btn-block btn-n-dan'>Reto 2</button>"+
	 		 	"<button class='btn btn-block btn-n-dan'>Reto 3</button>"+
	 		 	"<button class='btn btn-block btn-n-dan'>Reto 4</button>", 2, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-flash":
	 		infoSala("Flashmob","<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/mvGdnCNH5KQ'></iframe>"+
	 			"</div></p>", "<button class='btn btn-block btn-n-dan'>Reto</button>", 3, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-regresar":
	 		if($(this).attr("data-atras") == "index"){
	 			window.location.href=$("#blog-info").val();
	 		}
	 		if($(this).attr("data-atras") == "introduccion"){
	 			window.location.href=$("#blog-info").val()+"/introduccion-aula-danza";
	 		}
	 		if($(this).attr("data-atras") == "modulo"){
	 			window.location.href=$("#blog-info").val()+"/danza";
	 			$(this).attr("data-atras", "introduccion");
	 		}
	 		break;
	 		case "btn-iniciar":
	 		window.location.href=$("#blog-info").val()+"/danza";
	 		break;
	 	}
	 	if($(this).hasClass('sub-boton')){
	 		$("#btn-"+$(this).attr('data-sala-genero').split("-")[1]).removeClass().addClass("btn btn-block btn-h-dan");
	 	}
	 });
});