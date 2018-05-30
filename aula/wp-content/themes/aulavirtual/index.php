<?php get_header(); ?>

<div class="container-fluid bg">
    <div class="row col-lg-offset-5 col-md-offset-1 index-titulo">
    <h1 style="text-align: left;">Aula Virtual</h1>
    <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
      <a href="<?php bloginfo('url'); ?>/artes-plasticas" ><img src="<?php bloginfo('template_url'); ?>/images/icono_artes_plasticas.png"><br>
      Artes<br>plásticas</a>
    </div>
    <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
      <a href="<?php bloginfo('url'); ?>/arte-dramatico" ><img src="<?php bloginfo('template_url'); ?>/images/icono_arte_dramatico.png"><br>
        Arte<br>dramático</a>
    </div>
    <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
      <a href="<?php bloginfo('url'); ?>/artes-electronicas" ><img src="<?php bloginfo('template_url'); ?>/images/icono_artes_eletronicas.png"><br>
        Artes<br>electrónicas</a>
    </div>
    <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
      <a href="<?php bloginfo('url'); ?>/audiovisuales" ><img src="<?php bloginfo('template_url'); ?>/images/icono_audiovisuales.png"><br>
        Audio<br>visuales
    </div>
    <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
      <a href="<?php bloginfo('url'); ?>/creacion-literaria" ><img src="<?php bloginfo('template_url'); ?>/images/icono_creacion_literatura.png"><br>
        Creación<br>literaria</a>
    </div>
    <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
      <a href="<?php bloginfo('url'); ?>/danza" ><img src="<?php bloginfo('template_url'); ?>/images/icono_danza.png"><br>
        Danza</a>
    </div>
    <div class="col-lg-1-7 col-md-1-7 col-xs-1-6-12 col-xs-12 col-sm-1-7">
      <a href="<?php bloginfo('url'); ?>/musica" ><img src="<?php bloginfo('template_url'); ?>/images/icono_musica.png"><br>
        Música</a>
    </div>

  </div>
    <div class="row col-lg-offset-5 col-lg-7 col-md-offset-1 index-menu">
      <div class="col-lg-3 col-md-3 col-sm-4">
        <h3 class="title"><strong>Áreas artisticas</strong></h3>
        <?php wp_nav_menu(array(
        'container' => 'div',
        'items_wrap' => '<ul>%3$s</ul>',
        'theme_location' => 'footer'
        )); ?>
      </div>
      <div class="col-lg-2 col-md-3 col-sm-3">
        <h3 class="title"><strong>Nosotros</strong></h3>
        <?php wp_nav_menu(array(
				'container' => 'div',
				'items_wrap' => '<ul>%3$s</ul>',
				'theme_location' => 'nosotros'
				)); ?>
      </div>
      <div class="col-lg-3 col-md-3 col-sm-5">
        <h3 class="title"><strong>Contáctanos</strong></h3>
        <address>
          <strong>Dirección Carrera 8 # 15 - 46</strong>
          Teléfono: (571) - 3795750<br>
          Email: <a href="mailto:#">contactenos@idartes.gov.co</a>
        </address>
      </div>
    </div>
    <div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 index-logos">
      <img src="<?php bloginfo('template_url'); ?>/images/logo-alcaldia-header.png">
    </div>
</div>

<!--<img src="<?php bloginfo('template_url'); ?>/images/ip.jpg">-->

<!--Inicio Contenido -->
<!--<div class="container">
  <div class="row" align="center">
    <div class="dropdown">
    <button class=" dropdown-toggle" type="button" data-toggle="dropdown">Seleccione una opción
    <span class="caret"></span></button>
    <ul class="dropdown-menu" data-toggle="modal" data-target="#modalNivel" id="dropdown">
      <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/iconoaudiovisuales.png">Audiovisuales</a></li>
      <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/iconodanza.png">Danza</a></li>
      <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/iconoliteratura.png">Literatura</a></li>
      <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/iconomusica.png">M&uacute;sica</a></li>
      <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/iconoteatro.png">Teatro</a></li>
      <li><a href="#"><img src="<?php bloginfo('template_url'); ?>/images/iconoartesplasticas.png">Artes pl&aacute;sticas</a></li>
    </ul>
  </div>

  <div class="col-lg-12 b-index">
    <button type="button" style="width: 300px;" class="btn btn-primary" data-toggle="modal" data-target="" id="btn-aprender">Aprender</button>
  </div>
</div>-->


  <!--<div class="modal fade" id="modalNivel" role="dialog">
    <div class="modal-dialog">

      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Selecciona el nivel</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body" id="nivel">
          <div class="row">
            <div class="col-lg-4 col-md-4 col-sm-4">
              <a style="text-decoration: none" href=""><img src="<?php bloginfo('template_url'); ?>/images/imgprincipiante.png"><p class="p-modal">Principiante</p></a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <a style="text-decoration: none" href=""><img src="<?php bloginfo('template_url'); ?>/images/imgmedio.png"><p class="p-modal">Intermedio</p></a>
            </div>
            <div class="col-lg-4 col-md-4 col-sm-4">
              <a style="text-decoration: none" href=""><img src="<?php bloginfo('template_url'); ?>/images/imgavanzado.png"><p class="p-modal">Avanzado</p></a>
            </div>
          </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
        </div>
      </div>
    </div>
  </div>
</div>
</div>-->





  <!--Código para entradas
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
      <div class="col-12 col-sm-6 col-md-4 mb-3">
        <div class="card">
          <a href="<?php the_permalink(); ?>">
            <?php if ( has_post_thumbnail() ) {
            the_post_thumbnail('post-thumbnails', array('class' => 'card-img-top img-responsive'));
            }?></a>
            <div class="card-body">
              <a href="<?php the_permalink(); ?>"><h4 class="card-title"><?php the_title(); ?></h4></a>
                <p class="card-text"><?php the_excerpt(); ?></p>
            </div>
            <div class="card-footer">
              <small class="text-muted"><?php echo get_the_date(); ?> / <?php the_category(', '); ?> / <?php the_author(); ?></small>
            </div>
        </div>
      </div>
            <?php endwhile; endif; ?>-->
<?php //get_footer(); ?>
