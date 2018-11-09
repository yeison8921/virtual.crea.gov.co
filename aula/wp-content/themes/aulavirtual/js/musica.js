jQuery(document).ready(function($){
	var imagen_notas = ($("#bloginfo").val() + "/musica/images/imagen_notas.jpg");
	$("#btn-salones").click(function() {
		$("#div-inicio-curso-musica").hide();
		$("#div-inicio-info-aula-musica").show();
		$("#div-info-aula-musica").show();
	});

	$("#btn-inicio-musica").click(function() {
		$("#div-sel-modulo-musica").show();
		$("#btn-inicio-musica").hide();
		$("#div-info-aula-musica").hide();
	});

	$(".dropdown-menu").on('click', 'button', function() {
		blog_info = $("#blog-info").val();
		window.location.href = blog_info+"/musica";
	});

	$("#contenedor-aula-musica").on('click', 'a', function() {
		$("#contenedor-aula-musica").css({'background-image':'url("")'});
		$("#div-btn-mod-mus").show();

		$("#flecha-guabina").show();
		$("#div-con-guabina").show();
		InfoBasicaGuabina();
		$("#div-info-andina").hide();
	});

	$("#div-btn-mod-mus").on('click', 'button', function() {
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btn-mod-mus .flecha-musica").not(this).hide();
		$($(this).parent().parent().children()[0]).children(".flecha-musica").show();
		$("#div-btn-mod-mus button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		switch($(this).attr('id')) {
			case "btn-guabina":
			$("#div-con-guabina").show();
			$("#div-con-pasillo").hide();
			limpiarInfo("guabina");
			InfoBasicaGuabina();
			break;
			case "btn-pasillo":
			$("#div-con-guabina").hide();
			$("#div-con-pasillo").show();
			limpiarInfo("pasillo");
			infoBasicaPasiilo();
			break;
			case "btn-bambuco":
			$("#div-con-guabina").hide();
			$("#div-con-pasillo").hide();
			$("#div-con-bambuco").show();
			limpiarInfo("bambuco");
			InfoBasicaBambuco();
			break;
		}
	});

	function infoBasicaPasiilo(){
		$("#div-tit-pasillo h2").text("PASILLO")
		$("#div-tex-pasillo p").html('Este es otro de los bailes folclóricos andinos que se hicieron populares desde el siglo XIX. Es una de las variantes del vals europeo, convertido en aire de moda, con ritmo más rápido, o sea pasillo.<br>'+
			'Pasillos del estilo de “Rondinella”, “La gata golosa” y “Patasdilo”, eran los más solicitados por las personas y los más escuchados en las tertulias santafereñas.<br>'+
			'Hay dos tipos de pasillo: el fiestero instrumental, que es el más característico de las fiestas populares bailes de casorio y de garrote y el pasillo lento, generalmente vocal, que trata en sus letras temas de amor, desilusión, luto y nostalgia.'+
			'Según el historiador Javier Ocampo, el pasillo colombiano presenta semejanzas con el vals de Venezuela, el sanjuanito de Ecuador y el valsecito de Costa Rica.');
		$("#div-img-pasillo img").attr('src', $("#bloginfo").val() + "/musica/images/instrumento.jpg");
		$("#div-img-pasillo span").html("La guaracha es un instrumento musical idiófono de raspado utilizado mayormente en el vallenato. Se fabrica, entre otros, de caña o de lata.");
	}

	function InfoBasicaGuabina(){
		$("#div-tit-guabina h2").text("SALA TEÓRICA");
		$("#div-tex-guabina p").html('En Colombia, el término "música andina" se refiere a una serie de géneros musicales de algunos departamentos surcados por montañas de la Cordillera de los Andes, la cual en territorio Colombiano se divide en tres ramales conocidos como la Cordillera Oriental, Cordillera Central y Cordillera Occidental, comprendiendo entre otros los departamentos de Nariño, Cauca, Valle del Cauca, Huila, Tolima, Cundinamarca, Santander, Norte de Santander, Antioquia Boyacá y el Eje cafetero.<br><br>Debido a su extensa cobertura geográfica, la música andina colombiana es muy amplia y variada, ya que cada región le imprime su toque cultural, derivando varios ritmos entre los cuales esta el bambuco, guabina, torbellino, sanjuanero, la carranga, pasillo rajaleña, bunde, música guasca, etc.');
		$("#div-img-guabina img").attr('src', $("#bloginfo").val() + "/musica/images/guabina/instrumento.jpg");
		$("#div-img-guabina span").html("La guaracha es un instrumento musical idiófono de raspado utilizado mayormente en el vallenato. Se fabrica, entre otros, de caña o de lata.");
	}

	function InfoBasicaBambuco(){
		$("#div-tit-bambuco h2").text("BAMBUCO");
		$("#div-tex-bambuco p").html('El bambuco es el aire folklórico mestizo más típico de la zona andina colombiana, y es por esencia la danza nacional más representativa. Su instrumento fundamental es el tiple.<br><br>'+
			'Carácter Poli rítmico Hay acuerdo entre los folclóricos sobre el carácter poli rítmico del bambuco. Actualmente se habla de las fórmulas ¾ y 6/8, muy conocidas por nuestros trovadores, tipleros y guitarristas, que presentan grandes dificultades cuando se quiere orquestar debido a la síncopa.<br>'+
			'Otro tipo de bambuco es el instrumental, que se toca en estudiantina (agrupación musical de cuerdas que emplea el tiple, la bandola y la guitarra).');
		$("#div-img-bambuco img").attr('src', $("#bloginfo").val() + "/musica/images/bambuco/esterilla.jpg");
		$("#div-img-bambuco span").html("La esterilla es un instrumento tradicional colombiano, construido con cañutos o trozos de bambú (entre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.");
	}

	function limpiarInfo(selector){
		$("#div-tit-"+selector+" h2").empty();
		$("#div-tex-"+selector+" p").empty();
		$("#div-tex-"+selector+" img").attr("src", "");
		$("#div-img-"+selector+" p").empty();
		$("#div-img-"+selector+" img").attr("src", "");
		$("#div-img-"+selector+" span").empty();
		$("#div-btn-"+selector+" button").removeClass().addClass('btn btn-block btn-musica-s');
	}

	$("#div-con-guabina").on('click', 'button', function() {
		limpiarInfo("guabina");
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btn-guabina button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		switch($(this).attr('id')) {
			case "btn-ritmo-guabina":
			$("#div-tit-guabina h2").text("RITMO");
			$("#div-tex-guabina p").html("Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultiva en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.<br><br>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.")
			$("#div-img-guabina img").attr('src', imagen_notas);
			break;
			case "btn-melodia-guabina":
			$("#div-tit-guabina h2").text("LA RUANA");
			$("#div-tex-guabina img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/melodia_la_ruana.png");
			$("#div-img-guabina p").css('color', '#5f6d5d');
			$("#div-img-guabina p").html("ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.<br><br>"+
				"ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.<br><br>"+
				"CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.<br><br>"+
				"GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.");
			break;
			case "btn-armonia-guabina":
			$("#div-tit-guabina h2").text("LA RUANA");
			$("#div-tex-guabina img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/armonia_la_ruana.png");
			$("#div-img-guabina p").css('color', '#5f6d5d');
			$("#div-img-guabina p").html("ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.<br><br>"+
				"ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.<br><br>"+
				"CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.<br><br>"+
				"GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.");
			break;
		}
	});

	$("#div-con-pasillo").on('click', 'button', function() {
		limpiarInfo("pasillo");
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btn-pasillo button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		switch($(this).attr('id')) {
			case "btn-ritmo-pasillo":
			break;
			case "btn-melodia-pasillo":
			$("#div-tit-pasillo h2").text("RITMO");
			$("#div-tex-pasillo img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/cachipay_1.jpg");
			$("#div-img-pasillo img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/cachipay_2.jpg");
			break;
		}
	});

	$("#div-con-bambuco").on('click', 'button', function() {
		limpiarInfo("bambuco");
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btn-bambuco button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		switch($(this).attr('id')) {
			case "btn-ritmo-bambuco":
			$("#div-tit-bambuco h2").text("RITMO");
			$("#div-tex-bambuco img").src('','');
			break;
			case "btn-melodia-bambuco":
			$("#div-tit-bambuco h2").text("MELODÍA Y ARMONÍA");
			$("#div-tex-bambuco img").src('','');
			break;
		}
	});

});