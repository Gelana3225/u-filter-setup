# U Filter Setup

U Filter Setup is a completed full-stack web application developed with a **React frontend** and a **Laravel backend API**.  
The frontend architecture is built around **React Hooks** and the **Context API** for scalable, centralized client-side state management.

## Project Overview

This project demonstrates a clean separation of concerns between:

- **Presentation and client state** in React
- **Business logic and data access** in Laravel
- **HTTP-based communication** between the frontend and backend layers

The result is a maintainable architecture suitable for real-world feature growth and team collaboration.

## Technology Stack

| Layer | Technology |
|---|---|
| Frontend | React 19, React Router 7, Vite 8 |
| State Management | React Hooks + Context API |
| Backend | Laravel 13, PHP 8.3+ |
| Tooling | npm, Composer |

## Frontend Architecture (React)

The frontend (`react/`) is implemented as a modern SPA with:

- **React Hooks** (`useState`, `useEffect`, and custom hooks where applicable) to manage component logic
- **Context API** to provide shared application state and actions across the component tree
- **Route-based navigation** with React Router

This combination reduces prop drilling, improves reusability, and keeps state transitions predictable.

## Backend Architecture (Laravel)

The backend is built using Laravel and is responsible for:

- API endpoint handling
- Request validation and business logic execution
- Database operations and persistence
- Authentication/session-related backend flows (where configured)

Laravel provides the project with a structured, secure, and extensible server-side foundation.

## Local Development Setup

### 1) Backend (Laravel)

From the repository root:

```bash
composer install
cp .env.example .env
php artisan key:generate
```

Configure database values in `.env`, then run:

```bash
php artisan migrate
php artisan serve
```

Default backend URL: `http://127.0.0.1:8000`

### 2) Frontend (React)

```bash
cd react
npm install
npm run dev
```

Default frontend URL: `http://localhost:3000`

## Available Scripts

### Root (Laravel asset pipeline)

```bash
npm install
npm run dev
```

### React app (`react/`)

```bash
npm run dev
npm run build
npm run lint
```

## Testing

Backend tests:

```bash
php artisan test
```

or:

```bash
./vendor/bin/pest
```

## Status

Development for this project is complete.  
The current codebase reflects a full implementation using **React Hooks + Context API** on the frontend and **Laravel** on the backend.

## License

This project inherits the MIT license from the Laravel application skeleton.  
See [MIT License](https://opensource.org/licenses/MIT).
