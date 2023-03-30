<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Playlist extends Model
{
    use HasFactory;

    public function chansons()
    {
        return $this->belongsToMany(Chanson::class);
    }

    protected $fillable = [
        'name',
        'official',
        'playlistCover',
    ];

    protected $table = 'playlist';
}
?>