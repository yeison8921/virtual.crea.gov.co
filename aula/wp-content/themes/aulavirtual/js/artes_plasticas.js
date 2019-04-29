jQuery(document).ready(function($){
	num_pag = 1;
	$("#div-index").css({
		//'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/titulo.png")',
		//'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/index/fondo.png")',
		//'background-size': 'cover',
		'background-size': 'contain',
		'background-position': 'center',
		'background-repeat': 'no-repeat',
	});

	$("#uno").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondo.png")',
		'background-size': 'cover',
		'background-repeat': 'no-repeat',
		'width' : '100%'
	});

	$("#dos").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/introduccion/fondo.png")',
		'background-size': 'cover',
		'background-repeat': 'no-repeat',
		'width' : '100%'
	});

	$("#tres").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/introduccion/segunda imagen.png")',
		'background-repeat': 'no-repeat',
		'background-position': 'center',
		'background-size': 'contain',
		'width' : '100%',
		'height': '100%'
	});

	$("#cuatro").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/observaciones_lupa/fondo.png")',
		'background-repeat': 'no-repeat',
		'background-size': 'cover',
		'width' : '100%',
	});

	$("#cinco").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/observaciones_lupa/pergamino_lupa.png")',
		'background-repeat': 'no-repeat',
		'background-position': 'center',
		'background-size': 'contain',
		'width' : '100%',
		'height': '100%'
	});

	$("#contenedor-index-artes-plasticas").on("click", "img", function() {
		if($(this).attr("id") == "img-titulo"){
			$("#div-index").hide();
			$("#btns-intro-aap").hide();
			$("#uno").show();
		}
		if($(this).attr("id") == "img-mapa"){
			$("#uno").hide();
			$("#dos").show();
		}
		if($(this).attr("id") == "img-observacion"){
			$("#dos").hide();
			$("#cuatro").show();
		}
		if($(this).attr("id") == "img-introduccion"){
			$("#dos").hide();
			$("#div-brujula").show();
		}
		if($(this).attr("id") == "img-creatividad"){
			$("#cuatro").hide();
			$("#div-creatividad").show();
		}
		if($(this).attr("id") == "img-linea"){
			$("#cuatro").hide();
			$("#div-linea").show();
		}
	});

	$(".btns-mover-comic").on("click", "img", function() {
		if($(this).attr("id") == "img-atras-comic"){
			if(num_pag > 1){
				num_pag--;
				if($(this).data("comic") == "creatividad"){
					$("#img-comic-creatividad").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/creatividad/img_viñeta_"+num_pag+".jpg");
				}
				if($(this).data("comic") == "brujula"){
					$("#img-comic-brujula").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/brujula/img_viñeta_"+num_pag+".png");
				}
				if($(this).data("comic") == "linea"){
					$("#img-comic-linea").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/linea/img_viñeta_"+num_pag+".jpg");
				}
				$("#img-siguiente-comic").attr("data-pagina", num_pag);
			}
		}
		if($(this).attr("id") == "img-siguiente-comic"){
			if($(this).data("comic") == "creatividad"){
				if(num_pag < 8){
					$("#img-atras-comic").attr("data-pagina", num_pag);
					num_pag++;
					$("#img-comic-creatividad").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/creatividad/img_viñeta_"+num_pag+".jpg");
					$(this).attr("data-pagina", num_pag);
				}
			}
			if($(this).data("comic") == "brujula"){
				if(num_pag < 15){
					$("#img-atras-comic").attr("data-pagina", num_pag);
					num_pag++;
					$("#img-comic-brujula").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/brujula/img_viñeta_"+num_pag+".png");
					$(this).attr("data-pagina", num_pag);
				}
			}
			if($(this).data("comic") == "linea"){
				if(num_pag < 9){
					$("#img-atras-comic").attr("data-pagina", num_pag);
					num_pag++;
					$("#img-comic-linea").attr("src", $("#bloginfo").val() + "/artes_plasticas/images/linea/img_viñeta_"+num_pag+".jpg");
					$(this).attr("data-pagina", num_pag);
				}
			}
		}
	});

	$(".img-atras").click(function(){
		if($(this).data("atras") == "index"){
			$("#div-index").show();
			$("#btns-intro-aap").show();
			$("#uno").hide();
		}
		if($(this).data("atras") == "uno"){
			$("#dos").hide();
			$("#uno").show();
		}
		if($(this).data("atras") == "dos"){
			$("#div-brujula").hide();
			$("#cuatro").hide();
			$("#dos").show();
		}
		if($(this).data("atras") == "cuatro"){
			$("#div-creatividad").hide();
			$("#div-linea").hide();
			$("#cuatro").show();
		}
	});

	$("#btns-intro-aap img")
	.mouseover(function() {
		switch($(this).attr("id")){
			case "img-intro-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_intro_color.png");
			break;
			case "img-objetivos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_objetivos_color.png");
			break;
			case "img-publico-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_publico_color.png");
			break;
			case "img-metodologia-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_metodologia_color.png");
			break;
			case "img-creditos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_creditos_color.png");
			break;
		}
	})
	.mouseout(function() {
		switch($(this).attr("id")){
			case "img-intro-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_intro_normal.png");
			break;
			case "img-objetivos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_objetivos_normal.png");
			break;
			case "img-publico-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_publico_normal.png");
			break;
			case "img-metodologia-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_metodologia_normal.png");
			break;
			case "img-creditos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/index/img_creditos_normal.png");
			break;
		}
	});

	$("#cinco img")
	.mouseover(function() {
		switch($(this).attr("id")){
			case "img-linea":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_linea_color.png");
			break;
			case "img-color":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_color_color.png");
			break;
			case "img-gesto":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_gesto_color.png");
			break;
			case "img-creatividad":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_creatividad_color.png");
			break;
		}
	})
	.mouseout(function() {
		switch($(this).attr("id")){
			case "img-linea":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_linea_normal.png");
			break;
			case "img-color":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_color_normal.png");
			break;
			case "img-gesto":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_gesto_normal.png");
			break;
			case "img-creatividad":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/observaciones_lupa/img_creatividad_normal.png");
			break;
		}
	});

});