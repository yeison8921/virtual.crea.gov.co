jQuery(document).ready(function($){

	function infoSalaTeorica(title, mainText, secText, grid){
		$(".titulo-info-basica-musica").html("").html(title);
		if(grid == 1){
			$(".contenido-info-basica-musica").html("").html(mainText);
		}else{
			$(".contenido-info-basica-musica").html("").html("<div class='col-lg-6 col-md-6'>"+mainText+"</div>"+
				"<div class='col-lg-6 col-md-6'>"+secText+"</div>");
		}
	}

	var pagina = window.location.href;
	if(pagina.indexOf("introduccion") != -1){
		$(".titulo-info-basica-musica").html("").html("Introducción");
		$(".contenido-info-basica-musica").html("").html("¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
	}else{
		$(".titulo-info-basica-musica").html("").html("Andina");
		$(".contenido-info-basica-musica").html("").html("<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
			"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>");
	}
	$(".contenedor").on("click", "button", function(){
		$(this).removeClass("btn-n-mus").addClass("btn-h-mus");
		$(".contenedor button").not(this).removeClass().addClass("btn btn-block btn-n-mus");
		switch($(this).attr('id')){
			case "btn-introduccion":
			$(".titulo-info-basica-musica").html("").html("Introducción");
			$(".contenido-info-basica-musica").html("").html("¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
			break;
			case "btn-objetivos":
			$(".titulo-info-basica-musica").html("").html("Objetivos");
			$(".contenido-info-basica-musica").html("").html("<ol>"+
				"<li>Podrás aprender conceptos generales de gramática musical.</li>"+
				"<li>Conocerás música de las regiones de Colombia: sus características, instrumentos musicales típicos y algunos ritmos de cada región.</li>"+
				"</ol>"+
				"<p>Bienvenidos a esta guía interactiva para la interpretación instrumental/vocal de ritmos de música colombiana.</p>");
			break;
			case "btn-metodologia":
			$(".titulo-info-basica-musica").html("").html("Metodología");
			$(".contenido-info-basica-musica").html("").html("<p>En estos salones interactivos, se abordará la música en dos aspectos:</p>"+
				"<ul>"+
				"<li>Teórico</li>"+
				"<li>Práctico</li>"+
				"</ul>"+
				"<p>En el aspecto teórico, tendrás a tu disposición definiciones, guías y métodos, capaces de brindarte recursos técnicos y expresivos para tu desarrollo artístico.</p>"+
				"<p>En lo práctico, podrás afianzar y consolidar los conocimientos que adquieras en la teoría. El curso, desarrollará algunas estrategias, tales como LAS SALAS INTERACTIVAS, para enriquecer y fortalecer, tanto tu proceso de formación artística, y tus aptitudes y destrezas musicales; de manera integral.</p>");
			break;
			case "btn-publico":
			$(".titulo-info-basica-musica").html("").html("Nuestro público");
			$(".contenido-info-basica-musica").html("").html("<p>Los contenidos del aula virtual están dirigidos a:</p>"+
				"<ul>"+
				"<li>Beneficiarios que asisten a los diferentes talleres del programa de música del IDARTES, bien sea de la línea Emprende CREA o Arte en la Escuela.</li>"+
				"<li>Artistas Formadores que deseen acceder al contenido del aula virtual como herramienta para complementar sus prácticas pedagógicas en el aula.</li>"+
				"<li>Jóvenes y/o adultos en proceso de formación musical (profesional o empírica) que desean profundizar en los conceptos y prácticas de algunos ritmos de la música colombiana.</li>"+
				"<li>Público en general que desee indagar y/o ampliar sus conocimientos musicales a través de los contenidos que se presentan en el aula virtual.</li>"+
				"</ul>");
			break;
			case "btn-creditos":
			$(".titulo-info-basica-musica").html("").html("Créditos");
			$(".contenido-info-basica-musica").html("").html();
			break;
			case "btn-andina":
			$(".titulo-info-basica-musica").html("").html("Andina");
			$(".contenido-info-basica-musica").html("").html("<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
				"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>");
			$("#div-botones-salas-musica button").attr("data-curso", "andina");
			break;
			case "btn-llanera":
			$(".titulo-info-basica-musica").html("").html("Llanera");
			$(".contenido-info-basica-musica").html("");
			$("#div-botones-salas-musica button").attr("data-curso", "llanera");
			break;
			case "btn-pacifico":
			$(".titulo-info-basica-musica").html("").html("Pacifico");
			$(".contenido-info-basica-musica").html("");
			$("#div-botones-salas-musica button").attr("data-curso", "pacifico");
			break;
			case "btn-atlantico":
			$(".titulo-info-basica-musica").html("").html("Atlántico");
			$(".contenido-info-basica-musica").html("");
			$("#div-botones-salas-musica button").attr("data-curso", "atlantico");
			break;
			case "btn-carranga":
			$(".titulo-info-basica-musica").html("").html("Carranga");
			$(".contenido-info-basica-musica").html("");
			$("#div-botones-salas-musica button").attr("data-curso", "carranga");
			break;
			case "btn-guabina":
			if($(this).attr("data-sala") == "teorica"){
				infoSalaTeorica("Guabina", "<p>En el caso de la guabina, el sincretismo musical vocal - instrumental-coreografía está asociado al torbellino, el canto es el elemento diferenciador por su relativa independencia de la ejecución instrumental. A juicio de los críticos - generalmente literatos del pasillo, del fandanguillo, del valse y del bambuco - basados en las distintas piezas particulares que se han “escrito” en Tolima, Huila, Boyacá, Santander y Cundinamarca, mucho se puede decir de la guabina como derivación de distintos aires. Las numerosas confusiones que se presentan de las denominaciones de la guabina, todas corresponden a músicos del Tolima, Huila, Boyacá, Santander y Cundinamarca, unas y otras presentan similitudes estructurales, rítmicas y coreográficas con otros aires nacionales</p>", "<p><img src='"+$("#bloginfo").val() +"/musica/images/guabina/cuchara.png'></p><p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Cucharas_2_01.mp3' type='audio/mpeg'></audio></p><h3>Cucharas</h3><p>Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.</p>", 2);
			}
			break;
			case "btn-teorica":
			if($(this).attr("data-curso") == "andina"){
				$("#div-seleccion-curso-musica").hide();
				$("#div-contenido-sala-musica").show();
				$("#div-botones-sala button").attr("data-sala", "teorica");
				$("#div-subbotones-sala button").attr("data-opcion", "guabina");
				infoSalaTeorica("Guabina", "<p>En el caso de la guabina, el sincretismo musical vocal - instrumental-coreografía está asociado al torbellino, el canto es el elemento diferenciador por su relativa independencia de la ejecución instrumental. A juicio de los críticos - generalmente literatos del pasillo, del fandanguillo, del valse y del bambuco - basados en las distintas piezas particulares que se han “escrito” en Tolima, Huila, Boyacá, Santander y Cundinamarca, mucho se puede decir de la guabina como derivación de distintos aires. Las numerosas confusiones que se presentan de las denominaciones de la guabina, todas corresponden a músicos del Tolima, Huila, Boyacá, Santander y Cundinamarca, unas y otras presentan similitudes estructurales, rítmicas y coreográficas con otros aires nacionales</p>", "<p><img src='"+$("#bloginfo").val() +"/musica/images/guabina/cuchara.png'></p><p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Cucharas_2_01.mp3' type='audio/mpeg'></audio></p><h3>Cucharas</h3><p>Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.</p>", 2);
			}
			break;
			case "btn-interctiva":
			break;
			case "btn-general":
			break;
			case "btn-ritmo":
			if($(this).attr("data-opcion") == "guabina"){
				infoSalaTeorica("Ritmo", "<div class='col-lg-offset-2 col-lg-8 col-md-offset-2 col-md-8'>"+
					"<div class='embed-responsive embed-responsive-16by9'>"+
					"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/IrbROBwoqBQ'></iframe>"+
					"</div></div>", "", 1);
			}
			break;
			case "btn-melodia":
			if($(this).attr("data-opcion") == "guabina"){
				infoSalaTeorica("La Ruana", "<p><video width='500' controls><source src='"+ $("#bloginfo").val() + "/musica/videos/guabina/la_ruana_melodia.mp4' type='video/mp4'></video></p><p><a href='"+ $("#bloginfo").val() + "/musica/images/guabina/melodia_la_ruana.png' download='Melodia_La_Ruana'>Descargar Melodia La Ruana  <i class='fas fa-download'></i></a></p>",
					"<p>ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.</p>"+
					"<p>ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.</p>"+
					"<p>CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.</p>"+
					"<p>GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.</p>", 2);
			}
			break;
			case "btn-armonia":
			if($(this).attr("data-opcion") == "guabina"){
				infoSalaTeorica("La Ruana", "<div class='embed-responsive embed-responsive-16by9'>"+
					"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/c1yuvkCoCZA'></iframe>"+
					"</div>", "<p>ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.</p>"+
					"<p>ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.</p>"+
					"<p>CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.</p>"+
					"<p>GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.</p>", 2);
			}
			break;
			case "btn-regresar":
			if($(this).attr("data-atras") == "index"){
				window.location.href=$("#blog-info").val();
			}
			if($(this).attr("data-atras") == "introduccion"){
				window.location.href=$("#blog-info").val()+"/introduccion-aula-musica";
			}
			break;
			case "btn-iniciar":
			window.location.href=$("#blog-info").val()+"/musica";
			break;
		}
	});
});