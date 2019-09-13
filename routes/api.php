<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// AUTHENTICATION ROUTES
Route::group([ 'prefix' => 'auth'], function() {
    Route::post('login','AuthController@login');
    Route::post('register','AuthController@register');

    Route::group([ 'middleware' => 'auth:api' ], function()
    {
        Route::post('logout', 'AuthController@logout');
    });
});

// USER ROUTES
Route::group([ 'middleware' => 'auth:api', 'prefix' => 'user'], function() {
    Route::get('information', 'UserController@user');
});

// POST ROUTES
Route::resource('post', 'PostController')->middleware('auth:api');
