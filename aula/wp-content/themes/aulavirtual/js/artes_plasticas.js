jQuery(document).ready(function($){
	num_pag = 1;

	if ($(window).height() <= 890) {
		tamano("610px");
	}

	if ($(window).height() >= 891) {
		tamano("670px");
	}

	$(window).on('resize', function() {
		if ($(this).height() <= 890) {
			tamano("610px");
		}
		if ($(this).height() >= 891) {
			tamano("670px");
		}
	});

	function tamano(height){
		fondo_principal = {
			"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_index_artes_plasticas.png")',
			"background-size": 'auto "'+height+"'",	
		};
		fondo_introduccion = {
			"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_introduccion.jpg")',
			"background-size": 'auto "'+height+"'",	
		}
		fondo_objetivos = {
			"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_objetivos.jpg")',
			"background-size": 'auto "'+height+"'",	
		}
		fondo_publico = {
			"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_publico.jpg")',
			"background-size": 'auto "'+height+"'",	
		}
		fondo_metodologia = {
			"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_metodologia.jpg")',
			"background-size": 'auto "'+height+"'",	
		}
		fondo_creditos = {
			"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_creditos.jpg")',
			"background-size": 'auto "'+height+"'",	
		}

	}

	$("#div-img-viaje").css(fondo_principal);


	$("#uno").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondo.png")',
		'background-size': 'cover',
		'background-repeat': 'no-repeat',
		'width' : '100%'
	});

	$("#dos").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/introduccion/fondo.png")',
		'background-size': 'cover',
		'background-repeat': 'no-repeat',
		'width' : '100%'
	});

	$("#tres").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/introduccion/segunda imagen.png")',
		'background-repeat': 'no-repeat',
		'background-position': 'center',
		'background-size': 'contain',
		'width' : '100%',
		'height': '100%'
	});

	$("#cuatro").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/observaciones_lupa/fondo.png")',
		'background-repeat': 'no-repeat',
		'background-size': 'cover',
		'width' : '100%',
	});

	$("#cinco").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/observaciones_lupa/pergamino_lupa.png")',
		'background-repeat': 'no-repeat',
		'background-position': 'center',
		'background-size': 'contain',
		'width' : '100%',
		'height': '100%'
	});

	$("#contenedor-index-artes-plasticas").on("click", "img", function() {
		if($(this).attr("id") == "img-titulo"){
			$("#div-index").hide();
			$("#btns-intro-aap").hide();
			$("#uno").show();
		}
		if($(this).attr("id") == "img-mapa"){
			$("#uno").hide();
			$("#dos").show();
		}
		if($(this).attr("id") == "img-observacion"){
			$("#dos").hide();
			$("#cuatro").show();
		}
		if($(this).attr("id") == "img-brujula"){
			$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/brujula/img_viñeta_1.jpg");
			$("#div-comic .img-atras").data("atras", "dos");
			$("#btns-mover-comic img").data("comic", "brujula");
			$("#btns-mover-comic img").data("total", "15");
			$("#dos").hide();
		}
		if($(this).attr("id") == "img-creatividad"){
			$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/creatividad/img_viñeta_1.jpg");
			$("#div-comic .img-atras").data("atras", "cuatro");
			$("#btns-mover-comic img").data("comic", "creatividad");
			$("#btns-mover-comic img").data("total", "8");
			$("#cuatro").hide();
		}
		if($(this).attr("id") == "img-linea"){
			$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/linea/img_viñeta_1.jpg");
			$("#div-comic .img-atras").data("atras", "cuatro");
			$("#btns-mover-comic img").data("comic", "linea");
			$("#btns-mover-comic img").data("total", "9");
			$("#cuatro").hide();
		}
		if($(this).attr("id") == "img-brujula" || $(this).attr("id") == "img-creatividad" || $(this).attr("id") == "img-linea"){
			num_pag = 1;
			$("#div-comic").show();
		}
	});

	$("#btns-mover-comic").on("click", "img", function() {
		if($(this).attr("id") == "img-atras-comic"){
			if(num_pag > 1){
				num_pag--;
				$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/"+$(this).data("comic")+"/img_viñeta_"+num_pag+".jpg");
				$("#img-siguiente-comic").attr("data-pagina", num_pag);
			}
		}
		if($(this).attr("id") == "img-siguiente-comic"){
			if(num_pag < $(this).data("total")){
				$("#img-atras-comic").attr("data-pagina", num_pag);
				num_pag++;
				$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/"+$(this).data("comic")+"/img_viñeta_"+num_pag+".jpg");
				$(this).attr("data-pagina", num_pag);
			}
		}
	});

	$(".img-atras").click(function(){
		if($(this).data("atras") == "index"){
			$("#div-index").show();
			$("#btns-intro-aap").show();
			$("#uno").hide();
		}
		if($(this).data("atras") == "uno"){
			$("#dos").hide();
			$("#uno").show();
		}
		if($(this).data("atras") == "dos"){
			$("#div-comic").hide();
			$("#cuatro").hide();
			$("#dos").show();
		}
		if($(this).data("atras") == "cuatro"){
			$("#div-comic").hide();
			$("#cuatro").show();
		}
	});

	$("#btns-intro-aap img").mouseover(function() {
		switch($(this).attr("id")){
			case "img-intro-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_intro_color.png");
			break;
			case "img-objetivos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_objetivos_color.png");
			break;
			case "img-publico-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_publico_color.png");
			break;
			case "img-metodologia-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_metodologia_color.png");
			break;
			case "img-creditos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_creditos_color.png");
			break;
		}
	})
	.mouseout(function() {
		switch($(this).attr("id")){
			case "img-intro-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_intro_normal.png");
			break;
			case "img-objetivos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_objetivos_normal.png");
			break;
			case "img-publico-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_publico_normal.png");
			break;
			case "img-metodologia-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_metodologia_normal.png");
			break;
			case "img-creditos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_creditos_normal.png");
			break;
		}
	});

	$("#cinco img")
	.mouseover(function() {
		switch($(this).attr("id")){
			case "img-linea":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_linea_color.png");
			break;
			case "img-color":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_color_color.png");
			break;
			case "img-gesto":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_gesto_color.png");
			break;
			case "img-creatividad":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_creatividad_color.png");
			break;
		}
	})
	.mouseout(function() {
		switch($(this).attr("id")){
			case "img-linea":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_linea_normal.png");
			break;
			case "img-color":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_color_normal.png");
			break;
			case "img-gesto":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_gesto_normal.png");
			break;
			case "img-creatividad":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_creatividad_normal.png");
			break;
		}
	});

	$("#btns-intro-aap img").click(function(){
		$("#div-img-viaje").hide();
		$("#btns-intro-aap").hide();
		$("#div-info-detallada-aap").show();
		switch($(this).attr("id")){
			case "img-intro-aap":
			$("#div-info-detallada-aap").css(fondo_introduccion);
			$("#div-info-detallada-aap p").html("").html("La experiencia aula virtual está planteada como un viaje en el que Viaticum, nuestro personaje acompañante, introduce al espectador a diferentes aspectos de las artes plásticas y visuales como: punto y línea, color y gesto finalizando en un proceso de creación autónomo.<br><br>El aula virtual de artes plásticas y visuales se proyecta en un espacio de acercamiento a procesos creativos enfocados en la generación de imágenes que comuniquen ideas o sensaciones.");
			break;
			case "img-objetivos-aap":
			$("#div-info-detallada-aap").css(fondo_objetivos);
			$("#div-info-detallada-aap p").html("").html("Objetivo general: Orientar virtualmente  una experiencia  pedagógica, creativa e  interactiva partiendo de los elementos fundamentales de las artes plásticas y visuales, las cuales permiten abrir  un espacio al pensamiento crítico desde la lectura y creación de imágenes. Esta experiencia está dirigida a todo público."+
				"Objetivos específicos:<br><br>"+
				"<ol>"+
				"<li>Mediar desde las experiencias visuales de los usuarios en relación a un contexto artístico  contemporáneo basados en  diversos  referentes del medio plástico visual.</li>"+
				"<li>Fomentar espacios de pensamiento creativo frente a la sensibilidad estética y la apreciación plástica y visual.</li>"+
				"</ol>");
			break;
			case "img-publico-aap":
			$("#div-info-detallada-aap").css(fondo_publico);
			$("#div-info-detallada-aap p").html("").html("Esta plataforma o espacio virtual está diseñado para cualquier persona que quiera explorar o acercarse a las artes plásticas y visuales.");
			break;
			case "img-metodologia-aap":
			$("#div-info-detallada-aap").css(fondo_metodologia);
			$("#div-info-detallada-aap p").html("").html("Virtual pedagógica, interactiva y creativa que invita al usuario a vivir una experiencia dinámica en la apropiación de conocimiento y la aplicabilidad del mismo.");
			break;
			case "img-creditos-aap":
			$("#div-info-detallada-aap").css(fondo_creditos);
			$("#div-info-detallada-aap p").html("").html("");
			break;
		}
	});
});