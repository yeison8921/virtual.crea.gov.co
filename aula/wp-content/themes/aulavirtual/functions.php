<?php

//Registrar menu
register_nav_menus( array(
        'principal' => ('Menú principal superior'),
        'footer' => ('Menú footer'),
        'nosotros' => ('Menú nosotros')
    ));


if(function_exists( 'add_theme_support' ))
add_theme_support( 'post-thumbnails' );



function aula_cargar_scripts()
{
    wp_enqueue_script( 'jquery',  'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js',array(),false,true);
    if(is_page("Artes electrónicas")){
      wp_enqueue_script( 'mapa', get_template_directory_uri(). '/js/mapa.js',array(),false,true);
    }
    if(is_page("Consulta mapa artes electrónicas")){
      wp_enqueue_script( 'mapa', get_template_directory_uri(). '/js/consultaMapa.js',array(),false,true);
    }
    wp_enqueue_script( 'bootstrap-script', get_template_directory_uri() . '/js/bootstrap.min.js',array(),false,true);
    wp_enqueue_script( 'funciones' , get_template_directory_uri() . '/js/funciones.js',array(),false,true);
    //wp_enqueue_script( 'notas' , get_template_directory_uri() . '/js/notas.js',array(),false,true);
    wp_enqueue_script( 'jquery-dataTables', get_template_directory_uri() . '/js/jquery.dataTables.min.js',array(),false,true);
    wp_enqueue_script( 'dataTables-bootstrap', get_template_directory_uri() . '/js/dataTables.bootstrap.min.js',array(),false,true);
    wp_enqueue_script( 'buttons-html5', get_template_directory_uri() . '/js/buttons.html5.min.js',array(),false,true);
    wp_enqueue_script( 'dataTables-buttons', get_template_directory_uri() . '/js/dataTables.buttons.min.js',array(),false,true);
    wp_enqueue_script( 'jszip', get_template_directory_uri() . '/js/jszip.min.js',array(),false,true);
    wp_enqueue_script( 'font-awesome', 'https://use.fontawesome.com/releases/v5.0.6/js/all.js',array(),false,true);
    wp_enqueue_script( 'sweet-alert',  get_template_directory_uri() . '/js/sweetAlert.min.js',array(),false,true);



}
add_action( 'wp_enqueue_scripts', 'aula_cargar_scripts' );

function aula_cargar_estilos()
{
    wp_register_style( 'bootstrap-estilo', get_template_directory_uri() . '/css/bootstrap.css',array(),false,'all');
    wp_register_style('buttons-dataTables', get_template_directory_uri().'/css/buttons.dataTables.min.css',array(),false,'all');
    wp_register_style('jquery-dataTables', get_template_directory_uri().'/css/jquery.dataTables.min.css',array(),false,'all');
    wp_register_style('estilo-principal',get_template_directory_uri().'/style.css',array(),false,'all');
    wp_enqueue_style( 'bootstrap-estilo' );
    wp_enqueue_style( 'buttons-dataTables' );
    wp_enqueue_style( 'jquery-dataTables' );
    wp_enqueue_style( 'estilo-principal' );



}
add_action('wp_enqueue_scripts','aula_cargar_estilos');

include get_parent_theme_file_path( '/mapa/subirAudio.php' );
include get_parent_theme_file_path( '/mapa/consultaMapa.php' );
include get_parent_theme_file_path( '/notas/notas.php' );
include get_parent_theme_file_path( '/h5p/h5p.php' );

?>
