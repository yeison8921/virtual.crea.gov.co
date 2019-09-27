jQuery(document).ready(function($){

	$(window).on("resize", function(){
		a = ((($("#div-con-int-aud").width() - 1449) / 2) + 97) +"px";
		$("#div-des-int-aud").css({
			"position": "absolute",
			"right": a,
			"width": "350px",
			"height": "600px"
		});
	});

	$("#div-ocu-int-aud").click(function(){
		$("#div-con-int-aud").css({
			"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_modulos.png")'
		});
		$("#div-ocu-int-aud").hide();
		$("#div-btns-int-aud").hide();
		$("#div-des-int-aud").hide();
		$("#div-btns-mod-aud").show();
		$("#div-ocu-principios").show();
		$("#btn-cerrar").hide();
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
		$("#div-sec-modal").html("");
	});

	$("#btn-videoteca").click(function(){
		$("#div-con-int-aud").css({
			"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_videoteca.png")'
		});
		$("#div-ocu-principios").hide();
		$("#div-btns-mod-aud").hide();
		$("#div-ocu-videoteca").show();
	});

	$("#div-ocu-videoteca").click(function(){
		$("#div-pri-modal").html("").html("<div class='col-lg-offset-1 col-lg-10'>"+
			"<h2>Principios de fotografía</h2>"+
			"<video width='700' controls><source src='mov_bbb.mp4' type='video/mp4'></video>"+
			"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>"+
			"</div>");
		$("#div-sec-modal").html("");
		$("#modal-rollover").modal("show");
	});

	$("#div-con-int-aud button").click(function(){
		$("#div-con-int-aud").css({
			"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_index_2.jpg")'
		});
		$("#div-des-int-aud").show();
		if($(this).attr("id") != "btn-cerrar"){
			$("#btn-cerrar").show();
		}
		switch($(this).attr("id")){
			case "btn-introduccion":
			$("#div-des-int-aud h2").html("").html("Introducción");
			$("#div-des-int-aud p").html("").html("<p>La cinería es una fábrica de sueños audiovisuales, un espacio para aprender sobre los principios de la fotografía y el video. Cinéfila, la maga de la luz, será la guía para revelar los secretos y los poderes para jugar con la fotografía y la imagen en movimiento, con ella podrás explorar todas las posibilidades de creación con medios audiovisuales.</p>");
			break;
			case "btn-objetivos":
			$("#div-des-int-aud h2").html("").html("Objetivos");
			$("#div-des-int-aud p").html("").html("<ol><li>Realizar un recorrido virtual, provocador e interactivo a través de los principios básicos de la fotografía y la realización audiovisual.</li>"+
				"<li>Construir una comunidad virtual a través del intercambio de contenidos y de realizaciones a través del aula virtual.Desarrollar un proceso pedagógico virtual de formación artística a través de medios y narrativas audiovisuales, a partir de la interacción entre los grupos de formación de la línea Emprende del área de audiovisuales del programa CREA y potenciales usuarios en la red.</li>"+
				"</ol></p>");
			break;
			case "btn-publico":
			$("#div-des-int-aud h2").html("").html("Público objetivo");
			$("#div-des-int-aud p").html("").html("Se plantea la interacción entre los grupos de formación audiovisual CREA de las diferentes líneas de atención con comunidades académicas, experiencias pedagógicas similares  o público en general.");
			break;
			case "btn-metodologia":
			$("#div-des-int-aud h2").html("").html("Metodología");
			$("#div-des-int-aud p").html("").html("<p>El proyecto de aula virtual está compuesto por dos fases:</p>"+
				"<p><ol>"+
				"<li>Introducción a los principios básicos de cada capítulo a través de un viaje lúdico que inicia en el interior del lente de una cámara, hasta los elementos del lenguaje audiovisual.</li>"+
				"<li>Video retos: en los cuales la teoría se aterriza en la práctica a través de video tutoriales formato youtuber en los cuales se plantean retos para que los usuarios interactúen, subiendo a la red los resultados de la experimentación fotográfica y audiovisual, resolviendo dudas o inquietudes, e intercambiando opiniones con otros usuarios.</li>"+
				"</ol></p>");
			break;
			case "btn-creditos":
			$("#div-des-int-aud h2").html("").html("Créditos");
			$("#div-des-int-aud p").html("").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.");
			break;
			case "btn-cerrar":
			$(this).hide();
			$("#div-des-int-aud").hide();
			$("#div-con-int-aud").css({
				"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_index_1.jpg")'
			});
			break;
		}
	});
});