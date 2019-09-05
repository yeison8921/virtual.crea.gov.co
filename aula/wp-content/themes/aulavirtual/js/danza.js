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

	var pagina = window.location.href;
	if(pagina.indexOf("introduccion") != -1){
		infoIntroduccion("Introducción", "<p>El Aula Virtual de danza es un espacio que invita a relacionarse con el cuerpo de manera consciente. Nuestro punto de partida es el impulso cotidiano de movimiento como herramienta para reconocer el cuerpo, ese territorio que habitamos, el lugar desde el que nos comunicamos e interactuamos con el mundo. Posteriormente, nos acercamos a la danza como el lenguaje que nos conecta con nosotros mismos y los otros, el ritual de conexión con lo primitivo, con las costumbres y tradiciones de pueblos, comunidades y territorios.</p>"+
			"<p>Las herramientas, ejercicios y retos propuestos son un llamado a la interacción y   exploración de las potencialidades del movimiento, dialogando con diversos géneros de la danza y técnicas corporales. Les invitamos a crear un mundo en el que todos nos relacionamos de una manera más cercana y amigable con nuestros cuerpos.</p>"+
			"<p>¿Se imaginan cómo sería el mundo si todos estuviéramos más conectados con nuestro cuerpo?</p>"+
			"<p>¡Bienvenidos!</p>");
	}else{
		infoModulo("Cuerpo movimiento", "<p><video width='750' controls><source src='mov_bbb.mp4' type='video/mp4'>Your browser does not support HTML5 video.</video></p>", "conexion");
	}

	$(".contenedor").on("click", "button", function(){
		$(this).removeClass("btn-n-dan").addClass("btn-h-dan");
		$(".contenedor button").not(this).removeClass().addClass("btn btn-block btn-n-dan");
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
				"<ul>"+
				"<li>Conexión Corporal: enfocada en el reconocimiento corporal, los beneficios del movimiento y la actividad física.</li>"+
				"<li>Ritmo: busca desarrollar habilidades de coordinación, disociación y concentración en relación con conceptos musicales como tiempo y tempo, claves para el ejercicio de la danza.</li>"+
				"<li>Expresión: exploración dirigida a la comunicación de ideas, emociones y sensaciones a través del lenguaje corporal, vinculando imágenes, acciones y movimientos.</li>"+
				"<li>Espacio: propone acercarse al cuerpo en relación con el espacio, desde lugares convencionales y no convencionales.</li>"+
				"<li>Memoria: recorrido a través de las diversas técnicas, géneros y formas de expresión desarrolladas a lo largo de la historia.</li>"+
				"</ul>"+
				"<p>En cada una de las secciones se proponen retos para motivarlos a romper sus límites, probar nuevas sensaciones y experiencias corporales.</p>");
			break;
			case "btn-publico":
			infoIntroduccion("Nuestro público", "<p>El Aula Virtual “Cuerpo en Movimiento” está abierta para todos los que deseen explorar y ampliar conocimientos en relación con las prácticas corporales; niños, jóvenes y adultos pueden participar gracias a la variedad de actividades dirigidas al entrenamiento y exploración de habilidades/capacidades físicas y expresivas.</p>"+
				"<p>No es necesario que quienes van a tomar el curso tengan conocimientos previos en las temáticas que se abordan en las secciones dirigidas a la conexión corporal, al ritmo, a la expresión, al espacio y la memoria, sin embargo, todos deben contar con el manejo básico de computadores o dispositivos móviles con acceso a internet.</p>")
			break;
			case "btn-creditos":
			infoIntroduccion("Créditos", "");
			break;
			case "btn-regresar":
			if($(this).attr("data-atras") == "index"){
				window.location.href=$("#blog-info").val();
			}
			if($(this).attr("data-atras") == "introduccion"){
				window.location.href=$("#blog-info").val()+"/introduccion-aula-danza";
			}
			if($(this).attr("data-atras") == "modulo"){
				window.location.href=$("#blog-info").val()+"/musica";
				$(this).attr("data-atras", "introduccion");
			}
			break;
			case "btn-iniciar":
			window.location.href=$("#blog-info").val()+"/danza";
			break;
		}
	});
});