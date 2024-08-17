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
        Schema::create('project_natures', function (Blueprint $table) {
            $table->id();
            $table->string('nature');
            $table->timestamp('created_at')->useCurrent();
        });

        Schema::create('project_domains', function (Blueprint $table) {
            $table->id();
            $table->string('domain');
            $table->timestamp('created_at')->useCurrent();
        });

        Schema::create('universities', function (Blueprint $table) {
            $table->id();
            $table->string('university');
            $table->timestamp('created_at')->useCurrent();
        });

        Schema::create('diplomas', function (Blueprint $table) {
            $table->id();
            $table->string('diploma');
            $table->timestamp('created_at')->useCurrent();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('project_nature');
        Schema::dropIfExists('project_domains');
        Schema::dropIfExists('universities');
        Schema::dropIfExists('diplomas');
    }
};
