<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chanson extends Model
{
    use HasFactory;
    protected $fillable = ['name', 'fileUrl', 'coverUrl', 'artist'];
    
    public function playlists()
    {
        return $this->belongsToMany(Playlist::class);
    }
    
    protected $table = 'chanson';
}

