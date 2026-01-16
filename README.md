# Cloudonix Voice Service SaaS Boilerplate

A production-ready boilerplate for multi-tenant voice services integrated with Cloudonix, built with Laravel 12, React, and modern containerization.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose
- Git

### Setup and Run

1. **Clone and navigate to the project:**
   ```bash
   git clone <repository-url>
   cd cloudonix-boilerplate
   ```

2. **Start the services:**
   ```bash
   docker-compose up --build
   ```

3. **Access the applications:**
   - **Laravel API**: http://localhost:8000
   - **React Frontend**: http://localhost:3000
   - **MinIO Console**: http://localhost:9001 (admin/minioadmin)

## 🏗️ Architecture Overview

### Tech Stack
- **Backend**: Laravel 12 + PHP 8.4 + Sanctum API Authentication
- **Frontend**: React + TypeScript + Bootstrap 5 + React Bootstrap
- **Database**: MariaDB 10.11
- **Cache/Queues**: Redis 7
- **Storage**: MinIO (S3-compatible)
- **Containerization**: Docker Compose

### Planes

#### Control Plane (MariaDB)
- **Tenants**: Multi-tenant isolation with settings and trial management
- **Users & RBAC**: Users with roles and permissions scoped to tenants
- **Integrations**: Cloudonix API credentials and settings
- **Phone Numbers**: Number management with capabilities
- **Routing Rules**: Inbound/outbound call routing logic
- **Voice Applications**: CXML voice application definitions

#### Execution Plane (Redis + Events)
- **Call Sessions**: Runtime call state management
- **Call Events**: Webhook event processing with idempotency
- **Real-time**: WebSocket/SSE support for live updates

## 🔧 Key Features

### Multi-Tenant Architecture
- Complete tenant isolation at database and application levels
- Tenant-scoped RBAC with roles and permissions
- Trial management and tenant lifecycle

### Cloudonix Integration
- REST API client for Cloudonix services
- Webhook handler with idempotency and retries
- CXML voice application support
- Call session state management

### Security & Compliance
- Laravel Sanctum API authentication
- Tenant-scoped data access
- Encrypted credential storage
- Input validation and sanitization

### Developer Experience
- Docker-based development environment
- Hot reload for both backend and frontend
- Comprehensive API with OpenAPI documentation structure
- Testing setup with PHPUnit and Jest

## 📁 Project Structure

```
cloudonix-boilerplate/
├── docker/                    # Docker configurations
│   ├── app/                  # Laravel container setup
│   ├── web/                  # React container setup
│   └── db/                   # Database initialization
├── backend/                  # Laravel application
│   ├── app/
│   │   ├── Models/          # Eloquent models
│   │   └── Http/Controllers/Api/  # API controllers
│   ├── database/migrations/ # Database schema
│   └── routes/api.php       # API routes
├── frontend/                 # React application
│   ├── src/
│   │   ├── components/      # React components
│   │   └── App.tsx          # Main application
│   └── package.json
├── docker-compose.yml        # Service orchestration
└── AGENTS.md                # System documentation
```

## 🛠️ Development Commands

### Backend (Laravel)
```bash
# Run in container
docker-compose exec app php artisan migrate
docker-compose exec app php artisan tinker
docker-compose exec app composer install
```

### Frontend (React)
```bash
# Run in container
docker-compose exec web npm install
docker-compose exec web npm test
```

### Database
```bash
# Access MariaDB
docker-compose exec db mysql -u root -p cloudonix_boilerplate
```

## 🔒 Security Features

- **Tenant Isolation**: All data operations are tenant-scoped
- **API Authentication**: Sanctum token-based authentication
- **RBAC**: Role-based access control with granular permissions
- **Webhook Verification**: Secure webhook processing (to be implemented)
- **Input Validation**: Comprehensive request validation
- **Secrets Management**: Environment-based configuration

## 📊 Database Schema

### Core Tables
- `tenants` - Multi-tenant isolation
- `users` - Users with tenant association
- `roles` & `permissions` - RBAC system
- `integrations` - Cloudonix API credentials
- `phone_numbers` - Phone number management
- `routing_rules` - Call routing logic
- `voice_applications` - CXML application definitions
- `call_sessions` - Runtime call state
- `call_events` - Webhook event audit

## 🚧 Next Steps

This boilerplate provides a solid foundation. To complete the implementation:

1. **Complete remaining models** with relationships and business logic
2. **Implement Cloudonix API client** with authentication
3. **Build webhook handlers** for call events
4. **Add WebSocket/SSE** for real-time updates
5. **Create admin UI components** for tenant management
6. **Add comprehensive tests** and validation
7. **Implement security policies** and rate limiting

The architecture is designed to be production-ready with proper separation of concerns, security practices, and scalability considerations.