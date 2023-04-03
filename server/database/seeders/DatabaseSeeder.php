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
             'name' => 'SUBWAY SURFERS',
             'fileUrl' => 'upload/music/rxdxvil_2.mp3',
             'coverUrl' => 'upload/cover/cover_10.jpg',
             'artist' => 'RXDXVIL'
         ]);

         $chanson2 = Chanson::create ([
            'name' => 'ANGRY BIRDS',
            'fileUrl' => 'upload/music/rxdxvil_1.mp3',
            'coverUrl' => 'upload/cover/cover_9.jpg',
            'artist' => 'RXDXVIL'
        ]);

        $chanson3 = Chanson::create ([
            'name' => 'RAPTURE',
            'fileUrl' => 'upload/music/interworld_1.mp3',
            'coverUrl' => 'upload/cover/cover_2.jpg',
            'artist' => 'INTERWORLD'
        ]);

        $chanson4 = Chanson::create ([
            'name' => 'METAMORPHOSIS',
            'fileUrl' => 'upload/music/interworld_2.mp3',
            'coverUrl' => 'upload/cover/cover_3.jpg',
            'artist' => 'INTERWORLD'
        ]);

        $chanson5 = Chanson::create ([
            'name' => 'PSYCHO CRUISE',
            'fileUrl' => 'upload/music/onimxru_2.mp3',
            'coverUrl' => 'upload/cover/cover_6.jpg',
            'artist' => 'ONIMXRU'
        ]);

        $chanson6 = Chanson::create ([
            'name' => 'SHADOW',
            'fileUrl' => 'upload/music/onimxru_1.mp3',
            'coverUrl' => 'upload/cover/cover_7.jpg',
            'artist' => 'ONIMXRU'
        ]);

        $chanson7 = Chanson::create ([
            'name' => 'NECRONOMICON',
            'fileUrl' => 'upload/music/shadxbxrn_1.mp3',
            'coverUrl' => 'upload/cover/cover_8.jpg',
            'artist' => 'SHADXBXRN'
        ]);

        $chanson8 = Chanson::create ([
            'name' => "CAN'T STOP",
            'fileUrl' => 'upload/music/shadxbxrn_1.mp3',
            'coverUrl' => 'upload/cover/cover_4.jpg',
            'artist' => 'SHADXBXRN'
        ]);


        $chanson9 = Chanson::create ([
            'name' => 'MURDER IN MY MIND',
            'fileUrl' => 'upload/music/kordhell_1.mp3',
            'coverUrl' => 'upload/cover/cover_5.jpg',
            'artist' => 'KHORDELL'
        ]);

        $chanson10 = Chanson::create ([
            'name' => 'KILLERS FROM THE NORTHSIDE',
            'fileUrl' => 'upload/music/kordhell_2.mp3',
            'coverUrl' => 'upload/cover/cover_1.png',
            'artist' => 'KHORDELL'
        ]);


         $playlist1 = Playlist::create([
            'name' => 'Discover: KORDHELL',
            'official' => true,
         ]);


         $playlist2 = Playlist::create([
            'name' => 'Discover: SHADXBXRN',
            'official' => true,
         ]);

         $playlist3 = Playlist::create([
            'name' => 'Discover: ONIMXRU',
            'official' => true,
         ]);

         $playlist4 = Playlist::create([
            'name' => 'Discover: INTERWORLD',
            'official' => true,
         ]);

         $playlist5 = Playlist::create([
            'name' => 'Discover: RXDXVIL',
            'official' => true,
         ]);

         $chanson1->playlists()->attach([$playlist5->id]);
         $chanson2->playlists()->attach([$playlist5->id]);
         $chanson3->playlists()->attach([$playlist4->id]);
         $chanson4->playlists()->attach([$playlist4->id]);
         $chanson5->playlists()->attach([$playlist3->id]);
         $chanson6->playlists()->attach([$playlist3->id]);
         $chanson7->playlists()->attach([$playlist2->id]);
         $chanson8->playlists()->attach([$playlist2->id]);
         $chanson9->playlists()->attach([$playlist1->id]);
         $chanson10->playlists()->attach([$playlist1->id]);
         
         

    }
}
