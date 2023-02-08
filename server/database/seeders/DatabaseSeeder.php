<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use \App\Models\Chanson;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        

        Chanson::create ([
             'name' => 'titre',
             'file' => 'test@example.com',
             'cover' => 'test@example.com',
             'genre' => 'test@example.com'
         ]);
    }
}
