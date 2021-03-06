<?php

//Registrar menu
register_nav_menus( array(
    'principal' => ('Menú principal superior'),
    'footer' => ('Menú footer'),
    'nosotros' => ('Menú nosotros')
));


if(function_exists( 'add_theme_support' ))
    add_theme_support( 'post-thumbnails' );


function aula_cargar_scripts(){

    wp_enqueue_script('jquery', get_template_directory_uri() . '/bower_components/jquery/dist/jquery.min.js',array(),false,true);
    wp_enqueue_script('bootstrap-js', get_template_directory_uri() . '/bower_components/bootstrap/dist/js/bootstrap.min.js',array(),false,true);
    wp_enqueue_script('index', get_template_directory_uri() . '/js/index.js',array(),false,true);

    if(is_page("Artes electrónicas") || is_page("Consulta mapa artes electrónicas")){
        $map_api_key = 'AIzaSyCPjto4XGyWcmoIMfdp0g3QRgo5ByAW-L8';
        wp_enqueue_script('google-maps-api', esc_url( add_query_arg( 'key', $map_api_key.'&callback=initMap', '//maps.googleapis.com/maps/api/js' )), array(), null, true );

        function google_maps_api_add_async_defer_attribute($tag, $handle){
            if ( 'google-maps-api' !== $handle )
                return $tag;
            return str_replace( ' src', ' async defer src', $tag );
        }
        add_filter('script_loader_tag', 'google_maps_api_add_async_defer_attribute', 10, 2);

        if(is_page("Artes electrónicas")){
            wp_enqueue_script( 'mapa', get_template_directory_uri(). '/js/mapa.js',array(),false,true);
        }else{
            wp_enqueue_script( 'mapa', get_template_directory_uri(). '/js/consultaMapa.js',array(),false,true);
        }
    }
    if(is_page("Introducción aula danza") ||  is_page("Danza")){
        wp_enqueue_script( 'danza', get_template_directory_uri(). '/js/danza.js',array(),false,true);
    }
    if(is_page("Introducción aula música") || is_page("Música")){
        wp_enqueue_script( 'musica', get_template_directory_uri(). '/js/musica.js',array(),false,true);
    }
    if(is_page("Introducción aula artes plásticas") || is_page("Artes plásticas")){
        wp_enqueue_script( 'artes-plasticas', get_template_directory_uri(). '/js/artes_plasticas.js',array(),false,true);
    }
    if(is_page("Introducción aula audiovisuales") || is_page("Audiovisuales")){
        wp_enqueue_script( 'audiovisuales', get_template_directory_uri(). '/js/audiovisuales.js',array(),false,true);
    }
    //wp_enqueue_script( 'notas' , get_template_directory_uri() . '/js/notas.js',array(),false,true);
    wp_enqueue_script( 'sweet-alert',  get_template_directory_uri() . '/js/sweetAlert2.min.js',array(),false,true);
    wp_enqueue_script( 'jquery-validate',  get_template_directory_uri() . '/js/jquery.validate.min.js',array(),false,true);
    wp_enqueue_script( 'jquery-validate-additional-methods',  get_template_directory_uri() . '/js/jquery.validate.additional.methods.min.js',array(),false,true);

}

add_action( 'wp_enqueue_scripts', 'aula_cargar_scripts' );

function aula_cargar_estilos(){
    wp_register_style('bootstrap-css', get_template_directory_uri() . '/bower_components/bootstrap/dist/css/bootstrap.min.css',array(),false,'all');
    wp_register_style('estilo-principal',get_template_directory_uri().'/style.css',array(),false,'all');
    wp_enqueue_style('font-awesome', 'https://use.fontawesome.com/releases/v5.5.0/css/all.css',array(),false,'all');
    wp_enqueue_style('bootstrap-css');
    wp_enqueue_style('sweetAlert2');
    wp_enqueue_style('estilo-principal');
    wp_enqueue_style('font-awesome');

}

add_action('wp_enqueue_scripts','aula_cargar_estilos');

include get_parent_theme_file_path( '/mapa/subirAudio.php' );
include get_parent_theme_file_path( '/mapa/consultaMapa.php' );
include get_parent_theme_file_path( '/notas/notas.php' );
include get_parent_theme_file_path( '/h5p/h5p.php' );