jQuery(document).ready(function($){

	$('#modal-inicio-index').modal('show');

	$("#btn-cerrar-modal").on("click", function(){
		$("iframe").attr("src", $("iframe").attr("src"));
	});

	$(".carousel").carousel({
		interval: 3000
	})

	$("#div-areas-index img").mouseover(function() {
		switch($(this).attr("id")){
			case "img-musica":
			$(this).attr("src", $("#bloginfo").val() + "/index/over_musica.png");
			break;
			case "img-plasticas":
			$(this).attr("src", $("#bloginfo").val() + "/index/over_plasticas.png");
			break;
			case "img-literatura":
			$(this).attr("src", $("#bloginfo").val() + "/index/over_literatura.png");
			break;
			case "img-danza":
			$(this).attr("src", $("#bloginfo").val() + "/index/over_danza.png");
			break;
			case "img-dramatico":
			$(this).attr("src", $("#bloginfo").val() + "/index/over_dramatico.png");
			break;
			case "img-audiovisuales":
			$(this).attr("src", $("#bloginfo").val() + "/index/over_audiovisuales.png");
			break;
			case "img-electronicas":
			$(this).attr("src", $("#bloginfo").val() + "/index/over_electronicas.png");
			break;
		}
	})
	.mouseout(function() {
		switch($(this).attr("id")){
			case "img-musica":
			$(this).attr("src", $("#bloginfo").val() + "/index/normal_musica.png");
			break;
			case "img-plasticas":
			$(this).attr("src", $("#bloginfo").val() + "/index/normal_plasticas.png");
			break;
			case "img-literatura":
			$(this).attr("src", $("#bloginfo").val() + "/index/normal_literatura.png");
			break;
			case "img-danza":
			$(this).attr("src", $("#bloginfo").val() + "/index/normal_danza.png");
			break;
			case "img-dramatico":
			$(this).attr("src", $("#bloginfo").val() + "/index/normal_dramatico.png");
			break;
			case "img-audiovisuales":
			$(this).attr("src", $("#bloginfo").val() + "/index/normal_audiovisuales.png");
			break;
			case "img-electronicas":
			$(this).attr("src", $("#bloginfo").val() + "/index/normal_electronicas.png");
			break;

		}
	});
});