# U Filter Setup

Full-stack application with a **Laravel** API/backend and a **React** (Vite) frontend in `react/`.

## Stack

| Layer     | Technology                          |
|----------|--------------------------------------|
| Backend  | Laravel 13, PHP 8.3+                 |
| API / DB | Laravel defaults (see `.env`)        |
| Frontend | React 19, React Router 7, Vite 8     |
| Styling  | Tailwind CSS 4 (Laravel Vite assets) |

## Prerequisites

- PHP 8.3+ and [Composer](https://getcomposer.org/)
- Node.js 20+ (recommended) and npm
- A database supported by Laravel (e.g. SQLite, MySQL, PostgreSQL)

## Backend (Laravel)

From the repository root:

```bash
composer install
cp .env.example .env
php artisan key:generate
```

Configure your database in `.env`, then:

```bash
php artisan migrate
php artisan serve
```

The app will typically be available at `http://127.0.0.1:8000`.

### Laravel front-end assets (Blade / Vite)

For the default Laravel entry points (`resources/css/app.css`, `resources/js/app.js`):

```bash
npm install
npm run dev
```

## Frontend (React SPA)

The React app lives in `react/` and runs on port **3000** in dev.

```bash
cd react
npm install
npm run dev
```

- **Development:** `npm run dev` — Vite dev server  
- **Production build:** `npm run build`  
- **Lint:** `npm run lint`

Point the React app at your Laravel API base URL as needed (e.g. `http://127.0.0.1:8000`) via your app’s configuration or environment variables.

## Tests (Laravel)

```bash
php artisan test
# or
./vendor/bin/pest
```

## License

This project inherits the MIT license from the Laravel application skeleton. See Laravel’s [license](https://opensource.org/licenses/MIT).
