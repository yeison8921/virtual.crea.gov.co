jQuery(document).ready(function($){
	num_pag = 1;

	$(window).on("resize", function(){
		setElementPosition($(window).width(), $(window).height());
	});

	function setElementPosition(width, height){
		$("#div-texto-info").attr('style', '');
		if(height < 890){
			switch(element){
				case "introduccion":
				$("#div-texto-info").css({});
				break;
			}
		}
		if(width > 992 && height > 890){
			switch($("#div-texto-info").data("info")){
				case "introduccion":
				divPosition = ((($("#div-info-detallada-aap").width() - 1090) / 2) - 50) + "px";
				$("#div-texto-info").css({
					"position": "absolute",
					"top": "100px",
					"left": divPosition,
					"width": "500px",
					"font-size": "20px"
				});
				break;
				case "objetivos":
				divPosition = ((($("#div-info-detallada-aap").width() - 1090) / 2) - 80) + "px";
				$("#div-texto-info").css({
					"position": "absolute",
					"top": "100px",
					"right": divPosition,
					"width": "500px",
					"font-size": "20px"
				});
				break;
				case "publico":
				divPosition = ((($("#div-info-detallada-aap").width() - 1090) / 2) - 60) + "px";
				$("#div-texto-info").css({
					"position": "absolute",
					"top": "100px",
					"left": divPosition,
					"width": "500px",
					"font-size": "20px"
				});
				break;
				case "metologia":
				divPosition = ((($("#div-info-detallada-aap").width() - 1090) / 2) - 60) + "px";
				$("#div-texto-info").css({
					"position": "absolute",
					"top": "100px",
					"left": divPosition,
					"width": "500px",
					"font-size": "20px"
				});
				break;
				case "creditos":
				divPosition = ((($("#div-info-detallada-aap").width() - 1090) / 2)) + "px";
				$("#div-texto-info").css({
					"position": "absolute",
					"top": "100px",
					"right": divPosition,
					"width": "350px",
					"height": "550px",
					"overflow-y": "auto",
					"font-size": "20px"
				});
				break;
				case "bibliografia":
				divPosition = ((($("#div-info-detallada-aap").width() - 1090) / 2) - 30) + "px";
				$("#div-texto-info").css({
					"position": "absolute",
					"top": "100px",
					"left": divPosition,
					"width": "500px",
					"height": "550px",
					"overflow-y": "auto",
					"font-size": "20px"
				});
				break;
			}
		}
	}

	function infoEjercicio(ejercicio){
		$("#div-comic").hide();
		switch (ejercicio){
			case "linea":
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
			break;
			case "color":
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
			break;
			case "gesto":
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
			break;
			case "creatividad":
			$($("#div-ejercicios div")[1]).html("").html("¡¡¡LLEGO EL MOMENTO!!!");
			$("#div-ejercicios img").not(".img-atras").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/submodulos/img_creatividad.png");
			$("#div-ejercicios #img-pajaro").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/fondo-ejercicio-4.jpg");
			$("#div-ejercicios #a-foro").attr("href", $("#url").val() + "/foros/topic/ejercicio-llego-el-momento");
			$("#div-info-ejercicio").html("").html("<p>Junto a Viaticum realizaremos un ejercicio en el que pondrás en práctica todo lo aprendido, teniendo en cuenta los 3 elementos:</p>"+
				"<ul>"+
				"<li>Punto y Línea</li>"+
				"<li>Gesto</li>"+
				"<li>Color</li>"+
				"</ul>"+
				"<p><strong>EN ESTA OCASIÓN ELABORAREMOS UN AUTORRETRATO</strong></p>"+
				"</p>El autorretrato implica observarnos detenidamente, conocernos, expresar emociones, y sobre todo, fascinarnos con nuestra geografía corporal.</p>"+
				"<p>Materiales</p>"+
				"<ul>"+
				"<li>Hojas Bond Blancas 1/8</li>"+
				"<li>Lápiz HB, tajalápiz, borrador y Colores</li>"+
				"<li>Un espejo</li>"+
				"</ul>"+
				"<p>¡Comencemos a volar!</p>"+
				"<ol>"+
				"<li>Durante este ejercicio, necesitaremos que te observes constantemente en un espejo.</li>"+
				"<li>Define que quieres en tu autorretrato, ¿cómo quieres representarte, que gestos, que sensaciones quieres transmitir?</li>"+
				"<li>Una vez ya tengas definido como quieres dibujarte… ¡comenzamos!</li>"+
				"<li>Con el lápiz, dibuja suavemente el contorno: La forma de tu cara, el pelo, los ojos y la nariz.</li>"+
				"<li>Ve definiendo las líneas de tu rostro que sean más fuertes, aumenta la presión del lápiz en estos lugares.</li>"+
				"<li>Suelta la línea, no te preocupes por la perfección. Recuerda el gesto, tu impronta, tu estilo, eso es lo que hará de tu dibujo, una obra de arte única."+
				"<p></p><p><strong>Antes de continuar tómale una foto, es importante registrar tu proceso para compartirlo.</strong></p></li>"+
				"<li>Una vez ya tengas una estructura de líneas que te guste, te invitamos a explorar con el color. Para esta ocasión te proponemos colorear de forma firme, para lograr planos de color en tu rostro, al mejor estilo de Beatriz Gonzales o Carlos Villabón.</li>"+
				"<li>Usa colores fuertes y acordes a la sensación que quieres transmitir.</li>"+
				"<li>Comparte tu resultado en nuestra galería de fotos, para que toda la comunidad de Aula Virtual pueda disfrutar de tu creación.</li>"+
				"</ol>");
			break;
		}
		$("#div-ejercicios").show();
	}

	fondo_principal = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_index_artes_plasticas.png")',
	};
	fondo_introduccion = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_introduccion.jpg")',
	}
	fondo_objetivos = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_objetivos.jpg")',
	}
	fondo_publico = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_publico.jpg")',
	}
	fondo_metodologia = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_metodologia.jpg")',
	}
	fondo_creditos = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_creditos.jpg")',
	}
	fondo_bibliografia = {
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_bibliografia.jpg")',
	}
	
	$("#contenedor-index-artes-plasticas").on("click", "img", function() {
		if($(this).attr("id") == "img-viaje"){
			$("#div-img-viaje").hide();
			$("#btns-intro-aap").hide();
		}
		if($(this).attr("id") == "img-colombia"){
			$("#div-mapa-mundi").hide();
			$("#div-modulos-aap").show();
		}
		if($(this).attr("id") == "img-pergamino"){
			$("#div-mapa-mundi").hide();
			$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/pergamino/img_viñeta_1.jpg");
			$("#div-comic .img-atras").data("atras", "mapa-mundi");
			$("#btns-mover-comic img").data("comic", "pergamino");
			$("#btns-mover-comic img").data("total", "15");
			$("#div-comic").show();
			num_pag = 1;
		}
		if($(this).attr("id") == "img-lupa"){
			$("#div-sub-modulos").css({
				"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_lupa.jpg")',
			});
			$("#div-modulos-aap").hide();
			$("#div-sub-modulos").show();
			$($("#div-sub-modulos").children()[1]).show();
			$($("#div-sub-modulos").children()[2]).show();
			if($(window).height() <= 890){
				$("#div-sub-modulos #div-imgs-submodulos").css({
					"position": "absolute",
					"top": "43%",
					"left": "43%"
				});
			}else{
				$("#div-sub-modulos #div-imgs-submodulos").css({
					"position": "relative",
					"top": "33%",
					"left": "42%"
				});
			}

			$("#div-sub-modulos img").data("ejercicio", "comic");
		}

		if($(this).attr("id") == "img-brujula"){
			$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/brujula/img_viñeta_1.jpg");
			$("#div-comic .img-atras").data("atras", "modulos");
			$("#btns-mover-comic img").data("comic", "brujula");
			$("#btns-mover-comic img").data("total", "11");
			$("#div-modulos-aap").hide();
			$("#div-comic").show();
		}
		if($(this).attr("id") == "img-compas"){
			$("#div-sub-modulos").css({
				"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_compas.jpg")',
			});
			$($("#div-sub-modulos").children()[1]).show();
			$($("#div-sub-modulos").children()[2]).show();
			if($(window).height()<= 890){
				$("#div-sub-modulos #div-imgs-submodulos").css({
					"position": "absolute",
					"top": "32%",
					"left": "44%"
				});
			}else{
				$("#div-sub-modulos #div-imgs-submodulos").css({
					"position": "relative",
					"top": "20%",
					"left": "42%"
				});
			}
			$("#div-modulos-aap").hide();
			$("#div-sub-modulos").show();
			$("#div-sub-modulos img").data("ejercicio", "ejercicio");
		}
		if($(this).attr("id") == "img-telescopio"){
			$("#div-sub-modulos").css({
				"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_telescopio.jpg")',
			});
			$("#div-modulos-aap").hide();
			$("#div-sub-modulos").show();
			$($("#div-sub-modulos").children()[1]).hide();
			$($("#div-sub-modulos").children()[2]).hide();
		}

		if($(this).attr("id") == "img-certificado"){
			$("#div-sub-modulos").css({
				"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_certificado.jpg")',
			});
			$("#div-modulos-aap").hide();
			$("#div-sub-modulos").show();
			$($("#div-sub-modulos").children()[1]).hide();
			$($("#div-sub-modulos").children()[2]).hide();
		}

		if($(this).attr("id") == "img-creatividad" || $(this).attr("id") == "img-linea" || $(this).attr("id") == "img-color" || $(this).attr("id") == "img-gesto"){
			$("#div-comic .img-atras").data("atras", "submodulos");
			$("#div-sub-modulos").hide();
			if($(this).data("ejercicio") == "ejercicio"){
				infoEjercicio($(this).attr("id").split("-")[1]);
			}
			if($(this).data("ejercicio") == "comic"){
				$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/"+$(this).attr("id").split("-")[1]+"/img_viñeta_1.jpg");
				$("#btns-mover-comic img").data("comic", $(this).attr("id").split("-")[1]);
				if($(this).attr("id") == "img-linea"){
					$("#btns-mover-comic img").data("total", "10");
				}
				if($(this).attr("id") == "img-gesto"){
					$("#btns-mover-comic img").data("total", "10");
				}
				if($(this).attr("id") == "img-color"){
					$("#btns-mover-comic img").data("total", "15");
				}
				if($(this).attr("id") == "img-creatividad"){
					$("#btns-mover-comic img").data("total", "9");
				}
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
			$("#div-comic-oculto").hide();
		}
	}
	if($(this).attr("id") == "img-siguiente-comic"){
		if(num_pag < $(this).data("total")){
			$("#img-atras-comic").attr("data-pagina", num_pag);
			num_pag++;
			$("#img-comic").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/"+$(this).data("comic")+"/img_viñeta_"+num_pag+".jpg");
			$(this).attr("data-pagina", num_pag);
		}
		if(num_pag == $(this).data("total")){
			if($(this).data("comic") == "linea" || $(this).data("comic") == "color" || $(this).data("comic") == "creatividad" || $(this).data("comic") == "gesto"){
				$("#div-comic-oculto").show();
				$("#div-comic-oculto").data("comic", $(this).data("comic"));
			}
		}
	}
});

$("#div-comic-oculto").click(function(){
	$("#div-sub-modulos").css({
		"background-image": 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondos/fondo_compas.jpg")',
	});
	$($("#div-sub-modulos").children()[1]).show();
	$($("#div-sub-modulos").children()[2]).show();
	$($("#div-sub-modulos").children()[1]).css({
		"margin-top": "10%",
		"left": "8%"
	})
	$($("#div-sub-modulos").children()[2]).css({
		"left": "8%"
	})
	$("#div-modulos-aap").hide();
	$("#div-comic").hide();
	$("#div-sub-modulos").show();
	$("#div-sub-modulos img").data("ejercicio", "ejercicio");
})

$(".img-atras").click(function(){
	if($(this).data("atras") == "index"){
		$("#div-img-viaje").show();
		$("#btns-intro-aap").show();
		$("#div-info-detallada-aap").hide();
		$("#div-mapa-mundi").hide();
	}
	if($(this).data("atras") == "mapa-mundi"){
		$("#div-modulos-aap").hide();
		$("#div-comic").hide();
		$("#div-mapa-mundi").show();
	}
	if($(this).data("atras") == "modulos"){
		$("#div-modulos-aap").show();
		$("#div-comic").hide();
		$("#div-sub-modulos").hide();
	}
	if($(this).data("atras") == "submodulos"){
		$("#div-comic-oculto").hide();
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
		case "img-bibliografia-aap":
		$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_metodologia_sobre.png");
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
		case "img-bibliografia-aap":
		$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_metodologia_normal.png");
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
		$("#div-texto-info").data("info", "introduccion");
		setElementPosition($(window).width(), $(window).height());
		$("#div-texto-info").html("").html("<p>La experiencia aula virtual está planteada como un viaje en el que Viaticum, nuestro personaje acompañante, introduce al espectador a diferentes aspectos de las artes plásticas y visuales como: punto y línea, color y gesto finalizando en un proceso de creación autónomo.</p>"+
			"<p>El aula virtual de artes plásticas y visuales se proyecta en un espacio de acercamiento a procesos creativos enfocados en la generación de imágenes que comuniquen ideas o sensaciones.</p>");
		break;
		case "img-objetivos-aap":
		$("#div-info-detallada-aap").css(fondo_objetivos);
		$("#div-texto-info").data("info", "objetivos");
		setElementPosition($(window).width(), $(window).height());
		$("#div-texto-info").html("").html("<p>Objetivo general:<p>"+
			"<p>Orientar virtualmente  una experiencia  pedagógica, creativa e  interactiva partiendo de los elementos fundamentales de las artes plásticas y visuales, las cuales permiten abrir  un espacio al pensamiento crítico desde la lectura y creación de imágenes. Esta experiencia está dirigida a todo público.</p>"+
			"<p>Objetivos específicos:</p>"+
			"<p><ol>"+
			"<li>Mediar desde las experiencias visuales de los usuarios en relación a un contexto artístico  contemporáneo basados en  diversos  referentes del medio plástico visual.</li>"+
			"<li>Fomentar espacios de pensamiento creativo frente a la sensibilidad estética y la apreciación plástica y visual.</li>"+
			"</ol></p>");
		break;
		case "img-publico-aap":
		$("#div-info-detallada-aap").css(fondo_publico);
		$("#div-texto-info").data("info", "publico");
		setElementPosition($(window).width(), $(window).height());
		$("#div-texto-info").html("").html("<p>Esta plataforma o espacio virtual está diseñado para cualquier persona que quiera explorar o acercarse a las artes plásticas y visuales.</p>");
		break;
		case "img-metodologia-aap":
		$("#div-info-detallada-aap").css(fondo_metodologia);
		$("#div-texto-info").data("info", "metologia");
		setElementPosition($(window).width(), $(window).height());
		$("#div-texto-info").html("").html("<p>Virtual pedagógica, interactiva y creativa que invita al usuario a vivir una experiencia dinámica en la apropiación de conocimiento y la aplicabilidad del mismo.</p>");
		break;
		case "img-creditos-aap":
		$("#div-info-detallada-aap").css(fondo_creditos);
		$("#div-texto-info").data("info", "creditos");
		setElementPosition($(window).width(), $(window).height());
		$("#div-texto-info").html("").html("<p><strong>Creadores Contenido Aula Virtual:</strong><br>"+
			"José Manuel Valero Mendieta<br>"+
			"Juan Sebastián Testa Ramírez<br>"+
			"Delmi Joanna Martínez Albarracín<br>"+
			"Reinaldo Castro Rojas<br>"+
			"Stefany Layton Cuervo<br>"+
			"Laura Nathalia Pérez Céspedes<br>"+
			"Olga Yohana Chaparro Rodríguez</p>"+
			"<p><strong>Producción de contenidos:</strong><br>"+
			"Tatiana Múnera</p>"+
			"<p><strong>Diseño gráfico e ilustraciones:</strong><br>"+
			"José Valero y Juan Sebastián Testa</p>"+
			"<p><strong>Programación:</strong><br>"+
			"Yeison Briceño</p>"+
			"<p><strong>Asesor pedagógico:</strong><br>"+
			"Marcela Jiménez<br>"+
			"Lia Estefanía García<br>"+
			"Sary Constanza Murillo</p>"+
			"<p><strong>Coordinación programa Crea:</strong><br>"+
			"Leonardo Garzón</p>"+
			"<p><strong>Coordinación SIF:</strong><br>"+
			"Miguel Andrés Salas</p>"+
			"<p><strong>Subdirección de formación artistica</strong><br>"+
			"Idartes<br>"+
			"Alcaldía de Bogotá<br>"+
			"2019</p>");
		break;
		case "img-bibliografia-aap":
		$("#div-info-detallada-aap").css(fondo_bibliografia);
		$("#div-texto-info").data("info", "bibliografia");
		setElementPosition($(window).width(), $(window).height());
		$("#div-texto-info").html("").html("<p><strong>Artículos</strong></p>"+
			"<p>Pini, I. (2016), Aproximación al arte colombiano a comienzos del siglo XXI. Revista Credencial. Recuperado de <a href='http://www.revistacredencial.com/credencial/historia/temas/aproximacion-al-arte-colombiano-comienzos-del-siglo-xxi'>Revista credencial</a></p>"+
			"<p>Tobón, D. (2009), Aquí, hoy, a viva voz: sobre lo contemporáneo en el arte colombiano. Cuadernos de Música, Artes Visuales y Artes Escénicas, 5, 67-86."+
			"Recuperado de <a href='https://revistas.javeriana.edu.co/index.php/cma/article/view/1949/1238' target='_blank'>Revista Javeriana</a></p>"+
			"<p><strong>Imágenes</strong></p>"+
			"<p>Calle, J. (2000). Niñita. [Ensamblaje]. Recuperado de <a href='http://www.banrepcultural.org/coleccion-de-arte-banco-de-la-republica/obra/ni%C3%B1ita-serie-letargia' target='_blank'>Banco de la república</a></p>"+
			"<p>Caro, A. (1992). Homenaje a Manuel Quintín Lame. [Dibujo]. Recuperado de <a href='http://www.banrepcultural.org/coleccion-de-arte-banco-de-la-republica/obra/homenaje-manuel-quint%C3%ADn-lame' target='_blank'>Banco de la república</a></p>"+
			"<p>Gonzalez, B. (1965). Los suicidas del sisga. [Pintura]. Recuperado de <a href='https://i2.wp.com/esferapublica.org/nfblog/wp-content/uploads/2011/11/beatriz-gonzalez1.jpg' target='_blank'>Esfera pública</a></p>"+
			"<p>Lagos, Miler. (2013). Red Heart Tree Rings Datings. [Collage]. Recuperado de <a href='http://www.magnanmetz.com/artists/miler-lagos' target='_blank'>Magnan Metz Gallery</a></p>"+
			"<p>Muñoz, O. (1995). Narcisos. [Serigrafía]. Recuperado de <a href='http://www.banrepcultural.org/oscar-munoz/narcisos-secos.html' target='_blank'>Banco de la república</a></p>"+
			"<p>Villabón, C. La suerte de la fea la bonita la desea. [Pintura]. Recuperado de <a href='http://www.lavilladebon.com/pecados_capitales.html' target='_blank'>villadebon</a></p>");
		break;
	}
});
});

