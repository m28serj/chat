<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

Route::get('/', 'ChatController@index');

Route::get('messages', 'MessagesController@index');
Route::post('messages/store', 'MessagesController@store');


Route::post('auth/login', 'AuthController@login');
Route::get('auth/logout', 'AuthController@logout');
