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
		$(".div-modulos").hide();
		$(".div-video").hide();
		$(".div-mod-enc").show();
		$(".div-con-mod").show();
		$(".tit-con").empty();
		$(".tit-enc").empty();
		switch($(this).attr('id')) {
			case "btn_mod_reconocimiento":
			$(".div-btn-mod").append(`<div class='row'><div class="col-md-2 text-right"><i class='fas fa-2x fa-caret-right'></i></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-sel'>Reconocimiento Corporal</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Movimientos Universales</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Equilibrio Puntos de Apoyo</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Giros y Saltos</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Direcciones y Desplazamientos</button></div></div>
				`);
			$(".tit-enc").append('<strong>DANZA</strong>');
			$(".tit-con").append('Reconocimiento corporal');
			break;
			case "btn_mod_movimientos":
			$(".div-btn-mod").append(`<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Reconocimiento Corporal</button></div></div>
				<div class='row'><div class="col-md-2 text-right"><i class='fas fa-2x fa-caret-right'></i></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-sel'>Movimientos Universales</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Equilibrio Puntos de Apoyo</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Giros y Saltos</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Direcciones y Desplazamientos</button></div></div>`);
			break;
			case "btn_mod_equilibrio":
			$(".div-btn-mod").append(`<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Reconocimiento Corporal</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Movimientos Universales</button></div></div>
				<div class='row'><div class="col-md-2 text-right"><i class='fas fa-2x fa-caret-right'></i></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-sel'>Equilibrio Puntos de Apoyo</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Giros y Saltos</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Direcciones y Desplazamientos</button></div></div>`);
			break;
			case "btn_mod_giros":
			$(".div-btn-mod").append(`<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Reconocimiento Corporal</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Movimientos Universales</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Equilibrio Puntos de Apoyo</button></div></div>
				<div class='row'><div class="col-md-2 text-right"><i class='fas fa-2x fa-caret-right'></i></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-sel'>Giros y Saltos</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Direcciones y Desplazamientos</button></div></div>`);
			break;
			case "btn_direcciones":
			$(".div-btn-mod").append(`<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Reconocimiento Corporal</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Movimientos Universales</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Equilibrio Puntos de Apoyo</button></div></div>
				<div class='row'><div class="col-md-1"></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-unsel'>Giros y Saltos</button></div></div>
				<div class='row'><div class="col-md-2 text-right"><i class='fas fa-2x fa-caret-right'></i></div><div class="col-md-8" style="padding:0px"><button class='btn btn-block btn-sel'>Direcciones y Desplazamientos</button></div></div>`);
			break;
		}

	})
});