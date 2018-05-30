function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom:11,
    //minZoom: 11,
    //maxZoom: 17,
    center: new google.maps.LatLng(4.710988599999999, -74.072092)
  });
var activeInfoWindow;

jQuery(document).ready(function($){
  $.ajax({
   url: ajaxurl,
   type: "POST",
   data: {action: 'consultarAudios'},
   success: function(result){
     var info = JSON.parse(result);
     var count = Object.keys(info).length;
     for(i=0;i<count;i++){
       var lat=info[i]["lat"];
       var lng=info[i]["lng"];
       var content = "<h1>"+info[i]["titulo"]+"</h1><br><p>"+info[i]["descripcion"]+"</p><br><audio controls controlsList='nodownload'><source src="+info[i]['ruta_archivo']+" type='audio/mpeg'></audio>";
       //console.log(info);
         var marker = new google.maps.Marker({
           position: new google.maps.LatLng(lat, lng),
           map: map,
           title: "mas detalles"
         });
         var infoWindow = new google.maps.InfoWindow();
         google.maps.event.addListener(marker,'click', (function(marker,content,infoWindow){
           return function() {
            if (activeInfoWindow){
              activeInfoWindow.close();
            }
            infoWindow.setContent(content);
            infoWindow.open(map,marker);
            activeInfoWindow = infoWindow;
           };
         })(marker,content,infoWindow));
         var ctaLayer = new google.maps.KmlLayer({
           //url: 'http://googlemaps.github.io/js-v2-samples/ggeoxml/cta.kml',
           url: 'http://virtual.nidos.gov.co/Loca.kml',
           map: map
         });
         /*google.maps.event.addListener(marker, "click", function(){
           infoWindow.open(map, marker);

         });*/
       //});
     }


   //$("#resultado").html(result);
   },error: function(result){
       console.log(result);
     }
  });
});

}
