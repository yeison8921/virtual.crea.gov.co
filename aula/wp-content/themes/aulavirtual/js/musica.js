jQuery(document).ready(function($){
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
		$("#div-info-andina").hide();
		$("#div-btn-mod-mus").show();
		$("#flecha-guabina").show();
		switch($(this).attr('id')) {
			case "btn-sala-teorica":
			$("#div-btn-mod-mus button").attr("data-modulo", "teorica");
			$("#div-con-guabina").show();
			InfoBasicaGuabina();
			break;
			case "btn-sala-interactiva":
			$("#div-btn-mod-mus button").attr("data-modulo", "interactiva");
			$("#div-int-guabina").show();
			infoBasicaInteractivaGuabina();
			break;
			case "btn-sala-general":
			break;
		}
	});

	$("#div-btn-mod-mus").on('click', 'button', function() {
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-btn-mod-mus .flecha-musica").not(this).hide();
		$($(this).parent().parent().children()[0]).children(".flecha-musica").show();
		$("#div-btn-mod-mus button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		if($(this).data('modulo') == "teorica"){
			switch($(this).attr('id')) {
				case "btn-guabina":
				$("#div-con-guabina").show();
				$("#div-con-pasillo").hide();
				$("#div-con-bambuco").hide();
				limpiarInfo("guabina");
				InfoBasicaGuabina();
				break;
				case "btn-pasillo":
				$("#div-con-guabina").hide();
				$("#div-con-bambuco").hide();
				$("#div-img-pasillo img").css("height", "");
				$("#div-con-pasillo").show();
				limpiarInfo("pasillo");
				infoBasicaPasiilo();
				break;
				case "btn-bambuco":
				$("#div-con-guabina").hide();
				$("#div-con-pasillo").hide();
				$("#div-tex-bambuco").removeClass('col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6').addClass('col-lg-6 col-md-12');
				$("#div-con-bambuco").show();
				limpiarInfo("bambuco");
				InfoBasicaBambuco();
				break;
			}
		}
		if($(this).data('modulo') == "interactiva"){
			switch($(this).attr('id')) {
				case "btn-guabina":
				$("#div-int-guabina").show();
				$("#div-int-bambuco").hide();
				$("#div-int-pasillo").hide();
				$("#div-int-guabina #div-tex-guabina").removeClass("col-lg-offset-3 col-md-offset-3").addClass("col-lg-offset-2 col-md-offset-2");
				$("#div-int-guabina #div-img-guabina").removeClass("col-lg-offset-3 col-md-offset-3").addClass("col-lg-offset-2 col-md-offset-2");
				limpiarInfo("guabina");
				infoBasicaInteractivaGuabina()
				break;
				case "btn-pasillo":
				$("#div-int-guabina").hide();
				$("#div-int-bambuco").hide();
				$("#div-int-pasillo").show();
				limpiarInfo("pasillo");
				infoBasicaInteractivaPasillo();
				break;
				case "btn-bambuco":
				$("#div-int-guabina").hide();
				$("#div-int-pasillo").hide();
				$("#div-int-bambuco").show();
				limpiarInfo("bambuco");
				infoBasicaInteractivaBambuco();
				break;
			}
		}
	});

	function infoBasicaInteractivaGuabina(){
		$("#div-tit-guabina h2").text("GUABINA");
		$("#div-tex-guabina p").html("<span style='font-size: 20px'>SCROLL</span>En el caso de la guabina, el sincretismo musical vocal - instrumental-coreografía está asociado al torbellino, el canto es el elemento diferenciador por su relativa independencia de la ejecución instrumental. A juicio de los críticos - generalmente literatos del pasillo, del fandanguillo, del valse y del bambuco - basados en las distintas piezas particulares que se han “escrito” en Tolima, Huila, Boyacá, Santander y Cundinamarca, mucho se puede decir de la guabina como derivación de distintos aires. Las numerosas confusiones que se presentan de las denominaciones de la guabina, todas corresponden a músicos del Tolima, Huila, Boyacá, Santander y Cundinamarca, unas y otras presentan similitudes estructurales, rítmicas y coreográficas con otros aires nacionales");
	}

	function infoBasicaInteractivaPasillo(){
		$("#div-tit-pasillo	h2").text("PASILLO");
		$("#div-tex-pasillo #img-u").attr("src",  $("#bloginfo").val() + "/musica/images/guitarra.jpg");
		$("#div-tex-pasillo #img-d").attr("src",  $("#bloginfo").val() + "/musica/images/icono_sala_interactiva.png");
	}

	function infoBasicaInteractivaBambuco(){
		$("#div-tit-bambuco	h2").text("BAMBUCO");
		$("#div-int-bambuco #div-tex-bambuco").removeClass().addClass("col-lg-4 col-md-4 text-center");
		$("#div-int-bambuco #div-img-bambuco").removeClass().addClass("col-lg-7 col-md-7");
		$("#div-int-bambuco img").not("#img-t").css("width", '130px');
		$("#div-tex-bambuco #img-u").attr("src",  $("#bloginfo").val() + "/musica/images/bambuco/instrumento_1.png");
		$("#div-tex-bambuco #img-d").attr("src",  $("#bloginfo").val() + "/musica/images/bambuco/chucho.png");
		$("#div-img-bambuco #img-t").attr("src",  $("#bloginfo").val() + "/musica/images/bambuco/instrumento_2.png");
		$("#div-img-bambuco #img-c").attr("src",  $("#bloginfo").val() + "/musica/images/bambuco/bandola.png");
	}

	function infoBasicaPasiilo(){
		$("#div-tit-pasillo h2").text("PASILLO")
		$("#div-tex-pasillo p").html('Este es otro de los bailes folclóricos andinos que se hicieron populares desde el siglo XIX. Es una de las variantes del vals europeo, convertido en aire de moda, con ritmo más rápido, o sea pasillo.<br>'+
			'Pasillos del estilo de “Rondinella”, “La gata golosa” y “Patasdilo”, eran los más solicitados por las personas y los más escuchados en las tertulias santafereñas.<br>'+
			'Hay dos tipos de pasillo: el fiestero instrumental, que es el más característico de las fiestas populares bailes de casorio y de garrote y el pasillo lento, generalmente vocal, que trata en sus letras temas de amor, desilusión, luto y nostalgia.'+
			'Según el historiador Javier Ocampo, el pasillo colombiano presenta semejanzas con el vals de Venezuela, el sanjuanito de Ecuador y el valsecito de Costa Rica.');
		$("#div-img-pasillo img").attr('src', $("#bloginfo").val() + "/musica/images/guabina/instrumento.jpg");
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
			$("#div-img-guabina img").attr('src', $("#bloginfo").val() + "/musica/images/guabina/imagen_notas.jpg");
			break;
			case "btn-melodia-guabina":
			$("#div-tit-guabina h2").text("LA RUANA");
			$("#div-tex-guabina img").attr("src", $("#bloginfo").val() + "/musica/images/guabina/melodia_la_ruana.png");
			$("#div-img-guabina p").css({'color': '#5f6d5d', 'font-style': 'italic'});
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
			$("#div-tit-pasillo h2").text("RITMO");
			$("#div-tex-pasillo p").html("FALTA PONER IMAGEN");
			$("#div-img-pasillo p").html("FALTA PONER IMAGEN");
			break;
			case "btn-melodia-pasillo":
			$("#div-tit-pasillo h2").text("MELODÍA Y ARMONÍA");
			$("#div-tex-pasillo img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/cachipay_1.jpg");
			$("#div-tex-pasillo img").css("height", "500px");
			$("#div-img-pasillo img").attr("src", $("#bloginfo").val() + "/musica/images/pasillo/cachipay_2.jpg");
			$("#div-img-pasillo img").css("height", "500px");
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
			$("#div-tex-bambuco").removeClass('col-lg-6 col-md-6').addClass('col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6');
			$("#div-tex-bambuco img").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/golpes.png");
			break;
			case "btn-melodia-bambuco":
			$("#div-tit-bambuco h2").text("MELODÍA Y ARMONÍA");
			$("#div-tex-bambuco").removeClass('col-lg-6 col-md-6').addClass('col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6');
			$("#div-tex-bambuco img").attr("src", $("#bloginfo").val() + "/musica/images/bambuco/bochica_melodia_y_cifra.png");
			$("#div-tex-bambuco img").css("height", "500px");
			break;
		}
	});

	$("#div-int-guabina").on('click', 'button', function() {
		limpiarInfo("guabina");
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-int-guabina button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		switch($(this).attr('id')) {
			case "btn-instrumentos-guabina":
			$("#div-int-guabina #div-tex-guabina").removeClass("col-lg-offset-2 col-md-offset-2").addClass("col-lg-offset-3 col-md-offset-3");
			$("#div-int-guabina #div-img-guabina").removeClass("col-lg-offset-2 col-md-offset-2 text-center").addClass("col-lg-offset-3 col-md-offset-3");
			$("#div-tit-guabina h2").text("GUABINA");
			$("#div-int-guabina img").css("width", '120px');
			$("#img-u").attr("src", $("#bloginfo").val() + "/musica/images/guabina/marrana.png");
			$("#img-d").attr("src", $("#bloginfo").val() + "/musica/images/guabina/cuchara.png");
			$("#img-t").attr("src", $("#bloginfo").val() + "/musica/images/guabina/guaracha.png");
			$("#img-c").attr("src", $("#bloginfo").val() + "/musica/images/guabina/esterilla.png");
			break;
			case "btn-play-guabina":
			$("#div-int-guabina #div-tex-guabina").removeClass("col-lg-offset-3").addClass("col-lg-offset-2");
			$("#div-int-guabina #div-img-guabina").removeClass("col-lg-offset-3").addClass("col-lg-offset-2");
			$("#div-tit-guabina h2").text("PLAY ALONG LA RUANA");
			$("#div-int-guabina #div-tex-guabina p").html('<iframe width="460" height="215" src="https://www.youtube.com/embed/ENrGhbsxRJo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			break;
		}
	});

	$("#div-int-pasillo").on('click', 'button', function() {
		limpiarInfo("pasillo");
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-int-pasillo button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		switch($(this).attr('id')) {
			case "btn-instrumentos-pasillo":
			infoBasicaInteractivaPasillo();
			break;
			case "btn-play-pasillo":
			$("#div-tit-pasillo h2").text("PLAY ALONG CACHIPAY");
			$("#div-int-pasillo #div-img-pasillo p").html('<iframe width="460" height="215" src="https://www.youtube.com/embed/lGdywufbTE0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			break;
		}
	});

	$("#div-int-bambuco").on('click', 'button', function() {
		limpiarInfo("bambuco");
		$(this).removeClass('btn-musica-s').addClass('btn-musica-t');
		$("#div-int-bambuco button").not(this).removeClass().addClass('btn btn-block btn-musica-s');
		switch($(this).attr('id')) {
			case "btn-instrumentos-bambuco":
			infoBasicaInteractivaBambuco();
			break;
			case "btn-play-bambuco":
			$("#div-tit-bambuco h2").text("PLAY ALONG BOCHICA");
			$("#div-int-bambuco #div-tex-bambuco").removeClass().addClass("col-lg-12 col-md-12");
			$("#div-int-bambuco #div-img-bambuco").removeClass().addClass("col-lg-offset-2 col-lg-6 col-md-offset-2 col-md-6");
			$("#div-int-bambuco #div-img-bambuco p").html('<iframe width="460" height="215" src="https://www.youtube.com/embed/1hwdMxAHctc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>');
			break;
		}
	});

	$("#div-int-guabina").on('click', 'a', function() {
		limpiarInfo("guabina");
		$("#div-int-guabina #div-tex-guabina").removeClass().addClass("col-lg-6 col-md-6");
		$("#div-int-guabina #div-img-guabina").removeClass().addClass("col-lg-6 col-md-6");
		$("#div-int-guabina img").css("width", "");
		$("#div-int-guabina #div-img-guabina").addClass('text-center');
		switch($(this).attr('id')) {
			case "l-img-u":
			$("#div-tit-guabina h2").text("MARRANA");
			$("#div-tex-guabina p").html('Conocida también como zambumbía, puerca, farruco y puerca, es un tambor de fricción con varilla fija, el cual se fabrica con un calabazo o fruto seco de totumo,al que se le corta un sector para formarle boca en la parte superior; sobre esta boca, se coloca un aro de bejuco al que va atado un parche o cuero (puede ser de cerdo de monte, conejo, cordero o chivo) y éste, es atravesado por una varilla de madera, asegurada por dentro y por fuera. Este instrumento es empleado para tocar ritmos como rajaleñas y sanjuaneros, es muy popular en el departamento de Santander, en los conjuntos guabineros para la música del torbellino.  El nombre de este instrumento, se debe a la semejanza con el gruñido de un cerdo o marrano.<br>Ver: <a href="https://www.fundacionbat.com.co/instrumentos.php?IDDepartamento=52">Marrana 1</a> y <a href="http://www.ewakulak.com/index.php?option=com_content&task=view&id=437">Marrana 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=Ei2c9zp4tNU">Youtube</a>');
			$("#div-img-guabina #img-t").attr("src", $("#bloginfo").val() + "/musica/images/guabina/marrana.png")
			break;
			case "l-img-d":
			$("#div-tit-guabina h2").text("CUCHARAS");
			$("#div-tex-guabina p").html('Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión (entrechocandolas por su parte convexa) por acción de las dos manos: la una, sujetándolas (con el dedo índice de separador) y la otra, entrechocándolas con los dedos, palma, dorso, antebrazo o codo. Este instrumento fue muy usado para amenizar fiestas y reuniones, la cual, era una práctica muy frecuente en las clases populares. El sonido de las cucharas es muy similar al de las castañuelas (aunque no suenan exactamente igual). Existen varias técnicas y maneras de ejecución de éste instrumento, una de ellas, es golpearlas como si fueran palillos, otra, es coger ambas con una mano, y golpearlas contra la rodilla y la otra mano.<br>Ver: <a href="ahttp://www.tamborileros.com/tradiberia/idifono1.htm">Cucharas 1</a> y <a href="http://canteradesonidos.blogspot.com/2014/07/las-cucharas-como-instrumento-musical.html">Cucharas 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=95Jhfy38QKk">Youtube</a>');
			$("#div-img-guabina #img-t").attr("src", $("#bloginfo").val() + "/musica/images/guabina/cuchara.png")
			break;
			case "l-img-t":
			$("#div-tit-guabina h2").text("GUARACHA");
			$("#div-tex-guabina p").html('Su nombre proviene de un ave, la cual canta en coro entre hembras y machos. La guacharaca es un instrumento musical de rascado que se compone de dos partes: la guacharaca misma (cuya superficie es corrugada) y un trinche o peine (construido con alambre duro y mango de madera, el cual se usa para frotar o “rascar” la superficie corrugada de la guacharaca.<br>Ver: <a href="https://portalvallenato.net/2013/07/29/la-historia-de-la-guacharaca/">Historia de la guaracha</a> y <a href="http://blogs.eltiempo.com/vallenateando/2005/09/06/la-guacharaca/">Guaracha - El Tiempo</a><br>Imagen: <a href="https://www.google.com.co/search?q=guacharacas+instrumento+musical&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiti4em3KreAhWLvFMKHbyYBGwQ_AUIDigB&biw=1517&bih=695#imgrc=HHWh9SKhvbAjkM:">Imagen guaracha</a> <br>Audio y video: <a href="https://www.youtube.com/watch?v=tGrsesfTto8">Youtube</a>');
			$("#div-img-guabina #img-t").attr("src", $("#bloginfo").val() + "/musica/images/guabina/guaracha.png")
			break;
			case "l-img-c":
			$("#div-tit-guabina h2").text("ESTERILLA");
			$("#div-tex-guabina p").html('Instrumento tradicional colombiano, construido con cañutos o trozos de bambú (en tre 10 y 15 cm de largo), unidos en ambos extremos, por una cabuya o pita, que sirve también para sujetarlo con las manos. El instrumento se toca doblándolo y frotándolo contra sí mismo.<br>Ver: <a href="https://culturatolimense.wordpress.com/category/instrumentos-folcloricos/">Esterilla 1</a> y <a href="https://www.google.com.co/search?q=esterillas+instrumento+musical&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiC_qTb2KreAhUxvFkKHYCJDwoQ_AUIDigB&biw=1517&bih=695#imgrc=f6HFNsIO75OWCM">Esterilla 2</a><br>Audio y video: <a href="https://www.youtube.com/watch?v=jDsUWn4cnoQ">Youtube</a>');
			$("#div-img-guabina #img-t").attr("src", $("#bloginfo").val() + "/musica/images/guabina/esterilla.png")
			break;
		}
	});
});