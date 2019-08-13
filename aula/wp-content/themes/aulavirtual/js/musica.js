jQuery(document).ready(function($){

	function infoIntroduccion(title, text) {
		$(".titulo-info-basica-musica").html("").html(title);
		$(".contenido-info-basica-musica").html("").html(text);
	}

	function infoModulo(title, text, data){
		$(".titulo-info-basica-musica").html("").html(title);
		$(".contenido-info-basica-musica").html("").html(text);
		$("#div-botones-salas-musica button").attr("data-curso", data);
	}

	function infoSalaTeorica(title, mainText){
		$(".titulo-info-basica-musica").html("").html(title);
		$(".contenido-info-basica-musica").html("").html(mainText);
	}

	var pagina = window.location.href;
	if(pagina.indexOf("introduccion") != -1){
		infoIntroduccion("Introducción", "¡Bienvenidos! En estas salas encontrarán herramientas prácticas que les ayudarán a conocer los ritmos de la música colombiana. Escuchando, tocando e interactuando.");
	}else{
		infoModulo("Andina", "<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
			"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>", "andina");
	}
	$(".contenedor").on("click", "button", function(){
		$(this).removeClass("btn-n-mus").addClass("btn-h-mus");
		$(".contenedor button").not(this).removeClass().addClass("btn btn-block btn-n-mus");
		if($(this).attr('id') == "btn-teorica" || $(this).attr('id') == "btn-interctiva" || $(this).attr('id') == "btn-general"){
			$("#btn-regresar").attr("data-atras", "modulo");
		}

		if($(this).attr('id') == "btn-ritmo" || $(this).attr('id') == "btn-melodia" || $(this).attr('id') == "btn-armonia"){
			$("#btn-"+$(this).attr('data-opcion')).removeClass().addClass("btn btn-block btn-h-mus");
		}

		if($(this).attr('id') == "btn-llanera" || $(this).attr('id') == "btn-pacifico" || $(this).attr('id') == "btn-atlantico" || $(this).attr('id') == "btn-carranga"){
			$("#div-botones-salas-musica").hide();
		}
		switch($(this).attr('id')){
			case "btn-introduccion":
			infoIntroduccion("Introducción", "<p>¡Hola a todos!</p>"+
				"<p>Bienvenidos a esta experiencia virtual en donde la música colombiana se apoderará de tus sentidos y tu mente, y donde encontrarás diferentes salas con herramientas prácticas que te ayudarán a conocer algunos ritmos de nuestra música, escuchando, tocando e interactuando con los contenidos desarrollados para ti.</p>"+
				"<p>Te invitamos a recorrer nuestras diferentes salas y a conocer y apropiarte de nuestros bellos ritmos colombianos.</p>");
			break;
			case "btn-objetivos":
			infoIntroduccion("Objetivos","<p>Podrás aprender conceptos generales de gramática musical.</p>"+
				"<p>Conocerás música de las regiones de Colombia: sus características, instrumentos musicales típicos y algunos ritmos de cada región.</p>"+
				"<p>Bienvenidos a esta guía interactiva para la interpretación instrumental/vocal de ritmos de música colombiana.</p>");
			break;
			case "btn-metodologia":
			infoIntroduccion("Metodología", "<p>En estos salones interactivos, se abordará la música en dos aspectos:</p>"+
				"<ul>"+
				"<li>Teórico</li>"+
				"<li>Práctico</li>"+
				"</ul>"+
				"<p>En el aspecto teórico, tendrás a tu disposición definiciones, guías y métodos, capaces de brindarte recursos técnicos y expresivos para tu desarrollo artístico.</p>"+
				"<p>En lo práctico, podrás afianzar y consolidar los conocimientos que adquieras en la teoría. El curso, desarrollará algunas estrategias, tales como LAS SALAS INTERACTIVAS, para enriquecer y fortalecer, tanto tu proceso de formación artística, y tus aptitudes y destrezas musicales; de manera integral.</p>");
			break;
			case "btn-publico":
			infoIntroduccion("Nuestro público", "<p>Los contenidos del aula virtual están dirigidos a:</p>"+
				"<ul>"+
				"<li>Beneficiarios que asisten a los diferentes talleres del programa Crea en el área de música, bien sea de la línea Emprende Crea o Arte en la Escuela.</li>"+
				"<li>Artistas formadores que deseen acceder al contenido del aula virtual como herramienta para complementar sus prácticas pedagógicas en el aula.</li>"+
				"<li>Jóvenes y adultos en proceso de formación musical que estén interesados en profundizar los conceptos y prácticas de algunos ritmos de la música colombiana.</li>"+
				"<li>Público en general que desee indagar y ampliar sus conocimientos musicales a través de los contenidos que se presentan en el aula virtual.</li>"+
				"</ul>")
			break;
			case "btn-creditos":
			infoIntroduccion("Créditos", "");
			break;
			case "btn-andina":
			$("#div-botones-salas-musica").show();
			infoModulo("Andina", "<p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.</p>"+
				"<p>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "+'"música andina"'+" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>", "andina");
			break;
			case "btn-llanera":
			infoModulo("Llanera", "", "llanera");
			break;
			case "btn-pacifico":
			infoModulo("Pacifico", "", "pacifico");
			break;
			case "btn-atlantico":
			infoModulo("Atlántico", "", "atlantico");
			break;
			case "btn-carranga":
			infoModulo("Carranga", "", "carranga");
			break;
			case "btn-guabina":
			if($(this).attr("data-sala") == "teorica"){
				$("#div-subbotones-sala button").attr("data-opcion", "guabina");
				infoSalaTeorica("La Guabina", "<div class='col-lg-6 col-md-12'>"+
					"<p>Aire andino de origen campesino, al parecer nacido en Antioquia desde los albores del siglo XIX, con ascendencia europea y con adaptaciones regionales muy sugerentes. Sobre su nombre no existe definición; se habla de la existencia de un pez guabina en los Llanos, y muy apreciado en Cuba por su carne.</p>"+
					"<p>Es otra de las danzas y cantos típicos del folklore musical andino, muy extendida en los departamentos de Santander, Boyacá, Tolima, Huila y antiguamente en Antioquia. Aún cuando el ritmo es común, en cada departamento la guabina adquiere una melodía especial. Su formato instrumental típico está conformado por el tiple, requinto, la bandola el chucho o guache.</p>"+
					"</div>"+
					"<div class='col-lg-6 col-md-12'>"+
					"<p><img src='"+$("#bloginfo").val() +"/musica/images/guabina/cuchara.png' width='200'></p>"+
					"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Cucharas_2_01.mp3' type='audio/mpeg'></audio></p>"+
					"<h3>Cucharas</h3><p>Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.</p>"+
					"</div>");
			}
			break;
			case "btn-pasillo":
			if($(this).attr("data-sala") == "teorica"){
				$("#div-subbotones-sala button").attr("data-opcion", "pasillo");
				infoSalaTeorica("El Pasillo", "<p>Este es otro de los bailes folclóricos andinos que se hicieron populares en el siglo XIX. Es una de las variantes del vals europeo, convertido en aire de pasillo, por su ritmo más rápido.</p>"+
					"<p>Con algunas variaciones rítmicas en el bajo y en el acompañamiento armónico, su tempo puede ser lento a moderado, generalmente vocal, con letras de amor y desilusión. y en algunas regiones con tiempos más rápidos  que da como resultado el Pasillo fiestero.</p>"+
					"CRUZ GONZÁLEZ, Miguel A.: Folclore, Música y Nación. El papel del bambuco en la construcción de lo colombiano. NOMADAS (COL.) núm. 17,2002, pp.222. Universidad Central. Bogotá, Colombia.</p>","", 1);
			}
			break;
			case "btn-bambuco":
			infoSalaTeorica("El bambuco", "<p>Es el aire folclórico típico de la zona andina colombiana, y por esencia la danza nacional más representativa. Su instrumento representativo es el tiple.</p>"+
				"<p>Se caracteriza por tener la síncopa en la melodía, en su acompañamiento y un bajo que suena a contratiempo; su métrica puede ser en 6/8, que es más fácil para su lectura y ejecución. Su tempo puede ser de moderado a rápido; por lo tanto el resultado es festivo, dinámico y define con facilidad la síncopa que es la característica de este género.</p>"+
				"<p>CRUZ GONZÁLEZ, Miguel A.: Folclore, Música y Nación. El papel del bambuco en la construcción de lo colombiano. NOMADAS (COL.) núm. 17,2002, pp.222. Universidad Central. Bogotá, Colombia.</p>","", 1);
			break;
			case "btn-teorica":
			if($(this).attr("data-curso") == "andina"){
				$("#div-seleccion-curso-musica").hide();
				$("#div-contenido-sala-musica").show();
				$("#div-botones-sala #btn-guabina").removeClass("btn-n-mus").addClass("btn-h-mus");
				$("#div-botones-sala button").attr("data-sala", "teorica");
				$("#div-subbotones-sala button").attr("data-opcion", "guabina");
				infoSalaTeorica("La Guabina", "<div class='col-lg-6 col-md-12'>"+
					"<p>Aire andino de origen campesino, al parecer nacido en Antioquia desde los albores del siglo XIX, con ascendencia europea y con adaptaciones regionales muy sugerentes. Sobre su nombre no existe definición; se habla de la existencia de un pez guabina en los Llanos, y muy apreciado en Cuba por su carne.</p>"+
					"<p>Es otra de las danzas y cantos típicos del folklore musical andino, muy extendida en los departamentos de Santander, Boyacá, Tolima, Huila y antiguamente en Antioquia. Aún cuando el ritmo es común, en cada departamento la guabina adquiere una melodía especial. Su formato instrumental típico está conformado por el tiple, requinto, la bandola el chucho o guache.</p>"+
					"</div>"+
					"<div class='col-lg-6 col-md-12'>"+
					"<p><img src='"+$("#bloginfo").val() +"/musica/images/guabina/cuchara.png' width='200'></p>"+
					"<p><audio controls><source src='"+ $("#bloginfo").val() + "/musica/audios/Cucharas_2_01.mp3' type='audio/mpeg'></audio></p>"+
					"<h3>Cucharas</h3><p>Es un instrumento que nace a partir de la necesidad de la creación de diferentes sonoridades musicales; éstas son empleadas como instrumento de percusión.</p>"+
					"</div>");
			}
			break;
			case "btn-interctiva":
			break;
			case "btn-general":
			break;
			case "btn-ritmo":
			if($(this).attr("data-opcion") == "guabina"){
				infoSalaTeorica("Ritmo Tiple", "<p>A continuación te presentamos el ritmo de la guabina en el tiple.</p>"+
					"<p><div class='col-lg-8 col-md-12'>"+
					"<div class='embed-responsive embed-responsive-16by9'>"+
					"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/IrbROBwoqBQ'></iframe>"+
					"</div></div></p>"+
					"<div class='col-lg-4 col-md-12'>"+
					"<button class='btn btn-block btn-n-mus'>Tiple</button>"+
					"<button class='btn btn-block btn-n-mus'>Guitarra</button>"+
					"</div>");
			}
			break;
			case "btn-melodia":
			if($(this).attr("data-opcion") == "guabina"){
				infoSalaTeorica("La Ruana", "<div class='col-lg-6 col-md-12'>"+
					"<p><div class='embed-responsive embed-responsive-16by9'>"+
					"<video class='embed-responsive-item'><source src='"+ $("#bloginfo").val() + "/musica/videos/guabina/la_ruana_melodia.mp4' type='video/mp4'></video>"+
					"</div></p>"+
					"<p><a href='"+ $("#bloginfo").val() + "/musica/images/guabina/melodia_la_ruana.png' download='Melodia_La_Ruana'>Descargar Melodia La Ruana  <i class='fas fa-download'></i></a></p>"+
					"</div>"+
					"<div class='col-lg-6 col-md-12'>"+
					"<p>ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.</p>"+
					"<p>ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.</p>"+
					"<p>CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.</p>"+
					"<p>GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.</p>"+
					"</div>");
			}
			break;
			case "btn-armonia":
			if($(this).attr("data-opcion") == "guabina"){
				infoSalaTeorica("La Ruana", "<div class='col-lg-6 col-md-12'>"+
					"<p><div class='embed-responsive embed-responsive-16by9'>"+
					"<iframe class='embed-responsive-item' src='https://www.youtube.com/embed/c1yuvkCoCZA'></iframe>"+
					"</div></p></div>"+
					"<div class='col-lg-6 col-md-12'>"+
					"<p>ESTROFA 1 Cuando nací, mi mamá me dio una ruana, pa que la usara el domingo y todita la semana, y todita la semana.</p>"+
					"<p>ESTROFA 2 Ahora crecí, pero no creció mi ruana, mi mamá quiere agrandarla, con dos ovillos de lana, con dos ovillos de lana.</p>"+
					"<p>CORO: Iiii... hoy le digo a mi mamá, que no me agrande,  la ruana, que la deje quietecita, Hasta que nazca mi hermana,  en un mes y una semana, en un mes y una semana.</p>"+
					"<p>GUÍA 1: Canto sobre la melodía Guabina-Torbellino. Intervalos 3ra menor, 5ta justa, 8va justa y grados conjuntos de la escala mayor.</p>");
			}
			break;
			case "btn-regresar":
			if($(this).attr("data-atras") == "index"){
				window.location.href=$("#blog-info").val();
			}
			if($(this).attr("data-atras") == "introduccion"){
				window.location.href=$("#blog-info").val()+"/introduccion-aula-musica";
			}
			if($(this).attr("data-atras") == "modulo"){
				window.location.href=$("#blog-info").val()+"/musica";
				$(this).attr("data-atras", "introduccion");
			}
			break;
			case "btn-iniciar":
			window.location.href=$("#blog-info").val()+"/musica";
			break;
		}
	});
});