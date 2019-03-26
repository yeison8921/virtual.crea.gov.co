jQuery(document).ready(function($){
	$("#uno").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/fondo.png")'
	});

	$("#dos").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/introduccion/fondo.png")',
		'background-repeat': 'no-repeat',
		'background-size': 'cover',
		'width' : '100%',
		'height': 700
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
		'height': 700
	});

	$("#cinco").css({
		'background-image': 'url("'+ $("#bloginfo").val() + '/artes_plasticas/images/observaciones_lupa/pergamino_lupa.png")',
		'background-repeat': 'no-repeat',
		'background-position': 'center',
		'background-size': 'contain',
		'width' : '100%',
		'height': '100%'
	})

	$(".btns-intro-aap img")
	.mouseover(function() {
		switch($(this).attr("id")){
			case "img-intro-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_intro_color.png");
			break;
			case "img-objetivos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_objetivos_color.png");
			break;
			case "img-publico-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_publico_color.png");
			break;
			case "img-metodologia-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_metodologia_color.png");
			break;
			case "img-creditos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_creditos_color.png");
			break;
		}
	})
	.mouseout(function() {
		switch($(this).attr("id")){
			case "img-intro-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_intro_normal.png");
			break;
			case "img-objetivos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_objetivos_normal.png");
			break;
			case "img-publico-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_publico_normal.png");
			break;
			case "img-metodologia-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_metodologia_normal.png");
			break;
			case "img-creditos-aap":
			$(this).attr("src", $("#bloginfo").val() + "/artes_plasticas/images/img_creditos_normal.png");
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