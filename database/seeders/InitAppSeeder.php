<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class InitAppSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $permissions = [];
        foreach (Storage::json('data/permissions.json') as $permission) {
            $permissions[] = \Spatie\Permission\Models\Permission::create([
                ...$permission,
                'default' => true,
            ]);
        }

        \Spatie\Permission\Models\Role::create([
            'name' => 'admin',
            'description' => "Le rôle d'Admin offre un contrôle total sur l'application, y compris la gestion des utilisateurs, des permissions et des paramètres globaux. Les administrateurs ont l'autorité de superviser et de maintenir le système."
        ])->givePermissionTo(collect($permissions));

        DB::table('natures')->insert(Storage::json('data/project_natures.json'));
        DB::table('domains')->insert(Storage::json('data/project_domains.json'));
        DB::table('universities')->insert(Storage::json('data/universities.json'));
        DB::table('diplomas')->insert(Storage::json('data/diplomas.json'));
        DB::table('division_grades')->insert(Storage::json('data/division_grades.json'));

        foreach (Storage::json('data/units.json') as $unit) {
            \App\Models\Unit::query()->create($unit);
        }

        foreach (Storage::json('data/divisions.json') as $division) {
            \App\Models\Division::query()->create($division);
        }

        foreach (Storage::json('data/users.json') as $user) {
            \App\Models\User::query()->create($user);
        }

        foreach (Storage::json('data/resources.json') as $resource) {
            \App\Models\ExistingResource::query()->create([
                ...$resource,
                "state" => true
            ]);
        }
    }
}
