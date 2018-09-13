jQuery(document).ready(function($){
	var imgindex1 = ($("#bloginfo").val() + "/danza/images/fondo_aula_danza.jpg") 
	var imgindex2 = ($("#bloginfo").val() + "/danza/images/fondo_info_detallada_danza.jpg");
	var imgindex3 = ($("#bloginfo").val() + "/danza/images/fondo_reconocimiento_corporal.jpg");
	var imgindex4 = ($("#bloginfo").val() + "/danza/images/fondo_movimientos_universales.jpg");
	var imgindex5 = ($("#bloginfo").val() + "/danza/equilibrio/fondo-equilibrio.jpg");
	var imgindex6 = ($("#bloginfo").val() + "/danza/giros/fondo-giros.jpg");

	$("#btn_cuerpo_interdisciplinar").click(function() {
		$("#div-inicio-curso-danza").hide();
		$("#div-encabezado-info-aula-danza").show();
		$("#div-info-aula-danza").show();
	});

	$("#div-info-aula-danza img").click(function(){
		$("#contenedor-index-danza").css({'background-image':'url("'+imgindex2+'")', 'height':'1035px'});
		$("#div-inicio-curso-danza").hide();
		$("#div-encabezado-info-aula-danza").hide();
		$("#div-info-aula-danza").hide();
		$("#div-info-detallada-danza").show();
		switch($(this).attr('name')) {
			case "btn_introduccion_danza":
			$("#div-objetivos-danza").hide();
			$("#div-metodolgia-danza").hide();
			$("#div-publico-objetivo-danza").hide();
			$("#div-creditos-danza").hide();
			$("#div-introduccion-danza").show();
			break;
			case "btn_objetivos_danza":
			$("#div-metodolgia-danza").hide();
			$("#div-publico-objetivo-danza").hide();
			$("#div-creditos-danza").hide();
			$("#div-introduccion-danza").hide();
			$("#div-objetivos-danza").show();
			break;
			case "btn_metodologia_danza":
			$("#div-publico-objetivo-danza").hide();
			$("#div-creditos-danza").hide();
			$("#div-introduccion-danza").hide();
			$("#div-objetivos-danza").hide();
			$("#div-metodolgia-danza").show();
			break;
			case "btn_publico_objetivo_danza":
			$("#div-creditos-danza").hide();
			$("#div-introduccion-danza").hide();
			$("#div-objetivos-danza").hide();
			$("#div-metodolgia-danza").hide();
			$("#div-publico-objetivo-danza").show();
			break;
			case "btn_creditos_danza":
			$("#div-introduccion-danza").hide();
			$("#div-objetivos-danza").hide();
			$("#div-metodolgia-danza").hide();
			$("#div-publico-objetivo-danza").hide();
			$("#div-creditos-danza").show();
			break;
			default:
		}
		$("#div-btn-inicio-danza").show();
	});

	$("#div-btn-inicio-danza img").click(function(){
		if($("#div-info-detallada-danza").is(":visible")){
			$("#div-info-detallada-danza").hide();
		}
		$("#div-info-aula-danza").show();
		$("#div-encabezado-info-aula-danza").show();
		$("#contenedor-index-danza").css('background-image', 'url("'+imgindex1+'")');
	});

	$("#div-modulos-aula-danza img").click(function(){
		$("#div-regresar-modulo").hide();
		$("#div-video-aula-danza").hide();
		$("#div-modulos-aula-danza").hide();
		switch($(this).attr('id')) {
			case "btn_reconocimiento_corporal":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex3+'")', 'height':'1035px'});
			$("#div-reconocimiento-corporal").show();
			break;
			case "btn_movimientos_universales":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex4+'")', 'height':'1035px'});
			$("#div-movimientos-universales").show();
			break;
			case "btn_equilibrio_puntos_de_apoyo":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex5+'")', 'height':'1035px'});
			$("#div-equilibrio").show();
			break;
			case "btn_giros_y_saltos":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex6+'")', 'height':'1035px'});
			$("#div-giros").show();
			break;
		}
	});
});