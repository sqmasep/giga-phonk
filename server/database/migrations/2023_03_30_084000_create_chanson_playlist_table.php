<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chanson_playlist', function (Blueprint $table) {
            $table->id();

            $table->foreignId('chanson_id')->references('id')->on('chanson')
            ->onDelete('cascade');  

            $table->foreignId('playlist_id')->references('id')->on('playlist')
            ->onDelete('cascade');  
        
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chanson_playlist');
    }
};
