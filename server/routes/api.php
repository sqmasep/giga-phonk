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

///////// SONGS ////////////

//GET ALL SONGS
Route::get('/songs', function(){
    return App\Models\Chanson::all();
});


//GET SONG BY ID
Route::get('/songs/{id}', function($id){
    return App\Models\Chanson::find($id);
});

//GET PLAYLISTS WHERE THE SONG IS FEATURED
Route::get('/songs/{id}/playlists', function($id){
    $song = App\Models\Chanson::findOrFail($id);
    return $song->playlists;
});

//GET SONG BY ARTIST 
Route::get('songs/artist/{name}', function($name){
    return App\Models\Chanson::where('artist', $name)->get();
});

//DELETE SONG
Route::delete('/songs/{id}', function($id){
    $song = App\Models\Chanson::find($id);

    if ($chanson == false){
        return response("", 204);
    }

    $song->delete();
    return response("", 202);
});


//ADD SONG
Route::post('/songs', function(Request $request){
    $song = App\Models\Chanson::create([
        "name" => $request->input('name'),
        "file" => $request->input('file'),
        "cover" => $request->input('cover'),
        "artist" => $request->input('artist'),
    ]);

    return response($song, 201);
});
////////////////////////////////



////////USERS/////////

//GET ALL USERS 
Route::get('/users', function(){
    return App\Models\User::all();
});

//GET USER BY ID
Route::get('/users/{id}', function($id){

    $user = App\Models\User::find($id);

    if($user == false){
        return response("", 204);
    }

    return $user;
});

//DELETE USER
Route::delete('/users/{id}', function($id){
    $user = App\Models\User::find($id);

    if($user == false){
        return response("", 204);
    }

    $user->delete();
    return response("", 202);
});

//CREATE USER
Route::post('/users', function(Request $request){
    $user = App\Models\User::create([
        "name" => $request->input('name'), 
        "email" => $request->input('email'),
        "password" => $request->input('password')
    ]);

    return response($user, 201);
});

///////////////////////////



/////////PLAYLISTS/////////


//GET ALL PLAYLISTS
Route::get('/playlists', function(){
    return App\Models\Playlist::all();
});


//GET SPECIFIC PLAYLIST
Route::get('/playlists/{id}', function(){
    return App\Models\Playlist::find($id);
});


//GET SONGS THAT ARE IN A SPECIFIC PLAYLIST
Route::get('playlists/{id}/songs', function($id){
 $playlist= App\Models\Playlist::findOrFail($id);
 return $playlist->chansons;
});

//CREATE A PLAYLIST 
Route::post('playlists', function(Request $request){
    $playlist = App\Models\Playlist::create([
        'name' => $request->input('name'),
        'playlistCover' => $request->input('playlistCover'),
        'official' => $request->input('official'),
    ]);
});

//LINK A SONG TO A PLAYLIST
Route::get('link/{song_id}/{playlist_id}', function($song_id, $playlist_id){
    $playlist = App\Models\Playlist::findOrFail($playlist_id);
    $song = App\Models\Chanson::findOrFail($song_id);
    $song->playlists()->attach([$playlist->id]);
});


//UNLINK A SONG AND A PLAYLIST
Route::get('unlink/{song_id}/{playlist_id}', function($song_id, $playlist_id){
    $playlist = App\Models\Playlist::findOrFail($playlist_id);
    $song = App\Models\Chanson::findOrFail($song_id);
    $song->playlists()->detach([$playlist->id]);
})




//////////////////////////

?>

