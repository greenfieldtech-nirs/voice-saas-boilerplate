<?php

use App\Http\Controllers\Api\TenantController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

// Authentication routes
Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

// Protected API routes
Route::middleware('auth:sanctum')->group(function () {
    // Tenant management
    Route::apiResource('tenants', TenantController::class);

    // User management within tenant context
    Route::get('/tenants/{tenant}/users', [TenantController::class, 'users']);
    Route::post('/tenants/{tenant}/users', [TenantController::class, 'addUser']);
    Route::delete('/tenants/{tenant}/users/{user}', [TenantController::class, 'removeUser']);
});