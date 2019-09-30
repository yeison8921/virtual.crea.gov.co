<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <?php if(is_page("Introducción aula danza")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row contenedor" id="div-cid">
      <div class="text-center header-danza">Aula de danza</div>
      <div class="navegacion-curso">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2">
          <button class="btn btn-block btn-n-dan" id="btn-regresar" data-atras="index"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
        </div>
        <div class="col-lg-offset-6 col-lg-2 col-md-offset-6 col-md-2 col-sm-offset-6 col-sm-2">
          <button class="btn btn-block btn-n-dan" id="btn-iniciar">Iniciar&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>
      <div>
        <div class="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-4 col-sm-offset-2 col-sm-8 text-right">
          <div>
            <p class="titulo-index-musica">
              <span class="span-titulo">CUERPO EN</span>
              <span class="span-titulo">MOVIMIENTO</span>
              <span class="span-titulo">&nbsp</span>
            </p>
          </div>
          <div>
            <button class="btn btn-block btn-h-dan" id="btn-introduccion">Introducción</button>
            <button class="btn btn-block btn-n-dan" id="btn-objetivos">Objetivos</button>
            <button class="btn btn-block btn-n-dan" id="btn-metodologia">Metodología</button>
            <button class="btn btn-block btn-n-dan" id="btn-publico">Nuestro público</button>
            <button class="btn btn-block btn-n-dan" id="btn-creditos">Créditos</button>
          </div>
        </div>
        <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-offset-2 col-sm-8 contenedor-info-basica">
          <div class="mini-contenedor-info-basica">
            <div class="titulo-info-basica"></div>
            <div class="contenido-info-basica"></div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if(is_page("Danza")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row contenedor" id="div-ccd">
      <div class="text-center header-danza">Aula de danza</div>
      <div class="navegacion-curso">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2">
          <button class="btn btn-block btn-n-dan" id="btn-regresar" data-atras="introduccion"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
        </div>
      </div>
      <div id="div-seleccion-curso-danza" style="padding-top: 100px;">
        <div class="col-lg-offset-1 col-lg-3 col-md-offset-1 col-md-3 col-sm-offset-2 col-sm-8 text-right">
          <div>
            <p class="titulo-curso-musica">
              <span class="span-titulo">SELECCIONA</span>
              <span class="span-titulo">UN MÓDULO</span>
            </p>
          </div>
          <div>
            <div class="text-center">
              <img src="<?php bloginfo('template_url'); ?>/danza/images/metodologia/conexion.png" height="250">
            </div>
            <button class="btn btn-block btn-n-dan" id="btn-conexion" data-curso="">Conexión corporal</button>
            <button class="btn btn-block btn-n-dan" id="btn-espacio" data-curso="">Espacio</button>
            <button class="btn btn-block btn-n-dan" id="btn-expresion" data-curso="">Expresión</button>
            <button class="btn btn-block btn-n-dan" id="btn-ritmo" data-curso="">Ritmo</button>
            <button class="btn btn-block btn-n-dan" id="btn-memoria" data-curso="">Memoria</button>
          </div>
        </div>
        <div class="col-lg-offset-1 col-lg-6 col-md-offset-1 col-md-6 col-sm-offset-2 col-sm-8 contenedor-info-basica">
          <div class="mini-contenedor-info-basica">
            <div class="titulo-info-basica"></div>
            <div class="contenido-info-basica"></div>
          </div>
        </div>
      </div>
      <div id="div-contenido-sala-danza" style="padding-top: 100px; display: none;">
        <div class="col-lg-offset-1 col-lg-2 col-md-3">
          <div>
            <p class="titulo-curso-musica">
              <span class="span-titulo">&nbsp;</span>
            </p>
          </div>
          <div id="div-botones-sala">
          </div>
        </div>
        <div class="col-lg-8 col-md-9">
          <div class="contenedor-info-basica">
            <div class="mini-contenedor-info-basica">
              <div class="titulo-info-basica"></div>
              <div class="contenido-info-basica"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12" id="div-subbotones-sala" style="padding-top: 50px;">
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if(is_page("Introducción aula música")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row contenedor" id="div-cim">
      <div class="text-center header-musica">Aula de música</div>
      <div class="navegacion-curso">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-1 col-sm-2">
          <button class="btn btn-block btn-n-mus" id="btn-regresar" data-atras="index"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
        </div>
        <div class="col-lg-offset-6 col-lg-2 col-md-offset-6 col-md-2 col-sm-offset-6 col-sm-2">
          <button class="btn btn-block btn-n-mus" id="btn-iniciar">Iniciar&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
        </div>
      </div>
      <div>
        <div class="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-4 col-sm-offset-2 col-sm-8 text-right">
          <div>
            <p class="titulo-index-musica">
              <span class="span-titulo">SALONES</span>
              <span class="span-titulo">INTERACTIVOS</span>
              <span class="span-titulo">DE MÚSICA</span>
            </p>
          </div>
          <div>
            <button class="btn btn-block btn-h-mus" id="btn-introduccion">Introducción</button>
            <button class="btn btn-block btn-n-mus" id="btn-objetivos">Objetivos</button>
            <button class="btn btn-block btn-n-mus" id="btn-metodologia">Metodología</button>
            <button class="btn btn-block btn-n-mus" id="btn-publico">Nuestro público</button>
            <button class="btn btn-block btn-n-mus" id="btn-creditos">Créditos</button>
          </div>
        </div>
        <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-offset-2 col-sm-8 contenedor-info-basica">
          <div class="mini-contenedor-info-basica">
            <div class="titulo-info-basica"></div>
            <div class="contenido-info-basica"></div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if(is_page("Música")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row contenedor" id="div-ccm">
      <div class="text-center header-musica">Aula de música</div>
      <div class="navegacion-curso">
        <div class="col-lg-offset-1 col-lg-2 col-md-3 col-sm-3">
          <button class="btn btn-block btn-n-mus" id="btn-regresar" data-atras="introduccion"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
        </div>
      </div>
      <div id="div-seleccion-curso-musica" style="padding-top: 100px;">
        <div class="col-lg-offset-1 col-lg-3 col-md-3 col-sm-4 text-right">
          <div>
            <p class="titulo-curso-musica">
              <span class="span-titulo">SELECCIONA</span>
              <span class="span-titulo">UN MÓDULO</span>
            </p>
          </div>
          <div>
            <button class="btn btn-block btn-h-mus" id="btn-andina">Andina</button>
            <button class="btn btn-block btn-n-mus" id="btn-llanera">Llanero</button>
            <button class="btn btn-block btn-n-mus" id="btn-pacifico">Pacífico</button>
            <button class="btn btn-block btn-n-mus" id="btn-atlantico">Atlántico</button>
            <button class="btn btn-block btn-n-mus" id="btn-carranga">Carranga</button>
          </div>
        </div>
        <div class="col-lg-4 col-md-6 col-sm-4 contenedor-info-basica">
          <div class="mini-contenedor-info-basica">
            <div class="titulo-info-basica"></div>
            <div class="contenido-info-basica"></div>
          </div>
        </div>
        <div class="col-lg-3 col-md-3 col-sm-4">
          <div>
            <div>
              <p class="titulo-curso-musica">
                <span class="span-titulo">&nbsp;</span>
                <span class="span-titulo">&nbsp;</span>
              </p>
            </div>
          </div>
          <div id="div-botones-salas-musica">
            <button class="btn btn-block btn-n-mus" id="btn-teorica" data-curso="andina">Sala teórica</button>
            <button class="btn btn-block btn-n-mus" id="btn-interactiva" data-curso="andina">Sala interactiva</button>
            <button class="btn btn-block btn-n-mus" id="btn-general" data-curso="andina">Sala general</button>
            <button class="btn btn-block btn-n-mus" id="btn-laboratorio" data-curso="andina">Laboratorio</button>
            <button class="btn btn-block btn-n-mus" id="btn-foros" data-curso="andina">Foros</button>
          </div>
        </div>
      </div>
      <div id="div-contenido-sala-musica" style="padding-top: 100px; display: none;">
        <div class="col-lg-offset-1 col-lg-2 col-md-3">
          <div>
            <p class="titulo-curso-musica">
              <span class="span-titulo">&nbsp;</span>
            </p>
          </div>
          <div id="div-botones-sala">
          </div>
        </div>
        <div class="col-lg-8 col-md-9">
          <div class="contenedor-info-basica">
            <div class="mini-contenedor-info-basica">
              <div class="titulo-info-basica"></div>
              <div class="contenido-info-basica"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12" id="div-subbotones-sala" style="padding-top: 50px;">
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if(is_page("Introducción aula artes plásticas")) :?>
    <input type="hidden" id="url" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row" id="contenedor-index-artes-plasticas">
      <div class="text-center" id="div-img-viaje">
        <a href="<?php bloginfo('url'); ?>/artes-plasticas">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/titulo.png" id="img-viaje">
        </a>
      </div>
      <div class="col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10" id="btns-intro-aap">
        <div class="col-lg-2 col-md-2 text-center">
          <a href="#"><img id="img-intro-aap" src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/img_intro_normal.png"></a>
          <p>Introducción</p>
        </div>
        <div class="col-lg-2 col-md-2 text-center">
          <a href="#"><img id="img-objetivos-aap" src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/img_objetivos_normal.png"></a>
          <p>Objetivos</p>
        </div>
        <div class="col-lg-2 col-md-2 text-center">
          <a href="#"><img id="img-publico-aap" src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/img_publico_normal.png"></a>
          <p>Público objetivo</p>
        </div>
        <div class="col-lg-2 col-md-2 text-center">
          <a href="#"><img id="img-metodologia-aap" src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/img_metodologia_normal.png"></a>
          <p>Metodología</p>
        </div>
        <div class="col-lg-2 col-md-2 text-center">
          <a href="#"><img id="img-creditos-aap" src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/img_creditos_normal.png"></a>
          <p>Créditos</p>
        </div>
        <div class="col-lg-2 col-md-2 text-center">
          <a href="#"><img id="img-bibliografia-aap" src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/img_metodologia_normal.png"></a>
          <p>Bibliografía</p>
        </div>
      </div>
      <div id="div-info-detallada-aap" style="display: none;">
        <div class="col-lg-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="index">
          </a>
        </div>
        <div class="col-lg-offset-1 col-lg-10" style="height: 80%">
          <div id="div-texto-info" data-info=""></div>
        </div>
      </div>
    </div>
  <?php endif; ?>
  <?php if(is_page("Artes plásticas")) :?>
    <input type="hidden" id="url" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row" id="contenedor-index-artes-plasticas">
      <div class="col-lg-12 text-center" id="div-mapa-mundi">
        <div class="col-lg-12">
          <a href="<?php bloginfo('url'); ?>/introduccion-aula-artes-plasticas">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive">
          </a>
        </div>
        <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/mapa_colombia.png" id="img-colombia">
        <div id="div-pergamino">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/pergamino.png" id="img-pergamino">
          </a>
        </div>
      </div>
      <div class="col-lg-12 text-center" id="div-modulos-aap" style="display: none;">
        <div class="col-lg-12">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="mapa-mundi">
        </div>
        <div class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8" id="div-imgs-modulos-app">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/introducción.png" id="img-brujula" data-ejercicio="comic">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/observación.png" id="img-lupa">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/creacion.png" id="img-compas">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/galeria_1.png" id="img-telescopio">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/certificado.png" id="img-certificado">
        </div>
      </div>
      <div class="col-lg-12 col-md-12" id="div-sub-modulos" style="display: none;">
        <div class="col-lg-12 col-md-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="modulos">
          </a>
        </div>
        <div id="div-imgs-submodulos">
          <div style="display: block;">
            <div style="float: left; margin-right: 25px;">
              <a href="#">
                <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_linea.png" id="img-linea" data-ejercicio="">
              </a>
              <span style="display: block;">Línea</span>
            </div>
            <div>
              <a href="#">
                <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_gesto.png" id="img-gesto" data-ejercicio="">
              </a>
              <span style="display: block;">Gesto</span>
            </div>
          </div>
          <div style="display: block;">
            <div style="float: left; margin-right: 25px;">
              <a href="#">
                <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_color.png" id="img-color" data-ejercicio="">
              </a>
              <span style="display: block;">Color</span>
            </div>
            <div style="float: left;">
              <a href="#">
                <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_creatividad.png" id="img-creatividad" data-ejercicio="">
              </a>
              <span style="display: block;">Creatividad</span>         
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12" id="div-comic" style="display: none;">
        <div class="col-lg-12 col-md-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="">
          </a>
        </div>
        <div id="div-comic-oculto" data-comic=""></div>
        <div class="col-lg-12 col-md-12 text-center" id="div-imagenes-comic">
          <img src="" id="img-comic">
        </div>
        <div class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 text-center" id="btns-mover-comic">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/img_atras.png" class="mover-comic" id="img-atras-comic" data-pagina="0" data-comic="" data-total="">
          </a>
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/img_siguiente.png" class="mover-comic" id="img-siguiente-comic" data-pagina="1" data-comic="" data-total="">
          </a>
        </div>
      </div>
      <div class="col-lg-12 col-md-12" id="div-ejercicios" style="display: none;">
        <div class="col-lg-1 col-md-1" style="height: 10%;">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="submodulos">
          </a>
        </div>
        <div class="col-lg-11 col-md-11 text-center" id="div-titulo-ejercicio"></div>
        <div class="col-lg-3 col-md-3 text-right" style="height: 90%;">
          <img src="" id="img-pajaro">
        </div>
        <div class="col-lg-9 col-md-9" id="div-info-ejercicio">
        </div>
        <div class="col-lg-9 col-md-9" id="div-btns-ejercicio">
          <div class="col-lg-6 col-md-6 text-right">
            <span>Realiza tu dibujo</span>
            <a href="https://sketch.io/sketchpad" target="_blank">
              <img src="">
            </a>
          </div>
          <div class="col-lg-6 col-md-6">
            <a href="#" id="a-foro" target="_blank">
              <img src="">
            </a>
            <span>Sube tu dibujo al foro</span>
          </div>
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
<?php if(is_page("Introducción aula audiovisuales")) :?>
  <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
  <div class="row">
    <div class="col-lg-12" id="div-con-int-aud">
      <img id="img-camara" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/fondos/fondo_index_1.png" style="height: 100%; width: auto; margin: auto; left: 0; right: 0; position: absolute;">
      <div class="col-lg-12 col-md-12" id="div-oculto">
        <a id="btn-oculto" href="#">
          <div id="link-oculto"></div>
          <div id="link-oculto2">
            <img id="p-i" class="mover" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/puerta_izquierda.png">                  
            <img id="p-d" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/puerta_derecha.png">
            <img id="circulo" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/circulo.png">
          </div>
        </a>
      </div>
      <button type="button" class="btn" id="btn-cerrar" style="display: none;"><i class="fas fa-times fa-2x"></i></button>
      <div id="div-des-int-aud" hidden>
        <h2></h2>
        <p></p>
      </div>
      <div class="col-lg-offset-1 col-lg-10 col-md-12 text-center" id="div-btns-int-aud">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2">
          <button class="btn btn-index-aud" id="btn-introduccion">INTRODUCCIÓN</button>
        </div>
        <div class="col-lg-2 col-md-2">
          <button class="btn btn-index-aud" id="btn-objetivos">OBJETIVOS</button>
        </div>
        <div class="col-lg-2 col-md-2">
          <button class="btn btn-index-aud" id="btn-publico">PÚBLICO OBJETIVO</button>
        </div>
        <div class="col-lg-2 col-md-2">
          <button class="btn btn-index-aud" id="btn-metodologia">METODOLOGÍA</button>
        </div>
        <div class="col-lg-2 col-md-2">
          <button class="btn btn-index-aud" id="btn-creditos">CRÉDITOS</button>
        </div>
      </div>
      <div id="div-ocu-principios" hidden></div>
      <div class="col-lg-offset-2 col-lg-8" id="div-btn-atr-aud" hidden>
        <div style="float: left;">
          <button class="btn btn-modulos-aud" id="btn-atras" data-atras="">ATRÁS</button>
        </div>
      </div>
      <div class="col-lg-offset-2 col-lg-8" id="div-btns-mod-aud" hidden>
        <div style="float: left;">
          <button class="btn btn-modulos-aud" id="btn-foro">FORO</button>
        </div>
        <div style="float: right;">
          <button class="btn btn-modulos-aud" id="btn-videoteca">VIDEOTECA</button>
        </div>
      </div>
      <div id="div-ocu-videoteca" hidden></div>
    </div>
  </div>
  <div class="modal fade" id="modal-rollover" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" style="color: #03f0e3;">&times;</button>
          <div class="modal-title" style="font-size: 40px; color: #03f0e3;"></div>
        </div>
        <div class="modal-body" style="background-color: #24273a; color: #03f0e3; text-align: left; font-size: 20px; min-height: 550px;">
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>
<?php if(is_page("Introducción aula audiovisuales 2")) :?>
  <input type="hidden" id="url" value="<?php bloginfo('url'); ?>">
  <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
  <div class="row">
    <div class="col-lg-12" id="contenedor-index-audiovisuales">
      <img id="img-camara" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/fondo_introduccion_audiovisuales.png" style="height: 100%; width: auto; margin: auto; left: 0; right: 0; position: absolute;">
      <div class="col-lg-offset-1 col-lg-10" id="div-desplazamiento" style="display: none;">
        <div class="col-lg-offset-2 col-lg-1">
          <a href="#" id="btn-regresar-principal" data-pagina="1" style="color: white;">REGRESAR</a>
        </div>
        <div  class="col-lg-offset-6 col-lg-1">
          <a href="#" id="btn-videoteca" style="color: white;">VIDEOTECA</a>
        </div>
      </div>
      <div class="col-lg-12 col-md-12" id="div-oculto">
        <a id="btn-oculto" href="#">
          <div id="link-oculto"></div>
          <div id="link-oculto2">
            <img id="p-i" class="mover" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/puerta_izquierda.png">                  
            <img id="p-d" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/puerta_derecha.png">
            <img id="circulo" src="<?php bloginfo('template_url'); ?>/audiovisuales/images/circulo.png">
          </div>
        </a>
      </div>
      <div id="div-info-basica-audiovisales" class="col-lg-offset-1 col-lg-10">
        <div class="col-lg-offset-1 col-lg-2 text-center"><a href="#" id="btn-introduccion">INTRODUCCIÓN</a></div>
        <div class="col-lg-2 text-center"><a href="#" id="btn-objetivos">OBJETIVOS</a></div>
        <div class="col-lg-2 text-center"><a href="#" id="btn-publico">PÚBLICO OBJETIVO</a></div>
        <div class="col-lg-2 text-center"><a href="#" id="btn-metodologia">METODOLOGÍA</a></div>
        <div class="col-lg-2 text-center"><a href="#" id="btn-creditos">CRÉDITOS</a></div>
      </div>
      <div class="col-lg-offset-1 col-lg-10" id="div-info-detallada-audiovisuales" style="display: none;">
        <div class="col-lg-12 text-center" id="div-tid-audivisuales">
          <h1></h1>
        </div>
        <div class="col-lg-offset-1 col-lg-10 text-center" id="div-cid-audivisuales">
          <p></p>
        </div>
        <div class="col-lg-offset-1 col-lg-10 text-center">
          <a href="#" id="btn-regresar">REGRESAR</a>
        </div>
      </div>
      <div id="div-rollover" style="display: none;">
        <div id="div-principios"></div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="modal-rollover" role="dialog">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header" style="background-color: #24273a; border-bottom: 0px solid">
          <button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
          <div class="modal-title"></div>
        </div>
        <div class="modal-body text-center" style="background-color: #24273a;">
          <div class="modal-text"></div>
        </div>
        <div class="modal-footer" style="background-color: #24273a; border-top: 0px solid">
        </div>
      </div>
    </div>
  </div>
<?php endif; ?>

<?php the_content(); ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>