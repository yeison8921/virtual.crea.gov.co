jQuery(document).ready(function($){
	$(".orders_tab").addClass("hidden");
	$(".settings_tab").addClass("hidden");
	$(".user-info").addClass("hidden");


	$('#dropdown li a').on('click', function(e){
		var area = $(this).text();
    if(area == 'Música'){
      area = 'Musica';
    }
    if(area == 'Artes plásticas'){
      area = 'Artes plasticas';
    }
        console.log(area);
        $('#btn-aprender').on('click', function(e){
        	if(area !== null){
        		$('#btn-aprender').attr('data-target', '#modalNivel');
        	}
		});
        $('#nivel a').on('click', function(e){
          var nivel = $(this).text()
          console.log(nivel);
					console.log();
          //jQuery('#nivel a').attr('href', 'cursos/'+nivel+'/'+area
          $('#nivel a').attr('href', 'course-category/'+area+'/'+nivel+'-'+area);
      	});
     });
});
