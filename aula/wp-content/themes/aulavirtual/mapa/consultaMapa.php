<?php
add_action('wp_ajax_consultarAudios', 'consultarAudios');
add_action('wp_ajax_nopriv_consultarAudios', 'consultarAudios');

function consultarAudios(){
  global $wpdb;
  $sql="SELECT
  M.*,
  U.user_nicename
  FROM ".$wpdb->prefix."mapas AS M
  JOIN ".$wpdb->prefix."users AS U ON U.ID=M.id_usuario";
  $results = $wpdb->get_results($sql, OBJECT);
  echo json_encode($results);
  die();
}
?>
