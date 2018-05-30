<?php get_header(); ?>
<!--Inicio Contenido -->
<div class="container">
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
</div>

<!--Inicio del modal-->
  <div class="modal fade" id="modalNivel" role="dialog">
    <div class="modal-dialog">
      <!-- Modal content-->
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
<!-- Fin del modal-->
</div>
    <!--fin contenido -->




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
<?php get_footer(); ?>
