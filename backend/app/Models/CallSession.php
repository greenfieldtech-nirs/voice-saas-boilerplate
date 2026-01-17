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
        'direction',
        'from_number',
        'to_number',
        'status',
        'state',
        'metadata',
        'started_at',
        'answered_at',
        'ended_at',
        'duration_seconds',
    ];

    protected $casts = [
        'state' => 'array',
        'metadata' => 'array',
        'started_at' => 'datetime',
        'answered_at' => 'datetime',
        'ended_at' => 'datetime',
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
