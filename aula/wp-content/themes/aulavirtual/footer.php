<!--Inicio footer-->
<div class="row footer">
	<div class="col-lg-offset-5 col-lg-7 col-md-offset-1">
		<div class="col-lg-3 col-md-3 col-sm-4">
			<h3 class="title"><strong>Áreas artísticas</strong></h3>
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
		<div class="col-lg-4 col-md-4 col-sm-5">
			<h3 class="title"><strong>Contáctanos</strong></h3>
				Dirección: Carrera 8 # 15 - 46<br>
				Teléfono: (571) - 3795750<br>
				Email: <a href="mailto:#">contactenos@idartes.gov.co</a>
		</div>
	</div>
	<div class="row col-lg-12 col-md-12 col-sm-12 col-xs-12 text-right">
		<img src="<?php bloginfo('template_url'); ?>/images/logo-alcaldia-header.png">
	</div>
</div>
<!--Fin footer-->
<?php wp_footer(); ?>
</body>
</html>
