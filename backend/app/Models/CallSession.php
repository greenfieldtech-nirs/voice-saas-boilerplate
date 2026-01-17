<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class CallSession extends Model
{
    protected $fillable = [
        'tenant_id',
        'session_id',
        'call_id',
        'domain',
        'caller_id',
        'destination',
        'direction',
        'from_number',
        'to_number',
        'token',
        'status',
        'vapp_server',
        'state',
        'metadata',
        'started_at',
        'answered_at',
        'ended_at',
        'duration_seconds',
        'call_start_time',
        'call_answer_time',
        'answer_time',
        'webhook_created_at',
        'webhook_modified_at',
    ];

    protected $casts = [
        'state' => 'array',
        'metadata' => 'array',
        'started_at' => 'datetime',
        'answered_at' => 'datetime',
        'ended_at' => 'datetime',
        'call_start_time' => 'datetime',
        'call_answer_time' => 'datetime',
        'answer_time' => 'datetime',
        'webhook_created_at' => 'datetime',
        'webhook_modified_at' => 'datetime',
    ];

    /**
     * Get the tenant that owns this call session.
     */
    public function tenant(): BelongsTo
    {
        return $this->belongsTo(Tenant::class);
    }

    /**
     * Get the call events for this session.
     */
    public function callEvents(): HasMany
    {
        return $this->hasMany(CallEvent::class);
    }
}
