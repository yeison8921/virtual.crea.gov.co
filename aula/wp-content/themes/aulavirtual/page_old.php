  <?php get_header(); ?>
  <!--Inicio Contenido -->
  <div class="container-fluid">
    <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <!-- <h2><?php the_title(); ?></h2>-->
      <?php if(is_page("Artes electrónicas")) :?>
        <form id="uploadAudio" action="" method="post" enctype="multipart/form-data">
          <input type="hidden" name="id" id="id" value="<?php echo get_current_user_id(); ?>">
          <div class="form-group">
            <label for="">Título</label>
            <input class="form-control" type="text" id="titulo" name="titulo" placeholder="Título del audio">
            <span class="help-block" id="error"></span>
          </div>
          <div class="form-group">
            <label for="">Descripción</label>
            <textarea class="form-control" id="descripcion" name="descripcion" cols="40" rows="5" placeholder="Escriba una descripción"></textarea>
            <span class="help-block" id="error"></span>
            <input class="form-control" type="hidden" name="lat" id="lat">
            <input class="form-control" type="hidden" name="lng" id="lng">
          </div>
          <div id="info" class="row bg-warning" style="text-align: center; display: none;">
          </div>
          <br>
          <div class="form-group">
            <div id="map">
            </div>
          </div>
          <div class="form-group">
            <label for="">Subir audio</label>
            <input type="file" id="audioFile" name="audioFile">
            <span class="help-block" id="error"></span>
          </div>
          <div class="form-group">
            <div class="col-sm-6 col-sm-offset-3">
              <button type="submit" id="guardar" class="form-control btn btn-primary">Guardar</button>
            </div>
          </div>
        </form>
      <?php endif; ?>
      <?php if(is_page("Consulta mapa artes electrónicas")) :?>
        <div class="container">
          <div id="map">
          </div>
        </div>
      <?php endif; ?>
      <?php if(is_page("Introducción aula música")) :?>
       <input type="hidden" id="blog-info" value="<?php bloginfo('url'); ?>">
       <input type="hidden" id="bloginfo" value="<?php bloginfo('template_url'); ?>">
       <div class="row" id="div-cim">
        <div class="text-center" id="header-musica">Aula de música</div>
        <div class="row" id="navegacion-musica">
          <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2">
            <button class="btn btn-block btn-n-mus"><i class="fas fa-long-arrow-alt-left"></i>&nbsp;&nbsp;Atrás</button>
          </div>
          <div class="col-lg-offset-6 col-lg- col-md-offset-6 col-md-2">
            <button class="btn btn-block btn-n-mus">Iniciar&nbsp;&nbsp;<i class="fas fa-long-arrow-alt-right"></i></button>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-offset-1 col-lg-4 col-md-offset-1 col-md-4 text-right">
            <div>
              <p class="titulo-musica">
                <span class="span-titulo">SALONES</span>
                <span class="span-titulo">INTERACTIVOS</span>
                <span class="span-titulo">DE MÚSICA</span>
              </p>
            </div>
            <div>
              <button class="btn btn-block btn-n-mus" id="btn-introduccion">Introducción</button>
              <button class="btn btn-block btn-n-mus" id="btn-objetivos">Objetivos</button>
              <button class="btn btn-block btn-n-mus" id="btn-metodologia">Metodología</button>
              <button class="btn btn-block btn-n-mus" id="btn-publico">Nuestro público</button>
              <button class="btn btn-block btn-n-mus" id="btn-creditos">Créditos</button>
            </div>
          </div>
          <div class="col-lg-offset-1 col-lg-5 col-md-offset-1 col-md-5" id="contenedor-info-basica-musica">
          <div id="mini-contenedor-info-basica-musica">
            <div id="titulo-info-basica-musica" style="font-size: 40px;"></div>
            <div id="contenido-info-basica-musica" style="font-size: 20px;"></div>
          </div>
        </div>
      </div>
    </div>
        <!--
        <div class="row" id="contenedor-index-musica">
          <div class="col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4 col-xs-offset-2 col-xs-8" id="div-botones-inicio">
            <button class="btn btn-block btn-musica-s" id="btn-salones">SALONES INTERACTIVOS DE MÚSICA</button>
            <button class="btn btn-block btn-musica-s" id="btn-iniciar" style="display: none;">INICIAR</button>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="div-info-aula-musica" style="display: none;">
            <div class="col-lg-offset-1 col-lg-2 col-md-offset-1 col-md-2 col-sm-offset-2 col-sm-4 col-xs-offset-2 col-xs-4">
              <button class="btn btn-block btn-musica-s" id="btn-introduccion">Introducción</button>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
              <button class="btn btn-block btn-musica-s" id="btn-objetivos">Objetivos</button>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
              <button class="btn btn-block btn-musica-s" id="btn-metodologia">Metodología</button>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
              <button class="btn btn-block btn-musica-s" id="btn-publico">Público objetivo</button>
            </div>
            <div class="col-lg-2 col-md-2 col-sm-4 col-xs-4">
              <button class="btn btn-block btn-musica-s" id="btn-creditos">Créditos</button>
            </div>
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="div-mod-enc-mus" style="display: none;">
            <div class="col-lg-1 col-md-1 col-sm-2">
              <img src="<?php bloginfo('template_url'); ?>/images/logo_bogota.png" id="div-logo-bogota">
            </div>
            <div class="col-lg-offset-3 col-lg-4 col-md-offset-2 col-md-6 col-sm-8 col-xs-12 ">
              <h2 class="tit-enc"><strong>MÚSICA</strong></h2>
            </div>
            <div class="col-lg-offset-3 col-lg-1 col-md-offset-1 col-md-1 col-sm-2" id="div-logo-crea">
              <img src="<?php bloginfo('template_url'); ?>/images/logo_crea.png">
            </div>            
          </div>
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12" id="div-info-detallada-musica" style="display: none;">
            <div class="col-lg-offset-6 col-lg-5 col-md-offset-6 col-md-5 col-sm-offset-1 col-sm-10 col-xs-offset-1 col-xs-10">
              <div id="con-idm">
                <h2><strong></strong></h2>
                <p></p>
              </div>
              <div class="col-lg-4 col-md-4">
                <button class="btn btn-block btn-musica-s">Regresar</button>
              </div>
            </div>
          </div>
          <div class="row col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4" id="div-sel-modulo-musica" style="display: none;">
            <div class="div-dropdown-modulo">
              <div class="dropdown">
                <button class="btn btn-block btn-musica-d dropdown-toggle" type="button" data-toggle="dropdown">SELECCIONA UN MÓDULO <i class="fas fa-caret-down"></i> --><!-- </button>
                <ul class="dropdown-menu btn-block">
                  <li><button class="btn btn-block btn-musica-d">Andina</button></li>
                  <li><button class="btn btn-block btn-musica-d">Llanero</button></li>
                  <li><button class="btn btn-block btn-musica-d">Pacífico</button></li>
                  <li><button class="btn btn-block btn-musica-d">Atlántico</button></li>
                  <li><button class="btn btn-block btn-musica-d">Carranga</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div> -->
      <?php endif; ?>
      <?php if(is_page("Música")) :?>
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

      <?php if(is_page("Introducción aula audiovisuales")) :?>
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

            <!-- Modal content-->
            <div class="modal-content">
              <div class="modal-header" style="background-color: #24273a; border-bottom: 0px solid">
                <button type="button" class="close" data-dismiss="modal" style="color:white;">&times;</button>
                <div></div>
              </div>
              <div class="modal-body text-center" style="background-color: #24273a;">
              </div>
              <div class="modal-footer" style="background-color: #24273a; border-top: 0px solid">
                <div class="col-lg-offset-2 col-lg-8">
                </div>
              </div>
            </div>
          </div>
        </div>
      <?php endif; ?>


      <?php if(is_page("Audiovisuales")) :?>
      <?php endif; ?>
      <?php if(is_page("Creación literaria")) :?>
        <div class="row">
          <iframe src="<?php bloginfo('url'); ?>/wp-content/uploads/scorm/sitio_literatura/index.html" frameborder="0" width="1024" height="768"></iframe>
        </div>
      <?php endif; ?>
      <?php if(is_page("Introducción aula danza")) :?>
        <div class="row" id="contenedor-index-danza">
          <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
          <div class="col-lg-offset-5 col-lg-2 col-md-offset-4 col-md-4 col-sm-offset-4 col-sm-4 col-xs-offset-2 col-xs-8" id="div-inicio-curso-danza">
            <button class="btn btn-block btn-index-danza-pri" id="btn_cuerpo_movimiento">CUERPO EN MOVIENTO</button>
          </div>
          <div id="div-encabezado-info-aula-danza" class="row col-lg-offset-5 col-lg-2 col-md-offset-4 col-md-4" style="display: none;">
            <h2 style="color: white;"><center>CUERPO EN MOVIMIENTO</center></h2>
            <button class="btn btn-block btn-index-danza-pri" id="btn_iniciar_curso">INICIAR CURSO</button>
          </div>
          <div class="row"></div>        
          <div id="div-info-aula-danza" class="row" style="display: none;">
            <div class="col-lg-offset-1 col-lg-2 col-md-1-5">
              <button class="btn btn-block btn-index-danza-sec" id="btn_introduccion_danza">Introducción</button>
            </div>
            <div class="col-lg-2 col-md-1-5">
              <button class="btn btn-block btn-index-danza-sec" id="btn_objetivos_danza">Objetivos</button>
            </div>
            <div class="col-lg-2 col-md-1-5">
              <button class="btn btn-block btn-index-danza-sec" id="btn_metodologia_danza">Metodología</button>
            </div>
            <div class="col-lg-2 col-md-1-5">
              <button class="btn btn-block btn-index-danza-sec" id="btn_publico_objetivo_danza">Público Objetivo</button>
            </div>
            <div class="col-lg-2 col-md-1-5">
              <button class="btn btn-block btn-index-danza-sec" id="btn_creditos_danza">Créditos</button>
            </div>
          </div>
          <!-- Inicio div info detallada danza -->
          <div id="div-info-detallada-danza" class="col-lg-offset-5 col-lg-6 col-md-offset-3 col-md-8" style="text-align: left; display: none;">
            <div class="row">
              <h2 style="text-align: right;"><strong></strong></h2>
              <p></p>
            </div>
            <div id="div-btn-inicio-danza" class="row col-lg-offset-4 col-lg-4 col-md-offset-4 col-md-4" style="display: none;">
              <button class="btn btn-block btn-index-danza-sec">INICIO</button>
            </div>
          </div>
          <div class="row col-lg-offset-5 col-lg-2 col-md-offset-4 col-md-4" id="div-sel-modulo-danza" style="display: none;">
            <div class="div-dropdown-modulo">
              <div class="dropdown">
                <button class="btn btn-block btn-index-danza-pri dropdown-toggle" type="button" data-toggle="dropdown">SELECCIONA UN MÓDULO<!-- <i class="fas fa-caret-down"></i> --></button>
                <ul class="dropdown-menu btn-block">
                  <li><button class="btn btn-block btn-index-danza-pri" id="btn-modulo-conexion-danza">Conexión Corporal</button></li>
                  <li><button class="btn btn-block btn-index-danza-pri">Ritmo</button></li>
                  <li><button class="btn btn-block btn-index-danza-pri">Expresión</button></li>
                  <li><button class="btn btn-block btn-index-danza-pri">Espacio</button></li>
                  <li><button class="btn btn-block btn-index-danza-pri">Memoria</button></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      <?php endif; ?>
      <?php if(is_page("Aula danza")) :?>
        <div class="row" id="div-mod-enc">
          <input type="hidden" value="<?php bloginfo('template_url'); ?>" id="bloginfo">
          <div class="col-lg-1 col-md-1 text-center">
            <img src="<?php bloginfo('template_url'); ?>/images/logo_bogota.png">
          </div>
          <div class="col-lg-offset-4 col-lg-2 col-md-offset-4 col-md-2" style="color: #9c474c;">
            <h2 class="tit-enc" style="font-size: 60px;"><strong>DANZA</strong></h2>
          </div>
          <div class="col-lg-offset-4 col-lg-1 col-md-offset-4 col-md-1 text-center">
            <img src="<?php bloginfo('template_url'); ?>/images/logo_crea.png">
          </div>
        </div>
        <div class="row" id="contenedor-aula-danza">
          <div class="div-video" style="overflow: auto;">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-3 text-left">
              <a href="" style="color: #591508;">SELECCIONE UN MÓDULO     <i class='fas fa-caret-left'></i></a>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-11 col-lg-8 text-right">
              <h2>MÓDULO 1 - CUERPO MOVIMIENTO</h2>  
              <!-- <div class="embed-responsive embed-responsive-16by9"> -->
                <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/Ttg8-K0hOnU" frameborder="0" width="480" height="320" allowfullscreen></iframe>
                <!-- </div> -->
              </div>
            </div>
            <div class="div-modulos">
              <div class="col-xs-6 col-sm-offset-2 col-sm-3 col-md-offset-0 col-md-1-5 col-lg-offset-1 col-lg-2">
                <center><img src="<?php bloginfo('template_url'); ?>/danza/images/muneca_reconocimiento.png" class="img-responsive" id="btn-mod-reconocimiento"></center>
                <button class="btn btn-block btn-index-danza-sec">Propiocepción</button>
                <!-- <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_reconocimiento_corporal.png" id="img_mod_reconocimiento" class="img-responsive"></center></a> -->
              </div>
              <div class="col-xs-6 col-sm-offset-2 col-sm-3 col-md-offset-0 col-md-1-5 col-lg-offset-0 col-lg-2">
                <center><img src="<?php bloginfo('template_url'); ?>/danza/images/muneca_movimientos.png" class="img-responsive" id="btn-mod-movimientos"></center>
                <button class="btn btn-block btn-index-danza-sec">Respiración</button>
                <!-- <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_movimientos_universales.png" id="img_mod_movimientos" class="img-responsive"></center></a> -->
              </div>
              <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
                <center><img src="<?php bloginfo('template_url'); ?>/danza/images/muneca_equilibrio.png" class="img-responsive" id="btn-mod-equilibrio"></center>
                <button class="btn btn-block btn-index-danza-sec">Beneficios del movimiento</button>
                <!-- <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_equilibrio_puntos_de_apoyo.png" id="img_mod_equilibrio" class="img-responsive"></center></a> -->
              </div>
              <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
                <center><img src="<?php bloginfo('template_url'); ?>/danza/images/muneca_giros.png" class="img-responsive" id="btn-mod-giros"></center>
                <button class="btn btn-block btn-index-danza-sec">Técnicas alternativas</button>
                <!-- <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_giros_y_saltos.png" id="img_mod_giros" class="img-responsive"></center></a> -->
              </div>
              <div class="col-xs-4 col-sm-4 col-md-1-5 col-lg-2">
                <center><img src="<?php bloginfo('template_url'); ?>/danza/images/muneca_direcciones.png" class="img-responsive" id="btn-mod-direcciones"></center>
                <button class="btn btn-block btn-index-danza-sec">?</button>
                <!-- <a href="#"><center><img src="<?php bloginfo('template_url'); ?>/danza/images/btn_direcciones_y_desplazamientos.png" id="img_mod_direcciones" class="img-responsive"></center></a> -->
              </div>        
            </div>
            <div class="div-con-mod" style="display: none;">
              <div class="div-btn-mod col-lg-3 col-md-4 col-sm-4" style="height: 750px;">
                <div style="margin-top: 60%;">
                  <div class='row'>
                    <div class="col-lg-1 col-md-1 col-sm-1">  
                      <i class="fas fa-2x fa-caret-right flecha" id="flecha-reconocimiento"></i>
                    </div>
                    <div class="col-lg-9 col-md-10 col-sm-10">
                      <button class='btn btn-block btn-unsel' id="btn-reconocimiento">Reconocimiento Corporal</button>
                    </div>
                  </div>
                  <div class='row'>
                    <div class="col-lg-1 col-md-1 col-sm-1">
                      <i class="fas fa-2x fa-caret-right flecha" id="flecha-movimientos"></i>
                    </div>
                    <div class="col-lg-9 col-md-10 col-sm-10">
                      <button class='btn btn-block btn-unsel' id="btn-movimientos">Movimientos Universales</button>
                    </div>
                  </div>
                  <div class='row'>
                    <div class="col-lg-1 col-md-1 col-sm-1">
                     <i class="fas fa-2x fa-caret-right flecha" id="flecha-equilibrio"></i>
                   </div>
                   <div class="col-lg-9 col-md-10 col-sm-10">
                    <button class='btn btn-block btn-unsel' id="btn-equilibrio">Equilibrio Puntos de Apoyo</button>
                  </div>
                </div>
                <div class='row'>
                  <div class="col-lg-1 col-md-1 col-sm-1">
                    <i class="fas fa-2x fa-caret-right flecha" id="flecha-giros"></i>
                  </div>
                  <div class="col-lg-9 col-md-10 col-sm-10">
                    <button class='btn btn-block btn-unsel' id="btn-giros">Giros y Saltos</button>
                  </div>
                </div>
                <div class='row'>
                  <div class="col-lg-1 col-md-1 col-sm-1">
                    <i class="fas fa-2x fa-caret-right flecha" id="flecha-direcciones"></i>
                  </div>
                  <div class="col-lg-9 col-md-10 col-sm-10">
                    <button class='btn btn-block btn-unsel' id="btn-direcciones">Direcciones y Desplazamientos</button>
                  </div>
                </div>
              </div>
            </div>

            <div class="row col-lg-offset-1 col-lg-8 col-md-offset-1 col-md-7 col-sm-offset-1 col-sm-7">
              <div class="div-muneca">
                <img src="" class="img-responsive muneca" style="height: 230px;">
              </div>
              <div id="mod-reconocimiento" style="display: none;">
                <h2 class="tit-rec" style="padding-bottom: 30px;">RECONOCIMIENTO CORPORAL</h2>
                <div class="row">
                  <div class="div-con-rec-uno col-lg-6 col-md-6 col-sm-12">      
                    <button class='btn btn-block btn-sel center-block' id="btn-rompecabezas-rec">Rompezabezas</button>
                  </div>
                  <div class="div-con-rec-dos col-lg-6 col-md-6 col-sm-12">      
                    <button class='btn btn-block btn-sel center-block' id="btn-video-rec">Video</button>
                  </div>
                  <div class="div-act-rom-rec text-center" style="display: none;">
                    <iframe src="https://h5p.org/h5p/embed/303384" width="800" height="600" frameborder="0" allowfullscreen="allowfullscreen"></iframe><!-- <script src="https://h5p.org/sites/all/modules/h5p/library/js/h5p-resizer.js" charset="UTF-8"></script> -->
                  </div>
                  <div class="div-act-vid-rec text-center" style="display: none;">
                    <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/artq-ZfapzY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> -->
                  </div>
                </div>
              </div>

              <div id="mod-movimientos" style="display: none;">
                <h2 class="tit-mov" style="padding-bottom: 40px;">MOVIMIENTOS UNIVERSALES</h2>
                <div class="row">
                  <div class="div-con-mov-mod-uno col-lg-6 col-md-12" style="">
                    <p>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos. Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de símbolos de la cultura y la sociedad. <br><br>En este sentido, la danza también es una forma de comunicación, ya que se usa el lenguaje no verbal entre los seres humanos, donde el bailarín o bailarina expresa sentimientos y emociones a través de sus movimientos y gestos. Se realiza mayormente con música, ya sea una canción, pieza musical o sonidos. <br><br>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos.<br><br>Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de simbolos de la cultura y la sociedad.</p>
                  </div>
                  <div class="div-con-mov-mod-dos col-lg-6 col-md-12" style="">
                    <img src="<?php bloginfo('template_url'); ?>/danza/images/movimientos_cuerpo.png" class="img-responsive" width="480px">
                    <p>La danza y sus diferentes géneros se conectan directamente casi con todos los movimientos los cuales son llamados universales en este módulo, ya que se convierte en las técnicas para expresar por medio del baile la interacción de diversos elementos los cuales son llamados por nombres como Plie Releve, Cambre o Flex.</p>
                    <div class="col-lg-6">
                      <button class="btn btn-block btn-sel">Juega</button>
                    </div>
                    <div class="col-lg-6">
                      <button class="btn btn-block btn-sel" data-toggle="modal" data-target="#modal-video-movimientos">Video</button>
                    </div>
                  </div>
                </div>
              </div>

              <div id="mod-equilibrio" style="display: none;">
                <h2 class="tit-equi" style="padding-bottom: 40px;">EQUILIBRIO PUNTOS DE APOYO</h2>
                <div class="row">
                  <div class="div-con-equi-uno col-lg-6 col-md-12">
                    <p>Los puntos de apoyo o también llamados puntos de equilibrio, son esas partes del cuerpo que están sobre una superficie fija (como el suelo) y a partir de los cuales se puede apoyar el resto del cuerpo ya sea para generar una posición estática como una parada de manos, o una posición que luego se mueva como un giro.</p>
                  </div>
                  <div class="div-con-equi-dos col-lg-offset-1 col-lg-4 col-md-12">
                    <button class='btn btn-block btn-sel'>Juega</button>
                    <button class='btn btn-block btn-sel'>Video</button>
                  </div>
                </div>
              </div>

              <div id="mod-giros" style="display: none;">
                <h2 class="tit-gir" style="padding-bottom: 40px;">GIROS Y SALTOS</h2>
                <div class="row">
                  <div class="div-con-gir-uno col-lg-6 col-md-12">
                    <p>En la danza se manejan diferentes géneros musicales y técnicas las cuales dan un punto de partida para conocer de fondo el modo en que se realizan cada uno de los pasos, saltos o giros. Es de importancia resaltar cómo cada danza tiene complementos importantes tales como el vestuario, maquillaje, puesta en escena y música.<br><br>Dentro de todo lo que une a la danza, la técnica en diferentes pasos como los giros y saltos cambia dependiendo del género que se vaya a trabajar; para girar existen diferentes etapas las cuales el bailarín debe seguir:<br>
                      <ul>
                        <li>Equilibrio estático: El cual se realiza antes de comenzar el giro.</li>
                        <li>Equilibrio dinámico: Se realiza en el momento que ya se está ejecutando el giro y sirve para mantenerse en un punto o seguir un recorrido, entender y manejar estos principios ayuda a prevenir el mareo.</li>
                        <li>Velocidad de giro: El cual depende del ritmo y la energía puesta.</li>
                      </ul><br>Existen varias técnicas para realizar giros los cuales se conectan directamente con la tradición de cada baile, por ejemplo en la danza Sufí se realizan giros los cuales se conectan con Dios y son completamente místicos y su técnica se basa en girar sobre el propio eje muchas veces y a velocidad, este es “...un baile relacionado directamente con el movimiento giratorio de los planetas y la conexión con Dios, los derviches enlazan un giro tras otro en un espectáculo muy popular  hoy en día en El Cairo, que aúna el misticismo y el folclor”. (El confidencial, 2009)<br><br>En el flamenco existen clasificaciones para realizar un giro los cuales manejan una técnica propia, para girar es indispensable saber que la cabeza es el último elemento en llegar al punto de donde se partió; veremos todos los giros los cuales hacen parte de este género. Giros en el punto de apoyo, giros en el eje longitudinal, giros fuera del eje vertical, giros sobre un punto de apoyo, giros sobre el punto de apoyo alterno y giros combinados.<br><br>Otro género en donde los giros son un punto importante son las danzas orientales, la técnica varía dependiendo lo que se quiera proyectar en el escenario. “... juntar las manos mientras se va girando y luego abrirlas con gracia y elegancia para hacer una postura básica y luego sí la ondulación. Para esta última se hace un ocho vertical con la cadera y se repite el giro”. ( La danza de la vida, 2016).<br><br>En conclusión los giros se determinan dependiendo el género musical, aunque todos se unan entre sí y se logre llegar una aproximación para cumplir con las técnicas establecidas desde el ballet.
                    </p>
                  </div>
                  <div class="div-con-gir-dos col-lg-offset-1 col-lg-4 col-md-12"> <!-- style="height: 500px; align-items: center; display: flex;" -->
                    <button class='btn btn-block btn-sel'>Cualidades físicas</button>
                    <button class='btn btn-block btn-sel'>Video</button>
                  </div>
                </div>
              </div>

              <div id="mod-direcciones" style="display: none;">
                <h2 class="tit-dir" style="padding-bottom: 40px;">DIRECCIONES Y DESPLAZAMIENTOS</h2>
                <div class="row">
                  <div class="div-con-dir-mod-uno col-lg-6 col-md-12" style="">
                    <p>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos. Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de símbolos de la cultura y la sociedad. <br><br>En este sentido, la danza también es una forma de comunicación, ya que se usa el lenguaje no verbal entre los seres humanos, donde el bailarín o bailarina expresa sentimientos y emociones a través de sus movimientos y gestos. Se realiza mayormente con música, ya sea una canción, pieza musical o sonidos. <br><br>La danza o el baile es un arte donde se utiliza el movimiento del cuerpo usualmente con música, como una forma de expresión y de interacción social, con fines de entretenimiento, artisticos o religiosos.<br><br>Es el movimiento en el espacio que se realiza con una parte o todo el cuerpo del ejecutante, con cierto compás o ritmo como expresión de sentimientos individuales, o de simbolos de la cultura y la sociedad.</p>
                  </div>
                  <div class="div-con-dir-mod-dos col-lg-6 col-md-12" style="">
                    <img src="<?php bloginfo('template_url'); ?>/danza/images/movimientos_cuerpo.png" class="img-responsive" width="480px">
                    <p>La danza y sus diferentes géneros se conectan directamente casi con todos los movimientos los cuales son llamados universales en este módulo, ya que se convierte en las técnicas para expresar por medio del baile la interacción de diversos elementos los cuales son llamados por nombres como Plie Releve, Cambre o Flex.</p>
                    <div class="col-lg-12">
                      <button class="btn btn-block btn-sel">Video interactivo</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Inicio del modal video movimientos -->
          <div id="modal-video-movimientos" class="modal modal-wide fade">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                  <h4 class="modal-title"></h4>
                </div>
                <div class="modal-body">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/artq-ZfapzY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                </div>
                <div class="modal-footer">
                  <input type="button" class="btn btn-success" data-dismiss="modal" value="Ok"/>
                </div>
              </div>
            </div>
          </div>
          <!--Fin del modal-->
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
        <?php endif; ?>

        <?php the_content(); ?>
      <?php endwhile; endif; ?>

    </div>
    <!--fin contenido -->
    <?php get_footer(); ?>
