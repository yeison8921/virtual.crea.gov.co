<?php
/**
 * Configuración básica de WordPress.
 *
 * Este archivo contiene las siguientes configuraciones: ajustes de MySQL, prefijo de tablas,
 * claves secretas, idioma de WordPress y ABSPATH. Para obtener más información,
 * visita la página del Codex{@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} . Los ajustes de MySQL te los proporcionará tu proveedor de alojamiento web.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** Ajustes de MySQL. Solicita estos datos a tu proveedor de alojamiento web. ** //
/** El nombre de tu base de datos de WordPress */
define('DB_NAME', 'virtualc_av');

/** Tu nombre de usuario de MySQL */
define('DB_USER', 'root');

/** Tu contraseña de MySQL */
define('DB_PASSWORD', '');

/** Host de MySQL (es muy probable que no necesites cambiarlo) */
define('DB_HOST', 'localhost');

/** Codificación de caracteres para la base de datos. */
define('DB_CHARSET', 'utf8mb4');

/** Cotejamiento de la base de datos. No lo modifiques si tienes dudas. */
define('DB_COLLATE', '');

/**#@+
 * Claves únicas de autentificación.
 *
 * Define cada clave secreta con una frase aleatoria distinta.
 * Puedes generarlas usando el {@link https://api.wordpress.org/secret-key/1.1/salt/ servicio de claves secretas de WordPress}
 * Puedes cambiar las claves en cualquier momento para invalidar todas las cookies existentes. Esto forzará a todos los usuarios a volver a hacer login.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '7kJ[Ctmva6~T;[94H<g?cX<U3xl8T#9+rrOnoRx`/XDD$vKKz>qy{is? K*]z7QU');
define('SECURE_AUTH_KEY', 'Tz&T~r-1;*|_N3<Vn{[G;)[_(gAP^yI(fMi]ZHzJy)*lVnl1}_C|*1HZKzc1`jCu');
define('LOGGED_IN_KEY', 'x nM{2%O<416=}*axO^+g27t5vM2Wbxtl!t~Y2eH^jP0y{W;+SCOQ};7-_`Yg+F]');
define('NONCE_KEY', 'e(]9lSaGm:H7Lv7F3%52EJ]1.[@5$$:|rrHW]C1`+8F[YM`)|EA: ~B>i 2h7rge');
define('AUTH_SALT', 'nHnQ.nS9eh.5J1&h$U4>c%oH5lWgRmk+!ovI2`hG~x+yzLD^IipnCa?_*GqkVxW ');
define('SECURE_AUTH_SALT', 'vs5hjvL2/6i(v^(76zun 9-&iCr*)7kRc](N0-Y$s+E*Q<2AeJSsMdz{T%V98p/n');
define('LOGGED_IN_SALT', 'dy=r0Ka,>#QwTkqrFRD./^]<wnUOkTZP!C_[Qx^g;8I_K2#]LONd1_gt`,cFM NT');
define('NONCE_SALT', '=@mcT{6mC$lXDjl?N7R2`=L8vExYA@s]HWp*|+v!uDF|]DXd#`|v-EDEKdSn6#Q5');

/**#@-*/

/**
 * Prefijo de la base de datos de WordPress.
 *
 * Cambia el prefijo si deseas instalar multiples blogs en una sola base de datos.
 * Emplea solo números, letras y guión bajo.
 */
$table_prefix  = 'av_';


/**
 * Para desarrolladores: modo debug de WordPress.
 *
 * Cambia esto a true para activar la muestra de avisos durante el desarrollo.
 * Se recomienda encarecidamente a los desarrolladores de temas y plugins que usen WP_DEBUG
 * en sus entornos de desarrollo.
 */
define('WP_DEBUG', false);
define('FS_METHOD','direct');
/* ¡Eso es todo, deja de editar! Feliz blogging */



/** WordPress absolute path to the Wordpress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
