jQuery(document).ready(function($){
	$("#div-ocu-int-aud").click(function(){
		$("#div-con-int-aud").css({
			"background-image": 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondos/fondo_modulos.png")'
		});
		$("#div-ocu-int-aud").hide();
		$("#div-btns-int-aud").hide();
		$("#div-des-int-aud").hide();
		$("#div-btns-mod-aud").show();
		$("#div-ocu-principios").show();
	});

	$("#div-ocu-principios").click(function(){
		$(".modal-body").html("").html("<div class='col-lg-9'>"+
			"<h2>El dueño de la luz</h2>"+
			"<video width='500' controls><source src='mov_bbb.mp4' type='video/mp4'></video>"+
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
		$(".modal-body").html("").html("<div class='col-lg-offset-1 col-lg-10'>"+
			"<h2>Reto el dueño de la luz</h2>"+
			"<video width='700' controls><source src='mov_bbb.mp4' type='video/mp4'></video>"+
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

	$(".btn-index-aud").click(function(){
		$("#div-des-int-aud").show();
		switch($(this).attr("id")){
			case "btn-introduccion":
			$("#div-des-int-aud h2").html("").html("Introducción");
			$("#div-des-int-aud p").html("").html("<p>La Cinería como un viaje lúdico a través de diferentes etapas, en las cuales se abordan los temas fundamentales y principios de la fotografía y de la imagen en  movimiento, expresados gráficamente a través de un viaje por el interior de una cámara, en el cual se accede a contenidos y se deben superar retos relacionados con los mismos. La interacción a partir de contenidos pedagógicos diseñados por los grupos de la línea Emprende del área audiovisuales, permite a los usuarios el desarrollo de sus propios contenidos, que son retroalimentados y compartidos desde el aula virtual, para la construcción de una red o comunidad digital, a la cual pueden acceder también todos los grupos de formación de las diferentes líneas y áreas artísticas del programa CREA, así como comunidades académicas, experiencias pedagógicas similares  o público en general.</p>");
			break;
			case "btn-objetivos":
			$("#div-des-int-aud h2").html("").html("Objetivos");
			$("#div-des-int-aud p").html("").html("<p><strong>Objetivo general</strong>"+
				"<ul><li>Desarrollar un proceso pedagógico virtual de formación artística a través de medios y narrativas audiovisuales, a partir de la interacción entre los grupos de formación de la línea Emprende del área de audiovisuales del programa CREA y potenciales usuarios en la red.</li></ul></p>"+
				"<p><strong>Objetivos específicos</strong>"+
				"<ul>"+
				"<li>Generar un espacio virtual e interactivo a través del intercambio de información práctica sobre los principales aspectos de la fotografía y la realización audiovisual.</li>"+
				"<li>Construir una comunidad virtual alrededor del desarrollo de contenidos y el intercambio de realizaciones entre los grupos de formación de la línea Emprende del área audiovisuales y público en general, a través de la red.</li>"+
				"</ul></p>");
			break;
			case "btn-publico":
			$("#div-des-int-aud h2").html("").html("Público objetivo");
			$("#div-des-int-aud p").html("").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat");
			break;
			case "btn-metodologia":
			$("#div-des-int-aud h2").html("").html("Metodología");
			$("#div-des-int-aud p").html("").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat");
			break;
			case "btn-creditos":
			$("#div-des-int-aud h2").html("").html("Créditos");
			$("#div-des-int-aud p").html("").html("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat");
			break;
		}
	});
});