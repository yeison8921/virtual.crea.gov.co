jQuery(document).ready(function($){
	$("#contenedor-index-audiovisuales a").click(function(){
		if($(this).attr('id') == "btn-introduccion" || $(this).attr('id') == "btn-objetivos" || $(this).attr('id') == "btn-metodologia" || $(this).attr('id') == "btn-publico" || $(this).attr('id') == "btn-creditos") {
			$("#div-info-basica-audiovisales").hide();
			$("#div-oculto").hide();
			$("#div-info-detallada-audiovisuales").show();
			$("#contenedor-index-audiovisuales").css({
				"background-image": "url()",
				"background-color": "#5cdfcf"
			});
		}
		switch($(this).attr('id')){
			case "btn-introduccion":
			$("#div-info-detallada-audiovisuales h1").text("").text("INTRODUCCIÓN");
			$("#div-info-detallada-audiovisuales p").html("").html("<br>La Cinería como un viaje lúdico a través de diferentes etapas, en las cuales se abordan los temas fundamentales y principios de la fotografía y de la imagen en  movimiento, expresados gráficamente a través de un viaje por el interior de una cámara, en el cual se accede a contenidos y se deben superar retos relacionados con los mismos. La interacción a partir de contenidos pedagógicos diseñados por los grupos de la línea Emprende del área audiovisuales, permite a los usuarios el desarrollo de sus propios contenidos, que son retroalimentados y compartidos desde el aula virtual, para la construcción de una red o comunidad digital, a la cual pueden acceder también todos los grupos de formación de las diferentes líneas y áreas artísticas del programa CREA, así como comunidades académicas, experiencias pedagógicas similares  o público en general.");
			break;
			case "btn-objetivos":
			$("#div-info-detallada-audiovisuales h1").text("").text("OBJETIVOS");
			$("#div-info-detallada-audiovisuales p").html("").html("<br><strong>Objetivo general</strong><br>Desarrollar un proceso pedagógico virtual de formación artística a través de medios y narrativas audiovisuales, a partir de la interacción entre los grupos de formación de la línea Emprende del área de audiovisuales del programa CREA y potenciales usuarios en la red."+
				"<br><strong>Objetivos específicos</strong><br>"+
				"Generar un espacio virtual e interactivo a través del intercambio de información práctica sobre los principales aspectos de la fotografía y la realización audiovisual.<br>"+
				"Construir una comunidad virtual alrededor del desarrollo de contenidos y el intercambio de realizaciones entre los grupos de formación de la línea Emprende del área audiovisuales y público en general, a través de la red.");
			break;
			case "btn-metodologia":
			$("#div-info-detallada-audiovisuales h1").text("").text("METODOLOGÍA");
			$("#div-info-detallada-audiovisuales p").html("").html("<br>El proyecto de aula virtual está compuesto por dos fases:<br>"+
				"<strong>Fase de creación:</strong><br>"+
				"La fase de creación será ofertada para los estudiantes de crea, los cuales serán los que realicen la producción de los tutoriales usando la carta fílmica como referente; la idea que uno de los grupos de SE realicen el primer tutorial y a modo de reto impulsen entre los demás colectivos la realización del resto de contenidos. Esta fase tiene una duración aproximada de 6 meses.<br>"+
				"<strong>Fase abierta (talleres):</strong><br>"+
				"La fase abierta es cuando se abre el aula virtual para inscripción abierta de todos los jóvenes dentro y fuera del crea, y seguirán la estructura propuesta. Cada taller tendrá una duración aproximada de 3 o 4 meses.");
			break;
			case "btn-publico":
			$("#div-info-detallada-audiovisuales h1").text("").text("PÚBLICO OBJETIVO");
			$("#div-info-detallada-audiovisuales p").html("").html("");
			break;
			case "btn-creditos":
			$("#div-info-detallada-audiovisuales h1").text("").text("CRÉDITOS");
			$("#div-info-detallada-audiovisuales p").html("").html("");
			break;
			case "btn-regresar":
			$("#contenedor-index-audiovisuales").css('background-image', 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondo_introduccion_audiovisuales.jpg")');
			$("#div-info-basica-audiovisales").show();
			$("#div-oculto").show();
			$("#div-info-detallada-audiovisuales").hide();
			break;
			case "btn-oculto":
			$("#div-info-basica-audiovisales").hide();
			$("#contenedor-index-audiovisuales").css({
				'background-image': 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondo_2_audiovisuales.jpg")',
				"background-color": ""
			});
			$("#div-desplazamiento").show();
			$("#div-oculto").hide();
			break;
			case "btn-regresar-principal":
			if($(this).attr("data-pagina") == 1){
				$("#div-info-basica-audiovisales").show();
				$("#div-desplazamiento").hide();
				$("#div-oculto").show();
				$("#contenedor-index-audiovisuales").css({
					'background-image': 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondo_introduccion_audiovisuales.jpg")',
				});
			}
			if($(this).attr("data-pagina") == 2){
				$("#btn-regresar-principal").attr("data-pagina", 1);
				$("#btn-videoteca").show();
				$("#contenedor-index-audiovisuales").css({
					'background-image': 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondo_2_audiovisuales.jpg")',
				});
			}
			break;
			case "btn-videoteca":
			$("#btn-regresar-principal").attr("data-pagina", 2);
			$("#div-desplazamiento").show();
			$("#btn-videoteca").hide();
			$("#contenedor-index-audiovisuales").css({
				'background-image': 'url("'+ $("#bloginfo").val() + '/audiovisuales/images/fondo_videoteca_audiovisuales.jpg")',
			});
			break;
		}
	});
});