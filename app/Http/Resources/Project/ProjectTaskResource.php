<?php

namespace App\Http\Resources\Project;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProjectTaskResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name' => $this->name,
            'status' => __("status.{$this->status}"),
            '_status' => $this->status,
            'description' => $this->description,
            'timeline' => [
                'from' => $this->date_begin,
                'to' => $this->date_end,
            ],
            'priority' => $this->priority,
            'users' => ProjectMemberResource::collection($this->whenLoaded('users')),
        ];
    }
}
