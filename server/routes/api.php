<?php

use App\Models\Chanson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// SONGS


Route::get('/songs', function(){
    return App\Models\Chanson::all();
});

Route::get('/songs/{id}', function($id){
    return App\Models\Chanson::find($id);
});

Route::delete('/songs/delete/{id}', function($id){
    $song = App\Models\Chanson::find($id);

    if ($chanson == false){
        return response("", 204);
    }

    $song->delete();
    return response("", 202);
});


Route::post('/songs/add/', function(Request $request){
    $song = App\Models\Chanson::create([
        "name" => $request->input('name'),
        "file" => $request->input('file'),
        "cover" => $request->input('cover'),
        "genre" => $request->input('genre')
    ]);

    return response($song, 201);
});

//USERS

Route::get('/users/{id}', function($id){

    $user = App\Models\User::find($id);

    if($user == false){
        return response("", 204);
    }

    return $user;
});

Route::delete('/users/delete/{id}', function($id){
    $user = App\Models\User::find($id);

    if($user == false){
        return response("", 204);
    }

    $user->delete();
    return response("", 202);
});

Route::get('/users/{id}/songs', function($id){
    return Chanson::where('user_id', $id)->get();
});

Route::post('/users/new', function(Request $request){
    $user = App\Models\User::create([
        "name" => $request->input('name'), 
        "email" => $request->input('email'),
        "password" => $request->input('password')
    ]);

    return response($user, 201);
});