jQuery(document).ready(function($){

	$('#modal-inicio-danza').modal('show');

	$("#btn-cerrar-modal").on("click", function(){
		$("iframe.video-inicio").attr("src", $("iframe.video-inicio").attr("src"));
	});
	
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
	 	infoModulo("Bienvenido", "<p><div class='embed-responsive embed-responsive-16by9'>"+
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
	 		infoIntroduccion("Introducción", "<p>¿Se imaginan cómo sería el mundo si todos estuviéramos más conectados con nuestro cuerpo?</p>"+
	 			"<p>Partiendo del impulso cotidiano de movimiento como herramienta para reconocer el cuerpo; ese territorio que habitamos, el lugar desde el que nos comunicamos e interactuamos con el mundo; nos acercamos a la danza como el lenguaje que permite expresar a través del cuerpo, conectarnos con nosotros mismos y los otros. La danza como ritual de conexión con lo primitivo; con las costumbres, tradiciones y el legado cultural de pueblos y comunidades.</p>"+
	 			"<p>Las herramientas, ejercicios y retos en el Aula Virtual son un llamado a interactuar y explorar las potencialidades del movimiento, dialogando con diversas técnicas corporales., estilos y géneros de la danza para invitarlos a poner el cuerpo en movimiento.</p>"+
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
	 		infoIntroduccion("Créditos", "<p><strong>Investigación y desarrollo de contenidos:</strong><br>"+
	 			"Johanna Sánchez<br>"+
	 			"Oscar Rojas<br>"+
	 			"Alejandra Vargas"+
	 			"</p>"+
	 			"<p><strong>Producción de contenidos:</strong><br>"+
	 			"Tatiana Múnera</p>"+
	 			"<p><strong>Asesor pedagógico:</strong><br>"+
	 			"Jenny Caraballo</p>"+
	 			"<p><strong>Producción Audiovisual:</strong><br>"+
	 			"Camilo Bonilla<br>"+
	 			"Johanna Sánchez<br>"+
	 			"Oscar Rojas<br>"+
	 			"Alejandra Vargas</p>"+
	 			"<p><strong>Edición:</strong><br>"+
	 			"Johanna Sánchez<br>"+
	 			"Zion Producciones<br>"+
	 			"Mario Alexander Veloza"+
	 			"<p><strong>Diseño gráfico:</strong><br>"+
	 			"Johann Tarazona Matiz</p>"+
	 			"<p><strong>Programación:</strong><br>"+
	 			"Yeison Briceño</p>"+
	 			"<p><strong>Coordinación programa Crea:</strong><br>"+
	 			"Leonardo Garzón</p>"+
	 			"<p><strong>Coordinación SIF:</strong><br>"+
	 			"Miguel Andrés Salas</p>"+
	 			"<p><strong>Agradecimientos:</strong><br>"+
	 			"Angélica Plata, Crea La Campiña, Crea Las Flores, Crea Villemar, Crea Suba Centro, Colectivos de Danza Cattleyas, Ujjina, Bailarinas de corazón, Zion Producciones, Juliana Atuesta, Colectivo Danza Viva, Colectivo Incorpus, Sofhia García Figueroa, Samantha García Figueroa, Kevin Samuel Sainz Moreno</p>"+
	 			"<p><strong>Idartes<br>Alcaldía de Bogotá<br>2019</strong></p>");
	 		break;
	 		case "btn-conexion":
	 		$("#div-seleccion-curso-danza").hide();
	 		$("#div-contenido-sala-danza").show();
	 		$("#div-ccd").css({
	 			"background-image": 'url("'+ $("#bloginfo").val() + '/danza/images/fondos/fondo_conexion.jpg")',
	 		});
	 		botonesLaterales("conexion");
	 		infoSala("Conexión corporal", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/5sZMbdd0txo'></iframe>"+
	 			"</div></p>", "", 1, "", "", "conexion-bienestar");
	 		break;
	 		case "btn-ritmo":
	 		infoModulo("&nbsp", "<p style='font-size: 30px;'>Próximamente</p>", "ritmo");
	 		$("#div-img-mod-cur-dan img").attr("src", $("#bloginfo").val() +"/danza/images/metodologia/ritmo.png")
	 		break;
	 		case "btn-expresion":
	 		infoModulo("&nbsp", "<p style='font-size: 30px;'>Próximamente</p>", "expresion");
	 		$("#div-img-mod-cur-dan img").attr("src", $("#bloginfo").val() +"/danza/images/metodologia/expresion.png")
	 		break;
	 		case "btn-espacio":
	 		infoModulo("&nbsp", "<p style='font-size: 30px;'>Próximamente</p>", "espacio");
	 		$("#div-img-mod-cur-dan img").attr("src", $("#bloginfo").val() +"/danza/images/metodologia/espacio.png")
	 		break;
	 		case "btn-memoria":
	 		infoModulo("&nbsp", "<p style='font-size: 30px;'>Próximamente</p>", "memoria");
	 		$("#div-img-mod-cur-dan img").attr("src", $("#bloginfo").val() +"/danza/images/metodologia/memoria.png")
	 		break;
	 		case "btn-bienestar":
	 		infoSala("Bienestar","<p>¿Me creerías si te digo que existe una manera divertida de ejercitar el cuerpo, generando bienestar físico, mental y emocional?</p>"+
	 			"<p>Seguro has escuchado sobre los beneficios que trae la actividad física para la salud; el movimiento ayuda al que el cuerpo se mantenga sano, fuerte y activo. No sólo en el gimnasio podemos hacer ejercicio; caminar, ir en bicicleta o subir escaleras, son formas cotidianas de ejercitarnos.</p>"+
	 			"<p>La danza además de trabajar los músculos, articulaciones y huesos; mejora la actividad cardiovascular, fortalece la memoria, brinda una sensación de bienestar; nos permite comunicar emociones, sensaciones y pensamientos a través del movimiento, contribuyendo a nuestra salud física, mental y emocional.</p>"+
	 			"<p>Te invitamos a moverte con nosotros en los retos a continuación y experimentes el bienestar en tu propio cuerpo.</p>",
	 			"<img src='"+$("#bloginfo").val() +"/danza/images/conexion/bienestar.png'>", 2, "conexion", "", "conexion-bienestar");
	 		break;
	 		case "btn-propiocepcion":
	 		infoSala("Propiocepción","<p>Seguramente habrás escuchado sobre los cinco sentidos: vista, tacto, olfato, oído y gusto; pero, ¿sabías que existen sentidos adicionales relacionados con la percepción de temperatura, espacio, equilibrio e incluso el dolor?</p>"+
	 			"<p>Uno de estos se llama propiocepción y es la capacidad de sentir el propio cuerpo.</p>"+
	 			"<p>La propiocepción nos ayuda a crear una imagen del cuerpo en relación al espacio que habitamos; nos informa sobre dónde y cómo están ubicadas nuestras partes sin necesidad mirar.  Permite que seamos conscientes de la postura corporal, dirección y rango de los movimientos cotidianos como girar, saltar, agacharnos, esquivar obstáculos, para hacerlos de manera eficaz y sin provocar lesiones.</p>"+
	 			"<p>Te invitamos a participar en los retos a continuación para desarrollar tu propiocepción.</p>", "", "texto", "", "", "conexion-propiocepcion");
	 		break;
	 		case "btn-respiracion":
	 		infoSala("Respiración","<p>Hagamos un prueba ¿Cuánto tiempo puedes aguantar la respiración? </p>"+
	 			"<p>¡Vamos pruébalo!  ...¿Cuánto duraste?...</p>"+
	 			"<p>La respiración es un proceso vital en el que se lleva oxígeno a todas las partes del cuerpo para el correcto funcionamiento de nuestro organismo; se convierte en una fuente de energía junto con  los alimentos, el descanso y la actividad física.</p>"+
	 			"<p>Inhala... Exhala... Inhala… Exhala… Todo lo que está vivo respira.</p>"+
	 			"<p>Podemos pasar varios días sin comer o dormir, pero no más de unos minutos sin respirar. Hacerlo de manera consciente es darle a nuestro cuerpo una recarga de energía, poner la batería al 100% para hacer todas las actividades del día a día.</p>"+
	 			"<p>¿Quieres entrenar la respiración para llenar tu cuerpo de energía?</p>"+
	 			"<p>Acompáñanos a movernos al ritmo de la respiración en los retos a continuación.</p>", "", "texto", "", "", "conexion-respiracion");
	 		break;
	 		case "btn-lunes":
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
	 			"</ol>", "<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-uno' data-actividad-reto='bienestar-lunes'>Reto 1</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-dos' data-actividad-reto='bienestar-lunes'>Reto 2</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-tres' data-actividad-reto='bienestar-lunes'>Reto 3</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-cuatro' data-actividad-reto='bienestar-lunes'>Reto 4</button>", 2, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-reto-uno":
	 		infoSala("Reto 1", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/TzyTEUq7CnY' allowfullscreen></iframe>"+
	 			"</div></p>","<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-retos' data-actividad-reto='bienestar-lunes'>Retos</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-foro' data-foro='1'>Foro</button>", 3, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-reto-dos":
	 		infoSala("Reto 2", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/oVmKrpr-Oio' allowfullscreen></iframe>"+
	 			"</div></p>","<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-retos' data-actividad-reto='bienestar-lunes'>Retos</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-foro' data-foro='2'>Foro</button>", 3, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-reto-tres":
	 		infoSala("Reto 3", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/gfKm2KcQzw0' allowfullscreen></iframe>"+
	 			"</div></p>","<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-retos' data-actividad-reto='bienestar-lunes'>Retos</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-foro' data-foro='3'>Foro</button>", 3, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-reto-cuatro":
	 		infoSala("Reto 4", "<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/8QusyVuy1kY' allowfullscreen></iframe>"+
	 			"</div></p>","<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-retos' data-actividad-reto='bienestar-lunes'>Retos</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-foro' data-foro='4'>Foro</button>", 3, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-flash":
	 		infoSala("Flashmob","<p><div class='embed-responsive embed-responsive-16by9'>"+
	 			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/xCTS6xdHXxM' allowfullscreen></iframe>"+
	 			"</div></p>", "<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-flash' data-actividad-reto='bienestar-flash'>Reto</button>", 3, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-reto-flash":
	 		infoSala("Reto flashmob","<p>Si participaste en nuestro Flashmob en el Festival Crea, te invitamos a subir tus vídeos y fotografías al foro y así revivir ese momento.</p>",
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' data-actividad-reto='bienestar-flash' id='btn-foro'>Foro</button>", 3, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-retos":
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
	 			"</ol>", "<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-uno' data-actividad-reto='bienestar-lunes'>Reto 1</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-dos' data-actividad-reto='bienestar-lunes'>Reto 2</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-tres' data-actividad-reto='bienestar-lunes'>Reto 3</button>"+
	 			"<button class='btn btn-block btn-n-dan sub-boton-dos' id='btn-reto-cuatro' data-actividad-reto='bienestar-lunes'>Reto 4</button>", 2, "conexion", $(this).attr("id"), "conexion-bienestar");
	 		break;
	 		case "btn-foro":
	 		if($(this).attr("data-actividad-reto") == "bienestar-flash")
	 			window.open($("#blog-info").val()+"/foros-danza/topic/foro-flashmob");
	 		else
	 			window.open($("#blog-info").val()+"/foros-danza/topic/foro-reto-"+$(this).attr("data-foro")+"-danza");
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
	 	if ($(this).hasClass('sub-boton-dos')){
	 		$("#btn-"+$(this).attr("data-actividad-reto").split("-")[0]).removeClass("btn-n-dan").addClass("btn-h-dan");
	 		$("#btn-"+$(this).attr("data-actividad-reto").split("-")[1]).removeClass("btn-n-dan").addClass("btn-h-dan");
	 	}
	 });
});