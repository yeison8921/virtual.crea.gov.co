jQuery(document).ready(function($){
	num_pag = 1;

	fondo_principal = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_index_artes_plasticas.png")',
	};
	fondo_introduccion = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_introduccion.jpg")',
	}
	fondo_objetivos = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_objetivos.jpg")',
	}
	fondo_publico = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_publico.jpg")',
	}
	fondo_metodologia = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_metodologia.jpg")',
	}
	fondo_creditos = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo_creditos.jpg")',
	}
	
	$("#contenedor-index-artes-plasticas").on("click", "img", function() {
		if($(this).attr("id") == "img-viaje"){
			$("#div-img-viaje").hide();
			$("#btns-intro-aap").hide();
			$("#div-mapa-mundi").show();
		}
		if($(this).attr("id") == "img-colombia"){
			$("#div-mapa-mundi").hide();
			$("#div-modulos-aap").show();
		}
		if($(this).attr("id") == "img-lupa" || $(this).attr("id") == "img-compas"){
			$("#div-modulos-aap").hide();
			$("#div-sub-modulos").show();
		}
		if($(this).attr("id") == "img-lupa"){
			$("#div-sub-modulos img").data("ejercicio", "comic");
		}
		if($(this).attr("id") == "img-brujula"){
			$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/brujula/img_viñeta_1.jpg");
			$("#div-comic .img-atras").data("atras", "modulos");
			$("#btns-mover-comic img").data("comic", "brujula");
			$("#btns-mover-comic img").data("total", "11");
			$("#div-modulos-aap").hide();
		}
		if($(this).attr("id") == "img-compas"){
			$("#div-sub-modulos img").data("ejercicio", "ejercicio");
		}

		if($(this).attr("id") == "img-linea"){
			if($(this).data("ejercicio") == "comic"){
				$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/linea/img_viñeta_1.jpg");
				$("#btns-mover-comic img").data("comic", "linea");
				$("#btns-mover-comic img").data("total", "9");
			}
			if($(this).data("ejercicio") == "ejercicio"){
				$($("#div-ejercicios div")[1]).html("").html("LÍNEA CONTINUA");
				$("#div-ejercicios img").not(".img-atras").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/submodulos/img_linea.png");
				$("#div-ejercicios #img-pajaro").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/fondo-ejercicio-1.jpg");
				$("#div-ejercicios #a-foro").attr("href", $("#url").val() + "/foros/topic/ejercicio-linea-continua");
				$("#div-info-ejercicio").html("").html("<p><strong>Objetivo:</strong><br>Descubrir las variables posibles de la línea para generar conciencia sobre las diferentes formas de construir dibujo.</p>"
					+"<p><strong>Materiales:</strong>"
					+"<ul>"
					+"<li>Lápiz, tajalápiz, borrador.</li>"
					+"<li>Hoja bond 1/8.</li>"
					+"</ul>"
					+"</p>"
					+"<p><strong>Paso a Paso:</strong>"
					+"<ol>"
					+"<li>Realizaremos un retrato, para esto piensa en una persona que tengas en tu memoria y que quieras dibujar.</li> "
					+"<li>Para realizar este dibujo no debes levantar la mano en ningún momento, ni separar las líneas, tu dibujó será una línea continua.</li> "
					+"<li>Puedes recurrir a mover la hoja e incluso dibujar con la mano contraria.</li> "
					+"<li>Mientras dibujas juega a trasladarte en el formato de la hoja, no hay necesidad de dibujar en orden las partes del rostro, puedes empezar con el ojo y con la línea continua dirigirte al mentón y luego al cabello.</li> "
					+"<li>Es importante soltar la mano y no apoyarla sobre el papel para que tengas mayor movilidad, utiliza todo el formato de la hoja.</li> "
					+"<li>Acompaña tu dibujo con música. El sonido influye en nuestros sentidos y te ayudará a darle ritmo, movimiento y fluidez a tu línea.</li> "
					+"</ol>"
					+"</p>");
			}
		}

		if($(this).attr("id") == "img-gesto"){
			if($(this).data("ejercicio") == "ejercicio"){
				$($("#div-ejercicios div")[1]).html("").html("DIBUJO POR TIEMPO");
				$("#div-ejercicios img").not(".img-atras").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/submodulos/img_gesto.png");
				$("#div-ejercicios #img-pajaro").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/fondo-ejercicio-2.jpg");
				$("#div-ejercicios #a-foro").attr("href", $("#url").val() + "/foros/topic/ejercicio-dibujo-por-tiempo");
				$("#div-info-ejercicio").html("").html("<p><strong>Objetivo:</strong><br>Desarrollar trazos sueltos que contengan expresividad, conservando las formas generales del objeto que se va a dibujar.</p>"
					+"<p><strong>Materiales:</strong>"
					+"<ul>"
					+"<li>Lápiz, tajalápiz, borrador.</li>"
					+"<li>Hoja bond.</li>"
					+"<li>Cronómetro.</li>"
					+"<li>Regla.</li>"
					+"<li>Modelo (objeto que se tenga a la mano como electrodoméstico, silla, florero, ropa, etc.)</li>"
					+"</ul>"
					+"</p>"
					+"<p><strong>Paso a paso:</strong>"
					+"<ol>"
					+"<li>Elige un modelo real que tengas a mano, puede ser una silla, un electrodoméstico o algo que te interese dibujar.</li>"
					+"<li>Divide una hoja bond en 8 partes iguales y prepara el cronómetro.</li>"
					+"<li>Como lo indica la tabla, en cada parte elaborarás el mismo dibujo durante el tiempo indicado y observando cuidadosamente el modelo.</li>"
					+"</ol>"
					+"</p>");
			}
		}

		if($(this).attr("id") == "img-color"){
			if($(this).data("ejercicio") == "ejercicio"){
				$($("#div-ejercicios div")[1]).html("").html("PLANOS DE COLOR");
				$("#div-ejercicios img").not(".img-atras").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/submodulos/img_color.png");
				$("#div-ejercicios #img-pajaro").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/fondo-ejercicio-3.jpg");
				$("#div-ejercicios #a-foro").attr("href", $("#url").val() + "/foros/topic/ejercicio-plano-de-color");
				$("#div-info-ejercicio").html("").html("<p><strong>Objetivo:</strong><br>Leer visualmente y comprender la composición de las imágenes desde sus planos de color.</p>"
					+"<p><strong>Materiales:</strong>"
					+"<ul>"
					+"<li>Lápiz, tajalápiz, borrador.</li>"
					+"<li>Papel Durex, bond o acuarela.</li>"
					+"<li>Colores o pintura acrílica.</li>"
					+"<li>Pincel, paleta de mezcla.</li>"
					+"</ul>"
					+"</p>"
					+"<p><strong>Paso a paso:</strong>"
					+"<ol>"
					+"<li>Elige una imagen a color, puede ser una fotografía de una persona o un animal.</li>"
					+"<li>Selecciona los 5 colores que predominan en la imagen.</li>"
					+"<li>Realiza el croquis de la imagen en una hoja aparte.</li>"
					+"<li>Sectoriza los colores dentro del croquis.</li>"
					+"<li>Pinta o colorea de forma plana cada sector delineado.</li>"
					+"</ol>"
					+"</p>");
			}
		}

		if($(this).attr("id") == "img-creatividad"){
			if($(this).data("ejercicio") == "comic"){
				$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/creatividad/img_viñeta_1.jpg");
				$("#btns-mover-comic img").data("comic", "creatividad");
				$("#btns-mover-comic img").data("total", "8");
			}
			if($(this).data("ejercicio") == "ejercicio"){
				$($("#div-ejercicios div")[1]).html("").html("¡¡¡LLEGO EL MOMENTO!!!");
				$("#div-ejercicios img").not(".img-atras").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/submodulos/img_creatividad.png");
				$("#div-ejercicios #img-pajaro").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/fondo-ejercicio-4.jpg");
				$("#div-ejercicios #a-foro").attr("href", $("#url").val() + "/foros/topic/ejercicio-llego-el-momento");
				$("#div-ejercicios a").data("info", "creatividad");
			}
		}

		if($(this).attr("id") == "img-creatividad" || $(this).attr("id") == "img-linea" || $(this).attr("id") == "img-gesto" || $(this).attr("id") == "img-color"){
			$("#div-comic .img-atras").data("atras", "submodulos");
			$("#div-sub-modulos").hide();
			if($(this).data("ejercicio") == "ejercicio"){
				$("#div-ejercicios").show();
			}
		}
		if($(this).attr("id") == "img-brujula" || $(this).attr("id") == "img-creatividad" || $(this).attr("id") == "img-linea"){
			if($(this).data("ejercicio") == "comic"){
				$("#div-comic").show();
				num_pag = 1;
			}
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
		$("#div-img-viaje").show();
		$("#btns-intro-aap").show();
		$("#div-info-detallada-aap").hide();
		$("#div-mapa-mundi").hide();
	}
	if($(this).data("atras") == "mapa-mundi"){
		$("#div-modulos-aap").hide();
		$("#div-mapa-mundi").show();
	}
	if($(this).data("atras") == "modulos"){
		$("#div-modulos-aap").show();
		$("#div-comic").hide();
		$("#div-sub-modulos").hide();
	}
	if($(this).data("atras") == "submodulos"){
		$("#div-sub-modulos").show();
		$("#div-comic").hide();
		$("#div-ejercicios").hide();
		$("#div-info-ejercicio").html("");
	}
});

$("#btns-intro-aap img").mouseover(function() {
	switch($(this).attr("id")){
		case "img-intro-aap":
		$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_intro_sobre.png");
		break;
		case "img-objetivos-aap":
		$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_objetivos_sobre.png");
		break;
		case "img-publico-aap":
		$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_publico_sobre.png");
		break;
		case "img-metodologia-aap":
		$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_metodologia_sobre.png");
		break;
		case "img-creditos-aap":
		$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_creditos_sobre.png");
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
		$("#div-info-detallada-aap p").css({
			"left": "45%",
			"right": "20%"
		});
		$("#div-info-detallada-aap p").html("").html("Objetivo general:<br>Orientar virtualmente  una experiencia  pedagógica, creativa e  interactiva partiendo de los elementos fundamentales de las artes plásticas y visuales, las cuales permiten abrir  un espacio al pensamiento crítico desde la lectura y creación de imágenes. Esta experiencia está dirigida a todo público.<br><br>"+
			"Objetivos específicos:<br>"+
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

