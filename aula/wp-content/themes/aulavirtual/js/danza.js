jQuery(document).ready(function($){
	var imgindex1 = ($("#bloginfo").val() + "/danza/images/fondo_aula_danza.jpg") 
	var imgindex2 = ($("#bloginfo").val() + "/danza/images/fondo_aula_modulos.jpg");
	var imgindex3 = ($("#bloginfo").val() + "/danza/images/fondo_reconocimiento_corporal.jpg");
	var imgindex4 = ($("#bloginfo").val() + "/danza/images/fondo_movimientos_universales.jpg");
	var imgindex5 = ($("#bloginfo").val() + "/danza/equilibrio/fondo-equilibrio.jpg");
	var imgindex6 = ($("#bloginfo").val() + "/danza/giros/fondo-giros.jpg");
	var m1 = ($("#bloginfo").val() + "/danza/images/muneca_reconocimiento.png");
	var m2 = ($("#bloginfo").val() + "/danza/images/muneca_movimientos.png");
	var m3 = ($("#bloginfo").val() + "/danza/images/muneca_equilibrio.png");
	var m4 = ($("#bloginfo").val() + "/danza/images/muneca_giros.png");
	var m5 = ($("#bloginfo").val() + "/danza/images/muneca_direcciones.png");

	$("#btn_cuerpo_interdisciplinar").click(function() {
		$("#div-inicio-curso-danza").hide();
		$("#div-encabezado-info-aula-danza").show();
		$("#div-info-aula-danza").show();
	});

	$("#btn_iniciar_curso").click(function(){
		$("#div-sel-modulo").show();
		$("#div-encabezado-info-aula-danza").hide();
		$("#div-info-aula-danza").hide();
	});

	$("#div-info-aula-danza img").click(function(){
		$("#contenedor-index-danza").css({'background-image':'url("'+imgindex2+'")'});
		$("#div-inicio-curso-danza").hide();
		$("#div-encabezado-info-aula-danza").hide();
		$("#div-info-aula-danza").hide();
		$("#div-info-detallada-danza").show();
		switch($(this).attr('id')) {
			case "btn_introduccion_danza":
			$("#div-objetivos-danza").hide();
			$("#div-metodologia-danza").hide();
			$("#div-publico-objetivo-danza").hide();
			$("#div-creditos-danza").hide();
			$("#div-introduccion-danza").show();
			break;
			case "btn_objetivos_danza":
			$("#div-metodologia-danza").hide();
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
			$("#div-metodologia-danza").show();
			break;
			case "btn_publico_objetivo_danza":
			$("#div-creditos-danza").hide();
			$("#div-introduccion-danza").hide();
			$("#div-objetivos-danza").hide();
			$("#div-metodologia-danza").hide();
			$("#div-publico-objetivo-danza").show();
			break;
			case "btn_creditos_danza":
			$("#div-introduccion-danza").hide();
			$("#div-objetivos-danza").hide();
			$("#div-metodologia-danza").hide();
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
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex3+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-reconocimiento-corporal").show();
			break;
			case "btn_movimientos_universales":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex4+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-movimientos-universales").show();
			break;
			case "btn_equilibrio_puntos_de_apoyo":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex5+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-equilibrio").show();
			break;
			case "btn_giros_y_saltos":
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex6+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '700px'});
			$("#div-giros").show();
			break;
		}
	});
	$("#div-reconocimiento-corporal img").click(function(){
		$("#div-actividades-reconocimiento-corporal").hide();
		switch($(this).attr('id')) {
			case "btn_rompecabezas":
			$("#div-rompecabezas-reconocimiento-corporal").show();
			$("#contenedor-aula-danza").css({'background-image':'url("'+imgindex3+'")', 'background-repeat': 'no-repeat', 'background-size': 'cover', 'height': '800px'});
			break;
			case "btn_video":
			$("#div-video-reconocimiento-corporal").show();
			break;
		}
	});
	$("#div-botones-reconocimiento-corporal img").click(function() {
		switch($(this).attr('id')) {
			case "btn_reconocimiento_corporal":
			$("#div-rompecabezas-reconocimiento-corporal").hide();
			$("#div-video-reconocimiento-corporal").hide();
			$("#div-actividades-reconocimiento-corporal").show();
			break;
		}
	});

	$(".div-modulos img").click(function(){
		$("#contenedor-aula-danza").css({'background-image':'url("")'});
		$(".div-modulos").hide();
		$(".div-video").hide();
		$(".div-con-mod").show();
		$(".tit-con").empty();
		$(".div-con-mod-uno").empty();
		$(".div-con-mod-dos").empty();
		if($(this).attr('id') == "img_mod_reconocimiento"){
			$("#btn-reconocimiento").removeClass('btn-unsel');
			$("#btn-reconocimiento").addClass('btn-sel');
			$("#flecha-reconocimiento").show();
			$("#mod-reconocimiento").show();
			$(".muneca").attr('src', m1);
		}
		if($(this).attr('id') == "img_mod_movimientos"){
			$("#btn-movimientos").removeClass('btn-unsel');
			$("#btn-movimientos").addClass('btn-sel');
			$("#flecha-movimientos").show();
			$("#mod-movimientos").show();
			$(".muneca").attr('src', m2);
		}
		if($(this).attr('id') == "img_mod_equilibrio"){
			$("#btn-equilibrio").removeClass('btn-unsel');
			$("#btn-equilibrio").addClass('btn-sel');
			$("#flecha-equilibrio").show();
			$("#mod-equilibrio").show();
			$(".muneca").attr('src', m3);
		}
		if($(this).attr('id') == "img_mod_giros"){
			$("#btn-giros").removeClass('btn-unsel');
			$("#btn-giros").addClass('btn-sel');
			$("#flecha-giros").show();
			$("#mod-giros").show();
			$(".muneca").attr('src', m4);
		}
		if($(this).attr('id') == "img_mod_direcciones"){
			$("#btn-direcciones").removeClass('btn-unsel');
			$("#btn-direcciones").addClass('btn-sel');
			$("#flecha-direcciones").show();
			$("#mod-direcciones").show();
			$(".muneca").attr('src', m5);
		}
	});

	$(".div-btn-mod button").click(function() {
		$("#mod-reconocimiento").hide();
		$("#mod-movimientos").hide();
		$("#mod-equilibrio").hide();
		$("#mod-giros").hide();
		$("#mod-direcciones").hide();
		if($("#btn-reconocimiento").hasClass('btn-sel')){
			$("#btn-reconocimiento").removeClass('btn-sel');
			$("#btn-reconocimiento").addClass('btn-unsel');
			$("#flecha-reconocimiento").hide();
		}
		if($("#btn-movimientos").hasClass('btn-sel')){
			$("#btn-movimientos").removeClass('btn-sel');
			$("#btn-movimientos").addClass('btn-unsel');
			$("#flecha-movimientos").hide();
		}
		if($("#btn-equilibrio").hasClass('btn-sel')){
			$("#btn-equilibrio").removeClass('btn-sel');
			$("#btn-equilibrio").addClass('btn-unsel');
			$("#flecha-equilibrio").hide();
		}
		if($("#btn-giros").hasClass('btn-sel') ){
			$("#btn-giros").removeClass('btn-sel');
			$("#btn-giros").addClass('btn-unsel');
			$("#flecha-giros").hide();
		}
		if($("#btn-direcciones").hasClass('btn-sel')){
			$("#btn-direcciones").removeClass('btn-sel');
			$("#btn-direcciones").addClass('btn-unsel');
			$("#flecha-direcciones").hide();
		}
		switch($(this).attr('id')) {
			case "btn-reconocimiento":
			$("#btn-reconocimiento").addClass('btn-sel');
			$("#flecha-reconocimiento").show();
			$(".div-act-rom-rec").hide();
			$(".div-act-vid-rec").hide();
			$("#mod-reconocimiento").show();
			$(".div-con-rec-uno").show();
			$(".div-con-rec-dos").show();
			$(".muneca").attr('src', m1);
			break;
			case "btn-movimientos":
			$("#btn-movimientos").addClass('btn-sel');
			$("#flecha-movimientos").show();
			$("#mod-movimientos").show();
			$(".muneca").attr('src', m2);
			break;
			case "btn-equilibrio":
			$("#btn-equilibrio").addClass('btn-sel');
			$("#flecha-equilibrio").show();
			$("#mod-equilibrio").show();
			$(".muneca").attr('src', m3);
			break;
			case "btn-giros":
			$("#btn-giros").addClass('btn-sel');
			$("#flecha-giros").show();
			$("#mod-giros").show();
			$(".muneca").attr('src', m4);
			break;
			case "btn-direcciones":
			$("#btn-direcciones").addClass('btn-sel');
			$("#flecha-direcciones").show();
			$("#mod-direcciones").show();
			$(".muneca").attr('src', m5);
			break;
		}
	});

	$("#mod-reconocimiento button").click(function() {
		switch($(this).attr('id')) {
			case "btn-rompecabezas-rec":
			$(".div-con-rec-uno").hide();
			$(".div-con-rec-dos").hide();
			$(".div-act-rom-rec").show();
			break;
/*			case "btn-video-rec":
			$(".div-act-vid-rec").show();
			break;*/
		}
	});


});