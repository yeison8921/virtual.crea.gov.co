jQuery(document).ready(function($){
	var imgindex1 = ($("#bloginfo").val() + "/danza/images/fondo_aula_danza.jpg") 
	var imgindex2 = ($("#bloginfo").val() + "/danza/images/fondo_aula_modulos.jpg");
	var imgindex3 = ($("#bloginfo").val() + "/danza/images/fondo_reconocimiento_corporal.jpg");
	var imgindex4 = ($("#bloginfo").val() + "/danza/images/fondo_movimientos_universales.jpg");
	var imgindex5 = ($("#bloginfo").val() + "/danza/equilibrio/fondo-equilibrio.jpg");
	var imgindex6 = ($("#bloginfo").val() + "/danza/giros/fondo-giros.jpg");
	var m1 = ($("#bloginfo").val() + "/danza/images/muneca_reconocimiento.png");
	var m2 = ($("#bloginfo").val() + "/danza/images/muneca_movimientos.png");
	var m3 = ($("#bloginfo").val() + "/danza/images/muneca_equilibrio.png");
	var m4 = ($("#bloginfo").val() + "/danza/images/muneca_giros.png");
	var m5 = ($("#bloginfo").val() + "/danza/images/muneca_direcciones.png");

	$("#btn_cuerpo_interdisciplinar").click(function() {
		$("#div-inicio-curso-danza").hide();
		$("#div-encabezado-info-aula-danza").show();
		$("#div-info-aula-danza").show();
	});

	$("#btn_iniciar_curso").click(function(){
		$("#div-sel-modulo").show();
		$("#div-encabezado-info-aula-danza").hide();
		$("#div-info-aula-danza").hide();
	});

	$("#div-info-aula-danza img").click(function(){
		$("#contenedor-index-danza").css({'background-image':'url("'+imgindex2+'")'});
		$("#div-inicio-curso-danza").hide();
		$("#div-encabezado-info-aula-danza").hide();
		$("#div-info-aula-danza").hide();
		$("#div-info-detallada-danza").show();
		switch($(this).attr('id')) {
			case "btn_introduccion_danza":
			$("#div-info-detallada-danza h2").html("").html("INTRODUCCIÓN");
			$("#div-info-detallada-danza p").html("").html("El Aula Virtual de danza es un espacio que les invita a relacionarse con sus cuerpos de manera consciente, explorando las particularidades y potencialidades del movimiento.<br><br>"+
				"Nuestro punto de partida es el impulso cotidiano de movimiento como herramienta para reconocer el cuerpo, ese territorio que habitamos, el lugar desde el que nos comunicamos e interactuamos con el mundo.<br><br>"+
				"Posteriormente, nos acercamos a la danza como el lenguaje que nos conecta con nosotros mismos y los otros, el ritual de conexión con lo primitivo, con las costumbres y tradiciones de pueblos, comunidades y territorios.<br><br>"+
				"El curso está compuesto por cinco secciones a través de las que se desarrollan diversos conceptos y actividades, estos son: Conexión Corporal Ritmo, Expresión, Espacio y Memoria.<br><br>"+
				"Las herramientas, ejercicios y retos propuestos son una invitación a interactuar desde el cuerpo en movimiento, dialogando con los diversos géneros de la danza y técnicas corporales.<br><br>"+
				"Los invitamos a crear un mundo en el que todos nos relacionamos de una manera más cercana y amigable con nuestros cuerpos. ¿Se imaginan cómo sería el mundo si todos tuviéramos una mejor relación con nuestro cuerpo?<br><br>"+
				"	¡Bienvenidos!");
			break;
			case "btn_objetivos_danza":
			$("#div-info-detallada-danza h2").text("OBJETIVOS");
			$("#div-info-detallada-danza p").html("<strong>General:</strong><br>Conectarse con el movimiento a través del cuerpo desde un espacio interactivo que propone experiencias virtuales y presenciales, enfocadas al descubrimiento y exploración de la danza como lenguaje.<br><br>"+
				"<strong>Específicos:</strong><br>"+
				"<ol>"+
				"<li>Descubrir las potencialidades del cuerpo en movimiento por medio de diferentes retos y ejercicios.</li>"+
				"<li>Ampliar los conocimientos sobre la Danza y las técnicas relacionadas con el movimiento, así como su desarrollo a través de la historia.</li>"+
				"<li>Interactuar con otros participantes a través de la plataforma, proponiendo un diálogo que permita la reflexión y retroalimentación en relación con las experiencias.</li>"+
				"</ol>");
			break;
			case "btn_metodologia_danza":
			$("#div-info-detallada-danza h2").text("METODOLOGÍA");
			$("#div-info-detallada-danza p").html("El aula virtual de danza, “Cuerpo en Movimiento”, se compone de cinco secciones a través de las cuales se exploran conceptos vitales para la danza como forma artística y de expresión; estas son:<br><br>"+
				"<ul>"+
				"<li><strong>Conexión Corporal:</strong> enfocada en el reconocimiento corporal, los beneficios del movimiento y la actividad física.</li>"+
				"<li><strong>Ritmo:</strong> busca desarrollar habilidades de coordinación, disociación y concentración en relación con conceptos musicales como tiempo y tempo, claves para el ejercicio de la danza.</li>"+
				"<li><strong>Expresión:</strong> exploración dirigida a la comunicación de ideas, emociones y sensaciones a través del lenguaje corporal, vinculando imágenes, acciones y movimientos.</li>"+
				"<li><strong>Espacio:</strong> propone acercarse al cuerpo en relación con el espacio, desde lugares convencionales y no convencionales.</li>"+
				"<li><strong>Memoria:</strong> recorrido a través de las diversas técnicas, géneros y formas de expresión desarrolladas a lo largo de la historia.</li>"+
				"</ul><br>"+
				"En cada una de las secciones se establecen retos específicos en relación con las temáticas desarrolladas. Existen tres niveles de dificultad: básico, intermedio y avanzado; con el fin de incentivarlos a ir cada vez más allá, romper sus límites probar nuevas sensaciones y experiencias corporales.<br><br>"+
				"Existen algunos conceptos y datos históricos claves presentes a lo largo del curso y son determinantes en la propuesta, estos se definen a profundidad en la biblioteca, por lo que les invitamos a consultarla en el transcurso de las secciones.<br><br>"+
				"<strong>Interacción Virtual y Presencial</strong><br><br>"+
				"Además de recibir la información y participar en los retos, tienen también la posibilidad de interactuar con otros participantes del Aula Virtual por medio de los foros y concursos, tanto en la plataforma como en redes sociales; con el fin de fomentar la retroalimentación sobre los procesos de exploración y creación desde el movimiento.<br><br>"+
				"En algunos casos habrá también convocatorias para desarrollar retos presenciales, con el fin de trascender el espacio virtual y lograr una conexión en el espacio real, invitando a estos cuerpos diversos a “movernos juntos”; habitar y resignificar los espacios de la ciudad a través del cuerpo en movimiento.");
			break;
			case "btn_publico_objetivo_danza":
			$("#div-info-detallada-danza h2").text("PÚBLICO OBJETIVO");
			$("#div-info-detallada-danza p").html("El Aula Virtual “Cuerpo en Movimiento” está abierta para todos los que deseen explorar y/o ampliar conocimientos en relación con las prácticas corporales; niños, jóvenes y adultos pueden participar gracias a la variedad de actividades dirigidas al entrenamiento y exploración de habilidades/capacidades físicas y expresivas.<br><br>"+
				"No es necesario que quienes van a tomar el curso tengan conocimientos previos en las temáticas que se abordan en las secciones dirigidas a la conexión corporal, al ritmo, a la expresión, al espacio y la memoria, sin embargo, todos deben contar con el manejo básico de computadores y/o dispositivos móviles con acceso a internet.");
			break;
			case "btn_creditos_danza":
			$("#div-info-detallada-danza h2").text("CRÉDITOS");
			$("#div-info-detallada-danza p").html("");
			break;
			default:
		}
		$("#div-btn-inicio-danza").show();
	});

	$("#div-btn-inicio-danza img").click(function(){
		if($("#div-info-detallada-danza").is(":visible")){
			$("#div-info-detallada-danza").hide();
		}
		$("#div-info-aula-danza").show();
		$("#div-encabezado-info-aula-danza").show();
		$("#contenedor-index-danza").css('background-image', 'url("'+imgindex1+'")');
	});

	$("#div-modulos-aula-danza img").click(function(){
		$("#div-regresar-modulo").hide();
		$("#div-video-aula-danza").hide();
		$("#div-modulos-aula-danza").hide();
		switch($(this).attr('id')) {
			case "btn_reconocimiento_corporal":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex3+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-reconocimiento-corporal").show();
			break;
			case "btn_movimientos_universales":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex4+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-movimientos-universales").show();
			break;
			case "btn_equilibrio_puntos_de_apoyo":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex5+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-equilibrio").show();
			break;
			case "btn_giros_y_saltos":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex6+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-giros").show();
			break;
		}
	});
	$("#div-reconocimiento-corporal img").click(function(){
		$("#div-actividades-reconocimiento-corporal").hide();
		switch($(this).attr('id')) {
			case "btn_rompecabezas":
			$("#div-rompecabezas-reconocimiento-corporal").show();
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex3+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '800px'});
			break;
			case "btn_video":
			$("#div-video-reconocimiento-corporal").show();
			break;
		}
	});
	$("#div-botones-reconocimiento-corporal img").click(function() {
		switch($(this).attr('id')) {
			case "btn_reconocimiento_corporal":
			$("#div-rompecabezas-reconocimiento-corporal").hide();
			$("#div-video-reconocimiento-corporal").hide();
			$("#div-actividades-reconocimiento-corporal").show();
			break;
		}
	});

	$(".div-modulos img").click(function(){
		$("#contenedor-aula-danza").css({'background-image':'url("")'});
		$(".div-modulos").hide();
		$(".div-video").hide();
		$(".div-con-mod").show();
		$(".tit-con").empty();
		$(".div-con-mod-uno").empty();
		$(".div-con-mod-dos").empty();
		if($(this).attr('id') == "img_mod_reconocimiento"){
			$("#btn-reconocimiento").removeClass('btn-unsel');
			$("#btn-reconocimiento").addClass('btn-sel');
			$("#flecha-reconocimiento").show();
			$("#mod-reconocimiento").show();
			$(".muneca").attr('src', m1);
		}
		if($(this).attr('id') == "img_mod_movimientos"){
			$("#btn-movimientos").removeClass('btn-unsel');
			$("#btn-movimientos").addClass('btn-sel');
			$("#flecha-movimientos").show();
			$("#mod-movimientos").show();
			$(".muneca").attr('src', m2);
		}
		if($(this).attr('id') == "img_mod_equilibrio"){
			$("#btn-equilibrio").removeClass('btn-unsel');
			$("#btn-equilibrio").addClass('btn-sel');
			$("#flecha-equilibrio").show();
			$("#mod-equilibrio").show();
			$(".muneca").attr('src', m3);
		}
		if($(this).attr('id') == "img_mod_giros"){
			$("#btn-giros").removeClass('btn-unsel');
			$("#btn-giros").addClass('btn-sel');
			$("#flecha-giros").show();
			$("#mod-giros").show();
			$(".muneca").attr('src', m4);
		}
		if($(this).attr('id') == "img_mod_direcciones"){
			$("#btn-direcciones").removeClass('btn-unsel');
			$("#btn-direcciones").addClass('btn-sel');
			$("#flecha-direcciones").show();
			$("#mod-direcciones").show();
			$(".muneca").attr('src', m5);
		}
	});

	$(".div-btn-mod button").click(function() {
		$("#mod-reconocimiento").hide();
		$("#mod-movimientos").hide();
		$("#mod-equilibrio").hide();
		$("#mod-giros").hide();
		$("#mod-direcciones").hide();
		if($("#btn-reconocimiento").hasClass('btn-sel')){
			$("#btn-reconocimiento").removeClass('btn-sel');
			$("#btn-reconocimiento").addClass('btn-unsel');
			$("#flecha-reconocimiento").hide();
		}
		if($("#btn-movimientos").hasClass('btn-sel')){
			$("#btn-movimientos").removeClass('btn-sel');
			$("#btn-movimientos").addClass('btn-unsel');
			$("#flecha-movimientos").hide();
		}
		if($("#btn-equilibrio").hasClass('btn-sel')){
			$("#btn-equilibrio").removeClass('btn-sel');
			$("#btn-equilibrio").addClass('btn-unsel');
			$("#flecha-equilibrio").hide();
		}
		if($("#btn-giros").hasClass('btn-sel') ){
			$("#btn-giros").removeClass('btn-sel');
			$("#btn-giros").addClass('btn-unsel');
			$("#flecha-giros").hide();
		}
		if($("#btn-direcciones").hasClass('btn-sel')){
			$("#btn-direcciones").removeClass('btn-sel');
			$("#btn-direcciones").addClass('btn-unsel');
			$("#flecha-direcciones").hide();
		}
		switch($(this).attr('id')) {
			case "btn-reconocimiento":
			$("#btn-reconocimiento").addClass('btn-sel');
			$("#flecha-reconocimiento").show();
			$(".div-act-rom-rec").hide();
			$(".div-act-vid-rec").hide();
			$("#mod-reconocimiento").show();
			$(".div-con-rec-uno").show();
			$(".div-con-rec-dos").show();
			$(".muneca").attr('src', m1);
			break;
			case "btn-movimientos":
			$("#btn-movimientos").addClass('btn-sel');
			$("#flecha-movimientos").show();
			$("#mod-movimientos").show();
			$(".muneca").attr('src', m2);
			break;
			case "btn-equilibrio":
			$("#btn-equilibrio").addClass('btn-sel');
			$("#flecha-equilibrio").show();
			$("#mod-equilibrio").show();
			$(".muneca").attr('src', m3);
			break;
			case "btn-giros":
			$("#btn-giros").addClass('btn-sel');
			$("#flecha-giros").show();
			$("#mod-giros").show();
			$(".muneca").attr('src', m4);
			break;
			case "btn-direcciones":
			$("#btn-direcciones").addClass('btn-sel');
			$("#flecha-direcciones").show();
			$("#mod-direcciones").show();
			$(".muneca").attr('src', m5);
			break;
		}
	});

	$("#mod-reconocimiento button").click(function() {
		switch($(this).attr('id')) {
			case "btn-rompecabezas-rec":
			$(".div-con-rec-uno").hide();
			$(".div-con-rec-dos").hide();
			$(".div-act-rom-rec").show();
			break;
/*			case "btn-video-rec":
			$(".div-act-vid-rec").show();
			break;*/
		}
	});


});