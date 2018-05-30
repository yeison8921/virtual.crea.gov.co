jQuery(document).ready(function($) {
  $("#uploadAudio").submit(function(event) {
  event.preventDefault();
  var audio_file = $("#audioFile")[0].files[0];
  var datos = new FormData();
  datos.append('action', 'guardarAudio');
  datos.append('id', $("#id").val());
  datos.append('titulo', $("#titulo").val());
  datos.append('descripcion', $("#descripcion").val());
  datos.append('lat', $("#lat").val());
  datos.append('lng', $("#lng").val());
  datos.append('audio', audio_file);
  $.ajax({
    url: ajaxurl,
    contentType: false,
    processData: false,
    dataType: "html",
    type: "POST",
    data: datos,
    success: function(result){
      swal({
        title: 'Bien hecho',
        text: 'El audio se ha guardado correctamente.',
        icon: 'success',
      });
    },error: function(result){
      swal({
        title: 'Error',
        text: 'No se ha podido guardar el audio, por favor vuelva a intentarlo.',
        icon: 'warning',
      });
      }
    });
  });
});



function initMap() {
    /*var strictBounds = new google.maps.LatLngBounds(
      new google.maps.LatLng(4.851800, -74.222140),
      new google.maps.LatLng(4.462106, -73.975982));


    var uluru = {
      lat: 4.6097100,
      lng: -74.081750
    };*/
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 12,
            //minZoom: 11,
            //maxZoom: 17,
            center: {
              lat: 4.710988599999999,
              lng: -74.072092
            },
          });

          /*google.maps.event.addListener(map, 'click', function(event) {
            $("#lat").val(event.latLng.lat());
            $("#lng").val(event.latLng.lng());
          });*/
          var infoWindow = new google.maps.InfoWindow({map: map});
          if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('<h4>Hemos detectado tu ubicación</h4>');
            map.setCenter(pos);
            console.log(pos);
            jQuery("#lat").val(pos["lat"]);
            jQuery("#lng").val(pos["lng"]);
          }, function() {
            jQuery("#info").show();
            jQuery("#info").html("<h4><strong>Hemos detectado que no has compartido tu ubicación, por favor selecciona tu ubicación haciendo clic en cualquier parte del mapa.<strong></h4>")
            jQuery("#lat").show();
            jQuery("#lng").show();
            google.maps.event.addListener(map, 'click', function(event) {
              jQuery("#lat").val(event.latLng.lat());
              jQuery("#lng").val(event.latLng.lng());
            });
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }
      }
          /*
          $("#registro").submit(function(event) {
            alert("Por favor complete todos los campos");
            if ($('#audio').get(0).files.length === 0) {
              alert("Seleccione un archivo.");
            }

          });*/


          function handleLocationError(browserHasGeolocation, infoWindow, pos) {
            infoWindow.setPosition(pos);
            infoWindow.setContent(browserHasGeolocation ?
                        'Error: No has compartido tu ubicación' :
                                  'Error: Your browser doesn\'t support geolocation.');

          }
