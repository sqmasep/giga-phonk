<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Chanson;
use \App\Models\Playlist;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        

        $chanson1 = Chanson::create ([
             'name' => 'Bangarang',
             'fileUrl' => 'upload/music/kordhell_1.mp3',
            'coverUrl' => 'upload/cover/cover_1.png',
             'artist' => 'Skrillex'
         ]);

         $chanson2 = Chanson::create ([
            'name' => 'Les Sardines',
            'fileUrl' => 'upload/music/kordhell_1.mp3',
            'coverUrl' => 'upload/cover/cover_1.png',
            'artist' => 'Patricke Sebastien'
        ]);

        $chanson3 = Chanson::create ([
            'name' => 'Quand il pète il troue son slip',
            'fileUrl' => 'upload/music/kordhell_1.mp3',
            'coverUrl' => 'upload/cover/cover_1.png',
            'artist' => 'Sébastien Patrick'
        ]);

        $chanson4 = Chanson::create ([
            'name' => 'Can we get more Machine Gun Psypsystyle',
            'fileUrl' => 'upload/music/kordhell_1.mp3',
            'coverUrl' => 'upload/cover/cover_1.png',
            'artist' => 'Camellia'
        ]);

        $chanson5 = Chanson::create ([
            'name' => 'Racemization',
            'fileUrl' => 'upload/music/kordhell_1.mp3',
            'coverUrl' => 'upload/cover/cover_1.png',
            'artist' => 'Camellia'
        ]);


         $playlist1 = Playlist::create([
            'name' => 'Top 5 of the week',
            'official' => true,
         ]);


         $playlist2 = Playlist::create([
            'name' => 'La Déconne',
            'official' => true,
         ]);

         $chanson1->playlists()->attach([$playlist1->id]);
         $chanson2->playlists()->attach([$playlist2->id]);
         $chanson3->playlists()->attach([$playlist2->id]);
         $chanson4->playlists()->attach([$playlist1->id]);
         $chanson5->playlists()->attach([$playlist1->id]);
         

    }
}
