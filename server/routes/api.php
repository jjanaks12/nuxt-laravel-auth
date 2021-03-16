<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Hash;

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

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/user-create', function(Request $request) {
    App\Models\User::create([
        "name" => 'Janak Shrestha',
        "email" => 'jjanaks12@gmail.com',
        "password" => Hash::make('password')
    ]);
});

Route::group(['middleware' => 'api'], function ($router) {
    Route::post('login', [\App\Http\Controllers\AuthController::class, 'login'])->name('login');
    Route::post('logout', [\App\Http\Controllers\AuthController::class, 'logout'])->name('logout');
    Route::get('auth-user', [\App\Http\Controllers\AuthController::class, 'authUser'])->name('me');
});