jQuery(document).ready(function($){

	$(window).on("resize", function(){
		setElementPosition($(this).width(), $(this).height());
	});

	function setElementPosition(width, height){
		if(height > 890 && width > 992){
			divPosition = ((($("#div-con-int-aud").width() - 1449) / 2) + 108) +"px";
			buttonPosition = ((($("#div-con-int-aud").width() - 1449) / 2) + 53) +"px";
			$("#div-des-int-aud").css({
				"position": "absolute",
				"right": divPosition,
				"top": "60px",
				"width": "350px",
				"height": "600px",
				"font-size": "20px"
			});
			$("#btn-cerrar").css({
				"position": "absolute",
				"right": buttonPosition,
				"top": "20px"
			});
		}
		if(height < 890 && width > 992){
			divPosition = ((($("#div-con-int-aud").width() - 1040) / 2) + 80) +"px";
			buttonPosition = ((($("#div-con-int-aud").width() - 1040) / 2) + 28) +"px";
			$("#div-des-int-aud").css({
				"position": "absolute",
				"right": divPosition,
				"top": "35px",
				"width": "250px",
				"height": "600px",
				"font-size": "15px",
				"height": "440px",
				"overflow-y": "auto"
			});
			$("#btn-cerrar").css({
				"position": "absolute",
				"right": buttonPosition,
				"top": "5px"
			});
		}
	}

	$("#div-oculto").click(function(){
		$("#div-con-int-aud").css({
			"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_modulos.png")'
		});
		$("#img-camara").hide();
		$("#div-btns-int-aud").hide();
		$("#div-des-int-aud").hide();
		$("#div-btn-atr-aud").show();
		$("#div-btns-mod-aud").show();
		$("#div-ocu-principios").show();
		$("#btn-cerrar").hide();
		$("#btn-atras").show();
		$("#btn-atras").attr("data-atras", "index");
	});

	$("#div-ocu-principios").click(function(){
		$(".modal-title").html("Los magos de la luz");
		$(".modal-body").html("").html("<div class='col-lg-9'>"+
			"<p><div class='embed-responsive embed-responsive-16by9'>"+
			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/WZ_WIESK-Gw'></iframe>"+
			"</div></p>"+
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"+
			"</div>"+
			"<div class='col-lg-3'>"+
			"<h2>Reto</h2>"+
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"+
			"<button class='btn' id='btn-reto' style='background-color: #03f0e3; color: #24273a;'>Ir al reto</button>"+
			"</div>");
		$("#modal-rollover").modal("show");
	});

	$(".modal-body").on("click", "#btn-reto", function(){
		$(".modal-title").html("Reto los magos de la luz");
		$(".modal-body").html("").html("<div class='col-lg-offset-1 col-lg-10'>"+
			"<p><div class='embed-responsive embed-responsive-16by9'>"+
			"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/Ad1pp2DdaDU'></iframe>"+
			"</div></p>"+
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"+
			"</div>");
	});

	$("#div-ocu-videoteca").click(function(){
		$(".modal-body").html("").html("<div class='col-lg-offset-1 col-lg-10'>"+
			"<h2>Principios de fotografía</h2>"+
			"<video width='700' controls><source src='mov_bbb.mp4' type='video/mp4'></video>"+
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"+
			"</div>");
		$("#modal-rollover").modal("show");
	});

	$("#div-con-int-aud button").click(function(){
		if($(this).attr("id") != "btn-cerrar" && $(this).attr("id") != "btn-videoteca" && $(this).attr("id") != "btn-foro"){
			$("#img-camara").attr("src", $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_index_2.png');
			$("#div-des-int-aud").show();
			setElementPosition($(window).width(), $(window).height());
			$("#btn-cerrar").show();
		}
		switch($(this).attr("id")){
			case "btn-introduccion":
			$("#div-des-int-aud h2").html("").html("Introducción");
			$("#div-des-int-aud p").html("").html("<p>La cinería es una fábrica de sueños audiovisuales, un espacio para aprender sobre los principios de la fotografía y el video. Cinéfila, la maga de la luz, será la guía para revelar los secretos y los poderes para jugar con la fotografía y la imagen en movimiento, con ella podrás explorar todas las posibilidades de creación con medios audiovisuales.</p>");
			break;
			case "btn-objetivos":
			$("#div-des-int-aud h2").html("").html("Objetivos");
			$("#div-des-int-aud p").html("").html("<p>1. Realizar un recorrido virtual, provocador e interactivo a través de los principios básicos de la fotografía y la realización audiovisual.</p>"+
				"<p>2. Construir una comunidad virtual a través del intercambio de contenidos y de realizaciones a través del aula virtual.Desarrollar un proceso pedagógico virtual de formación artística a través de medios y narrativas audiovisuales, a partir de la interacción entre los grupos de formación de la línea Emprende del área de audiovisuales del programa CREA y potenciales usuarios en la red.</p>");
			break;
			case "btn-publico":
			$("#div-des-int-aud h2").html("").html("Público objetivo");
			$("#div-des-int-aud p").html("").html("Se plantea la interacción entre los grupos de formación audiovisual CREA de las diferentes líneas de atención con comunidades académicas, experiencias pedagógicas similares  o público en general.");
			break;
			case "btn-metodologia":
			$("#div-des-int-aud h2").html("").html("Metodología");
			$("#div-des-int-aud p").html("").html("<p>El proyecto de aula virtual está compuesto por dos fases:</p>"+
				"<p>1. Introducción a los principios básicos de cada capítulo a través de un viaje lúdico que inicia en el interior del lente de una cámara, hasta los elementos del lenguaje audiovisual.</p>"+
				"<p>2. Video retos: en los cuales la teoría se aterriza en la práctica a través de video tutoriales formato youtuber en los cuales se plantean retos para que los usuarios interactúen, subiendo a la red los resultados de la experimentación fotográfica y audiovisual, resolviendo dudas o inquietudes, e intercambiando opiniones con otros usuarios.</p>");
			break;
			case "btn-creditos":
			$("#div-des-int-aud h2").html("").html("Créditos");
			$("#div-des-int-aud p").html("").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
			break;
			case "btn-cerrar":
			$(this).hide();
			$("#div-des-int-aud").hide();
			$("#img-camara").attr("src", $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_index_1.png');
			break;
			case "btn-videoteca":
			$("#div-con-int-aud").css({
				"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_videoteca.png")'
			});
			$("#btn-atras").attr("data-atras", "modulos");
			$("#div-ocu-principios").hide();
			$("#div-btns-mod-aud").hide();
			$("#btn-cerrar").hide();
			$("#div-ocu-videoteca").show();
			break;
			case "btn-foro":
			break;
			case "btn-atras":
			$("#btn-cerrar").hide();
			$("#div-des-int-aud").hide();
			if($(this).attr("data-atras") == "index"){
				$("#div-con-int-aud").css({
					"background-image": 'url("")'
				});
				$("#img-camara").attr("src", $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_index_1.png');
				$("#img-camara").show();
				$("#div-btns-int-aud").show();
				$("#div-btn-atr-aud").show();
				$("#div-btns-mod-aud").hide();
				$("#div-ocu-principios").hide();
				$("#div-oculto").show();
				$(this).hide();
			}
			if($(this).attr("data-atras") == "modulos"){
				$("#div-con-int-aud").css({
					"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_modulos.png")'
				});
				$("#div-ocu-principios").show();
				$("#div-btns-mod-aud").show();
				$("#btn-atras").attr("data-atras", "index");
			}
			break;
		}
	});
});