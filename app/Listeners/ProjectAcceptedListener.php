<?php

namespace App\Listeners;

use App\Models\Project;
use App\Events\Project\ProjectAccepted;
use App\Jobs\Project\ProcessProjectTasksJob;
use App\Notifications\Project\ProjectAcceptedNotification;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueueAfterCommit;
use Illuminate\Support\Facades\Notification;

class ProjectAcceptedListener implements ShouldQueueAfterCommit
{
    use InteractsWithQueue;

    /**
     * Create the event listener.
     */
    public function __construct() {}

    /**
     * Handle the event.
     */
    public function handle(ProjectAccepted $event): void
    {
        $project = Project::query()->where('id', $event->projectId)->first();

        Notification::send($project->users, new ProjectAcceptedNotification);

        $task = $project->tasks()->first(['date_begin']);

        ProcessProjectTasksJob::dispatch($project->id)->delay(now()->diffInSeconds($task->date_begin));
    }
}
