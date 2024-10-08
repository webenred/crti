<?php

namespace App\Notifications\Project;

use App\Models\Project;
use App\Models\User;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class ProjectAcceptedNotification extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     */
    public function __construct(
        protected Project $project
    ) {}

    /**
     * Get the notification's delivery channels.
     *
     * @return array<int, string>
     */
    public function via(User $notifiable): array
    {
        return $notifiable->notifyVia();
    }

    /**
     * Get the mail representation of the notification.
     */
    public function toMail(User $notifiable): MailMessage
    {
        return (new MailMessage)->markdown('mail/project-accepted', [
            'project' => $this->project,
            'user' => $notifiable,
        ]);
    }

    /**
     * Get the array representation of the notification.
     *
     * @return array<string, mixed>
     */
    public function toArray(object $notifiable): array
    {
        return [
            'title' => __("Projet accepté"),
            'description' => $notifiable->id === $this->project->user_id ? __("Votre projet {$this->project->name} est accepté.")  : __("Le projet {$this->project->name} est accepté "),
            'project' => [
                'code' => $this->project->code,
                'name' => $this->project->name,
            ]
        ];
    }

    /**
     * Determine if the notification should be sent.
     */
    public function shouldSend(User $notifiable): bool
    {
        return $notifiable->hasPermissionTo('application.access');
    }
}
