var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Less
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.less('app.less');

	mix.scripts([
		'../assets/bower/jquery/dist/jquery.min.js',
		'../assets/bower/jquery-validation/dist/jquery.validate.min.js',
		'../assets/bower/bootstrap/dist/js/bootstrap.min.js',
		'../assets/chat.js'
	], 'public/js/app.js');
});
