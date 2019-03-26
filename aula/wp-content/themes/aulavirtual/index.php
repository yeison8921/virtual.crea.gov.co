<?php get_header(); ?>
<div class="container-fluid">
  <div class="row bg">
    <div class="row col-lg-offset-5 col-md-offset-1 index-titulo">
      <h1 style="text-align: left;">Aula Virtual</h1>
      <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
        <a href="<?php bloginfo('url'); ?>/introduccion-aula-artes-plasticas" ><img src="<?php bloginfo('template_url'); ?>/images/icono_artes_plasticas.png"><br>
        Artes plásticas</a>
      </div>
      <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
        <a href="<?php bloginfo('url'); ?>/arte-dramatico" ><img src="<?php bloginfo('template_url'); ?>/images/icono_arte_dramatico.png"><br>
        Arte dramático</a>
      </div>
      <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
        <a href="<?php bloginfo('url'); ?>/artes-electronicas" ><img src="<?php bloginfo('template_url'); ?>/images/icono_artes_eletronicas.png"><br>
        Artes electrónicas</a>
      </div>
      <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
        <a href="<?php bloginfo('url'); ?>/audiovisuales" ><img src="<?php bloginfo('template_url'); ?>/images/icono_audiovisuales.png"><br>
        Audiovisuales</a>
      </div>
      <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
        <a href="<?php bloginfo('url'); ?>/creacion-literaria" ><img src="<?php bloginfo('template_url'); ?>/images/icono_creacion_literatura.png"><br>
        Creación literaria</a>
      </div>
      <div class="col-lg-1-7 col-md-1-7 col-xs-1-6 col-xs-12 col-sm-1-7">
        <a href="<?php bloginfo('url'); ?>/introduccion-aula-danza" ><img src="<?php bloginfo('template_url'); ?>/images/icono_danza.png"><br>
        Danza</a>
      </div>
      <div class="col-lg-1-7 col-md-1-7 col-xs-1-6-12 col-xs-12 col-sm-1-7">
        <a href="<?php bloginfo('url'); ?>/introduccion-aula-musica" ><img src="<?php bloginfo('template_url'); ?>/images/icono_musica.png"><br>
        Música</a>
      </div>
    </div>
    <?php get_footer(); ?>
  </div>
</div>

<!-- Código para mostrar entradas
<?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
  <div class="col-12 col-sm-6 col-md-4 mb-3">
    <div class="card">
      <a href="<?php the_permalink(); ?>">
        <?php if(has_post_thumbnail()){
          the_post_thumbnail('post-thumbnails', array('class' => 'card-img-top img-responsive'));
        }?>
      </a>
      <div class="card-body">
        <a href="<?php the_permalink(); ?>"><h4 class="card-title"><?php the_title(); ?></h4></a>
        <p class="card-text"><?php the_excerpt(); ?></p>
      </div>
      <div class="card-footer">
        <small class="text-muted"><?php echo get_the_date(); ?> / <?php the_category(', '); ?> / <?php the_author(); ?></small>
      </div>
    </div>
  </div>
<?php endwhile; endif; ?>
Fin código para mostrar entradas -->
<!-- <?php get_footer(); ?> -->
