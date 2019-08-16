<?php get_header(); ?>
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <?php if(is_page("Introducción aula música")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row contenedor" id="div-cim">
      <div class="text-center header-musica">Aula de música</div>
      <div class="navegacion-musica">
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
        <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5 col-sm-offset-2 col-sm-8 contenedor-info-basica-musica">
          <div class="mini-contenedor-info-basica-musica">
            <div class="titulo-info-basica-musica"></div>
            <div class="contenido-info-basica-musica"></div>
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
      <div class="navegacion-musica">
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
        <div class="col-lg-4 col-md-6 col-sm-4 contenedor-info-basica-musica">
          <div class="mini-contenedor-info-basica-musica">
            <div class="titulo-info-basica-musica"></div>
            <div class="contenido-info-basica-musica"></div>
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
            <button class="btn btn-block btn-n-mus" id="btn-interctiva" data-curso="andina">Sala interactiva</button>
            <button class="btn btn-block btn-n-mus" id="btn-general" data-curso="andina">Sala general</button>
            <button class="btn btn-block btn-n-mus" id="btn-laboratorio" data-curso="andina">Laboratorio</button>
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
            <button class="btn btn-block btn-h-mus" id="btn-guabina" data-sala="">Guabina</button>
            <button class="btn btn-block btn-n-mus" id="btn-pasillo" data-sala="">Pasillo</button>
            <button class="btn btn-block btn-n-mus" id="btn-bambuco" data-sala="">Bambuco</button>
            <button class="btn btn-block btn-n-mus" id="btn-instrumentos" data-sala="">Instrumentos</button>
          </div>
        </div>
        <div class="col-lg-8 col-md-9">
          <div class="contenedor-info-basica-musica">
            <div class="mini-contenedor-info-basica-musica">
              <div class="titulo-info-basica-musica"></div>
              <div class="contenido-info-basica-musica"></div>
            </div>
          </div>
        </div>
        <div class="col-lg-12 col-md-12" id="div-subbotones-sala" style="padding-top: 50px;">
          <div class="col-lg-offset-2 col-lg-2 col-md-offset-2 col-md-2">
            <button class="btn btn-block btn-n-mus" id="btn-ritmo" data-genero="">Ritmo</button>
          </div>
          <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2">
            <button class="btn btn-block btn-n-mus" id="btn-melodia" data-genero="">Melodía</button>
          </div>
          <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2">
            <button class="btn btn-block btn-n-mus" id="btn-armonia" data-genero="">Armonía</button>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <?php if(is_page("Música 2")) :?>
    <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
    <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
    <div class="row" id="contenedor-aula-musica">
      <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="div-mod-enc-mus">
        <div class="col-lg-1 col-md-1 col-sm-2 text-center" id="div-logo-bogota">
          <img src="<?php bloginfo('template_url'); ?>/images/logo_bogota.png">
        </div>
        <div class="col-lg-offset-3 col-lg-4 col-md-offset-2 col-md-6 col-sm-8 col-xs-12 text-center">
          <h2 class="tit-enc"><strong>MÚSICA ANDINA</strong></h2>
        </div>
        <div class="col-lg-offset-3 col-lg-1 col-md-offset-1 col-md-1 col-sm-2 text-center" id="div-logo-crea">
          <img src="<?php bloginfo('template_url'); ?>/images/logo_crea.png">
        </div>
      </div>
      <div class="col-lg-offset-4 col-lg-7 col-md-offset-3 col-md-8 col-sm-12 col-xs-12" id="div-info-andina">
        <div class="col-lg-offset-1 col-lg-11 col-md-offset-1 col-md-11 col-sm-12 col-xs-12">
          <h2>La Música Andina</h2>
          <p>Es un término que se aplica a una gama muy vasta de géneros musicales originados en los Andes sudamericanos. Esta área incluye principalmente los andes del Perú y Bolivia; sierras de Ecuador, noroeste de Argentina, norte de Chile y suroeste de Colombia y Venezuela.<br><br>El término se usa a menudo como sinónimo del estilo musical típico del altiplano e interpretado generalmente por aymaras, quechuas y otros pueblos de dicha región, estilo caracterizado por melodías nostálgicas y evocativas interpretadas con flautas de caña y charangos. Pero en sentido estricto la expresión "música andina" englobaría no sólo esta música sino también los restantes estilos y formaciones instrumentales presentes a lo largo y ancho de la geografía andina.</p>
        </div>
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="div-salas">
          <div class="col-lg-offset-3 col-lg-3 col-md-4 col-sm-4 col-xs-12 text-right">
            <a href="#" id="btn-sala-teorica">
              <img src="<?php bloginfo('template_url'); ?>/musica/images/icono_sala_teorica.png">
              <button class="btn btn-block btn-musica-s">Sala Teórica</button>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-right">
            <a href="#" id="btn-sala-interactiva">
              <img src="<?php bloginfo('template_url'); ?>/musica/images/icono_sala_interactiva.png">
              <button class="btn btn-block btn-musica-s">Sala Interactiva</button>
            </a>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12 text-right">
            <a href="#" id="btn-sala-general">
              <img src="<?php bloginfo('template_url'); ?>/musica/images/icono_sala_general.png">
              <button class="btn btn-block btn-musica-s">Sala General</button>
            </a>
          </div>
        </div>
      </div>

      <div class="col-lg-3 col-md-4 col-sm-4 col-xs-12" id="div-btn-mod-mus" style="height: 100%; display: none;">
      </div>

      <div class="col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-7 contenido text-modulo" id="div-sala-teorica" style="height: 100%;">
        <div class="col-lg-12 col-md-12" id="div-pri-sec-teo" style="height: 15%;">
          <h2 style="font-size: 35px;"></h2>
        </div>
        <div class="col-lg-6 col-md-6" id="div-seg-sec-teo" style="height: 55%;">
          <img src="" class="img-responsive">
          <p></p>
        </div>
        <div class="col-lg-6 col-md-6" id="div-ter-sec-teo" style="height: 55%;">
          <div class="col-lg-6 col-md-6">
            <img src="" class="img-responsive">
          </div>
          <div class="col-lg-6 col-md-6 div-audio">
          </div>
          <div class="col-lg-12 col-md-12">
            <p></p>
          </div>
        </div>
        <div class="col-lg-offset-3 col-lg-6 col-md-offset-3 col-md-6" id="div-image-instrumentos">
          <img src="" class="img-responsive">
        </div>
        <div class="col-lg-12 col-md-12" id="div-cua-sec-teo" style="height: 10%;">
        </div>
      </div>

      <div class="col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-7 contenido text-modulo" id="div-sala-interactiva" style="height: 100%;">
        <div class="col-lg-12 col-md-12" id="div-pri-sec-int" style="height: 15%;">
          <h2 style="font-size: 35px;"></h2>
        </div>
        <div id="div-seg-sec-int">
          <p></p>
        </div>
        <div id="div-ter-sec-int">
          <p></p>
        </div>
        <div class="col-lg-12 col-md-12" id="div-cua-sec-int" style="height: 10%;">
        </div>
      </div>
      
      <div class="col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-7 contenido text-modulo" id="div-sala-general" style="height: 100%;">
        <div class="col-lg-9 col-md-8" style="height: 80%;">
          <div class="col-lg-12 col-md-12" id="div-pri-sec-gen" style="height: 40%;">
            <h2 style="font-size: 35px;"></h2>
            <p></p>
            <img src="" class="img-responsive">
          </div>
          <div class="col-lg-12 col-md-12" id="div-seg-sec-gen" style="height: 40%;">
            <h2 style="font-size: 35px;"></h2>
            <p></p>
            <img src="" class="img-responsive">
          </div>
          <div class="col-lg-12 col-md-12" id="div-ter-sec-gen" style="height: 10%;">
            <div class="col-lg-4 col-md-4 text-center" id="div-pri-btn-sec-gen" style="height: 100%;">
            </div>
            <div class="col-lg-4 col-md-4 text-center" id="div-seg-btn-sec-gen" style="height: 100%;">
              <a class="col-lg-6 col-md-6" href="#" id="ref-atr-pag"></a>
              <a class="col-lg-6 col-md-6" href="#" id="ref-ade-pag"></a>
            </div>
            <div class="col-lg-4 col-md-4 text-center" id="div-ter-btn-sec-gen" style="height: 100%;">
            </div>
          </div>
          <div class="col-lg-12 col-md-12" id="div-cua-sec-gen" style="height: 10%; ">
            <div class="col-lg-4 col-md-4 text-center" id="div-cua-btn-sec-gen" style="height: 100%;">
            </div>
            <div class="col-lg-4 col-md-4 text-center" id="div-qui-btn-sec-gen" style="height: 100%;">
            </div>
            <div class="col-lg-4 col-md-4 text-center" id="div-sex-btn-sec-gen" style="height: 100%;">
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4" id="div-bar-gen" style="height: 65%; margin-top: 20%;">
        </div>
      </div>

      <div class="col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-7 contenido" id="div-instrumentos" style="height: 100%;">
        <div class="col-lg-12 col-md-12" id="div-tit-instrumentos" style="height: 15%;">
          <h2 style="font-size: 35px; height: 80%"></h2>
        </div>
        <div class="col-lg-12 col-md-12" id="div-botones-instrumentos" style="height: 5%;">
        </div>
        <div class="col-lg-12 col-md-12" id="div-img-instrumentos" style="height: 55%;">
          <div class="col-lg-4 col-md-4" id="div-img-1">
            <img src="">
          </div>
          <div class="col-lg-4 col-md-4" id="div-img-2">
            <img src="">
          </div>
          <div class="col-lg-4 col-md-4" id="div-img-3">
            <img src="">
          </div>
          <div class="col-lg-6 col-md-6" id="div-img-4">
            <img src="">
          </div>
          <div class="col-lg-6 col-md-6" id="div-img-5">
            <img src="">
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <?php if(is_page("Introducción aula artes plásticas")) :?>
    <input type="hidden" id="url" value="<?php bloginfo('url'); ?>">
    <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
    <div class="row" id="contenedor-index-artes-plasticas">
      <div class="text-center" id="div-img-viaje">
        <a href="#">
          <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/index/titulo.png" id="img-viaje">
        </a>
      </div>
      <div class="col-lg-offset-3 col-lg-6 col-md-offset-1 col-md-10" id="btns-intro-aap">
        <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 text-center">
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
      </div>
      <div id="div-info-detallada-aap" style="display: none;">
        <div class="col-lg-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="index">
          </a>
        </div>
        <div class="col-lg-offset-1 col-lg-10" style="height: 80%">
          <p></p>
        </div>
      </div>
      <div class="col-lg-12 text-center" id="div-mapa-mundi" style="display: none;">
        <div class="col-lg-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="index">
          </a>
        </div>
        <div id="div-colombia">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/mapa_colombia.png" id="img-colombia">
          </a>
        </div>
        <div id="div-pergamino">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/pergamino.png" id="img-pergamino">
          </a>
        </div>
      </div>
      <div class="col-lg-12 text-center" id="div-modulos-aap" style="display: none;">
        <div class="col-lg-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="mapa-mundi">
          </a>
        </div>
        <div class="col-lg-offset-3 col-lg-6 col-md-offset-2 col-md-8" id="div-imgs-modulos-app">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/introducción.png" id="img-brujula" data-ejercicio="comic">
          </a>
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/observación.png" id="img-lupa">
          </a>
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/creacion.png" id="img-compas">
          </a>
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/galeria_1.png" id="img-telescopio">
          </a>
        </div>
      </div>
      <div class="col-lg-12 col-md-12" id="div-sub-modulos" style="display: none;">
        <div class="col-lg-12 col-md-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="modulos">
          </a>
        </div>
        <div class="col-lg-offset-4 col-lg-4 col-md-offset-2 col-md-8" style="margin-top: 17%">
          <div class="col-lg-3 col-md-3">
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_linea.png" id="img-linea" data-ejercicio="">
            </a>
            <span>Línea</span>
          </div>
          <div class="col-lg-3 col-md-3">
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_gesto.png" id="img-gesto" data-ejercicio="">
            </a>
            <span>Gesto</span>
          </div>
          <div class="col-lg-3 col-md-3">
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_color.png" id="img-color" data-ejercicio="">
            </a>
            <span>Color</span>
          </div>
          <div class="col-lg-3 col-md-3">
            <a href="#">
              <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/submodulos/img_creatividad.png" id="img-creatividad" data-ejercicio="">
            </a>
            <span>Creatividad</span>
          </div>
        </div>
      </div>
      <div class="col-lg-12 col-md-12" id="div-comic" style="display: none;">
        <div class="col-lg-12 col-md-12">
          <a href="#">
            <img src="<?php bloginfo('template_url'); ?>/artes_plasticas/images/introduccion/atras.png" class="img-atras img-responsive" data-atras="">
          </a>
        </div>
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
        <div class="col-lg-11 col-md-11 text-center" style="height: 10%; font-size: 50px;"></div>
        <div class="col-lg-3 col-md-3 text-right" style="height: 90%;">
          <img src="" id="img-pajaro" style="margin-top: 200px;">
        </div>
        <div class="col-lg-9 col-md-9" id="div-info-ejercicio" style="height: 70%; font-size: 23px; overflow-y: scroll;">
        </div>
        <div class="col-lg-9 col-md-9" style="height: 15%; font-size: 23px; padding-top: 20px;">
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
            <span>Sube tu dibujo al foro</span></div>
          </div>
        </div>
      </div>
    </div>
  <?php endif; ?>

  <?php the_content(); ?>
<?php endwhile; endif; ?>
<?php get_footer(); ?>