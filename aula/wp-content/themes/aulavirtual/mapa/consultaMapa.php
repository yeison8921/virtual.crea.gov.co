<?php
add_action('wp_ajax_consultarAudios', 'consultarAudios');
add_action('wp_ajax_nopriv_consultarAudios', 'consultarAudios');

function consultarAudios(){
  global $wpdb;
  $sql="SELECT * FROM ".$wpdb->prefix."mapas";
  $results = $wpdb->get_results($sql, OBJECT);
  echo json_encode($results);
  die();
}
?>
