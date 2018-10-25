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
		$("#flecha-guabina").show();
		$("#div-con-mod-andina").show();
		$("#div-info-andina").hide();
	});

	$("#div-con-mod-andina").on('click', 'button', function() {
		switch($(this).attr('id')) {
			case "btn-ritmo-and":
			$("#div-tit-andina h2").text("RITMO");
			$("#div-tex-andina p").html("Expresión musical de los departamentos de Santander, Boyacá, Tolima y Huila, aunque antiguamente también se cultiva en Antioquia. Aun cuando el ritmo es común a todos, la guabina adquiere en cada departamento un tipo de melodía especial.<br><br>El instrumental típico para la ejecución de la guabina está conformado por el tiple, el requinto, la bandola y el chucho o guache.")
			$("#div-img-andina img").attr('src', imagen_notas);
			$("#div-img-andina p").empty();
			break;
		}
	});

});